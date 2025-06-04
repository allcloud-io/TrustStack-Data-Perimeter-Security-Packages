import { beforeAll, describe, expect, jest } from "@jest/globals";
import type { LambdaLayerPermissionSecurityConfig } from "@trust-stack/schema";
import * as utils from "@trust-stack/utils";
import type { Context } from "aws-lambda";
import { produce } from "immer";
import type { CloudFormationHookEvent } from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_LayerVersionPermission } from "../../../../../../../types/cfn-resources/aws-lambda-layerversionpermission";

// Mock objects
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

describe("Lambda Layer Permission Security Proactive Control Handler", () => {
  const mockContext = {} as Context;

  const baseEvent: CloudFormationHookEvent = {
    clientRequestToken: "test-request-token",
    awsAccountId: "123456789012",
    stackId:
      "arn:aws:cloudformation:us-east-1:123456789012:stack/test-stack/1234567890",
    changeSetId: null,
    hookTypeName: "TestHook::ValidateLambdaLayerPermission",
    hookTypeVersion: "1.0.0",
    hookModel: {
      LambdaFunction:
        "arn:aws:lambda:us-east-1:123456789012:function:validate-lambda-layer-permission",
    },
    actionInvocationPoint: "CREATE_PRE_PROVISION",
    requestContext: {
      invocation: 1,
      callbackContext: null,
    },
    requestData: {
      targetName: "AWS::Lambda::LayerVersionPermission",
      targetType: "RESOURCE",
      targetLogicalId: "TestLayerPermission",
      targetModel: {
        resourceProperties: {
          Action: "lambda:GetLayerVersion",
          LayerVersionArn:
            "arn:aws:lambda:us-east-1:123456789012:layer:test-layer:1",
          Principal: "123456789012",
        } as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType,
        previousResourceProperties: null,
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
    it("should fail when configuration cannot be retrieved", async () => {
      const error = new Error("SSM parameter not found");
      getValidatedPackageConfigMock.mockRejectedValueOnce(error);

      const result = await handler(baseEvent, mockContext);

      expect(mockLoggerInstance.error).toHaveBeenCalledWith(
        "Failed to retrieve configuration from SSM Parameter Store",
        expect.objectContaining({
          error: "SSM parameter not found",
        }),
      );

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "InternalFailure",
        message: "Failed to retrieve configuration from SSM Parameter Store",
        clientRequestToken: "test-request-token",
      });
    });
  });

  describe("Trusted account validation", () => {
    it("should succeed for trusted account ID", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const result = await handler(baseEvent, mockContext);

      expect(mockLoggerInstance.info).toHaveBeenCalledWith(
        "Lambda layer permission validation succeeded",
        expect.objectContaining({
          principal: "123456789012",
        }),
      );

      expect(result).toEqual({
        hookStatus: "SUCCESS",
        message: "Lambda layer permission validation succeeded",
        clientRequestToken: "test-request-token",
      });
    });

    it("should fail for untrusted account ID", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        const props = draft.requestData.targetModel
          .resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;
        props.Principal = "999999999999";
      });

      const result = await handler(event, mockContext);

      expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
        "Invalid principal",
        expect.objectContaining({
          principal: "999999999999",
          reason: expect.stringContaining(
            "not in the list of trusted accounts",
          ),
        }),
      );

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "NonCompliant",
        message: expect.stringContaining("not in the list of trusted accounts"),
        clientRequestToken: "test-request-token",
      });
    });

    it("should succeed for trusted root account ARN", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        const props = draft.requestData.targetModel
          .resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;
        props.Principal = "arn:aws:iam::123456789012:root";
      });

      const result = await handler(event, mockContext);

      expect(result).toEqual({
        hookStatus: "SUCCESS",
        message: "Lambda layer permission validation succeeded",
        clientRequestToken: "test-request-token",
      });
    });
  });

  describe("Organization validation", () => {
    it("should succeed for wildcard with trusted organization", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        const props = draft.requestData.targetModel
          .resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;
        props.Principal = "*";
        props.OrganizationId = "o-exampleorgid";
      });

      const result = await handler(event, mockContext);

      expect(result).toEqual({
        hookStatus: "SUCCESS",
        message: "Lambda layer permission validation succeeded",
        clientRequestToken: "test-request-token",
      });
    });

    it("should fail for wildcard without organization", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        const props = draft.requestData.targetModel
          .resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;
        props.Principal = "*";
      });

      const result = await handler(event, mockContext);

      expect(mockLoggerInstance.warn).toHaveBeenCalledWith(
        "Invalid principal",
        expect.objectContaining({
          principal: "*",
          reason: expect.stringContaining(
            "without organization ID would grant access to all AWS accounts",
          ),
        }),
      );

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "NonCompliant",
        message: expect.stringContaining(
          "without organization ID would grant access to all AWS accounts",
        ),
        clientRequestToken: "test-request-token",
      });
    });

    it("should fail for untrusted organization", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        const props = draft.requestData.targetModel
          .resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;
        props.Principal = "*";
        props.OrganizationId = "o-untrustedorg";
      });

      const result = await handler(event, mockContext);

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "NonCompliant",
        message: expect.stringContaining(
          "not in the list of trusted organization IDs",
        ),
        clientRequestToken: "test-request-token",
      });
    });
  });

  describe("IAM role validation", () => {
    it("should fail for IAM role ARN", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce(defaultConfig);

      const event = produce(baseEvent, (draft) => {
        const props = draft.requestData.targetModel
          .resourceProperties as AWS_Lambda_LayerVersionPermission.LayerVersionPermissionResourceType;
        props.Principal = "arn:aws:iam::123456789012:role/SomeRole";
      });

      const result = await handler(event, mockContext);

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "NonCompliant",
        message: expect.stringContaining(
          "IAM role ARNs are not allowed for layer permissions",
        ),
        clientRequestToken: "test-request-token",
      });
    });
  });

  describe("Edge cases", () => {
    it("should handle empty trusted lists", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce({
        trustedAccountIDs: [],
        trustedOrgIDs: [],
      });

      const result = await handler(baseEvent, mockContext);

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "NonCompliant",
        message: expect.stringContaining(
          "Trusted account IDs are not configured",
        ),
        clientRequestToken: "test-request-token",
      });
    });

    it("should handle undefined configuration properties", async () => {
      getValidatedPackageConfigMock.mockResolvedValueOnce({});

      const result = await handler(baseEvent, mockContext);

      expect(result).toEqual({
        hookStatus: "FAILURE",
        errorCode: "NonCompliant",
        message: expect.stringContaining(
          "Trusted account IDs are not configured",
        ),
        clientRequestToken: "test-request-token",
      });
    });
  });
});
