from aws_cdk import (
    aws_lambda as _lambda,
    aws_s3_assets as s3_assets,
    BundlingOptions,
    BundlingFileAccess,
    BundlingOutput,
    RemovalPolicy
)
from constructs import Construct
from typing import TypedDict, Literal
from ..stage import StageConfig


class LayerConfig(TypedDict):
    runtime: _lambda.Runtime
    architecture: _lambda.Architecture
    path: str
    auto_upgrade: bool
    layer_type: Literal["toml", "txt"] = "txt"
    stage: StageConfig


class Layer(Construct):
    def __init__(self, scope: Construct, id: str, config: LayerConfig) -> None:
        super().__init__(scope, id)

        runtime = config["runtime"]
        architecture = config["architecture"]
        path = config["path"]
        auto_upgrade = config["auto_upgrade"]
        layer_type = config["layer_type"]

        args = ["-t /asset-output/python", "--no-cache-dir"]
        if auto_upgrade:
            args.append("--upgrade")

        asset_code = _lambda.Code.from_asset(
            path=path,
            bundling=BundlingOptions(
                bundling_file_access=BundlingFileAccess.VOLUME_COPY,
                image=runtime.bundling_image,
                platform=architecture.docker_platform,
                command=[
                    "bash", "-c",
                    " && ".join([
                        f"pip install{' -r requirements.txt ' if layer_type == 'txt' else ' . '}{' '.join(args)}",
                        "cd /asset-output/python",
                        "find . -name '*.pyc' -type f -delete",
                        "cd -"
                    ])
                ],
                output_type=BundlingOutput.AUTO_DISCOVER,
                security_opt="no-new-privileges:true",
                network="host"
            ),
            asset_hash=f"{path}-{config['stage']['name']}-{config['stage']['version']}"
        )
        layer = _lambda.LayerVersion(
            self, "Layer",
            compatible_runtimes=[runtime],
            compatible_architectures=[architecture],
            code=asset_code,
            removal_policy=RemovalPolicy.DESTROY
        )
        self.layer = layer