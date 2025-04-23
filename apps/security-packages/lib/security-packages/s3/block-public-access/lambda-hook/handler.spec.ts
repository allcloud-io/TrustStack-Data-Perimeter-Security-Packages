import type { Context } from "aws-lambda";
import type { AWS_Lambda_Function } from "../../../../../../../types/cfn-resources/aws-lambda-function";
import type { AWS_S3_Bucket } from "../../../../../../../types/cfn-resources/aws-s3-bucket";
import type { AWS_S3_MultiRegionAccessPoint } from "../../../../../../../types/cfn-resources/aws-s3-multiregionaccesspoint";
import { handler } from "./handler";

describe("CloudFormation Hook Handler", () => {
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

  // Test case for a valid S3 bucket with Block Public Access enabled
  test("should return SUCCESS for S3 bucket with Block Public Access enabled", async () => {
    const event = {
      resources: {
        MyS3Bucket: {
          resourceType: "AWS::S3::Bucket",
          resourceProperties: {
            BucketName: "my-secure-bucket",
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
          } satisfies AWS_S3_Bucket.BucketResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe(
      "All S3 buckets have Block Public Access enabled",
    );
  });

  // Test case for an invalid S3 bucket without Block Public Access configuration
  test("should return FAILURE for S3 bucket without Block Public Access configuration", async () => {
    const event = {
      resources: {
        MyS3Bucket: {
          resourceType: "AWS::S3::Bucket",
          resourceProperties: {
            BucketName: "my-insecure-bucket",
            // Missing PublicAccessBlockConfiguration
          } satisfies AWS_S3_Bucket.BucketResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain(
      "does not have PublicAccessBlockConfiguration defined",
    );
  });

  // Test case for an invalid S3 bucket with incomplete Block Public Access configuration
  test("should return FAILURE for S3 bucket with incomplete Block Public Access configuration", async () => {
    const event = {
      resources: {
        MyS3Bucket: {
          resourceType: "AWS::S3::Bucket",
          resourceProperties: {
            BucketName: "my-partially-secure-bucket",
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              // Missing BlockPublicPolicy and RestrictPublicBuckets
            },
          } satisfies AWS_S3_Bucket.BucketResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain(
      "does not have all Block Public Access settings enabled",
    );
  });

  // Test case for a valid Multi-Region Access Point with Block Public Access enabled
  test("should return SUCCESS for Multi-Region Access Point with Block Public Access enabled", async () => {
    const event = {
      resources: {
        MyMRAP: {
          resourceType: "AWS::S3::MultiRegionAccessPoint",
          resourceProperties: {
            Name: "my-secure-mrap",
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
            Regions: [
              {
                Bucket: "my-bucket-1",
              },
              {
                Bucket: "my-bucket-2",
              },
            ],
          } satisfies AWS_S3_MultiRegionAccessPoint.MultiRegionAccessPointResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
    expect(result.message).toBe(
      "All S3 buckets have Block Public Access enabled",
    );
  });

  // Test case for an invalid Multi-Region Access Point without Block Public Access configuration
  test("should return FAILURE for Multi-Region Access Point without Block Public Access configuration", async () => {
    const event = {
      resources: {
        MyMRAP: {
          resourceType: "AWS::S3::MultiRegionAccessPoint",
          resourceProperties: {
            Name: "my-insecure-mrap",
            // Missing PublicAccessBlockConfiguration
            Regions: [
              {
                Bucket: "my-bucket-1",
              },
              {
                Bucket: "my-bucket-2",
              },
            ],
          } satisfies AWS_S3_MultiRegionAccessPoint.MultiRegionAccessPointResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain(
      "does not have PublicAccessBlockConfiguration defined",
    );
  });

  // Test case for multiple resources with mixed compliance
  test("should return FAILURE when at least one resource is non-compliant", async () => {
    const event = {
      resources: {
        SecureBucket: {
          resourceType: "AWS::S3::Bucket",
          resourceProperties: {
            BucketName: "my-secure-bucket",
            PublicAccessBlockConfiguration: {
              BlockPublicAcls: true,
              IgnorePublicAcls: true,
              BlockPublicPolicy: true,
              RestrictPublicBuckets: true,
            },
          } satisfies AWS_S3_Bucket.BucketResourceType,
        },
        InsecureBucket: {
          resourceType: "AWS::S3::Bucket",
          resourceProperties: {
            BucketName: "my-insecure-bucket",
            // Missing PublicAccessBlockConfiguration
          } satisfies AWS_S3_Bucket.BucketResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("FAILURE");
    expect(result.message).toContain("InsecureBucket");
    expect(result.message).not.toContain("SecureBucket");
  });

  // Test case for non-S3 resources
  test("should return SUCCESS for non-S3 resources", async () => {
    const event = {
      resources: {
        MyLambdaFunction: {
          resourceType: "AWS::Lambda::Function",
          resourceProperties: {
            FunctionName: "my-function",
            Runtime: "nodejs18.x",
            Handler: "index.handler",
            Code: {
              S3Bucket: "my-code-bucket",
              S3Key: "function.zip",
            },
            Role: "my-function-role",
          } satisfies AWS_Lambda_Function.FunctionResourceType,
        },
      },
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
  });

  // Test case for empty resources
  test("should return SUCCESS for empty resources", async () => {
    const event = {
      resources: {},
    };

    const result = await handler(event, mockContext);
    expect(result.hookStatus).toBe("SUCCESS");
  });
});
