import aws_cdk as core
import aws_cdk.assertions as assertions

from uinlp_website.uinlp_website_stack import OysirsStack


def test_sqs_queue_created():
    app = core.App()
    stack = OysirsStack(app, "oysirs")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
