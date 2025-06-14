/* eslint-disable @typescript-eslint/consistent-type-imports */
import { jest } from "@jest/globals";
import { Context } from "aws-lambda";
import { produce } from "immer";
import type { CloudFormationHookEvent } from "../../../../../../../types/cfn-hooks";

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

// Setup mocks before imports
jest.unstable_mockModule("@aws-lambda-powertools/logger", () => ({
  Logger: jest.fn().mockImplementation(() => mockLoggerInstance),
  injectLambdaContext: jest.fn().mockImplementation(() => {
    return jest.fn().mockImplementation((handler) => handler);
  }),
}));

const mockAccountID = "123456789012";
const mockRegion = "eu-west-1";

const event = {
  clientRequestToken: "123e4567-e89b-12d3-a456-426614174000",
  awsAccountId: mockAccountID,
  stackId: `arn:aws:cloudformation:${mockRegion}:${mockAccountID}:stack/TestLambdaCompliant/096dc0ff-dedd-4013-a172-b8da57ff3392`,
  changeSetId: null,
  hookTypeName: "AllCloud::TrustStack::LambdaVPCSecurity",
  hookTypeVersion: "00000016",
  hookModel: {
    LambdaFunction: `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:LambdaVPCSecurity-HookHandler`,
  },
  actionInvocationPoint: "CREATE_PRE_PROVISION",
  requestData: {
    targetName: "AWS::Lambda::Function",
    targetType: "AWS::Lambda::Function",
    targetLogicalId: "CompliantMultiSGLambdaFunction",
    targetModel: {
      resourceProperties: {
        Role: `arn:aws:iam::${mockAccountID}:role/TrustStackE2ETestLambda`,
        FunctionName: "compliant-multi-sg-lambda-function",
        MemorySize: 128,
        Runtime: "python3.9",
        Description:
          "A compliant Lambda function with multiple security groups",
        VpcConfig: {
          SecurityGroupIds: ["sg-0abcdef1234567890", "sg-0fedcba9876543210"],
          SubnetIds: ["subnet-0123456789abcdef0", "subnet-0fedcba9876543210"],
        },
        Timeout: 30,
        Handler: "index.handler",
        Code: {
          ZipFile:
            "def handler(event, context):\n    print('Event:', event)\n    return {\n        'statusCode': 200,\n        'body': 'Hello from Lambda!'\n    }\n",
        },
        Tags: [
          {
            Value: "SecurityCompliance",
            Key: "Purpose",
          },
        ],
      },
      previousResourceProperties: null,
    },
  },
  requestContext: {
    invocation: 1,
    callbackContext: null,
  },
} satisfies CloudFormationHookEvent;

let handler: typeof import("./handler").handler;

beforeAll(async () => {
  const handlerModule = await import("./handler");

  handler = handlerModule.handler;
});

describe("CloudFormation Hook Handler for Lambda VPC Security", () => {
  // Mock Lambda context
  const mockContext: Context = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: "test-function",
    functionVersion: "1",
    invokedFunctionArn: `arn:aws:lambda:${mockRegion}:${mockAccountID}:function:test-function`,
    memoryLimitInMB: "128",
    awsRequestId: "00000000-0000-0000-0000-000000000000",
    logGroupName: "/aws/lambda/test-function",
    logStreamName: "2023/01/01/[$LATEST]00000000000000000000000000000000",
    getRemainingTimeInMillis: () => 3000,
    done: (_error?: Error, _result?: unknown) => {
      /* Legacy callback function */
    },
    fail: (_error: Error | string) => {
      /* Legacy callback function */
    },
    succeed: (_messageOrObject: unknown) => {
      /* Legacy callback function */
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return SUCCESS for Lambda function with VPC config", async () => {
    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe("Lambda function has valid VPC configuration");
  });

  it("should return FAILURE for Lambda function without VPC config", async () => {
    const eventWithoutVPCConfig = produce(event, (draft) => {
      // @ts-expect-error - We're modifying a constant object
      draft.requestData.targetModel.resourceProperties.VpcConfig = undefined;
    });

    const result = await handler(eventWithoutVPCConfig, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toBe(
      "Lambda function must have a VpcConfig property",
    );
  });
});
