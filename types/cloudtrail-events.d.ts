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
  vpcEndpointId?: string;
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
 * CloudTrail event detail for Lambda CreateFunction API call
 */
export type LambdaFunctionCreateEventDetail = {
  eventSource: "lambda.amazonaws.com";
  eventName: "CreateFunction20150331";
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
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
    functionName: string;
    runtime: string;
    role: string;
    handler: string;
    code: Record<string, unknown>;
    publish: boolean;
    vpcConfig?: {
      subnetIds: string[];
      securityGroupIds: string[];
    };
    environment: Record<string, any>;
  };
  responseElements: {
    functionName: string;
    functionArn: string;
    runtime: string;
    role: string;
    handler: string;
    codeSize: number;
    description: string;
    timeout: number;
    memorySize: number;
    lastModified: string;
    codeSha256: string;
    version: string;
    vpcConfig?: {
      subnetIds: string[];
      securityGroupIds: string[];
      vpcId: string;
      ipv6AllowedForDualStack: boolean;
    };
    environment: Record<string, any>;
    tracingConfig: {
      mode: string;
    };
    revisionId: string;
    state: string;
    stateReason: string;
    stateReasonCode: string;
    packageType: string;
    architectures: string[];
    ephemeralStorage: {
      size: number;
    };
    snapStart: {
      applyOn: string;
      optimizationStatus: string;
    };
    runtimeVersionConfig: {
      runtimeVersionArn: string;
    };
    loggingConfig: {
      logFormat: string;
      logGroup: string;
    };
  };
  requestID: string;
  eventID: string;
  readOnly: boolean;
  eventType: string;
  managementEvent: boolean;
  recipientAccountId: string;
  eventCategory: string;
  tlsDetails: {
    tlsVersion: string;
    cipherSuite: string;
  };
};

/**
 * CloudTrail event detail for Lambda UpdateFunctionConfiguration API call
 */
export type LambdaFunctionUpdateConfigurationEventDetail = {
  eventSource: "lambda.amazonaws.com";
  eventName: "UpdateFunctionConfiguration20150331v2";
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
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
    inScopeOf: {
      issuerType: string;
      credentialsIssuedTo: string;
    };
  };
  requestParameters: {
    functionName: string;
    vpcConfig?: {
      subnetIds: string[];
      securityGroupIds: string[];
    };
    environment: Record<string, any>;
  };
  responseElements: null;
  requestID: string;
  eventID: string;
  readOnly: boolean;
  eventType: string;
  managementEvent: boolean;
  recipientAccountId: string;
  eventCategory: string;
  tlsDetails: {
    tlsVersion: string;
    cipherSuite: string;
    clientProvidedHostHeader: string;
  };
  errorCode?: string;
  errorMessage?: string;
};

/**
 * CloudTrail event detail for Lambda DeleteFunction API call
 */
export type LambdaFunctionDeleteEventDetail = {
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
      attributes: {
        creationDate: string;
        mfaAuthenticated: string;
      };
    };
  };
  eventTime: string;
  eventSource: "lambda.amazonaws.com";
  eventName: "DeleteFunction20150331";
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  requestParameters: {
    functionName: string;
  };
  responseElements: null;
  requestID: string;
  eventID: string;
  readOnly: boolean;
  eventType: string;
  managementEvent: boolean;
  recipientAccountId: string;
  eventCategory: string;
  tlsDetails: {
    tlsVersion: string;
    cipherSuite: string;
    clientProvidedHostHeader: string;
  };
  sessionCredentialFromConsole?: string;
};

/**
 * CloudTrail event detail for Lambda AddLayerVersionPermission API call
 */
export type LambdaAddLayerVersionPermissionEventDetail = {
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
      attributes: {
        creationDate: string;
        mfaAuthenticated: string;
      };
    };
  };
  eventTime: string;
  eventSource: "lambda.amazonaws.com";
  eventName: "AddLayerVersionPermission20181031";
  awsRegion: string;
  sourceIPAddress: string;
  userAgent: string;
  requestParameters: {
    layerName: string;
    versionNumber: number;
    principal: string;
    statementId: string;
    action: string;
    organizationId?: string;
  };
  responseElements: {
    statement: string;
    revisionId: string;
  };
  requestID: string;
  eventID: string;
  readOnly: boolean;
  eventType: string;
  managementEvent: boolean;
  recipientAccountId: string;
  eventCategory: string;
  tlsDetails: {
    tlsVersion: string;
    cipherSuite: string;
    clientProvidedHostHeader: string;
  };
};

/**
 * CloudTrail event detail for Lambda AddPermission API call
 */
export type LambdaAddPermissionEventDetail = {
  eventSource: string;
  eventName: string;
  awsRegion: string;
  userIdentity: {
    accountId: string;
    type: string;
  };
  responseElements: {
    statement: string;
  };
  requestParameters: {
    functionName: string;
    principal: string;
    statementId: string;
    action: string;
    sourceArn?: string;
    sourceAccount?: string;
    principalOrgID?: string;
  };
};

/**
 * CloudTrail event detail for SNS subscription creation
 */
export type SNSSubscribeEventDetail = {
  eventSource: "sns.amazonaws.com";
  eventName: "Subscribe";
  awsRegion: string;
  sourceIPAddress: string;
  vpcEndpointId?: string;
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
