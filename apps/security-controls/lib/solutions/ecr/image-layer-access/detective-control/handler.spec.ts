import type {
  AwsSecurityFinding,
  BatchImportFindingsResponse,
} from "@aws-sdk/client-securityhub";
import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";
import type { ECRImageLayerAccessSolutionConfig } from "@trust-stack/schema";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type { ECRBatchGetImageEventDetail } from "../../../../../../../types/cloudtrail-events";

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

const mockSecurityHubInstance = {
  batchImportFindings: jest
    .fn<
      (args: {
        Findings: AwsSecurityFinding[];
      }) => Promise<BatchImportFindingsResponse>
    >()
    .mockResolvedValue({
      FailedCount: 0,
      SuccessCount: 1,
    }),
};

const mockGetValidatedSolutionConfig =
  jest.fn<(...args: unknown[]) => Promise<ECRImageLayerAccessSolutionConfig>>();

// Setup mocks before imports
jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  SecurityHub: jest.fn().mockImplementation(() => mockSecurityHubInstance),
  ComplianceStatus: { WARNING: "WARNING" },
  Partition: { AWS: "aws" },
  RecordState: { ACTIVE: "ACTIVE" },
  SeverityLabel: { MEDIUM: "MEDIUM" },
  WorkflowStatus: { NEW: "NEW" },
}));

jest.unstable_mockModule("@trust-stack/utils", () => ({
  getValidatedSolutionConfig: mockGetValidatedSolutionConfig,
}));

// Variables to hold components of dynamically imported modules
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let handler: typeof import("./handler").handler;

// Load the handler module dynamically before tests to ensure all ESM module mocks are applied
// See https://jestjs.io/docs/ecmascript-modules#module-mocking-in-esm
beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("ECR Image Layer Access Detective Control Handler", () => {
  const mockAccountID = "123456789012";
  const mockRegion = "eu-west-1";
  const mockContext = {} as Context;

  const mockEvent: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    ECRBatchGetImageEventDetail
  > = {
    version: "0",
    id: "2f6d4e1a-d2fd-040d-5075-af9b971c32d1",
    "detail-type": "AWS API Call via CloudTrail" as const,
    source: "aws.ecr",
    account: mockAccountID,
    time: "2025-04-17T10:50:18Z",
    region: "eu-west-1",
    resources: [],
    detail: {
      eventVersion: "1.08",
      userIdentity: {
        type: "AssumedRole",
        principalId: "AROAWX2IFW5CVXCPUN3WO:botocore-session-8473921564",
        arn: `arn:aws:sts::${mockAccountID}:assumed-role/AWSControlTowerExecution/botocore-session-8473921564`,
        accountId: mockAccountID,
        accessKeyId: "ASIAWX2IFW5C63EWXPCP",
        sessionContext: {
          sessionIssuer: {
            type: "Role",
            principalId: "AROAWX2IFW5CVXCPUN3WO",
            arn: `arn:aws:iam::${mockAccountID}:role/AWSControlTowerExecution`,
            accountId: mockAccountID,
            userName: "AWSControlTowerExecution",
          },
          webIdFederationData: {},
          attributes: {
            creationDate: "2025-04-17T08:51:32Z",
            mfaAuthenticated: "false",
          },
        },
        invokedBy: "ecr.amazonaws.com",
      },
      eventTime: "2025-04-17T10:50:18Z",
      eventSource: "ecr.amazonaws.com",
      eventName: "BatchGetImage",
      awsRegion: mockRegion,
      sourceIPAddress: "ecr.amazonaws.com",
      userAgent: "ecr.amazonaws.com",
      requestParameters: {
        registryId: mockAccountID,
        repositoryName: "truststack-e2e-test-repository",
        imageIds: [
          {
            imageTag: "latest",
          },
        ],
        acceptedMediaTypes: [
          "application/vnd.oci.image.manifest.v1+json",
          "application/vnd.docker.distribution.manifest.v2+json",
          "application/vnd.docker.distribution.manifest.v1+prettyjws",
          "application/vnd.docker.distribution.manifest.v1+json",
          "application/vnd.docker.distribution.manifest.list.v2+json",
          "application/vnd.oci.image.index.v1+json",
        ],
        excludeManifestContent: false,
        excludeTags: false,
        disableLastRecordedPullTimeUpdate: false,
      },
      responseElements: null,
      requestID: "5f82172c-e94b-448f-b368-05c765996bfd",
      eventID: "27472b60-2b6b-4098-861d-383ac8c610da",
      readOnly: true,
      resources: [
        {
          accountId: mockAccountID,
          ARN: `arn:aws:ecr:${mockRegion}:${mockAccountID}:repository/truststack-e2e-test-repository`,
        },
      ],
      eventType: "AwsApiCall",
      managementEvent: true,
      recipientAccountId: mockAccountID,
      eventCategory: "Management",
    },
  };

  // Helper function to create a modified event
  const createEventWithModifications = (
    modifications: Partial<ECRBatchGetImageEventDetail>,
  ) => {
    return {
      ...mockEvent,
      detail: {
        ...mockEvent.detail,
        ...modifications,
      },
    } as EventBridgeEvent<
      "AWS API Call via CloudTrail",
      ECRBatchGetImageEventDetail
    >;
  };

  // Reset mocks before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should skip event if not an ECR BatchGetImage event", async () => {
    const nonECREvent = createEventWithModifications({
      eventSource: "s3.amazonaws.com",
      eventName: "PutObject",
    });

    await handler(nonECREvent, mockContext);

    expect(mockLoggerInstance.info).toHaveBeenLastCalledWith(
      "Not an ECR BatchGetImage event, skipping",
    );
    expect(mockSecurityHubInstance.batchImportFindings).not.toHaveBeenCalled();
  });

  test("should allow access if role pattern matches", async () => {
    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedRolePatterns: ["AWSControlTowerExecution"],
    });

    await handler(mockEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockLoggerInstance.info).toHaveBeenLastCalledWith(
      "Access is authorized, skipping",
    );
    expect(mockSecurityHubInstance.batchImportFindings).not.toHaveBeenCalled();
  });

  test("should create Security Hub finding if role pattern does not match", async () => {
    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedRolePatterns: ["NonMatchingPattern"],
    });

    await handler(mockEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Access is not authorized by role pattern",
      {
        roleName: "AWSControlTowerExecution/botocore-session-8473921564",
        allowedPattern: ["NonMatchingPattern"],
      },
    );
    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Security Hub finding created",
      expect.anything(),
    );
    expect(mockSecurityHubInstance.batchImportFindings).toHaveBeenCalled();

    const batchImportFindingsInput =
      mockSecurityHubInstance.batchImportFindings.mock.calls[0][0];

    expect(batchImportFindingsInput.Findings).toHaveLength(1);
  });

  test("should allow access if source IP is in the allowed networks", async () => {
    // Create an event with a specific IP address
    const ipEvent = createEventWithModifications({
      sourceIPAddress: "192.168.1.1",
    });

    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedNetworks: ["192.168.1.0/24"],
    });

    await handler(ipEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );

    expect(mockLoggerInstance.info).toHaveBeenLastCalledWith(
      "Access is authorized, skipping",
    );
    expect(mockSecurityHubInstance.batchImportFindings).not.toHaveBeenCalled();
  });

  test("should create Security Hub finding if source IP is not in the allowed networks", async () => {
    // Create an event with an unauthorized IP and non-matching role
    const unauthorizedEvent = createEventWithModifications({
      sourceIPAddress: "203.0.113.1",
    });

    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedNetworks: ["192.168.1.0/24"],
    });

    await handler(unauthorizedEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Source IP address is not in the allowed networks",
      {
        sourceIP: "203.0.113.1",
        allowedNetworks: ["192.168.1.0/24"],
      },
    );
    expect(mockSecurityHubInstance.batchImportFindings).toHaveBeenCalled();

    const batchImportFindingsInput =
      mockSecurityHubInstance.batchImportFindings.mock.calls[0][0];

    expect(batchImportFindingsInput.Findings).toHaveLength(1);
  });

  test("should throw error if Security Hub finding creation fails", async () => {
    // Mock Security Hub to throw an error
    const mockError = new Error("Security Hub API Error");
    mockSecurityHubInstance.batchImportFindings.mockRejectedValueOnce(
      mockError,
    );

    // Create an unauthorized event
    const unauthorizedEvent = createEventWithModifications({
      sourceIPAddress: "203.0.113.1",
    });

    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedNetworks: ["192.168.1.0/24"],
    });

    await expect(handler(unauthorizedEvent, mockContext)).rejects.toThrow(
      "Security Hub API Error",
    );

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockSecurityHubInstance.batchImportFindings).toHaveBeenCalled();

    expect(mockLoggerInstance.error).toHaveBeenCalledWith(
      "Error creating Security Hub finding",
      expect.objectContaining({ error: mockError }),
    );
  });

  test("should handle invalid IP addresses gracefully", async () => {
    // Create an event with an invalid IP address
    const invalidIPEvent = createEventWithModifications({
      sourceIPAddress: "not-an-ip-address",
    });

    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedNetworks: ["192.168.1.0/24"],
    });

    await handler(invalidIPEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Source IP address is not a valid IP address",
      {
        sourceIP: "not-an-ip-address",
      },
    );
    expect(mockSecurityHubInstance.batchImportFindings).toHaveBeenCalled();

    const batchImportFindingsInput =
      mockSecurityHubInstance.batchImportFindings.mock.calls[0][0];

    expect(batchImportFindingsInput.Findings).toHaveLength(1);
  });

  test("should handle invalid network CIDR blocks gracefully", async () => {
    // Create an event with a specific IP address
    const ipEvent = createEventWithModifications({
      sourceIPAddress: "192.168.1.1",
    });

    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedNetworks: ["not-a-valid-cidr"],
    });

    await handler(ipEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Invalid network CIDR",
      {
        networkCIDR: "not-a-valid-cidr",
      },
    );
    expect(mockSecurityHubInstance.batchImportFindings).toHaveBeenCalled();

    const batchImportFindingsInput =
      mockSecurityHubInstance.batchImportFindings.mock.calls[0][0];

    expect(batchImportFindingsInput.Findings).toHaveLength(1);
  });

  test("should handle errors in authorization check gracefully", async () => {
    // Create a malformed event that would cause an error in isAuthorizedAccess
    const malformedEvent = createEventWithModifications({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
      userIdentity: null as any, // This will cause an error when trying to access userIdentity.type
    });

    mockGetValidatedSolutionConfig.mockResolvedValueOnce({
      allowedRolePatterns: ["AWSControlTowerExecution"],
      allowedNetworks: ["192.168.1.0/24"],
    });

    await handler(malformedEvent, mockContext);

    expect(mockGetValidatedSolutionConfig).toHaveBeenCalledWith(
      "ecr-image-layer-access",
    );
    expect(mockLoggerInstance.error).toHaveBeenCalledWith(
      "Error determining authorization",
      expect.objectContaining({ error: expect.anything() }),
    );
    // Should skip finding creation due to error causing default to authorized
    expect(mockSecurityHubInstance.batchImportFindings).not.toHaveBeenCalled();
  });
});
