import { Logger } from "@aws-lambda-powertools/logger";
import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
import { handlerSubscriptionConfirmationHTTPRequest } from "../common";

const logger = new Logger({
  serviceName: "SNSSubscriptionConfirmationWithSubscribeURLHandler",
});

export async function handler(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
  return handlerSubscriptionConfirmationHTTPRequest({
    event,
    logger,
    useSubscribeURL: true,
  });
}
