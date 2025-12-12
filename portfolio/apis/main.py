from aws_cdk import (
    aws_apigateway as apigw,
    aws_lambda as _lambda,
    aws_ec2 as ec2,
    Duration,
)
from constructs import Construct
from typing import TypedDict
from pathlib import Path

from ..shared.main import Shared
# from ..authentications.main import Authentications
# from ..databases.main import Databases
from .rest_api import RestApi

class OysirsApiConfig(TypedDict):
    shared: Shared
    # authentications: Authentications
    # databases: Databases


class Api(Construct):
    def __init__(self, scope: Construct, id: str, config: OysirsApiConfig) -> None:
        super().__init__(scope, id)

        self.rest_api = RestApi(
            self, "RestApi",
            config={
                **config,
            }
        )