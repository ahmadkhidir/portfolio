from aws_cdk import (
    aws_s3 as s3,
    aws_s3_deployment as s3_deploy,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as cloudfront_origins,
    aws_route53 as route53,
    aws_route53_targets as route53_targets,
    aws_certificatemanager as acm,
    RemovalPolicy,
    Duration,
    CfnOutput,
)
from constructs import Construct
from pathlib import Path
from typing import TypedDict

from ..shared.main import Shared


class UserInterfaceConfig(TypedDict):
    shared: Shared


class UserInterface(Construct):
    def __init__(self, scope: Construct, id: str, config: UserInterfaceConfig) -> None:
        super().__init__(scope, id)

        # Create S3 bucket for hosting the user interface
        ui_bucket = s3.Bucket(
            self, "UserInterfaceBucket",
            removal_policy=config["shared"].removal_policy,
            auto_delete_objects=True,
        )

        # hosted_zone = route53.HostedZone.from_lookup(
        #     self, "HostedZone",
        #     domain_name=""
        # )

        # certificate = acm.Certificate.from_certificate_arn(
        #     self, "UserInterfaceCertificate",
        #     domain_name="",
        #     subject_alternative_names=[],
        #     validation=acm.CertificateValidation.from_dns(hosted_zone)
        # )

        # Create CloudFront distribution for the S3 bucket
        distribution = cloudfront.Distribution(
            self, "UserInterfaceDistribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=cloudfront_origins.S3BucketOrigin.with_origin_access_control(ui_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                cache_policy=cloudfront.CachePolicy.CACHING_OPTIMIZED
            ),
            # domain_names=[],
            # certificate=certificate,
            default_root_object="index.html",
            error_responses=[
                cloudfront.ErrorResponse(
                    http_status=403,
                    response_http_status=200,
                    response_page_path="/index.html",
                    ttl=Duration.minutes(30)
                ),
                cloudfront.ErrorResponse(
                    http_status=404,
                    response_http_status=200,
                    response_page_path="/404.html",
                    ttl=Duration.minutes(5)
                )
            ],
            comment="CloudFront distribution for Portfolio user interface",
        )

        # Deploy static files to the S3 bucket
        s3_deploy.BucketDeployment(
            self, "DeployUserInterface",
            sources=[
                s3_deploy.Source.asset(
                    path=str(Path(__file__).parent.joinpath("next-app/out").resolve())
                ),
            ],
            destination_bucket=ui_bucket,
            distribution=distribution,
            distribution_paths=["/*"],
        )

        # route53.ARecord(
        #     self, "UserInterfaceApexAliasRecord",
        #     zone=hosted_zone,
        #     record_name="",
        #     target=route53.RecordTarget.from_alias(
        #         route53_targets.CloudFrontTarget(distribution)
        #     )
        # )
        # route53.AaaaRecord(
        #     self, "UserInterfaceApexAliasRecordAAAA",
        #     zone=hosted_zone,
        #     record_name="",
        #     target=route53.RecordTarget.from_alias(
        #         route53_targets.CloudFrontTarget(distribution)
        #     )
        # )

        self.domain_name = "https://"

        # Output the CloudFront distribution domain name
        CfnOutput(
            self, "UserInterfaceURL",
            value=self.domain_name,
            description="URL of the Portfolio user interface",
        )