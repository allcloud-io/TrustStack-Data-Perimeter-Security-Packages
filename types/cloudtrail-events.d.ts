/**
 * CloudTrail event detail for ECR BatchGetImage API call
 */
export type ECRBatchGetImageEventDetail = {
  eventVersion: string;
  userIdentity: {
    type: string;
    principalId: string;
    arn: string;
    accountId: string;
    accessKeyId: string;
    sessionContext: {
      sessionIssuer: {
        type: string;
        principalId: string;
        arn: string;
        accountId: string;
        userName: string;
      };
      webIdFederationData: Record<string, unknown>;
      attributes: {
        creationDate: string;
        mfaAuthenticated: string;
      };
    };
    invokedBy: string;
  };
  eventTime: string;
  eventSource: string;
  eventName: string;
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  requestParameters: {
    registryId: string;
    repositoryName: string;
    imageIds: Array<{
      imageTag: string;
    }>;
    acceptedMediaTypes: string[];
    excludeManifestContent: boolean;
    excludeTags: boolean;
    disableLastRecordedPullTimeUpdate: boolean;
  };
  responseElements: null;
  requestID: string;
  eventID: string;
  readOnly: boolean;
  resources: Array<{
    accountId: string;
    ARN: string;
  }>;
  eventType: string;
  managementEvent: boolean;
  recipientAccountId: string;
  eventCategory: string;
};

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
    accessKeyId: string;
    sessionContext: {
      sessionIssuer: {
        type: string;
        principalId: string;
        arn: string;
        accountId: string;
        userName: string;
      };
      attributes: {
        creationDate: string;
        mfaAuthenticated: string;
      };
    };
  };
  requestParameters: {
    topicArn: string;
    token: string;
  };
  responseElements: {
    subscriptionArn: string;
  };
  requestID: string;
  eventID: string;
  readOnly: boolean;
  eventType: "AwsApiCall";
  managementEvent: boolean;
  recipientAccountId: string;
  eventCategory: "Management";
  tlsDetails: {
    tlsVersion: string;
    cipherSuite: string;
    clientProvidedHostHeader: string;
  };
};
