/* eslint-disable @typescript-eslint/consistent-type-imports */
import type {
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
  DescribeSubnetsCommandInput,
  DescribeSubnetsCommandOutput,
  DescribeVpcsCommandInput,
  DescribeVpcsCommandOutput,
} from "@aws-sdk/client-ec2";
import type {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "@aws-sdk/client-lambda";
import type {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "@aws-sdk/client-securityhub";
import { beforeAll, describe, jest, test } from "@jest/globals";
import { LambdaVPCSecurityConfig } from "@trust-stack/schema";
import type { Context } from "aws-lambda";
import type { SecurityHubFindingsImportedEvent } from "../../../../../../../types/aws-security-hub-events";

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
  updateFunctionConfiguration:
    jest.fn<
      (
        args: UpdateFunctionConfigurationCommandInput,
      ) => Promise<Omit<UpdateFunctionConfigurationCommandOutput, "$metadata">>
    >(),
};

const mockEC2ClientInstance = {
  describeVpcs:
    jest.fn<
      (
        args: DescribeVpcsCommandInput,
      ) => Promise<Omit<DescribeVpcsCommandOutput, "$metadata">>
    >(),
  describeSubnets:
    jest.fn<
      (
        args: DescribeSubnetsCommandInput,
      ) => Promise<Omit<DescribeSubnetsCommandOutput, "$metadata">>
    >(),
  describeSecurityGroups:
    jest.fn<
      (
        args: DescribeSecurityGroupsCommandInput,
      ) => Promise<Omit<DescribeSecurityGroupsCommandOutput, "$metadata">>
    >(),
};

const mockSecurityHubClientInstance = {
  batchUpdateFindings:
    jest.fn<
      (
        args: BatchUpdateFindingsCommandInput,
      ) => Promise<Omit<BatchUpdateFindingsCommandOutput, "$metadata">>
    >(),
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

jest.unstable_mockModule("@aws-sdk/client-ec2", () => ({
  EC2: jest.fn().mockImplementation(() => mockEC2ClientInstance),
}));

jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  SecurityHub: jest
    .fn()
    .mockImplementation(() => mockSecurityHubClientInstance),
}));

const getValidatedPackageConfigMock =
  jest.fn<() => Promise<LambdaVPCSecurityConfig>>();

jest.unstable_mockModule("@trust-stack/utils", () => ({
  getValidatedPackageConfig: getValidatedPackageConfigMock,
}));

// Import the handler dynamically (after mocks are in place)
let handler: typeof import("./handler").handler;

// Load the handler module dynamically
beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

beforeEach(() => {
  getValidatedPackageConfigMock.mockResolvedValue({
    allowedVPCIDs: ["vpc-12345678"],
  });
});

describe("Lambda VPC Security Responsive Control Handler", () => {
  const mockAccountID = "123456789012";
  const mockRegion = "us-east-1";
  const mockContext = {} as Context;

  const createSecurityHubFindingEvent = (
    generatorId: string,
    resourceType = "AwsLambdaFunction",
    functionArn?: string,
  ): SecurityHubFindingsImportedEvent => ({
    version: "0",
    id: "12345678-1234-1234-1234-123456789012",
    "detail-type": "Security Hub Findings - Imported",
    source: "aws.securityhub",
    account: mockAccountID,
    time: "2022-12-01T00:00:00Z",
    region: mockRegion,
    resources: [],
    detail: {
      findings: [
        {
          AwsAccountId: mockAccountID,
          CompanyName: "Personal",
          Compliance: {
            RelatedRequirements: ["AWS Data Perimeter Guidelines"],
            Status: "FAILED",
          },
          CreatedAt: "2022-12-01T00:00:00Z",
          Description: "Lambda function is not configured to run in a VPC",
          FindingProviderFields: {
            Severity: {
              Label: "HIGH",
              Normalized: 70,
            },
            Types: [
              "Software and Configuration Checks/AWS Security Best Practices",
            ],
          },
          FirstObservedAt: "2022-12-01T00:00:00Z",
          GeneratorId: generatorId,
          Id: "finding-id-12345",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
          ProductFields: {
            "aws/securityhub/CompanyName": "Personal",
            "aws/securityhub/FindingId": `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default/lambda-vpc-security-my-function11`,
            "aws/securityhub/ProductName": "Default",
            ProviderName: "TrustStack",
            ProviderVersion: "1.0",
          },
          ProductName: "Default",
          ProcessedAt: "2022-12-01T00:00:00Z",
          RecordState: "ACTIVE",
          Region: mockRegion,
          Remediation: {
            Recommendation: {
              Text: "Update the Lambda function to run in an approved VPC",
              Url: "https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html",
            },
          },
          Resources: [
            {
              Details: {
                Other: {
                  reason:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                },
              },
              Id:
                functionArn ??
                `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:test-function`,
              Partition: "aws",
              Region: mockRegion,
              Type: resourceType,
            },
          ],
          SchemaVersion: "2018-10-08",
          Severity: {
            Label: "HIGH",
            Normalized: 70,
          },
          Title: "Lambda function without proper VPC configuration",
          Types: [
            "Software and Configuration Checks/AWS Security Best Practices",
          ],
          UpdatedAt: "2022-12-01T00:00:00Z",
          Workflow: {
            Status: "NEW",
          },
          WorkflowState: "NEW",
        },
      ],
    },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should skip findings from different generators", async () => {
    const event = createSecurityHubFindingEvent("DifferentGenerator");

    await handler(event, mockContext);

    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Skipping finding from different generator",
      expect.any(Object),
    );
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should skip findings for non-Lambda resources", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
      "AwsS3Bucket",
    );

    await handler(event, mockContext);

    expect(mockLoggerInstance.info).toHaveBeenCalledWith(
      "Skipping finding for non-Lambda resource",
      expect.any(Object),
    );
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should handle findings with missing function ARN", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );
    event.detail.findings[0].Resources[0].Id = "";

    await handler(event, mockContext);

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Finding does not contain Lambda function ARN, skipping",
    );
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should handle findings with invalid function ARN", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
      "AwsLambdaFunction",
      "arn:aws:lambda:us-east-1:123456789012:",
    );

    await handler(event, mockContext);

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Could not extract function name from ARN, skipping",
      expect.objectContaining({
        functionArn: "arn:aws:lambda:us-east-1:123456789012:",
      }),
    );
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should handle case when no VPC is found", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );

    // Create a new version of the utils mock that returns empty allowedVPCIDs
    getValidatedPackageConfigMock.mockResolvedValue({
      allowedVPCIDs: [],
    });

    // Mock empty VPC response - this should trigger our "no VPC found" warning
    mockEC2ClientInstance.describeVpcs.mockResolvedValueOnce({
      Vpcs: [],
    });

    await handler(event, mockContext);

    expect(mockEC2ClientInstance.describeVpcs).toHaveBeenCalled();

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "No VPC found for remediation, skipping",
      expect.objectContaining({
        functionName: "test-function",
      }),
    );

    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenLastCalledWith({
      FindingIdentifiers: [
        {
          Id: "finding-id-12345",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
        },
      ],
      Note: {
        Text: "Could not find a suitable VPC for remediation",
        UpdatedBy: "LambdaVPCSecurityResponsiveControl",
      },
      Workflow: {
        Status: "NEW",
      },
    });
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should handle case when no subnets are found", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );

    // Mock empty subnets response
    mockEC2ClientInstance.describeSubnets.mockResolvedValueOnce({
      Subnets: [],
    });

    await handler(event, mockContext);

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "No subnets found in VPC for remediation, skipping",
      expect.any(Object),
    );
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenLastCalledWith({
      FindingIdentifiers: [
        {
          Id: "finding-id-12345",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
        },
      ],
      Note: {
        Text: "No subnets found in the VPC for remediation",
        UpdatedBy: "LambdaVPCSecurityResponsiveControl",
      },
      Workflow: {
        Status: "NEW",
      },
    });
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should handle case when no security groups are found", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );

    // Mock subnets response
    mockEC2ClientInstance.describeSubnets.mockResolvedValueOnce({
      Subnets: [
        {
          SubnetId: "subnet-12345",
          VpcId: "vpc-12345678",
          CidrBlock: "10.0.1.0/24",
          State: "available",
        },
      ],
    });

    // Mock empty security groups response
    mockEC2ClientInstance.describeSecurityGroups.mockResolvedValueOnce({
      SecurityGroups: [],
    });

    await handler(event, mockContext);

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "No security groups found in VPC for remediation, skipping",
      expect.any(Object),
    );
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenLastCalledWith({
      FindingIdentifiers: [
        {
          Id: "finding-id-12345",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
        },
      ],
      Note: {
        Text: "No security groups found in the VPC for remediation",
        UpdatedBy: "LambdaVPCSecurityResponsiveControl",
      },
      Workflow: {
        Status: "NEW",
      },
    });
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).not.toHaveBeenCalled();
  });

  test("should successfully update Lambda function with VPC configuration", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );

    // Mock subnets response
    mockEC2ClientInstance.describeSubnets.mockResolvedValueOnce({
      Subnets: [
        {
          SubnetId: "subnet-12345",
          VpcId: "vpc-12345678",
          CidrBlock: "10.0.1.0/24",
          State: "available",
        },
        {
          SubnetId: "subnet-67890",
          VpcId: "vpc-12345678",
          CidrBlock: "10.0.2.0/24",
          State: "available",
        },
      ],
    });

    // Mock security groups response
    mockEC2ClientInstance.describeSecurityGroups.mockResolvedValueOnce({
      SecurityGroups: [
        {
          GroupId: "sg-12345",
          GroupName: "default",
          Description: "Default security group",
          VpcId: "vpc-12345678",
        },
      ],
    });

    // Mock successful Lambda update
    mockLambdaClientInstance.updateFunctionConfiguration.mockResolvedValueOnce(
      {},
    );

    // Mock successful finding update
    mockSecurityHubClientInstance.batchUpdateFindings.mockResolvedValueOnce(
      {} as BatchUpdateFindingsCommandOutput,
    );

    await handler(event, mockContext);

    // Verify Lambda function was updated with correct VPC configuration
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).toHaveBeenCalledWith({
      FunctionName: "test-function",
      VpcConfig: {
        SubnetIds: ["subnet-12345", "subnet-67890"],
        SecurityGroupIds: ["sg-12345"],
      },
    });

    // Verify Security Hub finding was updated as resolved
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenLastCalledWith({
      FindingIdentifiers: [
        {
          Id: "finding-id-12345",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
        },
      ],
      Note: {
        Text: "Lambda function updated to use VPC: vpc-12345678",
        UpdatedBy: "LambdaVPCSecurityResponsiveControl",
      },
      Workflow: {
        Status: "RESOLVED",
      },
    });
  });

  test("should handle Lambda update failure", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );

    // Mock subnets response
    mockEC2ClientInstance.describeSubnets.mockResolvedValueOnce({
      Subnets: [
        {
          SubnetId: "subnet-12345",
          VpcId: "vpc-12345678",
          CidrBlock: "10.0.1.0/24",
          State: "available",
        },
      ],
    });

    // Mock security groups response
    mockEC2ClientInstance.describeSecurityGroups.mockResolvedValueOnce({
      SecurityGroups: [
        {
          GroupId: "sg-12345",
          GroupName: "default",
          Description: "Default security group",
          VpcId: "vpc-12345678",
        },
      ],
    });

    // Mock Lambda update failure
    const updateError = new Error("Resource not found");
    mockLambdaClientInstance.updateFunctionConfiguration.mockRejectedValueOnce(
      updateError,
    );

    await handler(event, mockContext);

    // Verify error was logged
    expect(mockLoggerInstance.error).toHaveBeenCalledWith(
      "Failed to update Lambda function VPC configuration",
      expect.objectContaining({
        error: "Resource not found",
      }),
    );

    // Verify Security Hub finding was updated with error
    expect(
      mockSecurityHubClientInstance.batchUpdateFindings,
    ).toHaveBeenLastCalledWith({
      FindingIdentifiers: [
        {
          Id: "finding-id-12345",
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
        },
      ],
      Note: {
        Text: "Failed to update Lambda function: Resource not found",
        UpdatedBy: "LambdaVPCSecurityResponsiveControl",
      },
      Workflow: {
        Status: "NEW",
      },
    });
  });

  test("should use VPC from config when available", async () => {
    const event = createSecurityHubFindingEvent(
      "LambdaVPCSecurityDetectiveControl",
    );

    // Mock subnets response
    mockEC2ClientInstance.describeSubnets.mockResolvedValueOnce({
      Subnets: [
        {
          SubnetId: "subnet-12345",
          VpcId: "vpc-12345678",
          CidrBlock: "10.0.1.0/24",
          State: "available",
        },
      ],
    });

    // Mock security groups response
    mockEC2ClientInstance.describeSecurityGroups.mockResolvedValueOnce({
      SecurityGroups: [
        {
          GroupId: "sg-12345",
          GroupName: "default",
          Description: "Default security group",
          VpcId: "vpc-12345678",
        },
      ],
    });

    // Mock successful Lambda update
    mockLambdaClientInstance.updateFunctionConfiguration.mockResolvedValueOnce(
      {},
    );

    // Mock successful finding update
    mockSecurityHubClientInstance.batchUpdateFindings.mockResolvedValueOnce(
      {} as BatchUpdateFindingsCommandOutput,
    );

    await handler(event, mockContext);

    // Verify describeVpcs was not called since we have allowedVPCIDs in config
    expect(mockEC2ClientInstance.describeVpcs).not.toHaveBeenCalled();

    // Verify Lambda function was updated with correct VPC configuration
    expect(
      mockLambdaClientInstance.updateFunctionConfiguration,
    ).toHaveBeenCalledWith({
      FunctionName: "test-function",
      VpcConfig: {
        SubnetIds: ["subnet-12345"],
        SecurityGroupIds: ["sg-12345"],
      },
    });
  });
});
