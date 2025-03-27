import type { Context } from "aws-lambda";
import type { CloudFormationHookEvent } from "../../../../../../../types/cfn-hooks";
import type { AWS_Lambda_Function } from "../../../../../../../types/cfn-resources/aws-lambda-function";
import type { AWS_SNS_Subscription } from "../../../../../../../types/cfn-resources/aws-sns-subscription";
import { handler } from "./handler";

describe("CloudFormation Hook Handler for SNS Subscription Endpoints", () => {
  // Mock Lambda context
  const mockContext: Context = {
    callbackWaitsForEmptyEventLoop: false,
    functionName: "test-function",
    functionVersion: "1",
    invokedFunctionArn:
      "arn:aws:lambda:us-east-1:123456789012:function:test-function",
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

  // Helper function to create CloudFormation hook event
  const createHookEvent = (
    resourceLogicalId: string,
    resourceType: string,
    resourceProperties: Record<string, unknown>,
  ): CloudFormationHookEvent => {
    return {
      clientRequestToken: "mock-request-token",
      awsAccountId: "123456789012",
      stackId:
        "arn:aws:cloudformation:us-east-1:123456789012:stack/test-stack/1234567890",
      changeSetId: null,
      hookTypeName: "TestHook::ValidateSnsSubscription",
      hookTypeVersion: "1.0.0",
      hookModel: {
        LambdaFunction:
          "arn:aws:lambda:us-east-1:123456789012:function:validate-sns-subscription",
      },
      actionInvocationPoint: "CREATE_PRE_PROVISION",
      requestData: {
        targetName: resourceType,
        targetType: resourceType,
        targetLogicalId: resourceLogicalId,
        targetModel: {
          resourceProperties: resourceProperties,
          previousResourceProperties: null,
        },
      },
      requestContext: {
        invocation: 1,
        callbackContext: null,
      },
    };
  };

  // Test case for a valid SNS subscription with trusted email endpoint
  test("should return SUCCESS for SNS subscription with trusted email endpoint", async () => {
    const event = createHookEvent(
      "MyEmailSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "email",
        Endpoint: "user@example.com",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe("SNS subscription validation passed");
  });

  // Test case for an invalid SNS subscription with untrusted email endpoint
  test("should return FAILURE for SNS subscription with untrusted email endpoint", async () => {
    const event = createHookEvent(
      "MyEmailSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "email",
        Endpoint: "user@untrusted-domain.com",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("validation failed");
    expect(result.message).toContain("untrusted email domain");
  });

  // Test case for a valid SNS subscription with trusted HTTP endpoint
  test("should return SUCCESS for SNS subscription with trusted HTTP endpoint", async () => {
    const event = createHookEvent(
      "MyHttpSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "https",
        Endpoint: "https://api.example.com/sns-endpoint",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe("SNS subscription validation passed");
  });

  // Test case for an invalid SNS subscription with untrusted HTTP endpoint
  test("should return FAILURE for SNS subscription with untrusted HTTP endpoint", async () => {
    const event = createHookEvent(
      "MyHttpSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "https",
        Endpoint: "https://api.untrusted-domain.com/sns-endpoint",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("validation failed");
    expect(result.message).toContain("untrusted HTTP domain");
  });

  // Test case for a valid SNS subscription with trusted AWS service protocol
  test("should return SUCCESS for SNS subscription with trusted AWS service protocol", async () => {
    const event = createHookEvent(
      "MySqsSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "sqs",
        Endpoint: "arn:aws:sqs:us-east-1:123456789012:MyQueue",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe("SNS subscription validation passed");
  });

  // Test case for an invalid SNS subscription with missing Protocol
  test("should return FAILURE for SNS subscription with missing Protocol", async () => {
    const event = createHookEvent(
      "MyInvalidSubscription",
      "AWS::SNS::Subscription",
      {
        // Missing Protocol
        Endpoint: "user@example.com",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as unknown as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("validation failed");
    expect(result.message).toContain("does not have Protocol defined");
  });

  // Test case for an invalid SNS subscription with missing Endpoint
  test("should return FAILURE for SNS subscription with missing Endpoint", async () => {
    const event = createHookEvent(
      "MyInvalidSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "email",
        // Missing Endpoint
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("validation failed");
    expect(result.message).toContain("does not have Endpoint defined");
  });

  // Test case for an invalid SNS subscription with invalid email format
  test("should return FAILURE for SNS subscription with invalid email format", async () => {
    const event = createHookEvent(
      "MyInvalidSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "email",
        Endpoint: "invalid-email-format",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("validation failed");
    expect(result.message).toContain("invalid email format");
  });

  // Test case for an invalid SNS subscription with invalid URL format
  test("should return FAILURE for SNS subscription with invalid URL format", async () => {
    const event = createHookEvent(
      "MyInvalidSubscription",
      "AWS::SNS::Subscription",
      {
        Protocol: "https",
        Endpoint: "invalid-url-format",
        TopicArn: "arn:aws:sns:us-east-1:123456789012:MyTopic",
      } as AWS_SNS_Subscription.SubscriptionResourceType,
    );

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("validation failed");
    expect(result.message).toContain("invalid URL format");
  });

  // Test case for non-SNS resources
  test("should return SUCCESS for non-SNS resources", async () => {
    const event = createHookEvent("MyLambdaFunction", "AWS::Lambda::Function", {
      FunctionName: "my-function",
      Runtime: "nodejs18.x",
      Handler: "index.handler",
      Code: {
        S3Bucket: "my-code-bucket",
        S3Key: "function.zip",
      },
      Role: "my-function-role",
    } as AWS_Lambda_Function.FunctionResourceType);

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe("Not a SNS subscription");
  });

  // Test case for empty resources - this should be handled by the updated handler that accepts CloudFormationResourcePreProvisionHookEvent
  test("should return SUCCESS for non CREATE_PRE_PROVISION action", async () => {
    const event: CloudFormationHookEvent = {
      clientRequestToken: "mock-request-token",
      awsAccountId: "123456789012",
      stackId:
        "arn:aws:cloudformation:us-east-1:123456789012:stack/test-stack/1234567890",
      changeSetId: null,
      hookTypeName: "TestHook::ValidateSnsSubscription",
      hookTypeVersion: "1.0.0",
      hookModel: {
        LambdaFunction:
          "arn:aws:lambda:us-east-1:123456789012:function:validate-sns-subscription",
      },
      actionInvocationPoint: "UPDATE_PRE_PROVISION",
      requestData: {
        targetName: "SomeOtherResource",
        targetType: "AWS::SomeOther::Resource",
        targetLogicalId: "SomeResource",
        targetModel: {
          resourceProperties: {},
          previousResourceProperties: null,
        },
      },
      requestContext: {
        invocation: 1,
        callbackContext: null,
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe("Not a CREATE_PRE_PROVISION event");
  });
});
