import type { BatchImportFindingsResponse } from "@aws-sdk/client-securityhub";
import * as securityHub from "@aws-sdk/client-securityhub";
import { beforeAll, describe, expect, jest } from "@jest/globals";
import type { LambdaLayerPermissionSecurityConfig } from "@trust-stack/schema";
import * as utils from "@trust-stack/utils";
import type { Context, EventBridgeEvent } from "aws-lambda";
import { produce } from "immer";
import type { LambdaAddLayerVersionPermissionEventDetail } from "../../../../../../../types/cloudtrail-events";

// Mock objects
const mockSecurityHubClient = {
  batchImportFindings: jest.fn<() => Promise<BatchImportFindingsResponse>>(),
};

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

const getValidatedPackageConfigMock =
  jest.fn<() => Promise<LambdaLayerPermissionSecurityConfig>>();

// Mock modules
jest.unstable_mockModule("@aws-sdk/client-securityhub", () => ({
  ...securityHub,
  SecurityHub: jest.fn().mockImplementation(() => mockSecurityHubClient),
}));

jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
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

beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("Lambda Layer Permission Security Detective Control Handler", () => {
  const mockContext = {} as Context;

  const baseEvent: EventBridgeEvent<
    "AWS API Call via CloudTrail",
    LambdaAddLayerVersionPermissionEventDetail
  > = {
    version: "0",
    id: "test-id",
    "detail-type": "AWS API Call via CloudTrail",
    source: "aws.lambda",
    account: "123456789012",
    time: "2024-01-01T00:00:00Z",
    region: "us-east-1",
    resources: [],
    detail: {
      eventVersion: "1.11",
      eventSource: "lambda.amazonaws.com",
      eventName: "AddLayerVersionPermission20181031",
      eventType: "AwsApiCall",
      managementEvent: true,
      recipientAccountId: "463470966597",
      eventCategory: "Management",
      eventTime: "2024-01-01T00:00:00Z",
      eventID: "test-event-id",
      requestID: "test-request-id",
      readOnly: false,
      awsRegion: "us-east-1",
      userIdentity: {
        accountId: "123456789012",
        type: "AssumedRole",
        principalId: "AROAWX2IFW5CVXCPUN3WO",
        arn: "arn:aws:sts::123456789012:assumed-role/AWSControlTowerExecution/aws-sdk-js-1748943273662",
        accessKeyId: "ASIAWX2IFW5C5ER7HJMN",
        sessionContext: {
          sessionIssuer: {
            type: "Role",
            principalId: "AROAWX2IFW5CVXCPUN3WO",
            arn: "arn:aws:iam::123456789012:role/AWSControlTowerExecution",
            accountId: "123456789012",
            userName: "AWSControlTowerExecution",
          },
          attributes: {
            creationDate: "2024-01-01T00:00:00Z",
            mfaAuthenticated: "false",
          },
        },
      },
      userAgent:
        "aws-sdk-js/3.758.0 ua/2.1 os/darwin#24.5.0 lang/js md/nodejs#22.14.0 api/lambda#3.758.0 m/E,T,i,o",
      sourceIPAddress: "192.0.2.123",
      requestParameters: {
        layerName: "test-layer",
        versionNumber: 1,
        principal: "123456789012",
        statementId: "test-statement",
        action: "lambda:GetLayerVersion",
      },
      responseElements: {
        statement: "{}",
        revisionId: "test-revision",
      },
      tlsDetails: {
        tlsVersion: "TLSv1.3",
        cipherSuite: "TLS_AES_128_GCM_SHA256",
        clientProvidedHostHeader: "lambda.eu-west-1.amazonaws.com",
      },
    },
  };

  const defaultConfig: LambdaLayerPermissionSecurityConfig = {
    trustedAccountIDs: ["123456789012", "987654321098"],
    trustedOrgIDs: ["o-exampleorgid"],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Configuration retrieval", () => {
    it("should handle configuration retrieval failure", async () => {
      getValidatedPackageConfigMock.mockRejectedValueOnce(
        new Error("SSM parameter not found"),
      );

      await expect(handler(baseEvent, mockContext)).rejects.toThrow(
        "SSM parameter not found",
      );

      expect(mockLoggerInstance.error).toHaveBeenCalledWith(
        "Failed to retrieve configuration from SSM Parameter Store",
        expect.objectContaining({
          error: "SSM parameter not found",
        }),
      );

      expect(mockSecurityHubClient.batchImportFindings).not.toHaveBeenCalled();
    });
  });

  describe("Compliant permissions", () => {
    it("should not create finding for trusted account", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      await handler(baseEvent, mockContext);

      expect(mockLoggerInstance.info).toHaveBeenCalledWith(
        "Layer permission is compliant",
        expect.objectContaining({
          principal: "123456789012",
        }),
      );

      expect(mockSecurityHubClient.batchImportFindings).not.toHaveBeenCalled();
    });

    it("should not create finding for trusted organization with wildcard", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        draft.detail.requestParameters.principal = "*";
        draft.detail.requestParameters.organizationId = "o-exampleorgid";
      });

      await handler(event, mockContext);

      expect(mockLoggerInstance.info).toHaveBeenCalledWith(
        "Layer permission is compliant",
        expect.objectContaining({
          principal: "*",
        }),
      );

      expect(mockSecurityHubClient.batchImportFindings).not.toHaveBeenCalled();
    });
  });

  describe("Non-compliant permissions", () => {
    it("should create finding for untrusted account", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);
      mockSecurityHubClient.batchImportFindings.mockResolvedValueOnce({
        FailedCount: 0,
        SuccessCount: 1,
      });

      const event = produce(baseEvent, (draft) => {
        draft.detail.requestParameters.principal = "999999999999";
      });

      await handler(event, mockContext);

      expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
        "Detected non-compliant layer permission",
        expect.objectContaining({
          principal: "999999999999",
          reason: expect.stringContaining(
            "not in the list of trusted accounts",
          ),
        }),
      );

      expect(mockSecurityHubClient.batchImportFindings).toHaveBeenCalledWith({
        Findings: [
          expect.objectContaining({
            Title: "Non-compliant Lambda Layer Permission Detected",
            GeneratorId: "LambdaLayerPermissionSecurityDetectiveControl",
            Resources: [
              expect.objectContaining({
                Type: "AwsLambdaLayerVersion",
                Id: "arn:aws:lambda:us-east-1:123456789012:layer:test-layer:1",
              }),
            ],
          }),
        ],
      });
    });

    it("should create finding for wildcard without organization", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);
      mockSecurityHubClient.batchImportFindings.mockResolvedValueOnce({
        FailedCount: 0,
        SuccessCount: 1,
      });

      const event = produce(baseEvent, (draft) => {
        draft.detail.requestParameters.principal = "*";
      });

      await handler(event, mockContext);

      expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
        "Detected non-compliant layer permission",
        expect.objectContaining({
          principal: "*",
          reason:
            "Principal '*' without organization ID would grant access to all " +
            "AWS accounts",
        }),
      );

      expect(mockSecurityHubClient.batchImportFindings).toHaveBeenCalled();
    });

    it("should handle Security Hub import failure", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);
      const error = new Error("Security Hub error");
      mockSecurityHubClient.batchImportFindings.mockRejectedValueOnce(error);

      const event = produce(baseEvent, (draft) => {
        draft.detail.requestParameters.principal = "999999999999";
      });

      await expect(handler(event, mockContext)).rejects.toThrow(
        "Security Hub error",
      );

      expect(mockLoggerInstance.error).toHaveBeenCalledWith(
        "Failed to import Security Hub finding",
        expect.objectContaining({
          error: "Security Hub error",
        }),
      );
    });
  });

  describe("Edge cases", () => {
    it("should handle empty configuration", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce({});
      mockSecurityHubClient.batchImportFindings.mockResolvedValueOnce({
        FailedCount: 0,
        SuccessCount: 1,
      });

      await handler(baseEvent, mockContext);

      expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
        "Detected non-compliant layer permission",
        expect.objectContaining({
          reason: expect.stringContaining(
            "Trusted account IDs are not configured",
          ),
        }),
      );
    });

    it("should handle event with IAM role principal", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);
      mockSecurityHubClient.batchImportFindings.mockResolvedValueOnce({
        FailedCount: 0,
        SuccessCount: 1,
      });

      const event = produce(baseEvent, (draft) => {
        draft.detail.requestParameters.principal =
          "arn:aws:iam::123456789012:role/SomeRole";
      });

      await handler(event, mockContext);

      expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
        "Detected non-compliant layer permission",
        expect.objectContaining({
          reason: expect.stringContaining(
            "IAM role ARNs are not allowed for layer permissions",
          ),
        }),
      );
    });
  });
});
