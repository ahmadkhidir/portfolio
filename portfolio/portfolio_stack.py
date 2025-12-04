from aws_cdk import (
    Stack,
)
from constructs import Construct

from .shared.main import Shared

class PortfolioStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        shared = Shared(
            self, "SharedResources", 
            config={}
        )