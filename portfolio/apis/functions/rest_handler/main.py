from aws_lambda_powertools.utilities.typing import LambdaContext
from aws_lambda_powertools import Logger, Tracer
from aws_lambda_powertools.event_handler import APIGatewayRestResolver, CORSConfig
import json

from routes.health import router as health_router
from routes.customers import router as customers_router
from routes.uploads import router as uploads_router


logger = Logger()
tracer = Tracer()

app = APIGatewayRestResolver(
    enable_validation=True,
    cors=CORSConfig(
        allow_origin="*",
        allow_headers=[
            "Content-Type",
            "X-Requested-With",
            "Accept",
            "Origin",
        ]
    )
)
app.enable_swagger(path="/swagger")

app.include_router(health_router)
app.include_router(customers_router)
app.include_router(uploads_router)


@logger.inject_lambda_context
@tracer.capture_lambda_handler
def handler(event: dict, context: LambdaContext):
    logger.info("Lambda handler started")
    try:
        return app.resolve(event, context)
    except Exception as e:
        logger.error(f"Error in handler: {e}")
        return {
            "headers": {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            "statusCode": 500,
            "body": json.dumps({
                "message": "Internal server error", 
                "error": str(e)
            }),
        }