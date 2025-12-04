#!/usr/bin/env python3
import os

import aws_cdk as cdk

from portfolio.portfolio_stack import PortfolioStack


app = cdk.App()
PortfolioStack(
    app, "PortfolioStack",
    env=cdk.Environment(account='', region=''),
)

app.synth()
