import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
import * as http from "http";
import * as https from "https";
import { URL } from "url";

export async function handler(
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> {
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
    const message = JSON.parse(event.body);

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

      // Visit the SubscribeURL to confirm the subscription
      await visitURL(subscribeURL);

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
          subject: message.Subject,
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
    console.error("Error processing SNS message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error processing SNS message" }),
    };
  }
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
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            console.log("Successfully confirmed SNS subscription:", data);
            resolve();
          } else {
            reject(
              new Error(
                `Failed to confirm subscription. Status: ${res.statusCode}`,
              ),
            );
          }
        });
      });

      req.on("error", (error: Error) => {
        reject(error);
      });

      req.end();
    } catch (error) {
      reject(error);
    }
  });
}
