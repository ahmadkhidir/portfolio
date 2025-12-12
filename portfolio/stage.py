from typing import TypedDict
from enum import Enum


class StageNameEnum(str, Enum):
    DEV = "dev"
    PROD = "prod"


class StageConfig(TypedDict):
    name: StageNameEnum
    version: str