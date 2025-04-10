/**
 * CloudTrail event detail for SNS subscription creation
 */
export type SNSSubscribeEventDetail = {
  eventSource: "sns.amazonaws.com";
  eventName: "Subscribe";
  awsRegion: string;
  sourceIPAddress: string;
  userIdentity: {
    type: string;
    principalId: string;
    arn: string;
    accountId: string;
    userName?: string;
  };
  requestParameters: {
    topicArn: string;
    protocol: string;
    endpoint?: string;
    returnSubscriptionArn?: boolean;
    attributes?: Record<string, string>;
  };
  responseElements: {
    subscriptionArn: string;
  };
  eventID: string;
  eventType: string;
  recipientAccountId: string;
};

/**
 * CloudTrail event detail for SNS subscription confirmation
 */
export type SNSConfirmationEventDetail = {
  eventSource: "sns.amazonaws.com";
  eventName: "ConfirmSubscription";
  awsRegion: string;
  sourceIPAddress: string;
  userIdentity: {
    type: string;
    principalId: string;
    arn: string;
    accountId: string;
    userName?: string;
  };
};
