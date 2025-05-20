import type {
  GetPolicyCommandOutput,
  RemovePermissionCommandOutput,
} from "@aws-sdk/client-lambda";
import type {
  AwsSecurityFinding,
  BatchUpdateFindingsCommandOutput,
} from "@aws-sdk/client-securityhub";
import { beforeAll, describe, expect, jest } from "@jest/globals";
import type { Context } from "aws-lambda";
import type {
  SecurityHubFindingsImportedEvent,
  SecurityHubFindingsImportedEventDetail,
} from "../../../../../../../types/aws-security-hub-events";

// Mock AWS Lambda client
const mockLambdaClient = {
  getPolicy:
    jest.fn<() => Promise<Omit<GetPolicyCommandOutput, "$metadata">>>(),
  removePermission:
    jest.fn<() => Promise<Omit<RemovePermissionCommandOutput, "$metadata">>>(),
};

// Mock SecurityHub client
const mockSecurityHubClient = {
  batchUpdateFindings:
    jest.fn<
      () => Promise<Omit<BatchUpdateFindingsCommandOutput, "$metadata">>
    >(),
};

// Mock logger
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

// Setup mocks before imports
jest.unstable_mockModule("@aws-sdk/client-lambda", () => ({
  Lambda: jest.fn().mockImplementation(() => mockLambdaClient),
}));

jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  SecurityHub: jest.fn().mockImplementation(() => mockSecurityHubClient),
}));

jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let handler: typeof import("./handler").handler;

beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

// Base finding object for tests
const createBaseFinding = () =>
  ({
    SchemaVersion: "2018-10-08",
    Id: "finding-id-1",
    ProductArn:
      "arn:aws:securityhub:us-east-1:123456789012:product/123456789012/default",
    GeneratorId: "lambda-permission-security-detective-control",
    AwsAccountId: "123456789012",
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    CreatedAt: "2023-01-01T00:00:00.000Z",
    UpdatedAt: "2023-01-01T00:00:00.000Z",
    FirstObservedAt: "2023-01-01T00:00:00.000Z",
    Severity: { Label: "HIGH" },
    Title: "Unauthorized Lambda permission principal detected",
    Description: "Lambda function has an unauthorized permission principal",
    UserDefinedFields: {
      "TrustStack/Principal": "999988887777",
      "TrustStack/Reason":
        "AWS account ID 999988887777 is not in the list of trusted accounts",
      "TrustStack/SecurityPackage": "LambdaPermissionSecurity",
    },
    Resources: [
      {
        Type: "AwsLambdaFunction",
        Id: "arn:aws:lambda:us-east-1:123456789012:function:test-function",
        Partition: "aws",
        Region: "us-east-1",
      },
    ],
    Remediation: {
      Recommendation: {
        Text: "Remove the Lambda permission using the RemovePermission API or update it to use a trusted principal",
        Url: "https://docs.aws.amazon.com/lambda/latest/api/API_RemovePermission.html",
      },
    },
    FindingProviderFields: {
      Types: ["Software and Configuration Checks/AWS Security Best Practices"],
      Severity: {
        Label: "HIGH",
      },
    },
    Compliance: {
      Status: "FAILED",
    },
    RecordState: "ACTIVE",
    Workflow: { Status: "NEW" },
    ProcessedAt: "2023-01-01T00:00:00.000Z",
    CompanyName: "TrustStack",
    ProductName: "Lambda Permission Security",
  }) satisfies AwsSecurityFinding;

// Base event for tests
const createBaseEvent = (
  findings = [createBaseFinding()],
): SecurityHubFindingsImportedEvent => ({
  version: "0",
  id: "event-id-1",
  "detail-type": "Security Hub Findings - Imported",
  source: "aws.securityhub",
  account: "123456789012",
  time: "2023-01-01T00:00:00Z",
  region: "us-east-1",
  resources: [],
  detail: {
    findings:
      findings as unknown as SecurityHubFindingsImportedEventDetail["findings"],
  },
});

describe("Lambda Permission Security Responsive Control Handler", () => {
  const mockContext = {} as Context;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should successfully remediate unauthorized Lambda permission", async () => {
    // Arrange
    const testEvent = createBaseEvent();
    const lambdaARN = testEvent.detail.findings[0].Resources[0].Id;
    const principal =
      testEvent.detail.findings[0].UserDefinedFields["TrustStack/Principal"];

    mockLambdaClient.getPolicy.mockResolvedValueOnce({
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "AllowUntrustedAccount",
            Effect: "Allow",
            Principal: { AWS: `arn:aws:iam::${principal}:root` },
            Action: "lambda:InvokeFunction",
            Resource: lambdaARN,
          },
        ],
      }),
    });

    mockLambdaClient.removePermission.mockResolvedValueOnce({});

    mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
      ProcessedFindings: [],
      UnprocessedFindings: [],
    });

    // Act
    await handler(testEvent, mockContext);

    // Assert
    expect(mockLambdaClient.getPolicy).toHaveBeenCalledWith({
      FunctionName: lambdaARN,
    });
    expect(mockLambdaClient.removePermission).toHaveBeenCalledWith({
      FunctionName: lambdaARN,
      StatementId: "AllowUntrustedAccount",
    });
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: testEvent.detail.findings[0].Id,
          ProductArn: testEvent.detail.findings[0].ProductArn,
        },
      ],
      Note: {
        Text: expect.stringContaining("Removed unauthorized Lambda permission"),
        UpdatedBy: expect.stringContaining("ResponsiveControl"),
      },
      Workflow: {
        Status: "RESOLVED",
      },
    });
  });

  it("should handle error when getting Lambda policy", async () => {
    // Arrange
    const testEvent = createBaseEvent();

    const error = new Error("Access denied");
    mockLambdaClient.getPolicy.mockRejectedValueOnce(error);
    mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
      ProcessedFindings: [],
      UnprocessedFindings: [],
    });

    // Act
    await handler(testEvent, mockContext);

    // Assert
    expect(mockLoggerInstance.error).toHaveBeenCalledWith(
      "Error getting Lambda function policy",
      expect.objectContaining({
        error: error.message,
      }),
    );
    expect(mockSecurityHubClient.batchUpdateFindings).not.toHaveBeenCalled();
    expect(mockLambdaClient.removePermission).not.toHaveBeenCalled();
  });

  it("should handle case when no Lambda policy is returned", async () => {
    // Arrange
    const testEvent = createBaseEvent();

    mockLambdaClient.getPolicy.mockResolvedValueOnce({
      Policy: undefined,
    });
    mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
      ProcessedFindings: [],
      UnprocessedFindings: [],
    });

    // Act
    await handler(testEvent, mockContext);

    // Assert
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "No policy found for Lambda function",
    );
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: testEvent.detail.findings[0].Id,
          ProductArn: testEvent.detail.findings[0].ProductArn,
        },
      ],
      Note: {
        Text: "No policy found for Lambda function",
        UpdatedBy: expect.stringContaining("ResponsiveControl"),
      },
      Workflow: {
        Status: "SUPPRESSED",
      },
    });
    expect(mockLambdaClient.removePermission).not.toHaveBeenCalled();
  });

  it("should handle case when no matching statement is found in policy", async () => {
    // Arrange
    const testEvent = createBaseEvent();
    const lambdaARN = testEvent.detail.findings[0].Resources[0].Id;

    mockLambdaClient.getPolicy.mockResolvedValueOnce({
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: {
          Sid: "AllowDifferentAccount",
          Effect: "Allow",
          // The principal in the test event is 999988887777, but the policy has
          // a different principal
          Principal: { AWS: "arn:aws:iam::111122223333:root" },
          Action: "lambda:InvokeFunction",
          Resource: lambdaARN,
        },
      }),
    });
    mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
      ProcessedFindings: [],
      UnprocessedFindings: [],
    });

    // Act
    await handler(testEvent, mockContext);

    // Assert
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "No matching statement found in Lambda policy",
    );
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: testEvent.detail.findings[0].Id,
          ProductArn: testEvent.detail.findings[0].ProductArn,
        },
      ],
      Note: {
        Text: "No matching statement found in Lambda policy",
        UpdatedBy: expect.stringContaining("ResponsiveControl"),
      },
      Workflow: {
        Status: "SUPPRESSED",
      },
    });
    expect(mockLambdaClient.removePermission).not.toHaveBeenCalled();
  });

  it("should handle case when statement has no Sid", async () => {
    // Arrange
    const principal = "arn:aws:iam::123456789012:role/test-role";
    const testEvent = createBaseEvent();
    testEvent.detail.findings[0].UserDefinedFields["TrustStack/Principal"] =
      principal;
    const lambdaARN = testEvent.detail.findings[0].Resources[0].Id;

    mockLambdaClient.getPolicy.mockResolvedValueOnce({
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            // No Sid
            Effect: "Allow",
            Principal: principal,
            Action: "lambda:InvokeFunction",
            Resource: lambdaARN,
          },
        ],
      }),
    });
    mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
      ProcessedFindings: [],
      UnprocessedFindings: [],
    });

    // Act
    await handler(testEvent, mockContext);

    // Assert
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Statement ID not found in policy statement",
      expect.any(Object),
    );
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: testEvent.detail.findings[0].Id,
          ProductArn: testEvent.detail.findings[0].ProductArn,
        },
      ],
      Note: {
        Text: "Statement ID not found in policy statement",
        UpdatedBy: expect.stringContaining("ResponsiveControl"),
      },
      Workflow: {
        Status: "NEW",
      },
    });
    expect(mockLambdaClient.removePermission).not.toHaveBeenCalled();
  });

  it("should handle error when removing permission", async () => {
    // Arrange
    const testEvent = createBaseEvent();
    const lambdaARN = testEvent.detail.findings[0].Resources[0].Id;
    const principal =
      testEvent.detail.findings[0].UserDefinedFields["TrustStack/Principal"];

    mockLambdaClient.getPolicy.mockResolvedValueOnce({
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "AllowUntrustedAccount",
            Effect: "Allow",
            Principal: { AWS: `arn:aws:iam::${principal}:root` },
            Action: "lambda:InvokeFunction",
            Resource: lambdaARN,
          },
        ],
      }),
    });

    const error = new Error("Permission removal failed");
    mockLambdaClient.removePermission.mockRejectedValueOnce(error);

    // Act & Assert
    await expect(handler(testEvent, mockContext)).rejects.toThrow();

    expect(mockLoggerInstance.error).toHaveBeenCalledWith(
      "Error removing unauthorized Lambda permission",
      expect.objectContaining({
        error: error.message,
      }),
    );
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith({
      FindingIdentifiers: [
        {
          Id: testEvent.detail.findings[0].Id,
          ProductArn: testEvent.detail.findings[0].ProductArn,
        },
      ],
      Note: {
        Text: expect.stringContaining("Failed to remove Lambda permission"),
        UpdatedBy: expect.stringContaining("ResponsiveControl"),
      },
      Workflow: { Status: "NEW" },
    });
  });

  it("should handle error when updating finding status", async () => {
    // Arrange
    const testEvent = createBaseEvent();
    const lambdaARN = testEvent.detail.findings[0].Resources[0].Id;
    const principal =
      testEvent.detail.findings[0].UserDefinedFields["TrustStack/Principal"];

    mockLambdaClient.getPolicy.mockResolvedValueOnce({
      Policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [
          {
            Sid: "AllowUntrustedAccount",
            Effect: "Allow",
            Principal: { AWS: `arn:aws:iam::${principal}:root` },
            Action: "lambda:InvokeFunction",
            Resource: lambdaARN,
          },
        ],
      }),
    });

    mockLambdaClient.removePermission.mockResolvedValueOnce({});

    const error = new Error("Failed to update finding");
    mockSecurityHubClient.batchUpdateFindings.mockRejectedValueOnce(error);

    // Act & Assert
    await expect(handler(testEvent, mockContext)).rejects.toThrow();

    // Assert
    expect(mockLoggerInstance.error).toHaveBeenCalledWith(
      "Failed to update Security Hub finding",
      expect.objectContaining({
        error: error.message,
        findingID: testEvent.detail.findings[0].Id,
      }),
    );
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledTimes(1);
    expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenLastCalledWith({
      FindingIdentifiers: [
        {
          Id: testEvent.detail.findings[0].Id,
          ProductArn: testEvent.detail.findings[0].ProductArn,
        },
      ],
      Note: {
        Text:
          "Removed unauthorized Lambda permission (AllowUntrustedAccount) " +
          "for principal 999988887777",
        UpdatedBy: expect.stringContaining("ResponsiveControl"),
      },
      Workflow: {
        Status: "RESOLVED",
      },
    });
  });

  it("should handle case when Lambda function resource is not found in the finding", async () => {
    // Arrange
    const finding = createBaseFinding();
    finding.Resources = [];
    const testEvent = createBaseEvent([finding]);

    // Act
    await handler(testEvent, mockContext);

    // Assert
    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "No Lambda function resource found in finding",
    );
    expect(mockLambdaClient.getPolicy).not.toHaveBeenCalled();
    expect(mockLambdaClient.removePermission).not.toHaveBeenCalled();
    expect(mockSecurityHubClient.batchUpdateFindings).not.toHaveBeenCalled();
  });
});
