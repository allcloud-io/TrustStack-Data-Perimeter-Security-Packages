import type {
  BatchImportFindingsResponse,
  GetFindingsCommandOutput,
} from "@aws-sdk/client-securityhub";
import * as securityHub from "@aws-sdk/client-securityhub";
import { beforeAll, describe, expect, jest } from "@jest/globals";
import type { LambdaPermissionSecurityConfig } from "@trust-stack/schema";
import * as utils from "@trust-stack/utils";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type { LambdaAddPermissionEventDetail } from "../../../../../../../types/cloudtrail-events";
import { SECURITY_PACKAGE_NAME } from "../shared";

// Mock AWS client
const mockSecurityHubClientInstance = {
  batchImportFindings: jest.fn<() => Promise<BatchImportFindingsResponse>>(),
  batchUpdateFindings:
    jest.fn<() => Promise<securityHub.BatchUpdateFindingsCommandOutput>>(),
  getFindings:
    jest.fn<() => Promise<Omit<GetFindingsCommandOutput, "$metadata">>>(),
};

// Mock logger
const mockLogger = {
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

const getValidatedPackageConfigMock =
  jest.fn<() => Promise<LambdaPermissionSecurityConfig>>();

// Setup mocks before imports
jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  ...securityHub,
  SecurityHub: jest
    .fn()
    .mockImplementation(() => mockSecurityHubClientInstance),
}));

jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLogger),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

jest.unstable_mockModule("@trust-stack/utils", () => ({
  ...utils,
  getValidatedPackageConfig: getValidatedPackageConfigMock,
}));

// Variables for dynamically imported modules
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let handler: typeof import("./handler").handler;

// Load the handler module dynamically
beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("Lambda Permission Security Detective Control Handler", () => {
  const mockAccountID = "123456789012";
  const mockRegion = "us-east-1";
  const mockContext = {} as Context;

  const createMockAWSSecurityFinding = (
    id: string,
  ): securityHub.AwsSecurityFinding => ({
    SchemaVersion: "2018-10-08",
    Id: id,
    ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
    GeneratorId: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
    AwsAccountId: mockAccountID,
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    CreatedAt: "2023-01-01T00:00:00.000Z",
    UpdatedAt: "2023-01-01T00:00:00.000Z",
    Severity: {
      Label: securityHub.SeverityLabel.HIGH,
    },
    Title: "Unauthorized Lambda permission principal detected",
    Description:
      "An unauthorized principal was granted permission to invoke a Lambda function.",
    Resources: [
      {
        Type: "AwsLambdaFunction",
        Id: `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:test-function`,
        Partition: securityHub.Partition.AWS,
        Region: mockRegion,
      },
    ],
    Workflow: {
      Status: securityHub.WorkflowStatus.NEW,
    },
    RecordState: securityHub.RecordState.ACTIVE,
    Compliance: {
      Status: securityHub.ComplianceStatus.FAILED,
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should allow trusted service principal", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowS3Invocation",
          functionName: "test-function",
          principal: "s3.amazonaws.com",
          action: "lambda:InvokeFunction",
          sourceAccount: "111122223333",
          sourceArn: "arn:aws:s3:::test-bucket",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "s3.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedOrgIDs: ["o-trusted123"],
      trustedAccountIDs: ["111122223333"],
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [],
    });

    await handler(mockEvent, mockContext);

    // For trusted principals, we expect the info log with 'Lambda permission principal is trusted'
    // and no security hub finding to be created
    expect(mockLogger.info).toHaveBeenLastCalledWith(
      "Lambda permission principal is trusted",
      expect.any(Object),
    );

    // No warning should be logged
    expect(mockLogger.warn).not.toHaveBeenCalled();

    // Verify no finding was created - this is the key assertion for trusted principals
    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).not.toHaveBeenCalled();
  });

  it("should create finding for untrusted service principal", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowUntrustedInvocation",
          functionName:
            "arn:aws:lambda:us-east-1:111122223333:function:test-function",
          principal: "untrusted.amazonaws.com",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "untrusted.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedOrgIDs: ["o-trusted123"],
      trustedAccountIDs: ["111122223333"],
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    // Mock batch import findings success
    mockSecurityHubClientInstance.batchImportFindings.mockResolvedValueOnce({
      FailedCount: 0,
      SuccessCount: 1,
    });

    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [],
    });

    await handler(mockEvent, mockContext);

    // For untrusted principals, we expect a warning log
    expect(mockLogger.warn).toHaveBeenCalledWith(
      "Untrusted principal in Lambda permission",
      expect.any(Object),
    );

    // We also expect security hub finding creation logs
    expect(mockLogger.info).toHaveBeenCalledWith(
      "Importing new Security Hub finding",
      expect.any(Object),
    );
    expect(mockLogger.info).toHaveBeenCalledWith(
      "Security Hub finding imported successfully",
    );

    // Verify finding was created
    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).toHaveBeenCalledWith({
      Findings: [
        expect.objectContaining({
          Id: expect.stringContaining("lambda-permission-security"),
          Title: "Unauthorized Lambda permission principal detected",
        }),
      ],
    });
  });

  it("should allow trusted account ID", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowAccountInvocation",
          functionName: "test-function",
          principal: "111122223333",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "111122223333",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedAccountIDs: ["111122223333"],
    });

    await handler(mockEvent, mockContext);

    expect(mockLogger.info).toHaveBeenCalledWith(
      "Lambda permission principal is trusted",
      expect.any(Object),
    );

    // No warning should be logged
    expect(mockLogger.warn).not.toHaveBeenCalled();

    // Verify no finding was created
    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).not.toHaveBeenCalled();
  });

  it("should allow trusted Organization ID", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowOrgInvocation",
          functionName: "test-function",
          principal: "999988887777",
          principalOrgID: "o-trusted123",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "999988887777",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedOrgIDs: ["o-trusted123"],
    });

    await handler(mockEvent, mockContext);

    expect(mockLogger.info).toHaveBeenCalledWith(
      "Lambda permission principal is trusted",
      expect.any(Object),
    );

    // No warning should be logged
    expect(mockLogger.warn).not.toHaveBeenCalled();

    // Verify no finding was created
    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).not.toHaveBeenCalled();
  });

  it("should create finding for untrusted Organization ID", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowOrgInvocation",
          functionName: "test-function",
          principal: "999988887777",
          principalOrgID: "o-untrusted123",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "999988887777",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedOrgIDs: ["o-trusted123"],
    });

    mockSecurityHubClientInstance.batchImportFindings.mockResolvedValueOnce({
      FailedCount: 0,
      SuccessCount: 1,
    });

    await handler(mockEvent, mockContext);

    expect(mockLogger.warn).toHaveBeenLastCalledWith(
      "Untrusted principal in Lambda permission",
      expect.any(Object),
    );
  });

  it("should handle error in retrieving configuration", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowUntrustedInvocation",
          functionName: "test-function",
          principal: "untrusted.amazonaws.com",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "untrusted.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockRejectedValueOnce(
      new Error("Configuration error"),
    );

    await expect(handler(mockEvent, mockContext)).rejects.toThrow(
      "Configuration error",
    );

    // Verify error was logged
    expect(mockLogger.error).toHaveBeenCalledWith(
      "Error retrieving configuration",
      expect.objectContaining({
        error: "Configuration error",
      }),
    );
  });

  it("should handle error in creating Security Hub finding", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowUntrustedInvocation",
          functionName: "test-function",
          principal: "untrusted.amazonaws.com",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "untrusted.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [],
    });

    // Mock batch import findings error
    mockSecurityHubClientInstance.batchImportFindings.mockRejectedValueOnce(
      new Error("Security Hub error"),
    );

    await expect(handler(mockEvent, mockContext)).rejects.toThrow(
      "Security Hub error",
    );

    // Verify error was logged
    expect(mockLogger.error).toHaveBeenCalledWith(
      "Failed to import Security Hub finding",
      expect.objectContaining({
        error: "Security Hub error",
      }),
    );
  });

  it("should update existing Security Hub finding", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowUntrustedInvocation",
          functionName: "test-function",
          principal: "untrusted.amazonaws.com",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "untrusted.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    // Mock that a finding already exists
    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [
        createMockAWSSecurityFinding(
          "lambda-permission-security-test-function",
        ),
      ],
    });

    // Mock batch update findings success
    mockSecurityHubClientInstance.batchUpdateFindings.mockResolvedValueOnce(
      {} as unknown as securityHub.BatchUpdateFindingsCommandOutput,
    );

    await handler(mockEvent, mockContext);

    // Verify finding was updated
    expect(mockLogger.info).toHaveBeenCalledWith(
      "Updating existing Security Hub finding",
      expect.any(Object),
    );

    expect(mockLogger.info).toHaveBeenCalledWith(
      "Security Hub finding updated successfully",
    );

    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: "lambda-permission-security-test-function",
          ProductArn: expect.any(String),
        },
      ],
      Note: expect.any(Object),
      UserDefinedFields: {
        "TrustStack/Principal": "untrusted.amazonaws.com",
        "TrustStack/Reason":
          "Source ARN or source account is required for service principals",
        "TrustStack/SecurityPackage": "LambdaPermissionSecurity",
      },
      Workflow: expect.any(Object),
    });

    // Verify batchImportFindings was not called
    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).not.toHaveBeenCalled();
  });

  it("should handle error in getting Security Hub findings", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowUntrustedInvocation",
          functionName: "test-function",
          principal: "untrusted.amazonaws.com",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "untrusted.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    // Mock getFindings error
    mockSecurityHubClientInstance.getFindings.mockRejectedValueOnce(
      new Error("GetFindings error"),
    );

    await expect(handler(mockEvent, mockContext)).rejects.toThrow(
      "GetFindings error",
    );

    expect(mockLogger.warn).toHaveBeenCalledWith(
      "Untrusted principal in Lambda permission",
      expect.any(Object),
    );

    expect(mockLogger.error).toHaveBeenCalledWith(
      "Failed to get Security Hub finding",
      expect.objectContaining({
        error: "GetFindings error",
      }),
    );
  });

  it("should handle error in updating Security Hub finding", async () => {
    const mockEvent: EventBridgeEvent<
      "AWS API Call via CloudTrail",
      LambdaAddPermissionEventDetail
    > = {
      id: "event-id",
      version: "0",
      account: "111122223333",
      time: "2023-01-01T00:00:00Z",
      region: "us-east-1",
      source: "aws.lambda",
      resources: [],
      detail: {
        awsRegion: "us-east-1",
        eventName: "AddPermission",
        eventSource: "lambda.amazonaws.com",
        requestParameters: {
          statementId: "AllowUntrustedInvocation",
          functionName: "test-function",
          principal: "untrusted.amazonaws.com",
          action: "lambda:InvokeFunction",
        },
        responseElements: {
          statement: JSON.stringify({
            Effect: "Allow",
            Action: "lambda:InvokeFunction",
            Principal: "untrusted.amazonaws.com",
          }),
        },
        userIdentity: {
          accountId: "111122223333",
          type: "IAMUser",
        },
      },
      "detail-type": "AWS API Call via CloudTrail",
    };

    getValidatedPackageConfigMock.mockResolvedValueOnce({
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    // Mock that a finding already exists
    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [
        createMockAWSSecurityFinding(
          "lambda-permission-security-test-function",
        ),
      ],
    });

    // Mock batch update findings error
    mockSecurityHubClientInstance.batchUpdateFindings.mockRejectedValueOnce(
      new Error("Update finding error") as unknown as never,
    );

    await expect(handler(mockEvent, mockContext)).rejects.toThrow(
      "Update finding error",
    );

    expect(mockLogger.error).toHaveBeenCalledWith(
      "Failed to update Security Hub finding",
      expect.objectContaining({
        error: "Update finding error",
      }),
    );
  });
});
