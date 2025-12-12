from aws_cdk import (
    aws_apigateway as apigw,
    aws_lambda as _lambda,
    aws_ec2 as ec2,
    aws_iam as iam,
    Duration,
    Aws
)
from constructs import Construct
from typing import TypedDict
from pathlib import Path

from ..shared.main import Shared


class RestApiConfig(TypedDict):
    shared: Shared


class RestApi(Construct):
    def __init__(self, scope: Construct, id: str, config: RestApiConfig) -> None:
        super().__init__(scope, id)

        default_lambda = _lambda.Function(
            self, "RestApiHandler",
            description=f"Handler for {Aws.STACK_NAME} REST API {config['shared'].stage['name']}",
            runtime=_lambda.Runtime.PYTHON_3_12,
            architecture=_lambda.Architecture.X86_64,
            handler="main.handler",
            code=_lambda.Code.from_asset(
                path=str(Path(__file__).parent.joinpath("functions/rest_handler").resolve())
            ),
            # vpc=config['shared'].vpc,
            # security_groups=[api_security_group],
            layers=[
                config['shared'].powertools_layer,
                config['shared'].common_layer,
                config['shared'].internal_layer,
            ],
            environment={
                **config['shared'].default_env_vars,
            },
            timeout=Duration.minutes(10),
            memory_size=512,
            # allow_public_subnet=True,
        )

        # cognito_authorizer = apigw.CognitoUserPoolsAuthorizer(
        #     self, "CognitoAuthorizer",
        #     cognito_user_pools=[config['authentications'].user_pool]
        # )

        api = apigw.LambdaRestApi(
            self, "RestApi",
            rest_api_name=f"{Aws.STACK_NAME} REST API {config['shared'].stage['name']}",
            proxy=True,
            handler=default_lambda,
            deploy_options=apigw.StageOptions(
                stage_name="prod" if config['shared'].stage['name'] == "prod" else "dev",
            ),
            # default_method_options=apigw.MethodOptions(
            #     authorization_type=apigw.AuthorizationType.COGNITO,
            #     authorizer=cognito_authorizer,
            # ),
            default_method_options=apigw.MethodOptions(
                authorization_type=apigw.AuthorizationType.NONE,
            ),
        )

        # Exempt /swagger path from Cognito authorization
        swagger_resource = api.root.add_resource("swagger")
        swagger_resource.add_method(
            "ANY",
            integration=apigw.LambdaIntegration(default_lambda),
            authorization_type=apigw.AuthorizationType.NONE,
        )
        self.api_url = api.url