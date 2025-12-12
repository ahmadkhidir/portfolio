from aws_lambda_powertools.event_handler.api_gateway import Router
from aws_lambda_powertools import Logger

logger = Logger()
router = Router()

@router.get("/health")
def health_check():
    logger.info("Health check performed")
    return {
        "status": "OK",
        "message": "Service is healthy"
    }