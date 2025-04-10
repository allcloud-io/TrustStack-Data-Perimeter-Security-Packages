import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import { SecurityHub } from "@aws-sdk/client-securityhub";
import { SNS } from "@aws-sdk/client-sns";
import middy from "@middy/core";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";

const sns = new SNS({});
const securityHub = new SecurityHub({});

const logger = new Logger({
  serviceName: "SNSSubscriptionSecurityResponsiveControlHandler",
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

async function lambdaHandler(event: SecurityHubFindingsImportedEvent) {
  logger.info(`Event: ${JSON.stringify(event, null, 2)}`);

  for (const finding of event.detail.findings) {
    logger.info(`Finding: ${JSON.stringify(finding, null, 2)}`);

    const findingID = finding.Id;
    const securityHubProductARN = finding.ProductArn;
    const subscriptionARN = finding.Resources[0].Id;
    const { topicARN, protocol, endpoint } = finding.Resources[0].Details.Other;

    logger.appendKeys({
      findingID,
      securityHubProductARN,
      topicARN,
      subscriptionARN,
      protocol,
      endpoint,
    });

    if (!topicARN || !protocol || !endpoint) {
      logger.warn(
        "Skipping finding as it does not contain all required fields",
        {
          requiredFields: ["topicARN", "protocol", "endpoint"],
        },
      );
      continue;
    }

    let isPendingConfirmation: boolean;

    try {
      const subscriptionAttributes = await sns.getSubscriptionAttributes({
        SubscriptionArn: subscriptionARN,
      });

      isPendingConfirmation =
        subscriptionAttributes.Attributes?.PendingConfirmation === "true";
    } catch (error) {
      logger.error("Failed to get subscription attributes");
      throw error;
    }

    if (isPendingConfirmation) {
      logger.info("Skipping finding as subscription is pending confirmation");
      continue;
    }

    logger.info("Unsubscribing from topic");

    try {
      await sns.unsubscribe({
        SubscriptionArn: subscriptionARN,
      });
      logger.info("Successfully unsubscribed from topic");
    } catch (error) {
      logger.error("Failed to unsubscribe from topic");
      throw error;
    }

    logger.info("Updating AWS Security Hub finding");

    try {
      await securityHub.batchUpdateFindings({
        FindingIdentifiers: [
          {
            Id: findingID,
            ProductArn: securityHubProductARN,
          },
        ],
        Note: {
          Text: "Unsubscribed from topic",
          UpdatedBy: "SNSSubscriptionSecurityResponsiveControlHandler",
        },
        Workflow: {
          Status: "RESOLVED",
        },
      });
      logger.info("Successfully updated AWS Security Hub finding");
    } catch (error) {
      logger.error("Failed to update AWS Security Hub finding");
      throw error;
    }

    logger.resetKeys();
  }
}
