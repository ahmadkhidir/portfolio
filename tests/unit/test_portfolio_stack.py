import aws_cdk as core
import aws_cdk.assertions as assertions

from portfolio.portfolio_stack import PortfolioStack


def test_sqs_queue_created():
    app = core.App()
    stack = PortfolioStack(app, "portfolio")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
