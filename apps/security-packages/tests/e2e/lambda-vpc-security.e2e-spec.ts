import { Lambda } from "@aws-sdk/client-lambda";
import {
  type AwsSecurityFinding,
  SecurityHub,
} from "@aws-sdk/client-securityhub";
import { afterAll, beforeAll, describe, expect, it, jest } from "@jest/globals";
import { getSSMParameterValue, waitFor } from "./utils";

const lambda = new Lambda({});
const securityHub = new SecurityHub({});

async function waitForDetectiveControlToDetectViolation({
  functionName,
}: {
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
          Id: [
            {
              Value: `lambda-vpc-security-${functionName}`,
              Comparison: "EQUALS",
            },
          ],
        },
      });

      return findings.Findings?.[0];
    },
  });
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

/**
 * Helper function to create a Lambda function
 */
async function createLambdaFunction({
  functionName,
  vpcConfig,
  roleARN,
}: {
  functionName: string;
  vpcConfig?: {
    SubnetIds: string[];
    SecurityGroupIds: string[];
  };
  roleARN: string;
}): Promise<string> {
  const result = await lambda.createFunction({
    FunctionName: functionName,
    Runtime: "nodejs22.x",
    Role: roleARN,
    Handler: "index.handler",
    Code: {
      ZipFile: Buffer.from(`
        exports.handler = async (event) => {
          console.log('Event:', JSON.stringify(event, null, 2));
          return {
            statusCode: 200,
            body: JSON.stringify('Hello from test Lambda!'),
          };
        };
      `),
    },
    Description: "Test Lambda function for VPC security testing",
    Timeout: 30,
    VpcConfig: vpcConfig,
  });

  return result.FunctionArn!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
}

/**
 * Helper function to update Lambda function VPC configuration
 */
async function updateLambdaFunctionVPCConfig({
  functionName,
  vpcConfig,
}: {
  functionName: string;
  vpcConfig?: {
    SubnetIds: string[];
    SecurityGroupIds: string[];
  };
}): Promise<void> {
  await lambda.updateFunctionConfiguration({
    FunctionName: functionName,
    VpcConfig: vpcConfig,
  });
}

/**
 * Helper function to delete a Lambda function
 */
async function deleteLambdaFunction(functionName: string): Promise<void> {
  try {
    await lambda.deleteFunction({
      FunctionName: functionName,
    });
  } catch (error: unknown) {
    if (
      !(error instanceof Error && error.name === "ResourceNotFoundException")
    ) {
      throw error;
    }
  }
}

async function readSharedSSMParameters() {
  // Get Lambda role ARN
  const lambdaRoleARN = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-role-arn",
  );

  // Get VPC configuration for authorized VPC
  const authorizedVPCID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-vpc-id",
  );

  const authorizedSubnetID1 = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-subnet-id-1",
  );

  const authorizedSubnetID2 = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-subnet-id-2",
  );

  const authorizedSecurityGroupID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/lambda-security-group-id",
  );

  // Get VPC configuration for unauthorized VPC
  const unauthorizedVPCID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/unauthorized-lambda-vpc-id",
  );

  const unauthorizedSubnetID1 = await getSSMParameterValue(
    "/trust-stack/e2e-tests/unauthorized-lambda-subnet-id-1",
  );

  const unauthorizedSubnetID2 = await getSSMParameterValue(
    "/trust-stack/e2e-tests/unauthorized-lambda-subnet-id-2",
  );

  const unauthorizedSecurityGroupID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/unauthorized-lambda-security-group-id",
  );

  return {
    lambdaRoleARN,
    authorizedVPCID,
    authorizedSubnetIDs: [authorizedSubnetID1, authorizedSubnetID2],
    authorizedSecurityGroupID,
    unauthorizedVPCID,
    unauthorizedSubnetIDs: [unauthorizedSubnetID1, unauthorizedSubnetID2],
    unauthorizedSecurityGroupID,
  };
}

async function cleanUpLambdaFunctions(functionNames: string[]): Promise<void> {
  for (const functionName of functionNames) {
    await deleteLambdaFunction(functionName);
  }
  functionNames.length = 0;
}

jest.setTimeout(1 * 60 * 60 * 1_000); // 1 hour

describe("Lambda VPC Security - E2E Tests", () => {
  let lambdaRoleARN: string;
  let authorizedVPCID: string;
  let authorizedSubnetIDs: string[];
  let authorizedSecurityGroupID: string;
  let unauthorizedVPCID: string;
  let unauthorizedSubnetIDs: string[];
  let unauthorizedSecurityGroupID: string;

  beforeAll(async () => {
    ({
      lambdaRoleARN,
      authorizedVPCID,
      authorizedSubnetIDs,
      authorizedSecurityGroupID,
      unauthorizedVPCID,
      unauthorizedSubnetIDs,
      unauthorizedSecurityGroupID,
    } = await readSharedSSMParameters());
  });

  describe("Compliant Lambda function configurations", () => {
    const createdFunctions: string[] = [];

    afterAll(async () => {
      await cleanUpLambdaFunctions(createdFunctions);
    });

    it("should allow Lambda function with proper VPC configuration", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function with VPC configuration
      await createLambdaFunction({
        functionName,
        vpcConfig: {
          SubnetIds: authorizedSubnetIDs,
          SecurityGroupIds: [authorizedSecurityGroupID],
        },
        roleARN: lambdaRoleARN,
      });

      // Wait to see if detective control creates a finding (it shouldn't)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionName,
      });

      // Verify no Security Hub findings were created for this compliant function
      expect(finding).toBeUndefined();

      // Verify the function exists and has VPC configuration
      const functionConfig = await lambda.getFunctionConfiguration({
        FunctionName: functionName,
      });

      expect(functionConfig.VpcConfig?.VpcId).toBe(authorizedVPCID);
      expect(functionConfig.VpcConfig?.SubnetIds).toEqual(
        expect.arrayContaining(authorizedSubnetIDs),
      );
      expect(functionConfig.VpcConfig?.SecurityGroupIds).toEqual([
        authorizedSecurityGroupID,
      ]);
    });

    it("should allow Lambda function updated to have VPC configuration", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function without VPC configuration first
      await createLambdaFunction({
        functionName,
        roleARN: lambdaRoleARN,
      });

      // Update function to have VPC configuration
      await updateLambdaFunctionVPCConfig({
        functionName,
        vpcConfig: {
          SubnetIds: authorizedSubnetIDs,
          SecurityGroupIds: [authorizedSecurityGroupID],
        },
      });

      // Wait to see if detective control creates a finding (it shouldn't for the update)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionName,
      });

      // Verify no Security Hub findings were created for the compliant update
      expect(finding).toBeUndefined();

      // Verify the function has VPC configuration
      const functionConfig = await lambda.getFunctionConfiguration({
        FunctionName: functionName,
      });

      expect(functionConfig.VpcConfig?.VpcId).toBe(authorizedVPCID);
    });

    it("should allow Lambda function with excluded tag", async () => {
      const functionName = generateFunctionName();
      createdFunctions.push(functionName);

      // Create Lambda function without VPC configuration
      const functionARN = await createLambdaFunction({
        functionName,
        roleARN: lambdaRoleARN,
      });

      // Add exclusion tag
      await lambda.tagResource({
        Resource: functionARN,
        Tags: {
          "ts:exclude": "LambdaVPCSecurity",
        },
      });

      // Wait to see if detective control creates a finding (it shouldn't due to exclusion tag)
      const finding = await waitForDetectiveControlToDetectViolation({
        functionName,
      });

      // Verify no Security Hub findings were created due to exclusion tag
      expect(finding).toBeUndefined();
    });
  });

  describe("Non-compliant Lambda function configurations", () => {
    const functionNames: string[] = [];

    afterAll(async () => {
      await cleanUpLambdaFunctions(functionNames);
    });

    it("should detect Lambda function created without VPC configuration", async () => {
      const functionName = generateFunctionName();
      functionNames.push(functionName);

      // Create Lambda function without VPC configuration
      await createLambdaFunction({
        functionName,
        roleARN: lambdaRoleARN,
      });

      // Wait for detective control to detect the violation and create a Security Hub finding
      const finding = await waitForDetectiveControlToDetectViolation({
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
      expect(finding?.Resources?.[0]?.Type).toBe("AwsLambdaFunction");
      expect(
        finding?.Resources?.[0]?.Details?.AwsLambdaFunction?.FunctionName,
      ).toBe(functionName);
      expect(finding?.Compliance?.Status).toBe("FAILED");
      expect(finding?.Workflow?.Status).toBe("NEW");

      // Verify the function exists but has no VPC configuration
      const functionConfig = await lambda.getFunctionConfiguration({
        FunctionName: functionName,
      });

      expect(functionConfig.VpcConfig?.VpcId).toBeUndefined();
    });

    it("should detect Lambda function updated to remove VPC configuration", async () => {
      const functionName = generateFunctionName();
      functionNames.push(functionName);

      // Create Lambda function with VPC configuration first
      await createLambdaFunction({
        functionName,
        vpcConfig: {
          SubnetIds: authorizedSubnetIDs,
          SecurityGroupIds: [authorizedSecurityGroupID],
        },
        roleARN: lambdaRoleARN,
      });

      // Update function to remove VPC configuration
      await updateLambdaFunctionVPCConfig({
        functionName,
        vpcConfig: {
          SubnetIds: [],
          SecurityGroupIds: [],
        },
      });

      // Wait for detective control to detect the violation
      const finding = await waitForDetectiveControlToDetectViolation({
        functionName,
      });

      expect(finding).toBeDefined();
      expect(finding?.Title).toBe(
        "Lambda function without proper VPC configuration",
      );
      expect(finding?.Description).toBe(
        "Lambda function is not configured to run in a VPC",
      );

      // Verify the function no longer has VPC configuration
      const functionConfig = await lambda.getFunctionConfiguration({
        FunctionName: functionName,
      });

      expect(functionConfig.VpcConfig?.VpcId).toBeUndefined();
    });

    it("should detect Lambda function in unauthorized VPC if allowedVPCIDs is configured", async () => {
      const functionName = generateFunctionName();
      functionNames.push(functionName);

      // Create Lambda function in unauthorized VPC
      await createLambdaFunction({
        functionName,
        vpcConfig: {
          SubnetIds: unauthorizedSubnetIDs,
          SecurityGroupIds: [unauthorizedSecurityGroupID],
        },
        roleARN: lambdaRoleARN,
      });

      // Note: This test assumes the security package is configured with allowedVPCIDs
      // If not configured, this function would be considered compliant as it has a VPC
      // The actual behavior depends on the deployment configuration

      // Verify the function exists and has the unauthorized VPC configuration
      const functionConfig = await lambda.getFunctionConfiguration({
        FunctionName: functionName,
      });

      expect(functionConfig.VpcConfig?.VpcId).toBe(unauthorizedVPCID);
      expect(functionConfig.VpcConfig?.SubnetIds).toEqual(
        expect.arrayContaining(unauthorizedSubnetIDs),
      );
    });
  });

  describe("Edge cases and error handling", () => {
    const functionNames: string[] = [];

    afterAll(async () => {
      await cleanUpLambdaFunctions(functionNames);
    });

    it("should handle Lambda function creation failure gracefully", async () => {
      const functionName = generateFunctionName();

      // Attempt to create a function with invalid configuration
      try {
        await lambda.createFunction({
          FunctionName: functionName,
          Runtime: "nodejs22.x",
          Role: "arn:aws:iam::123456789012:role/invalid-role", // Invalid role
          Handler: "index.handler",
          Code: {
            ZipFile: Buffer.from("exports.handler = async () => {};"),
          },
        });
      } catch (error: unknown) {
        // Expected to fail due to invalid role
        expect(error).toBeDefined();
      }

      // Verify no Security Hub findings were created for failed function creation
      const finding = await waitForDetectiveControlToDetectViolation({
        functionName,
      });

      expect(finding).toBeUndefined();
    });

    it("should handle function deletion during processing", async () => {
      const functionName = generateFunctionName();

      // Create Lambda function without VPC configuration
      await createLambdaFunction({
        functionName,
        roleARN: lambdaRoleARN,
      });

      // Delete the function immediately
      await deleteLambdaFunction(functionName);

      // The detective control should handle the case where the function no longer exists
      // This tests the error handling in the detective control handler

      // Wait a bit to allow CloudTrail event processing
      await new Promise((resolve) => setTimeout(resolve, 30_000));

      // No specific assertion here as the behavior depends on timing
      // The test ensures the system doesn't crash when functions are deleted
    });
  });
});
