import { Logger } from "@aws-lambda-powertools/logger";
import { injectLambdaContext } from "@aws-lambda-powertools/logger/middleware";
import {
  type AwsSecurityFinding,
  SecurityHub,
} from "@aws-sdk/client-securityhub";
import { NotFoundException, SNS } from "@aws-sdk/client-sns";
import middy from "@middy/core";
import type { EventBridgeEvent } from "aws-lambda";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";
import type { SNSConfirmationEventDetail } from "../../../../../../../types/cloudtrail-events";

const sns = new SNS({});
const securityHub = new SecurityHub({});

const logger = new Logger({
  serviceName: "SNSSubscriptionSecurityResponsiveControlHandler",
});

export const handler = middy(lambdaHandler).use(injectLambdaContext(logger));

async function lambdaHandler(
  event:
    | SecurityHubFindingsImportedEvent
    | EventBridgeEvent<
        "AWS API Call via CloudTrail",
        SNSConfirmationEventDetail
      >,
) {
  logger.info("Event", { event });

  if (event.source === "aws.securityhub") {
    await handleSecurityHubFindingsImportedEvent(
      event as SecurityHubFindingsImportedEvent,
    );
  } else {
    await handleSNSConfirmationEvent(
      event as EventBridgeEvent<
        "AWS API Call via CloudTrail",
        SNSConfirmationEventDetail
      >,
    );
  }
}

async function handleSecurityHubFindingsImportedEvent(
  event: SecurityHubFindingsImportedEvent,
) {
  for (const finding of event.detail.findings) {
    logger.info("Finding", { finding });

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
      if (error instanceof NotFoundException) {
        logger.info("Subscription not found");
        await updateSecurityHubFinding(findingID, securityHubProductARN);
        continue;
      }

      logger.error("Failed to get subscription attributes");
      throw error;
    }

    if (isPendingConfirmation) {
      logger.info("Skipping finding as subscription is pending confirmation");
      continue;
    }

    await removeSNSSubscription(subscriptionARN);

    await updateSecurityHubFinding(findingID, securityHubProductARN);

    logger.resetKeys();
  }
}

async function handleSNSConfirmationEvent(
  event: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    SNSConfirmationEventDetail
  >,
): Promise<void> {
  const subscriptionARN = event.detail.responseElements.subscriptionArn;

  logger.appendKeys({
    topicARN: event.detail.requestParameters.topicArn,
    subscriptionARN,
  });

  await removeSNSSubscription(subscriptionARN);

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const subscriptionID = subscriptionARN.split(":").pop()!;

  logger.info("Getting AWS Security Hub finding", { subscriptionID });

  let finding: AwsSecurityFinding | undefined;

  try {
    const getFindingsResult = await securityHub.getFindings({
      Filters: {
        Id: [
          {
            Value: `sns-subscription-validation-${subscriptionID}`,
            Comparison: "EQUALS",
          },
        ],
      },
    });

    finding = getFindingsResult.Findings?.[0];
  } catch (error) {
    logger.error("Failed to get AWS Security Hub finding");
    throw error;
  }

  if (finding) {
    logger.info("Found AWS Security Hub finding", { finding });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await updateSecurityHubFinding(finding.Id!, finding.ProductArn!);
  } else {
    logger.info("No finding found");
  }

  logger.resetKeys();
}

async function removeSNSSubscription(subscriptionARN: string) {
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
}

async function updateSecurityHubFinding(
  findingID: string,
  securityHubProductARN: string,
) {
  logger.info("Updating AWS Security Hub finding", {
    findingID,
    securityHubProductARN,
  });

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

    logger.info("Successfully updated AWS Security Hub finding", {
      findingID,
      securityHubProductARN,
    });
  } catch (error) {
    logger.error("Failed to update AWS Security Hub finding", {
      error,
      findingID,
      securityHubProductARN,
    });
    throw error;
  }
}
