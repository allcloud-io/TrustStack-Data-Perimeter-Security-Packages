import type { RemoveLayerVersionPermissionCommandOutput } from "@aws-sdk/client-lambda";
import type {
  AwsSecurityFinding,
  BatchUpdateFindingsCommandOutput,
} from "@aws-sdk/client-securityhub";
import { beforeAll, describe, expect, jest } from "@jest/globals";
import type { Context, EventBridgeEvent } from "aws-lambda";
import type { SecurityHubFindingsImportedEventDetail } from "../../../../../../../types/aws-security-hub-events";

// Mock objects
const mockLambdaClient = {
  removeLayerVersionPermission:
    jest.fn<
      () => Promise<
        Omit<RemoveLayerVersionPermissionCommandOutput, "$metadata">
      >
    >(),
};

const mockSecurityHubClient = {
  batchUpdateFindings:
    jest.fn<
      () => Promise<Omit<BatchUpdateFindingsCommandOutput, "$metadata">>
    >(),
};

const mockLoggerInstance = {
  addContext: jest.fn(),
  appendKeys: jest.fn(),
  clearBuffer: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  logEventIfEnabled: jest.fn(),
  refreshSampleRateCalculation: jest.fn(),
  removeKeys: jest.fn(),
  resetKeys: jest.fn(),
  warn: jest.fn(),
};

// Mock modules
jest.unstable_mockModule("@aws-sdk/client-lambda", () => ({
  Lambda: jest.fn().mockImplementation(() => mockLambdaClient),
}));

jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  SecurityHub: jest.fn().mockImplementation(() => mockSecurityHubClient),
  BatchUpdateFindingsCommand: jest.fn().mockImplementation((args) => ({
    args,
  })),
  WorkflowStatus: {
    NEW: "NEW",
    RESOLVED: "RESOLVED",
    SUPPRESSED: "SUPPRESSED",
  },
}));

jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

// Variables for dynamically imported modules
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let handler: typeof import("./handler").handler;

beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("Lambda Layer Permission Security Responsive Control Handler", () => {
  const mockContext = {} as Context;

  const baseFinding = {
    ProductArn:
      "arn:aws:securityhub:us-east-1:123456789012:product/123456789012/default",
    Types: ["Software and Configuration Checks/AWS Security Best Practices"],
    Description: "Non-compliant layer permission",
    Compliance: {
      Status: "FAILED",
      RelatedRequirements: [],
    },
    ProductName: "TrustStack",
    FirstObservedAt: "2024-01-01T00:00:00Z",
    CreatedAt: "2024-01-01T00:00:00Z",
    CompanyName: "AWS",
    FindingProviderFields: {
      Types: [],
      Severity: {
        Label: "HIGH",
      },
    },
    UserDefinedFields: {},
    ProductFields: {},
    Remediation: {
      Recommendation: {
        Text: "Remove the layer permission",
      },
    },
    SchemaVersion: "2018-10-08",
    GeneratorId: "LambdaLayerPermissionSecurityDetectiveControl",
    RecordState: "ACTIVE",
    Title: "Non-compliant Lambda Layer Permission Detected",
    Workflow: {
      Status: "NEW",
    },
    Severity: {
      Normalized: 70,
      Label: "HIGH",
    },
    UpdatedAt: "2024-01-01T00:00:00Z",
    WorkflowState: "NEW",
    AwsAccountId: "123456789012",
    Region: "us-east-1",
    Id: "arn:aws:lambda:us-east-1:123456789012:layer:test-layer:1/test-statement",
    Resources: [
      {
        Partition: "aws",
        Type: "AwsLambdaLayerVersion",
        Details: {
          Other: {
            LayerName: "test-layer",
            VersionNumber: "1",
            StatementId: "test-statement",
            Principal: "999999999999",
            OrganizationId: "N/A",
          },
        },
        Region: "us-east-1",
        Id: "arn:aws:lambda:us-east-1:123456789012:layer:test-layer:1",
      },
    ],
    ProcessedAt: "2024-01-01T00:00:00Z",
  } satisfies AwsSecurityFinding;

  const baseEvent = {
    version: "0",
    id: "test-id",
    "detail-type": "Security Hub Findings - Imported",
    source: "aws.securityhub",
    account: "123456789012",
    time: "2024-01-01T00:00:00Z",
    region: "us-east-1",
    resources: [],
    detail: {
      findings: [
        baseFinding as unknown as SecurityHubFindingsImportedEventDetail["findings"][number],
      ],
    },
  } satisfies EventBridgeEvent<
    "Security Hub Findings - Imported",
    SecurityHubFindingsImportedEventDetail
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Remediation", () => {
    it("should successfully remove layer permission and update finding", async () => {
      mockLambdaClient.removeLayerVersionPermission.mockResolvedValueOnce({});
      mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
        ProcessedFindings: [],
        UnprocessedFindings: [],
      });

      await handler(baseEvent, mockContext);

      expect(
        mockLambdaClient.removeLayerVersionPermission,
      ).toHaveBeenCalledWith({
        LayerName: "test-layer",
        VersionNumber: 1,
        StatementId: "test-statement",
      });

      expect(mockLoggerInstance.info).toHaveBeenCalledWith(
        "Successfully removed layer permission",
      );

      expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith(
        expect.objectContaining({
          FindingIdentifiers: [
            {
              Id: baseFinding.Id,
              ProductArn: baseFinding.ProductArn,
            },
          ],
          Workflow: {
            Status: "RESOLVED",
          },
        }),
      );
    });

    it("should handle already removed permissions", async () => {
      class ResourceNotFoundException extends Error {
        constructor(message: string) {
          super(message);
          this.name = "ResourceNotFoundException";
        }
      }

      mockLambdaClient.removeLayerVersionPermission.mockRejectedValueOnce(
        new ResourceNotFoundException("No policy is associated"),
      );
      mockSecurityHubClient.batchUpdateFindings.mockResolvedValueOnce({
        ProcessedFindings: [],
        UnprocessedFindings: [],
      });

      await handler(baseEvent, mockContext);

      expect(mockLoggerInstance.info).toHaveBeenCalledWith(
        "Permission already removed",
      );

      expect(mockSecurityHubClient.batchUpdateFindings).toHaveBeenCalledWith(
        expect.objectContaining({
          FindingIdentifiers: [
            {
              Id: baseFinding.Id,
              ProductArn: baseFinding.ProductArn,
            },
          ],
          Note: {
            Text: "Permission already removed",
            UpdatedBy: "TrustStack",
          },
          Workflow: {
            Status: "RESOLVED",
          },
        }),
      );
    });

    it("should handle remediation failure", async () => {
      mockLambdaClient.removeLayerVersionPermission.mockRejectedValueOnce(
        new Error("Access denied"),
      );

      await expect(handler(baseEvent, mockContext)).rejects.toThrow(
        "Access denied",
      );

      expect(mockLoggerInstance.error).toHaveBeenCalledWith(
        "Failed to remove layer permission",
        expect.objectContaining({
          error: "Access denied",
        }),
      );

      expect(mockSecurityHubClient.batchUpdateFindings).not.toHaveBeenCalled();
    });
  });

  describe("Edge cases", () => {
    it("should skip findings without layer information", async () => {
      const event: EventBridgeEvent<
        "Security Hub Findings - Imported",
        SecurityHubFindingsImportedEventDetail
      > = {
        ...baseEvent,
        detail: {
          findings: [
            {
              ...baseFinding,
              Resources: [
                {
                  ...baseFinding.Resources[0],
                  Details: {
                    Other: {
                      // Missing required fields
                    },
                  },
                },
              ],
            },
          ] as unknown as SecurityHubFindingsImportedEventDetail["findings"],
        },
      };

      await expect(handler(event, mockContext)).rejects.toThrow(
        "Finding does not contain required layer information",
      );

      expect(mockLoggerInstance.error).toHaveBeenCalledWith(
        "Finding does not contain required layer information",
      );

      expect(
        mockLambdaClient.removeLayerVersionPermission,
      ).not.toHaveBeenCalled();
    });

    it("should skip findings with wrong resource type", async () => {
      const event: EventBridgeEvent<
        "Security Hub Findings - Imported",
        SecurityHubFindingsImportedEventDetail
      > = {
        ...baseEvent,
        detail: {
          findings: [
            {
              ...baseFinding,
              Resources: [
                {
                  ...baseFinding.Resources[0],
                  Type: "AwsLambdaFunction",
                },
              ],
            },
          ] as unknown as SecurityHubFindingsImportedEventDetail["findings"],
        },
      };

      await expect(handler(event, mockContext)).rejects.toThrow(
        'Finding does not contain expected resource type "AwsLambdaLayerVersion"',
      );

      expect(
        mockLambdaClient.removeLayerVersionPermission,
      ).not.toHaveBeenCalled();
    });

    it("should handle Security Hub update failure gracefully", async () => {
      mockLambdaClient.removeLayerVersionPermission.mockResolvedValueOnce({});
      mockSecurityHubClient.batchUpdateFindings.mockRejectedValueOnce(
        new Error("Security Hub error"),
      );

      await expect(handler(baseEvent, mockContext)).rejects.toThrow(
        "Security Hub error",
      );

      expect(mockLoggerInstance.error).toHaveBeenCalledWith(
        "Failed to update Security Hub finding",
        expect.objectContaining({
          error: "Security Hub error",
        }),
      );

      // Should still have completed the remediation
      expect(mockLambdaClient.removeLayerVersionPermission).toHaveBeenCalled();
    });
  });
});
