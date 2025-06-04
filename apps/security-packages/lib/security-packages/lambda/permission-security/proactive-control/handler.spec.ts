import { beforeAll, describe, expect, jest } from "@jest/globals";
import type { LambdaPermissionSecurityConfig } from "@trust-stack/schema";
import * as trustStackUtils from "@trust-stack/utils";
import type { Context } from "aws-lambda";
import { produce } from "immer";
import type { CloudFormationHookEvent } from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_Permission } from "../../../../../../../types/cfn-resources/aws-lambda-permission";

const mockGetValidatedPackageConfig =
  jest.fn<() => Promise<LambdaPermissionSecurityConfig>>();

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
jest.unstable_mockModule("@trust-stack/utils", () => ({
  ...trustStackUtils,
  getValidatedPackageConfig: mockGetValidatedPackageConfig,
}));

jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

const mockAccountID = "111122223333";
const mockRegion = "eu-west-1";

const partialEventStub = {
  clientRequestToken: "123e4567-e89b-12d3-a456-426614174000",
  awsAccountId: mockAccountID,
  stackId: `arn:aws:cloudformation:${mockRegion}:${mockAccountID}:stack/TestLambdaPermissionSecurity/096dc0ff-dedd-4013-a172-b8da57ff3392`,
  changeSetId: null,
  hookTypeName: "AllCloud::TrustStack::LambdaPermissionSecurity",
  hookTypeVersion: "00000016",
  hookModel: {
    LambdaFunction: `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:LambdaPermissionSecurity-HookHandler`,
  },
  actionInvocationPoint: "CREATE_PRE_PROVISION",
  requestData: {
    targetName: "AWS::Lambda::Function",
    targetType: "AWS::Lambda::Function",
    targetLogicalId: "CompliantMultiSGLambdaFunction",
    targetModel: {
      resourceProperties: {
        FunctionName: "test-lambda-function",
        Action: "lambda:InvokeFunction",
      } as AWS_Lambda_Permission.PermissionResourceType,
      previousResourceProperties: null,
    },
  },
  requestContext: {
    invocation: 1,
    callbackContext: null,
  },
} satisfies CloudFormationHookEvent;

// Variables for dynamically imported modules
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
let handler: typeof import("./handler").handler;

// Load the handler module dynamically
beforeAll(async () => {
  const handlerModule = await import("./handler");
  handler = handlerModule.handler;
});

describe("Lambda Permission Security Proactive Control Handler", () => {
  const mockContext = {} as Context;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should pass validation for trusted AWS account", async () => {
    const trustedAWSAccountID = "111122223333";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedAccountIDs: [trustedAWSAccountID],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        trustedAWSAccountID;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("SUCCESS");
    expect(mockLoggerInstance.info).toHaveBeenLastCalledWith(
      "Lambda permission validation succeeded",
      { principal: trustedAWSAccountID },
    );
  });

  it("should fail validation for untrusted AWS account", async () => {
    const untrustedAWSAccountID = "999988887777";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedAccountIDs: ["111122223333"],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        untrustedAWSAccountID;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.errorCode).toEqual("NonCompliant");
    expect(result.message).toEqual(
      "AWS account ID 999988887777 is not in the list of trusted accounts",
    );

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith("Invalid principal", {
      principal: untrustedAWSAccountID,
      reason:
        "AWS account ID 999988887777 is not in the list of trusted accounts",
    });
  });

  it("should fail validation for service principal without source ARN or source account", async () => {
    const trustedServicePrincipal = "s3.amazonaws.com";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedServicePrincipals: [trustedServicePrincipal],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        trustedServicePrincipal;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual(
      "Source ARN or source account is required for service principals",
    );
    expect(mockLoggerInstance.warn).toHaveBeenLastCalledWith(
      "Invalid principal",
      {
        principal: trustedServicePrincipal,
        reason:
          "Source ARN or source account is required for service principals",
      },
    );
  });

  it("should pass validation for trusted service principal", async () => {
    const trustedServicePrincipal = "s3.amazonaws.com";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedAccountIDs: ["111122223333"],
      trustedServicePrincipals: [trustedServicePrincipal],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        trustedServicePrincipal;
      draft.requestData.targetModel.resourceProperties.SourceAccount =
        "111122223333";
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("SUCCESS");
    expect(result.message).toEqual("Lambda permission validation succeeded");
    expect(mockLoggerInstance.info).toHaveBeenLastCalledWith(
      "Lambda permission validation succeeded",
      { principal: trustedServicePrincipal },
    );
  });

  it("should fail validation for service principal with untrusted source account", async () => {
    const trustedServicePrincipal = "s3.amazonaws.com";
    const untrustedSourceAccount = "999988887777";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedAccountIDs: ["111122223333"],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        trustedServicePrincipal;
      draft.requestData.targetModel.resourceProperties.SourceAccount =
        untrustedSourceAccount;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual(
      `Source account ${untrustedSourceAccount} is not in the list of trusted accounts`,
    );

    expect(mockLoggerInstance.warn).toHaveBeenCalledWith("Invalid principal", {
      principal: trustedServicePrincipal,
      reason: `Source account ${untrustedSourceAccount} is not in the list of trusted accounts`,
    });
  });

  it("should fail validation for untrusted service principal", async () => {
    const untrustedServicePrincipal = "lambda.amazonaws.com";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedAccountIDs: ["111122223333"],
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        untrustedServicePrincipal;
      draft.requestData.targetModel.resourceProperties.SourceAccount =
        "111122223333";
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual(
      "Service principal lambda.amazonaws.com is not in the list of trusted service principals",
    );

    expect(mockLoggerInstance.warn).toHaveBeenLastCalledWith(
      "Invalid principal",
      {
        principal: untrustedServicePrincipal,
        reason:
          "Service principal lambda.amazonaws.com is not in the list of trusted service principals",
      },
    );
  });

  it("should fail validation for service principal when no trusted accounts are configured", async () => {
    const trustedServicePrincipal = "s3.amazonaws.com";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedServicePrincipals: [trustedServicePrincipal],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        trustedServicePrincipal;
      draft.requestData.targetModel.resourceProperties.SourceAccount =
        "111122223333";
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual("Trusted account IDs are not configured");
  });

  it("should fail validation for wildcard principal", async () => {
    const wildcardPrincipal = "*";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedServicePrincipals: ["s3.amazonaws.com"],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        wildcardPrincipal;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual(
      "Principal * is not in a recognized format or is not allowed",
    );

    expect(mockLoggerInstance.warn).toHaveBeenLastCalledWith(
      "Invalid principal",
      {
        principal: wildcardPrincipal,
        reason: "Principal * is not in a recognized format or is not allowed",
      },
    );
  });

  it("should fail validation for untrusted PrincipalOrgID", async () => {
    const iamUserPrincipal = "arn:aws:iam::111122223333:user/test-user";
    const untrustedPrincipalOrgID = "o-yyyyyyyyyy";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedOrgIDs: ["o-xxxxxxxxxx"],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        iamUserPrincipal;
      draft.requestData.targetModel.resourceProperties.PrincipalOrgID =
        untrustedPrincipalOrgID;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual(
      "Principal organization ID is not in the list of trusted organization IDs",
    );

    expect(mockLoggerInstance.warn).toHaveBeenLastCalledWith(
      "Invalid principal",
      {
        principal: iamUserPrincipal,
        reason:
          "Principal organization ID is not in the list of trusted organization IDs",
      },
    );
  });

  it("should fail validation for PrincipalOrgID when no trusted organization IDs are configured", async () => {
    const iamUserPrincipal = "arn:aws:iam::111122223333:user/test-user";
    const untrustedPrincipalOrgID = "o-yyyyyyyyyy";

    mockGetValidatedPackageConfig.mockResolvedValue({
      trustedOrgIDs: [],
    });

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        iamUserPrincipal;
      draft.requestData.targetModel.resourceProperties.PrincipalOrgID =
        untrustedPrincipalOrgID;
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.message).toEqual(
      "Principal organization ID is provided but no trusted organization IDs are configured",
    );
  });

  it("should fail when configuration retrieval fails", async () => {
    mockGetValidatedPackageConfig.mockRejectedValue(
      new Error("Configuration not found"),
    );

    const testEvent = produce(partialEventStub, (draft) => {
      draft.requestData.targetModel.resourceProperties.Principal =
        "111122223333";
    });

    const result = await handler(testEvent, mockContext);

    expect(result.hookStatus).toEqual("FAILURE");
    expect(result.errorCode).toEqual("InternalFailure");
    expect(result.message).toEqual(
      "Failed to retrieve configuration from SSM Parameter Store",
    );

    expect(mockLoggerInstance.error).toHaveBeenLastCalledWith(
      "Failed to retrieve configuration from SSM Parameter Store",
      {
        error: "Configuration not found",
      },
    );
  });
});
