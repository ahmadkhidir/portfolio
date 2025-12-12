#!/usr/bin/env python3
import os

import aws_cdk as cdk

from portfolio.portfolio_stack import PortfolioStack


env = cdk.Environment(account=os.getenv("CDK_DEFAULT_ACCOUNT"), region=os.getenv("CDK_DEFAULT_REGION"))

app = cdk.App()
PortfolioStack(
    app, "PortfolioDevStack",
    stage= {
        "name": os.getenv("STAGE_NAME", "dev"),
        "version": "1.0.0",
    },
    env=env
)

app.synth()
