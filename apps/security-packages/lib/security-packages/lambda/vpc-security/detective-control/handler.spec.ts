import type {
  GetFunctionConfigurationCommandOutput,
  ListTagsCommandOutput,
} from "@aws-sdk/client-lambda";
import {
  Partition,
  type GetFindingsCommandOutput,
} from "@aws-sdk/client-securityhub";
import { beforeAll, describe, jest } from "@jest/globals";
import type { LambdaVPCSecurityConfig } from "@trust-stack/schema";
import * as utils from "@trust-stack/utils";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type {
  LambdaFunctionCreateEventDetail,
  LambdaFunctionDeleteEventDetail,
  LambdaFunctionUpdateConfigurationEventDetail,
} from "../../../../../../../types/cloudtrail-events";
import { SECURITY_PACKAGE_NAME } from "../shared";

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
  listTags: jest
    .fn<() => Promise<Omit<ListTagsCommandOutput, "$metadata">>>()
    .mockResolvedValue({
      Tags: {},
    }),
};

const mockSecurityHubClientInstance = {
  batchImportFindings: jest.fn(),
  batchUpdateFindings: jest.fn(),
  getFindings:
    jest.fn<() => Promise<Omit<GetFindingsCommandOutput, "$metadata">>>(),
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
  ...utils,
  getValidatedPackageConfig: jest
    .fn<() => Promise<LambdaVPCSecurityConfig>>()
    .mockResolvedValue({
      allowedVPCIDs: ["vpc-12345678"],
    }),
}));

// Variables for dynamically imported modules
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
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

  const createLambdaCreateFunctionAPIEvent = (
    functionName: string,
    functionArn?: string,
  ): EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaFunctionCreateEventDetail
  > => {
    return {
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
        eventName: "CreateFunction20150331",
        awsRegion: mockRegion,
        sourceIPAddress: "192.168.1.1",
        userAgent: "aws-sdk-js/2.1234.5678",
        requestID: "12345678-1234-1234-1234-123456789012",
        eventID: "12345678-1234-1234-1234-123456789012",
        readOnly: false,
        managementEvent: true,
        recipientAccountId: mockAccountID,
        eventCategory: "Management",
        eventType: "AwsApiCall",
        tlsDetails: {
          tlsVersion: "TLSv1.2",
          cipherSuite: "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
        },
        userIdentity: {
          type: "IAMUser",
          principalId: "AIDAJQABLZS4A3QDU576Q",
          arn: `arn:aws:iam::${mockAccountID}:user/Admin`,
          accountId: mockAccountID,
          accessKeyId: "AKIAIOSFODNN7EXAMPLE",
          sessionContext: {
            sessionIssuer: {
              type: "IAMUser",
              principalId: "AIDAJQABLZS4A3QDU576Q",
              arn: `arn:aws:iam::${mockAccountID}:user/Admin`,
              accountId: mockAccountID,
              userName: "Admin",
            },
            attributes: {
              creationDate: "2022-12-01T00:00:00Z",
              mfaAuthenticated: "false",
            },
          },
        },
        requestParameters: {
          functionName,
          runtime: "nodejs18.x",
          role: "arn:aws:iam::123456789012:role/test-role",
          handler: "index.handler",
          environment: {},
          code: {},
          publish: true,
          vpcConfig: {
            subnetIds: ["subnet-12345"],
            securityGroupIds: ["sg-12345"],
          },
        },
        responseElements: {
          functionName,
          functionArn: functionArn ?? "",
          runtime: "nodejs18.x",
          role: "arn:aws:iam::123456789012:role/test-role",
          loggingConfig: {
            logGroup: `/aws/lambda/${functionName}`,
            logFormat: "JSON",
          },
          runtimeVersionConfig: {
            runtimeVersionArn: `arn:aws:lambda:${mockRegion}::runtime-version:nodejs18.x`,
          },
          handler: "index.handler",
          codeSize: 1024,
          description: "Test function",
          timeout: 3,
          memorySize: 128,
          lastModified: "2022-12-01T00:00:00.000+0000",
          codeSha256: "abcdef1234567890",
          version: "$LATEST",
          vpcConfig: {
            subnetIds: ["subnet-12345"],
            securityGroupIds: ["sg-12345"],
            vpcId: "vpc-12345678",
            ipv6AllowedForDualStack: false,
          },
          environment: {},
          tracingConfig: { mode: "PassThrough" },
          revisionId: "abcdef-12345-67890",
          state: "Active",
          stateReason: "Test function",
          stateReasonCode: "Test function",
          packageType: "Zip",
          architectures: ["x86_64"],
          ephemeralStorage: { size: 512 },
          snapStart: {
            applyOn: "None",
            optimizationStatus: "Off",
          },
        },
      },
    };
  };

  const createLambdaUpdateFunctionConfigurationAPIEvent = (
    functionName: string,
  ): EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaFunctionUpdateConfigurationEventDetail
  > => {
    return {
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
        eventName: "UpdateFunctionConfiguration20150331v2",
        awsRegion: mockRegion,
        sourceIPAddress: "192.168.1.1",
        userAgent: "aws-sdk-js/2.1234.5678",
        requestID: "12345678-1234-1234-1234-123456789012",
        eventID: "12345678-1234-1234-1234-123456789012",
        readOnly: false,
        managementEvent: true,
        recipientAccountId: mockAccountID,
        eventCategory: "Management",
        eventType: "AwsApiCall",
        tlsDetails: {
          tlsVersion: "TLSv1.2",
          cipherSuite: "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
          clientProvidedHostHeader: "example.com",
        },
        userIdentity: {
          type: "IAMUser",
          principalId: "AIDAJQABLZS4A3QDU576Q",
          arn: `arn:aws:iam::${mockAccountID}:user/Admin`,
          accountId: mockAccountID,
          accessKeyId: "AKIAIOSFODNN7EXAMPLE",
          sessionContext: {
            sessionIssuer: {
              type: "IAMUser",
              principalId: "AIDAJQABLZS4A3QDU576Q",
              arn: `arn:aws:iam::${mockAccountID}:user/Admin`,
              accountId: mockAccountID,
              userName: "Admin",
            },
            attributes: {
              creationDate: "2022-12-01T00:00:00Z",
              mfaAuthenticated: "false",
            },
          },
          inScopeOf: {
            issuerType: "IAMUser",
            credentialsIssuedTo: "AIDAJQABLZS4A3QDU576Q",
          },
        },
        requestParameters: {
          functionName,
          environment: {},
          vpcConfig: {
            subnetIds: ["subnet-12345"],
            securityGroupIds: ["sg-12345"],
          },
        },
        responseElements: null,
      },
    };
  };

  const deleteLambdaFunctionAPIEvent = (
    functionName: string,
  ): EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaFunctionDeleteEventDetail
  > => {
    return {
      version: "0",
      id: "12345678-1234-1234-1234-123456789012",
      "detail-type": "AWS API Call via CloudTrail",
      source: "aws.cloudtrail",
      account: mockAccountID,
      time: "2022-12-01T00:00:00Z",
      region: mockRegion,
      resources: [],
      detail: {
        userIdentity: {
          type: "AssumedRole",
          principalId: "W0R4ND0MRAND0MALPHANUM:test-user@myorg.io",
          arn: `arn:aws:sts::${mockAccountID}:assumed-role/DevOps/test-user@myorg.io`,
          accountId: mockAccountID,
          accessKeyId: "W0R4ND0MRAND0MALPHANUM",
          sessionContext: {
            sessionIssuer: {
              type: "Role",
              principalId: "W0R4ND0MRAND0MALPHANUM",
              arn: `arn:aws:iam::${mockAccountID}:role/DevOps`,
              accountId: mockAccountID,
              userName: "DevOps",
            },
            attributes: {
              creationDate: "2022-12-01T00:00:00Z",
              mfaAuthenticated: "false",
            },
          },
        },
        eventVersion: "1.11",
        eventTime: "2022-12-01T00:00:00Z",
        eventSource: "lambda.amazonaws.com",
        eventName: "DeleteFunction20150331",
        awsRegion: mockRegion,
        requestParameters: {
          functionName,
        },
        responseElements: null,
        requestID: "12345678-1234-1234-1234-123456789012",
        eventID: "12345678-1234-1234-1234-123456789012",
        readOnly: false,
        eventType: "AwsApiCall",
        managementEvent: true,
        recipientAccountId: mockAccountID,
        eventCategory: "Management",
        tlsDetails: {
          tlsVersion: "TLSv1.2",
          cipherSuite: "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
          clientProvidedHostHeader: "example.com",
        },
        sessionCredentialFromConsole: "true",
        sourceIPAddress: "192.168.1.1",
        userAgent: "aws-sdk-js/2.1234.5678",
      },
    };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should skip non-Lambda API events", async () => {
    const event = createLambdaCreateFunctionAPIEvent("test-function");
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

  it("should skip Lambda API events that aren't Create/Update", async () => {
    const event = deleteLambdaFunctionAPIEvent("test-function");

    // @ts-expect-error - The event is not a Create/Update event
    await handler(event, mockContext);

    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Not a relevant Lambda API event, skipping",
    );
    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  it("should create finding for Lambda function without VPC configuration", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaCreateFunctionAPIEvent(functionName, functionArn);

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

    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [],
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

  it("should update an existing finding for Lambda function without VPC configuration", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaCreateFunctionAPIEvent(functionName, functionArn);

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

    mockSecurityHubClientInstance.getFindings.mockResolvedValueOnce({
      Findings: [
        {
          Title: "Lambda function without proper VPC configuration",
          Description: "Fubar",
          SchemaVersion: "2018-10-08",
          GeneratorId: `${SECURITY_PACKAGE_NAME}DetectiveControl`,
          Id: "12345678-1234-1234-1234-123456789012",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
          CreatedAt: "2022-12-01T00:00:00.000+0000",
          UpdatedAt: "2022-12-01T00:00:00.000+0000",
          AwsAccountId: mockAccountID,
          Resources: [
            {
              Type: "AwsLambdaFunction",
              Id: functionArn,
              Partition: Partition.AWS,
              Region: mockRegion,
              Details: {
                AwsLambdaFunction: {
                  FunctionName: functionName,
                },
                Other: {
                  reason: "Fubar",
                },
              },
            },
          ],
        },
      ],
    });

    await handler(event, mockContext);

    expect(
      mockLambdaClientInstance.getFunctionConfiguration,
    ).toHaveBeenCalledWith({
      FunctionName: functionArn,
    });

    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenCalledTimes(1);

    expect(
      mockSecurityHubClientInstance.batchImportFindings,
    ).not.toHaveBeenCalled();
  });

  it.skip("should create finding for Lambda function in non-approved VPC", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaUpdateFunctionConfigurationAPIEvent(functionName);

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

  it("should not create finding for Lambda function with approved VPC configuration", async () => {
    const functionName = "test-function";
    const functionArn = `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:${functionName}`;
    const event = createLambdaCreateFunctionAPIEvent(functionName, functionArn);

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
