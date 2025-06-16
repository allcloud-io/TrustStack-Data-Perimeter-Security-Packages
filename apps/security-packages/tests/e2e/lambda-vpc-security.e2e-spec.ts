import {
  type CreateFunctionCommandInput,
  Lambda,
  type UpdateFunctionConfigurationCommandInput,
  type UpdateFunctionConfigurationCommandOutput,
} from "@aws-sdk/client-lambda";
import {
  type AwsSecurityFinding,
  SecurityHub,
} from "@aws-sdk/client-securityhub";
import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { validateEnvironmentVariables } from "@trust-stack/utils";
import { getSSMParameterValue, waitFor } from "./utils";

const lambda = new Lambda({});
const securityHub = new SecurityHub({});

async function waitForDetectiveControlToDetectViolation({
  functionARN,
  functionName,
}: {
  functionARN: string;
  functionName: string;
}): Promise<AwsSecurityFinding | undefined> {
  return waitFor({
    timeout: 5 * 60_000, // 5 minutes
    interval: 10_000, // 10 seconds
    condition: async () => {
      const findings = await securityHub.getFindings({
        Filters: {
          GeneratorId: [
            {
              Value: "LambdaVPCSecurityDetectiveControl",
              Comparison: "EQUALS",
            },
          ],
          ResourceId: [
            {
              Value: functionARN,
              Comparison: "EQUALS",
            },
          ],
        },
      });

      return findings.Findings?.find((finding) =>
        finding.Resources?.some(
          (resource) =>
            resource.Details?.AwsLambdaFunction?.FunctionName === functionName,
        ),
      );
    },
  });
}

async function verifyFunctionHasVPCConfiguration({
  functionName,
}: {
  functionName: string;
}): Promise<void> {
  const functionConfig = await lambda.getFunctionConfiguration({
    FunctionName: functionName,
  });

  expect(functionConfig.VpcConfig?.VpcId).toBeDefined();
  expect(functionConfig.VpcConfig?.SubnetIds).toBeDefined();
  expect(functionConfig.VpcConfig?.SecurityGroupIds).toBeDefined();
}

async function verifyFunctionHasNoVPCConfiguration({
  functionName,
}: {
  functionName: string;
}): Promise<void> {
  const functionConfig = await lambda.getFunctionConfiguration({
    FunctionName: functionName,
  });

  expect(Boolean(functionConfig.VpcConfig?.VpcId)).toBe(false);
}

/**
 * Helper function to generate unique function names
 */
function generateFunctionName(): string {
  const timestamp = Date.now();
  const randomNum = Math.random();
  const randomString = randomNum.toString(36).substring(2, 9);
  return `test-vpc-function-${timestamp.toString()}-${randomString}`;
}

async function readSharedSSMParameters() {
  const assetsBucketName = await getSSMParameterValue(
    "/trust-stack/assets-bucket/name",
  );

  // Get existing test Lambda function ARN (this one has VPC config)
  const existingFunctionARN = await getSSMParameterValue(
    "/trust-stack/e2e-tests/security-packages/lambda-vpc-security/lambda-function-arn",
  );

  // Get Lambda role ARN for creating test functions
  const lambdaRoleARN = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-role-arn",
  );

  // Get security group ID for VPC functions
  const securityGroupID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-security-group-id",
  );

  // Get authorized VPC ID
  const authorizedVPCID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-vpc-id",
  );

  // Get private subnet IDs
  const privateSubnetIDs = await Promise.all([
    getSSMParameterValue("/trust-stack/e2e-tests/lambda-subnet-id-1"),
    getSSMParameterValue("/trust-stack/e2e-tests/lambda-subnet-id-2"),
  ]);

  return {
    assetsBucketName,
    existingFunctionARN,
    lambdaRoleARN,
    securityGroupID,
    authorizedVPCID,
    privateSubnetIDs,
  };
}

async function createLambdaFunction(
  props: {
    functionName: string;
    lambdaRoleARN: string;
    assetsBucketName: string;
    buildHash: string;
  },
  createFunctionOptions: Omit<
    CreateFunctionCommandInput,
    "FunctionName" | "Role" | "Code"
  >,
) {
  return await lambda.createFunction({
    FunctionName: props.functionName,
    Runtime: "nodejs22.x",
    Role: props.lambdaRoleARN,
    Handler: "index.handler",
    Code: {
      S3Bucket: props.assetsBucketName,
      S3Key: `${props.buildHash}/trust-stack/security-packages/lambda-vpc-security/proactive-control/lambda.zip`,
    },
    ...createFunctionOptions,
  });
}

async function updateLambdaFunction(
  props: {
    functionName: string;
  },
  updateFunctionConfigurationOptions: Omit<
    UpdateFunctionConfigurationCommandInput,
    "FunctionName"
  >,
): Promise<UpdateFunctionConfigurationCommandOutput | undefined> {
  return waitFor({
    timeout: 5 * 60_000, // 5 minutes
    interval: 10_000, // 10 seconds
    condition: async () => {
      return await lambda
        .updateFunctionConfiguration({
          FunctionName: props.functionName,
          ...updateFunctionConfigurationOptions,
        })
        .catch((error: unknown) => {
          if (
            error instanceof Error &&
            error.name === "ResourceConflictException"
          ) {
            return undefined;
          }
          throw error;
        });
    },
  });
}

async function cleanUpTestFunctions({
  functionNames,
}: {
  functionNames: string[];
}): Promise<void> {
  for (const functionName of functionNames) {
    try {
      await lambda.deleteFunction({
        FunctionName: functionName,
      });
    } catch (error: unknown) {
      if (
        !(error instanceof Error && error.name === "ResourceNotFoundException")
      ) {
        console.warn(`Failed to delete function ${functionName}:`, error);
      }
    }
  }
}

jest.setTimeout(1 * 60 * 60 * 1_000); // 1 hour

describe("Lambda VPC Security - E2E Tests", () => {
  let assetsBucketName: string;
  let buildHash: string;
  let existingFunctionARN: string;
  let existingFunctionName: string;
  let lambdaRoleARN: string;
  let securityGroupID: string;
  let privateSubnetIDs: string[];

  beforeAll(async () => {
    const env = validateEnvironmentVariables(["BUILD_HASH"]);
    buildHash = env.BUILD_HASH;

    ({
      assetsBucketName,
      existingFunctionARN,
      lambdaRoleARN,
      securityGroupID,
      privateSubnetIDs,
    } = await readSharedSSMParameters());

    // Extract function name from ARN
    const functionNameRegex = /:function:([^:]+)/;
    const functionNameMatch = functionNameRegex.exec(existingFunctionARN);
    if (!functionNameMatch) {
      throw new Error("Could not extract function name from ARN");
    }
    existingFunctionName = functionNameMatch[1];
  });

  describe("Compliant Lambda functions", () => {
    const createdFunctions: string[] = [];

    afterAll(async () => {
      await cleanUpTestFunctions({
        functionNames: createdFunctions,
      });
    });

    it("should allow Lambda function with proper VPC configuration", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function with VPC configuration
      const createResult = await createLambdaFunction(
        {
          functionName,
          lambdaRoleARN,
          assetsBucketName,
          buildHash,
        },
        {
          VpcConfig: {
            SubnetIds: privateSubnetIDs,
            SecurityGroupIds: [securityGroupID],
          },
        },
      );

      const functionARN = createResult.FunctionArn;
      if (!functionARN) {
        throw new Error("Function ARN not returned from createFunction");
      }

      // Wait to see if detective control creates a finding (it shouldn't)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN,
        functionName,
      });

      // Verify no Security Hub findings were created for this compliant function
      expect(finding).toBeUndefined();

      // Verify the function still has VPC configuration
      await verifyFunctionHasVPCConfiguration({
        functionName,
      });
    });

    it("should not flag existing compliant Lambda function", async () => {
      // Use the existing test function that already has VPC configuration
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN: existingFunctionARN,
        functionName: existingFunctionName,
      });

      // Verify no Security Hub findings were created
      expect(finding).toBeUndefined();

      // Verify the function has VPC configuration
      await verifyFunctionHasVPCConfiguration({
        functionName: existingFunctionName,
      });
    });

    it("should allow Lambda function update that maintains VPC configuration", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function with VPC configuration
      await createLambdaFunction(
        {
          functionName,
          lambdaRoleARN,
          assetsBucketName,
          buildHash,
        },
        {
          VpcConfig: {
            SubnetIds: privateSubnetIDs,
            SecurityGroupIds: [securityGroupID],
          },
        },
      );

      // Update the function configuration (keeping VPC config)

      const updateResult = await updateLambdaFunction(
        {
          functionName,
        },
        {
          Timeout: 60, // Change timeout but keep VPC config
          VpcConfig: {
            SubnetIds: privateSubnetIDs,
            SecurityGroupIds: [securityGroupID],
          },
        },
      );

      expect(updateResult).toBeDefined();

      const functionARN = updateResult?.FunctionArn;
      if (!functionARN) {
        throw new Error(
          "Function ARN not returned from updateFunctionConfiguration",
        );
      }

      // Wait to see if detective control creates a finding (it shouldn't)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN,
        functionName,
      });

      // Verify no Security Hub findings were created
      expect(finding).toBeUndefined();

      // Verify the function still has VPC configuration
      await verifyFunctionHasVPCConfiguration({
        functionName,
      });
    });
  });

  describe("Non-compliant Lambda functions", () => {
    const createdFunctions: string[] = [];

    afterAll(async () => {
      await cleanUpTestFunctions({
        functionNames: createdFunctions,
      });
    });

    it("should detect Lambda function created without VPC configuration", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function without VPC configuration

      const createFunctionResult = await createLambdaFunction(
        {
          functionName,
          lambdaRoleARN,
          assetsBucketName,
          buildHash,
        },
        {
          // No VpcConfig specified
        },
      );

      const functionARN = createFunctionResult.FunctionArn;
      if (!functionARN) {
        throw new Error("Function ARN not returned from createFunction");
      }

      // Wait for detective control to detect the violation and create a Security Hub finding
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN,
        functionName,
      });

      expect(finding).toBeDefined();
      expect(finding?.Title).toBe(
        "Lambda function without proper VPC configuration",
      );
      expect(finding?.Description).toBe(
        "Lambda function is not configured to run in a VPC",
      );
      expect(finding?.Severity?.Label).toBe("HIGH");

      // Verify finding details
      expect(finding?.Resources?.[0]?.Id).toBe(functionARN);
      expect(
        finding?.Resources?.[0]?.Details?.AwsLambdaFunction?.FunctionName,
      ).toBe(functionName);
      expect(finding?.Resources?.[0]?.Details?.Other?.reason).toBe(
        "Lambda function is not configured to run in a VPC",
      );

      // Verify the function indeed has no VPC configuration
      await verifyFunctionHasNoVPCConfiguration({
        functionName,
      });

      // Note: This package doesn't have responsive control, so the function won't be automatically remediated
      // The finding should remain in NEW status
      expect(finding?.Workflow?.Status).toBe("NEW");
    });

    it("should detect Lambda function updated to remove VPC configuration", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // First create Lambda function with VPC configuration
      await createLambdaFunction(
        {
          functionName,
          lambdaRoleARN,
          assetsBucketName,
          buildHash,
        },
        {
          VpcConfig: {
            SubnetIds: privateSubnetIDs,
            SecurityGroupIds: [securityGroupID],
          },
        },
      );

      // Verify it has VPC configuration initially
      await verifyFunctionHasVPCConfiguration({
        functionName,
      });

      // Update the function to remove VPC configuration

      const updateResult = await updateLambdaFunction(
        {
          functionName,
        },
        {
          Timeout: 60,
          VpcConfig: {
            SubnetIds: [],
            SecurityGroupIds: [],
          },
        },
      );

      expect(updateResult).toBeDefined();

      const functionARN = updateResult?.FunctionArn;
      if (!functionARN) {
        throw new Error(
          "Function ARN not returned from updateFunctionConfiguration",
        );
      }

      // Wait for detective control to detect the violation
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN,
        functionName,
      });

      expect(finding).toBeDefined();
      expect(finding?.Title).toBe(
        "Lambda function without proper VPC configuration",
      );
      expect(finding?.Description).toBe(
        "Lambda function is not configured to run in a VPC",
      );
      expect(finding?.Severity?.Label).toBe("HIGH");

      // Verify the function now has no VPC configuration
      await verifyFunctionHasNoVPCConfiguration({
        functionName,
      });
    });

    it("should handle Lambda function with exclusion tag", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function without VPC configuration but with exclusion tag
      const createResult = await createLambdaFunction(
        {
          functionName,
          lambdaRoleARN,
          assetsBucketName,
          buildHash,
        },
        {
          Tags: {
            "ts:exclude": "LambdaVPCSecurity",
          },
          // No VpcConfig specified
        },
      );

      const functionARN = createResult.FunctionArn;
      if (!functionARN) {
        throw new Error("Function ARN not returned from createFunction");
      }

      // Wait to see if detective control creates a finding (it shouldn't due to exclusion tag)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN,
        functionName,
      });

      // Verify no Security Hub findings were created due to exclusion tag
      expect(finding).toBeUndefined();

      // Verify the function has no VPC configuration (but is excluded from checks)
      await verifyFunctionHasNoVPCConfiguration({
        functionName,
      });
    });

    it("should handle Lambda function with ALL exclusion tag", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function without VPC configuration but with ALL exclusion tag
      const createResult = await createLambdaFunction(
        {
          functionName,
          lambdaRoleARN,
          assetsBucketName,
          buildHash,
        },
        {
          Tags: {
            "ts:exclude": "ALL",
          },
          // No VpcConfig specified
        },
      );

      const functionARN = createResult.FunctionArn;
      if (!functionARN) {
        throw new Error("Function ARN not returned from createFunction");
      }

      // Wait to see if detective control creates a finding (it shouldn't due to ALL exclusion tag)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionARN,
        functionName,
      });

      // Verify no Security Hub findings were created due to ALL exclusion tag
      expect(finding).toBeUndefined();

      // Verify the function has no VPC configuration (but is excluded from all checks)
      await verifyFunctionHasNoVPCConfiguration({
        functionName,
      });
    });
  });
});
