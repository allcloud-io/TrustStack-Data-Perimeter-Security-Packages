import type { Logger } from "@aws-lambda-powertools/logger";
import { SNS } from "@aws-sdk/client-sns";
import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
import * as http from "node:http";
import * as https from "node:https";

type SNSSubscriptionConfirmationMessageBody = {
  Type: "SubscriptionConfirmation";
  MessageId: string;
  Token: string;
  TopicArn: string;
  Message: string;
  SubscribeURL: string;
  Timestamp: string;
  SignatureVersion: string;
  Signature: string;
  SigningCertURL: string;
};

export async function handlerSubscriptionConfirmationHTTPRequest({
  event,
  delayInMilliseconds,
  logger,
  useSubscribeURL = false,
}: Readonly<{
  event: APIGatewayProxyEventV2;
  delayInMilliseconds?: number;
  logger: Logger;
  useSubscribeURL?: boolean;
}>): Promise<APIGatewayProxyResultV2> {
  logger.info(`Event: ${JSON.stringify(event, null, 2)}`);

  if (delayInMilliseconds) {
    // Wait for the specified delay
    await new Promise((resolve) => setTimeout(resolve, delayInMilliseconds));
  }

  try {
    // Check for the SNS message type header
    const messageType = event.headers["x-amz-sns-message-type"];

    // If the body is not present, return error
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing request body" }),
      };
    }

    // Parse the JSON document in the body
    const message = JSON.parse(
      event.body,
    ) as SNSSubscriptionConfirmationMessageBody;

    // Handle based on message type
    if (messageType === "SubscriptionConfirmation") {
      // Get the SubscribeURL from the message
      const subscribeURL = message.SubscribeURL;

      if (!subscribeURL) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: "Missing SubscribeURL" }),
        };
      }

      // Confirm the subscription
      if (useSubscribeURL) {
        await visitURL(subscribeURL);
      } else {
        await confirmSubscription({
          topicARN: message.TopicArn,
          token: message.Token,
        });
      }

      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "SNS subscription confirmed",
          topicARN: message.TopicArn,
        }),
      };
    } else if (messageType === "Notification") {
      // Process the notification
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "SNS notification received",
          content: message.Message,
        }),
      };
    } else if (messageType === "UnsubscribeConfirmation") {
      return {
        statusCode: 200,
        body: JSON.stringify({
          message: "SNS unsubscribe confirmation received",
          topicARN: message.TopicArn,
        }),
      };
    } else {
      // Unknown message type
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid SNS message type" }),
      };
    }
  } catch (error) {
    logger.error("Error processing SNS message:", { error });
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error processing SNS message" }),
    };
  }
}

async function confirmSubscription({
  topicARN,
  token,
}: Readonly<{
  topicARN: string;
  token: string;
}>): Promise<void> {
  const sns = new SNS();

  await sns.confirmSubscription({
    TopicArn: topicARN,
    Token: token,
  });
}

/**
 * Helper function to visit a URL using HTTP/HTTPS
 * @param url The URL to visit
 * @returns A promise that resolves when the URL has been visited
 */
function visitURL(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const parsedURL = new URL(url);
      const requestLib = parsedURL.protocol === "https:" ? https : http;

      const req = requestLib.get(url, (res: http.IncomingMessage) => {
        let data = "";

        res.on("data", (chunk: Buffer) => {
          data += chunk.toString();
        });

        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            console.log("Successfully confirmed SNS subscription:", data);
            resolve();
          } else {
            reject(
              new Error(
                `Failed to confirm subscription. Status: ${res.statusCode?.toString() ?? "Unknown"}`,
              ),
            );
          }
        });
      });

      req.on("error", (error: Error) => {
        reject(error);
      });

      req.end();
    } catch (error: unknown) {
      reject(
        new Error(
          `Failed to visit URL. Error: ${error instanceof Error ? error.message : "Unknown"}`,
        ),
      );
    }
  });
}
