from aws_cdk import (
    Stack,
)
from constructs import Construct

from .shared.main import Shared
from .user_interface.main import UserInterface
from .apis.main import Api
from .stage import StageConfig
from typing import TypedDict


class PortfolioStackConfig(TypedDict):
    stage: StageConfig


class PortfolioStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, stage: StageConfig, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        shared = Shared(
            self, "SharedResources", 
            config={"stage": stage}
        )
        api = Api(
            self, "Apis",
            config={
                "shared": shared,
            }
        )
        user_interface = UserInterface(
            self, "UserInterface",
            config={
                "shared": shared,
                "api": api,
            }
        )