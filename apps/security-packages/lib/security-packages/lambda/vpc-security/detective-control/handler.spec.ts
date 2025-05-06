/* eslint-disable @typescript-eslint/consistent-type-imports */
import type { GetFunctionConfigurationCommandOutput } from "@aws-sdk/client-lambda";
import { beforeAll, describe, jest, test } from "@jest/globals";
import { LambdaVPCSecurityConfig } from "@trust-stack/schema";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type { LambdaFunctionCreateEventDetail } from "../../../../../../../types/cloudtrail-events";

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

const mockLambdaClientInstance = {
  getFunctionConfiguration:
    jest.fn<
      () => Promise<Omit<GetFunctionConfigurationCommandOutput, "$metadata">>
    >(),
};

const mockSecurityHubClientInstance = {
  batchImportFindings: jest.fn(),
};

// Setup mocks before imports
jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

jest.unstable_mockModule("@aws-sdk/client-lambda", () => ({
  Lambda: jest.fn().mockImplementation(() => mockLambdaClientInstance),
}));

jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  SecurityHub: jest
    .fn()
    .mockImplementation(() => mockSecurityHubClientInstance),
  SeverityLabel: {
    HIGH: "HIGH",
  },
  ComplianceStatus: {
    FAILED: "FAILED",
  },
  RecordState: {
    ACTIVE: "ACTIVE",
  },
  Partition: {
    AWS: "aws",
  },
  WorkflowStatus: {
    NEW: "NEW",
  },
}));

jest.unstable_mockModule("@trust-stack/utils", () => ({
  getValidatedPackageConfig: jest
    .fn<() => Promise<LambdaVPCSecurityConfig>>()
    .mockResolvedValue({
      allowedVPCIDs: ["vpc-12345678"],
    }),
}));

// Variables for dynamically imported modules
let handler: typeof import("./handler").handler;

// Load the handler module dynamically
beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("Lambda VPC Security Detective Control Handler", () => {
  const mockAccountID = "123456789012";
  const mockRegion = "us-east-1";
  const mockContext = {} as Context;

  const createLambdaApiEvent = (
    eventName: LambdaFunctionCreateEventDetail["eventName"],
    functionName: string,
    functionArn?: string,
  ): EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaFunctionCreateEventDetail
  > => ({
    version: "0",
    id: "12345678-1234-1234-1234-123456789012",
    "detail-type": "AWS API Call via CloudTrail",
    source: "aws.cloudtrail",
    account: mockAccountID,
    time: "2022-12-01T00:00:00Z",
    region: mockRegion,
    resources: [],
    detail: {
      eventSource: "lambda.amazonaws.com",
      eventName,
      awsRegion: mockRegion,
      sourceIPAddress: "192.168.1.1",
      userIdentity: {
        type: "IAMUser",
        principalId: "AIDAJQABLZS4A3QDU576Q",
        arn: `arn:aws:iam::${mockAccountID}:user/Admin`,
        accountId: mockAccountID,
      },
      requestParameters: {
        functionName,
      },
      responseElements: functionArn
        ? {
            functionArn,
          }
        : undefined,
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should skip non-Lambda API events", async () => {
    const event = createLambdaApiEvent(
      "CreateFunction20150331",
      "test-function",
    );
    event.detail.eventSource =
      "s3.amazonaws.com" as LambdaFunctionCreateEventDetail["eventSource"];

    await handler(event, mockContext);

    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Not a relevant Lambda API event, skipping",
    );
    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should skip Lambda API events that aren't Create/Update", async () => {
    const event = createLambdaApiEvent("DeleteFunction", "test-function");

    await handler(event, mockContext);

    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Not a relevant Lambda API event, skipping",
    );
    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should create finding for Lambda function without VPC configuration", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaApiEvent(
      "CreateFunction20150331",
      functionName,
      functionArn,
    );

    mockLambdaClientInstance.getFunctionConfiguration.mockResolvedValueOnce({
      FunctionName: functionName,
      FunctionArn: functionArn,
      Runtime: "nodejs18.x",
      Role: "arn:aws:iam::123456789012:role/test-role",
      Handler: "index.handler",
      CodeSize: 1024,
      Description: "Test function",
      Timeout: 3,
      MemorySize: 128,
      LastModified: "2022-12-01T00:00:00.000+0000",
      CodeSha256: "abcdef1234567890",
      Version: "$LATEST",
      TracingConfig: { Mode: "PassThrough" },
      RevisionId: "abcdef-12345-67890",
      // No VpcConfig
    });

    await handler(event, mockContext);

    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).toHaveBeenCalledWith({
      FunctionName: functionArn,
    });

    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).toHaveBeenCalledWith({
      Findings: [
        expect.objectContaining({
          SchemaVersion: "2018-10-08",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Id: expect.any(String),
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
          Title: "Lambda function without proper VPC configuration",
          Description: "Lambda function is not configured to run in a VPC",
        }),
      ],
    });
  });

  test.skip("should create finding for Lambda function in non-approved VPC", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaApiEvent(
      "UpdateFunctionConfiguration",
      functionName,
      functionArn,
    );

    mockLambdaClientInstance.getFunctionConfiguration.mockResolvedValueOnce({
      FunctionName: functionName,
      FunctionArn: functionArn,
      Runtime: "nodejs18.x",
      Role: "arn:aws:iam::123456789012:role/test-role",
      Handler: "index.handler",
      CodeSize: 1024,
      Description: "Test function",
      Timeout: 3,
      MemorySize: 128,
      LastModified: "2022-12-01T00:00:00.000+0000",
      CodeSha256: "abcdef1234567890",
      Version: "$LATEST",
      TracingConfig: { Mode: "PassThrough" },
      RevisionId: "abcdef-12345-67890",
      VpcConfig: {
        VpcId: "vpc-87654321", // Not in the allowed list
        SubnetIds: ["subnet-12345"],
        SecurityGroupIds: ["sg-12345"],
      },
    });

    await handler(event, mockContext);

    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).toHaveBeenCalledWith({
      FunctionName: functionArn,
    });

    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).toHaveBeenCalledWith({
      Findings: [
        expect.objectContaining({
          SchemaVersion: "2018-10-08",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Id: expect.any(String),
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
          Title: "Lambda function without proper VPC configuration",
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Description: expect.stringContaining(
            "Lambda function is configured to run in an unauthorized VPC",
          ),
        }),
      ],
    });
  });

  test("should not create finding for Lambda function with approved VPC configuration", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaApiEvent(
      "CreateFunction20150331",
      functionName,
      functionArn,
    );

    mockLambdaClientInstance.getFunctionConfiguration.mockResolvedValueOnce({
      FunctionName: functionName,
      FunctionArn: functionArn,
      Runtime: "nodejs18.x",
      Role: "arn:aws:iam::123456789012:role/test-role",
      Handler: "index.handler",
      CodeSize: 1024,
      Description: "Test function",
      Timeout: 3,
      MemorySize: 128,
      LastModified: "2022-12-01T00:00:00.000+0000",
      CodeSha256: "abcdef1234567890",
      Version: "$LATEST",
      TracingConfig: { Mode: "PassThrough" },
      RevisionId: "abcdef-12345-67890",
      VpcConfig: {
        VpcId: "vpc-12345678", // In the allowed list
        SubnetIds: ["subnet-12345"],
        SecurityGroupIds: ["sg-12345"],
      },
    });

    await handler(event, mockContext);

    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).toHaveBeenCalledWith({
      FunctionName: functionArn,
    });

    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).not.toHaveBeenCalled();

    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Lambda function has a valid VPC configuration",
      {
        functionName,
        vpcID: "vpc-12345678",
      },
    );
  });
});
