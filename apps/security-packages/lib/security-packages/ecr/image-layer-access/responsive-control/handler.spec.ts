import { beforeAll, describe, jest, test } from "@jest/globals";
import type { Context } from "aws-lambda";
import { produce } from "immer";
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

const mockIAMClientInstance = {
  putUserPolicy: jest.fn(),
};

// Setup mocks before imports
jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

jest.unstable_mockModule("@aws-sdk/client-iam", () => ({
  IAM: jest.fn().mockImplementation(() => mockIAMClientInstance),
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

describe("ECR Image Layer Access Responsive Control Handler", () => {
  const mockAccountID = "123456789012";
  const mockRegion = "eu-west-1";
  const mockContext = {} as Context;

  const mockEvent: SecurityHubFindingsImportedEvent = {
    version: "0",
    id: "7e55b3fe-f28e-71bf-97a5-b5442c1dd392",
    "detail-type": "Security Hub Findings - Imported",
    source: "aws.securityhub",
    account: mockAccountID,
    time: "2025-04-20T10:49:35Z",
    region: mockRegion,
    resources: [
      `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default/ecr-batchgetimage-a1b2c3d4-e5f6-7890-1234-567890abcdef`,
    ],
    detail: {
      findings: [
        {
          ProductArn: `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default`,
          Types: [
            "Software and Configuration Checks/AWS Security Best Practices",
          ],
          Description:
            "An unauthorized ECR BatchGetImage API call was detected, which could potentially be used for unauthorized access to ECR images.",
          Compliance: {
            Status: "WARNING",
            RelatedRequirements: ["AWS Data Perimeter Guidelines"],
          },
          ProductName: "Default",
          FirstObservedAt: "2025-04-20T10:49:28.950Z",
          CreatedAt: "2025-04-20T10:49:28.950Z",
          CompanyName: "Personal",
          FindingProviderFields: {
            Types: [
              "Software and Configuration Checks/AWS Security Best Practices",
            ],
            Severity: {
              Normalized: 40,
              Label: "MEDIUM",
            },
          },
          ProductFields: {
            ProviderName: "TrustStack",
            ProviderVersion: "1.0",
            "aws/securityhub/FindingId": `arn:aws:securityhub:${mockRegion}:${mockAccountID}:product/${mockAccountID}/default/ecr-batchgetimage-a1b2c3d4-e5f6-7890-1234-567890abcdef`,
            "aws/securityhub/ProductName": "Default",
            "aws/securityhub/CompanyName": "Personal",
          },
          Remediation: {
            Recommendation: {
              Text: "Review this access to ensure it is legitimate and in accordance with your security policies. Consider implementing preventative controls for ECR image access.",
            },
          },
          SchemaVersion: "2018-10-08",
          GeneratorId: "ECRImageLayerAccessMonitor",
          RecordState: "ACTIVE",
          Title: "Unauthorized ECR BatchGetImage API Call Detected",
          Workflow: {
            Status: "NEW",
          },
          Severity: {
            Normalized: 40,
            Label: "MEDIUM",
          },
          UpdatedAt: "2025-04-20T10:49:28.950Z",
          WorkflowState: "NEW",
          AwsAccountId: mockAccountID,
          Region: mockRegion,
          Id: "ecr-batchgetimage-a1b2c3d4-e5f6-7890-1234-567890abcdef",
          Resources: [
            {
              Partition: "aws",
              Type: "AwsEcrRepository",
              Details: {
                AwsEcrRepository: {
                  RepositoryName: "truststack-e2e-test-repository",
                  Arn: `arn:aws:ecr:${mockRegion}:${mockAccountID}:repository/truststack-e2e-test-repository`,
                },
                Other: {
                  imageIds: "latest",
                  identityType: "AssumedRole",
                  identityName: "AWSControlTowerExecution",
                  sourceIp: "ecr.amazonaws.com",
                  principalArn: `arn:aws:sts::${mockAccountID}:assumed-role/AWSControlTowerExecution/botocore-session-1745143439`,
                  eventTime: "2025-04-20T10:49:23Z",
                },
              },
              Region: mockRegion,
              Id: `arn:aws:ecr:${mockRegion}:${mockAccountID}:repository/truststack-e2e-test-repository`,
              Tags: {
                Project: "TrustStack",
                SubComponent: "ECSService",
                CostCenter: "CostCenter",
                Terraform: "true",
                Component: "OperationalConsole",
                "cmdb-system": "cmdb-system",
                AppName: "Automated Call Processing",
              },
            },
          ],
          ProcessedAt: "2025-04-20T10:49:29.917Z",
        },
      ],
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should revoke permissions for an unauthorized IAM user", async () => {
    const event = produce(mockEvent, (draft) => {
      draft.detail.findings[0].Resources[0].Details.Other.identityType =
        "IAMUser";
      draft.detail.findings[0].Resources[0].Details.Other.identityName =
        "unauthorized-user";
      draft.detail.findings[0].Resources[0].Details.Other.principalArn = `arn:aws:iam::${mockAccountID}:user/unauthorized-user`;
    });

    await handler(event, mockContext);

    expect(mockIAMClientInstance.putUserPolicy).toHaveBeenCalledWith({
      UserName: "unauthorized-user",
      PolicyName: "ECRLayerAccessEmergencyDeny",
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      PolicyDocument: expect.anything(),
    });
  });

  it("should skip if the identity type is an assumed role", async () => {
    await handler(mockEvent, mockContext);

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
      "Manual review required for assumed role",
      {
        arn: `arn:aws:sts::${mockAccountID}:assumed-role/AWSControlTowerExecution/botocore-session-1745143439`,
      },
    );
    expect(mockIAMClientInstance.putUserPolicy).not.toHaveBeenCalled();
  });
});
