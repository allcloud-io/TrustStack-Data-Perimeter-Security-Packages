import type {
  AwsSecurityFinding,
  BatchUpdateFindingsCommandOutput,
  GetFindingsCommandOutput,
} from "@aws-sdk/client-securityhub";
import type {
  GetSubscriptionAttributesCommandOutput,
  UnsubscribeCommandOutput,
} from "@aws-sdk/client-sns";
import { beforeAll, describe, jest, test } from "@jest/globals";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";
import type { SNSConfirmationEventDetail } from "../../../../../../../types/cloudtrail-events";

// Create mock instances at module level
const mockLoggerInstance = {
  addContext: jest.fn(),
  appendKeys: jest.fn(),
  clearBuffer: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  logEventIfEnabled: jest.fn(),
  refreshSampleRateCalculation: jest.fn(),
  resetKeys: jest.fn(),
  warn: jest.fn(),
};

const mockSNSClientInstance = {
  getSubscriptionAttributes:
    jest.fn<
      () => Promise<Omit<GetSubscriptionAttributesCommandOutput, "$metadata">>
    >(),
  unsubscribe:
    jest.fn<() => Promise<Omit<UnsubscribeCommandOutput, "$metadata">>>(),
};

const mockSecurityHubClientInstance = {
  getFindings:
    jest.fn<() => Promise<Omit<GetFindingsCommandOutput, "$metadata">>>(),
  batchUpdateFindings:
    jest.fn<() => Promise<BatchUpdateFindingsCommandOutput>>(),
};

// Create NotFoundException class before mocking the module
class MockNotFoundException extends Error {
  constructor() {
    super("Subscription not found");
    this.name = "NotFoundException";
  }
}

// Setup mocks before imports
jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

jest.unstable_mockModule("@aws-sdk/client-sns", () => ({
  SNS: jest.fn().mockImplementation(() => mockSNSClientInstance),
  NotFoundException: MockNotFoundException,
}));

jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  SecurityHub: jest
    .fn()
    .mockImplementation(() => mockSecurityHubClientInstance),
}));

// Variables to hold components of dynamically imported modules
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let handler: typeof import("./handler").handler;

// Load the handler module dynamically before tests to ensure all ESM module mocks are applied
beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("SNS Subscription Security Responsive Control Handler", () => {
  const mockAccountID = "123456789012";
  const mockRegion = "eu-west-1";
  const mockContext = {} as Context;
  const subscriptionID = "a1b2c3d4-e5f6-7890-1234-567890abcdef";

  // Using "as any" for the mock finding to avoid TypeScript errors with the exact structure
  const mockFinding: AwsSecurityFinding = {
    SchemaVersion: "2018-10-08",
    Id: `sns-subscription-validation-${subscriptionID}`,
    ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
    GeneratorId: "SNSSubscriptionEndpointValidator",
    AwsAccountId: mockAccountID,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    FirstObservedAt: "2025-04-20T10:49:28.950Z",
    CreatedAt: "2025-04-20T10:49:28.950Z",
    UpdatedAt: "2025-04-20T10:49:28.950Z",
    Severity: {
      Label: "HIGH",
      Normalized: 70,
    },
    Title: "SNS Subscription with untrusted endpoint detected",
    Description:
      "SNS subscription endpoint is not in the list of trusted domains",
    ProductFields: {
      ProviderName: "TrustStack",
      ProviderVersion: "1.0",
    },
    Resources: [
      {
        Type: "AwsSnsSubscription",
        Id: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
        Partition: "aws",
        Region: mockRegion,
        Details: {
          Other: {
            topicARN: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic`,
            protocol: "email",
            endpoint: "unauthorized@example.com",
          },
        },
      },
    ],
    Compliance: {
      Status: "FAILED",
      RelatedRequirements: ["AWS Data Perimeter Guidelines"],
    },
    RecordState: "ACTIVE",
    Workflow: {
      Status: "NEW",
    },
    Remediation: {
      Recommendation: {
        Text: "Delete the non-compliant SNS subscription and create a new one with a trusted endpoint",
        Url: "https://docs.aws.amazon.com/sns/latest/dg/sns-delete-subscription-topic.html",
      },
    },
  } as AwsSecurityFinding;

  const mockSecurityHubEvent: SecurityHubFindingsImportedEvent = {
    version: "0",
    id: "7e55b3fe-f28e-71bf-97a5-b5442c1dd392",
    "detail-type": "Security Hub Findings - Imported",
    source: "aws.securityhub",
    account: mockAccountID,
    time: "2025-04-20T10:49:35Z",
    region: mockRegion,
    resources: [
      `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default/sns-subscription-validation-${subscriptionID}`,
    ],
    detail: {
      findings: [mockFinding],
    },
  } as SecurityHubFindingsImportedEvent;

  const mockSNSConfirmationEvent: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    SNSConfirmationEventDetail
  > = {
    version: "0",
    id: "12345678-1234-1234-1234-123456789012",
    "detail-type": "AWS API Call via CloudTrail",
    source: "aws.cloudtrail",
    account: mockAccountID,
    time: "2025-04-20T10:49:35Z",
    region: mockRegion,
    resources: [],
    detail: {
      userIdentity: {
        type: "IAMUser",
        principalId: "AIDAABCDEFGHIJKLMNOPQ",
        arn: `arn:aws:iam::${mockAccountID}:user/testuser`,
        accountId: mockAccountID,
        accessKeyId: "AKIAABCDEFGHIJKLMNOP",
        sessionContext: {
          sessionIssuer: {
            type: "IAMUser",
            principalId: "AIDAABCDEFGHIJKLMNOPQ",
            arn: `arn:aws:iam::${mockAccountID}:user/testuser`,
            accountId: mockAccountID,
            userName: "testuser",
          },
          attributes: {
            creationDate: "2025-04-20T10:49:35Z",
            mfaAuthenticated: "false",
          },
        },
      },
      eventSource: "sns.amazonaws.com",
      eventName: "ConfirmSubscription",
      awsRegion: mockRegion,
      sourceIPAddress: "192.168.1.1",
      requestParameters: {
        topicArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic`,
        token: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      },
      responseElements: {
        subscriptionArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
      },
      requestID: "12345678-1234-1234-1234-123456789012",
      eventID: "12345678-1234-1234-1234-123456789012",
      readOnly: false,
      eventType: "AwsApiCall",
      managementEvent: true,
      recipientAccountId: mockAccountID,
      eventCategory: "Management",
      tlsDetails: {
        clientProvidedHostHeader: "sns.amazonaws.com",
        cipherSuite: "ECDHE-RSA-AES128-GCM-SHA256",
        tlsVersion: "TLSv1.2",
      },
    } as SNSConfirmationEventDetail,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should handle Security Hub finding with active subscription and unsubscribe it", async () => {
    // Mock subscription is not pending confirmation
    mockSNSClientInstance.getSubscriptionAttributes.mockResolvedValueOnce({
      Attributes: {
        PendingConfirmation: "false",
      },
    });

    await handler(mockSecurityHubEvent, mockContext);

    // Verify subscription attributes were checked
    expect(
      mockSNSClientInstance.getSubscriptionAttributes,
    ).toHaveBeenCalledWith({
      SubscriptionArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
    });

    // Verify unsubscribe was called
    expect(mockSNSClientInstance.unsubscribe).toHaveBeenCalledWith({
      SubscriptionArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
    });

    // Verify Security Hub finding was updated
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: `sns-subscription-validation-${subscriptionID}`,
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
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
  });

  test("should skip Security Hub finding when subscription is pending confirmation", async () => {
    // Mock subscription is pending confirmation
    mockSNSClientInstance.getSubscriptionAttributes.mockResolvedValueOnce({
      Attributes: {
        PendingConfirmation: "true",
      },
    });

    await handler(mockSecurityHubEvent, mockContext);

    // Verify subscription attributes were checked
    expect(
      mockSNSClientInstance.getSubscriptionAttributes,
    ).toHaveBeenCalledWith({
      SubscriptionArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
    });

    // Verify unsubscribe was NOT called
    expect(mockSNSClientInstance.unsubscribe).not.toHaveBeenCalled();

    // Verify Security Hub finding was NOT updated
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).not.toHaveBeenCalled();
  });

  test("should handle Security Hub finding when subscription is not found", async () => {
    // Mock subscription not found
    mockSNSClientInstance.getSubscriptionAttributes.mockRejectedValueOnce(
      new MockNotFoundException(),
    );

    await handler(mockSecurityHubEvent, mockContext);

    // Verify subscription attributes were checked
    expect(
      mockSNSClientInstance.getSubscriptionAttributes,
    ).toHaveBeenCalledWith({
      SubscriptionArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
    });

    // Verify unsubscribe was NOT called
    expect(mockSNSClientInstance.unsubscribe).not.toHaveBeenCalled();

    // Verify Security Hub finding was updated
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: `sns-subscription-validation-${subscriptionID}`,
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
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
  });

  test("should handle SNS confirmation event with matching Security Hub finding", async () => {
    // Mock finding exists
    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [mockFinding],
    });

    await handler(mockSNSConfirmationEvent, mockContext);

    // Verify Security Hub finding was queried
    expect(mockSecurityHubClientInstance.getFindings).toHaveBeenCalledWith({
      Filters: {
        Id: [
          {
            Value: `sns-subscription-validation-${subscriptionID}`,
            Comparison: "EQUALS",
          },
        ],
      },
    });

    // Verify unsubscribe was called
    expect(mockSNSClientInstance.unsubscribe).toHaveBeenCalledWith({
      SubscriptionArn: `arn:aws:sns:${mockRegion}:${mockAccountID}:test-topic:${subscriptionID}`,
    });

    // Verify Security Hub finding was updated
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: `sns-subscription-validation-${subscriptionID}`,
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
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
  });

  test("should handle SNS confirmation event with no matching Security Hub finding", async () => {
    // Mock no finding exists
    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [],
    });

    await handler(mockSNSConfirmationEvent, mockContext);

    // Verify Security Hub finding was queried
    expect(mockSecurityHubClientInstance.getFindings).toHaveBeenCalledWith({
      Filters: {
        Id: [
          {
            Value: `sns-subscription-validation-${subscriptionID}`,
            Comparison: "EQUALS",
          },
        ],
      },
    });

    // Verify unsubscribe was NOT called
    expect(mockSNSClientInstance.unsubscribe).not.toHaveBeenCalled();

    // Verify Security Hub finding was NOT updated
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).not.toHaveBeenCalled();
  });
});
