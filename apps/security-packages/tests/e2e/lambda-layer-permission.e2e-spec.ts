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
  layerVersionARN,
  statementID,
}: {
  layerVersionARN: string;
  statementID: string;
}): Promise<AwsSecurityFinding | undefined> {
  return waitFor({
    timeout: 5 * 60_000,
    interval: 10_000,
    condition: async () => {
      const findings = await securityHub.getFindings({
        Filters: {
          GeneratorId: [
            {
              Value: "LambdaLayerPermissionSecurityDetectiveControl",
              Comparison: "EQUALS",
            },
          ],
          ResourceId: [
            {
              Value: layerVersionARN,
              Comparison: "EQUALS",
            },
          ],
        },
      });

      return findings.Findings?.find((finding) =>
        finding.Resources?.some(
          (resource) => resource.Details?.Other?.StatementId === statementID,
        ),
      );
    },
  });
}

async function waitForResponsiveControlToRemediateViolation(
  findingID: string,
): Promise<AwsSecurityFinding | undefined> {
  return waitFor({
    timeout: 2 * 60_000,
    interval: 5_000,
    condition: async () => {
      const updatedFindings = await securityHub.getFindings({
        Filters: {
          Id: [
            {
              Value: findingID,
              Comparison: "EQUALS",
            },
          ],
        },
      });

      const resolvedFinding = updatedFindings.Findings?.[0];
      return resolvedFinding?.Workflow?.Status === "RESOLVED"
        ? resolvedFinding
        : undefined;
    },
  });
}

async function verifyPermissionWasRemoved({
  layerName,
  layerVersionNumber,
  statementID,
}: {
  layerName: string;
  layerVersionNumber: number;
  statementID: string;
}): Promise<void> {
  let policyString: string | undefined;

  try {
    const getLayerVersionPolicyResult = await lambda.getLayerVersionPolicy({
      LayerName: layerName,
      VersionNumber: layerVersionNumber,
    });
    policyString = getLayerVersionPolicyResult.Policy;
  } catch (error: unknown) {
    if (
      !(error instanceof Error && error.name === "ResourceNotFoundException")
    ) {
      throw error;
    }
  }

  if (!policyString) {
    return;
  }

  const policyDocument = JSON.parse(policyString) as PolicyDocument;
  const statements = policyDocument.Statement;
  const statement = statements.find((stmt) => stmt.Sid === statementID);

  expect(statement).toBeUndefined();
}

/**
 * Helper function to generate unique statement IDs
 */
function generateStatementID(): string {
  const timestamp = Date.now();
  const randomNum = Math.random();
  const randomString = randomNum.toString(36).substring(2, 9);
  return `test-statement-${timestamp.toString()}-${randomString}`;
}

// Helper types for Lambda policy document

type PolicyStatement = {
  Sid: string;
  Principal: string | { AWS: string };
  Condition?: {
    StringEquals?: {
      "aws:PrincipalOrgID"?: string;
    };
  };
};

type PolicyDocument = {
  Statement: PolicyStatement[];
};

async function readSharedSSMParameters() {
  // Get layer version ARN
  const layerVersionARN = await getSSMParameterValue(
    "/trust-stack/e2e-tests/security-packages/lambda-layer-permission/lambda-layer-version-arn",
  );

  // Get trusted account ID
  const trustedAccountID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/trusted-account-id",
  );

  // Get trusted organization ID
  const trustedOrgID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/trusted-org-id",
  );

  // Get untrusted account ID
  const untrustedAccountID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/untrusted-account-id",
  );

  // Get untrusted organization ID
  const untrustedOrgID = await getSSMParameterValue(
    "/trust-stack/e2e-tests/untrusted-org-id",
  );

  return {
    layerVersionARN,
    trustedAccountID,
    trustedOrgID,
    untrustedAccountID,
    untrustedOrgID,
  };
}

async function cleanUpPermissions({
  layerName,
  layerVersionNumber,
  statementIDs,
}: {
  layerName: string;
  layerVersionNumber: number;
  statementIDs: string[];
}): Promise<void> {
  let policyString: string | undefined;

  try {
    const getLayerVersionPolicyResult = await lambda.getLayerVersionPolicy({
      LayerName: layerName,
      VersionNumber: layerVersionNumber,
    });
    policyString = getLayerVersionPolicyResult.Policy;
  } catch (error: unknown) {
    if (
      !(error instanceof Error && error.name === "ResourceNotFoundException")
    ) {
      throw error;
    }
  }

  if (!policyString) {
    return;
  }

  const policyDocument = JSON.parse(policyString) as PolicyDocument;
  const statements = policyDocument.Statement;

  // Clean up any permissions created during tests
  for (const statement of statements) {
    if (statement.Sid.startsWith("test-statement-")) {
      await lambda.removeLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statement.Sid,
      });
    }
  }

  // Reset created statements
  statementIDs.length = 0;
}

jest.setTimeout(1 * 60 * 60 * 1_000);

describe("Lambda Layer Permission - E2E Tests", () => {
  let layerVersionARN: string;
  let layerVersionNumber: number;
  let layerName: string;
  let trustedAccountID: string;
  let trustedOrgID: string;
  let untrustedAccountID: string;
  let untrustedOrgID: string;

  beforeAll(async () => {
    ({
      layerVersionARN,
      trustedAccountID,
      trustedOrgID,
      untrustedAccountID,
      untrustedOrgID,
    } = await readSharedSSMParameters());

    const layerNameRegex =
      /^arn:aws:lambda:.*:.*:layer:(?<layerName>.+):(?<layerVersionNumber>\d+)$/;

    if (!layerNameRegex.test(layerVersionARN)) {
      throw new Error("Invalid layer ARN");
    }

    const match = layerNameRegex.exec(layerVersionARN);
    if (!match) {
      throw new Error("Invalid layer ARN");
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    layerName = match.groups!.layerName;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    layerVersionNumber = parseInt(match.groups!.layerVersionNumber);
  });

  describe("Compliant layer permissions", () => {
    const createdStatements: string[] = [];

    afterAll(async () => {
      await cleanUpPermissions({
        layerName,
        layerVersionNumber,
        statementIDs: createdStatements,
      });
    });

    it("should allow permission granted to a trusted account", async () => {
      const statementID = generateStatementID();
      createdStatements.push(statementID);

      // Add layer permission to trusted account
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: trustedAccountID,
      });

      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      // Verify no Security Hub findings were created for this permission
      expect(finding).toBeUndefined();

      // Verify the permission still exists (wasn't removed by responsive control)
      const policy = await lambda.getLayerVersionPolicy({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
      });

      if (!policy.Policy) {
        throw new Error("Layer policy not found");
      }

      const policyDocument = JSON.parse(policy.Policy) as PolicyDocument;
      const statement = policyDocument.Statement.find(
        (stmt) => stmt.Sid === statementID,
      );
      expect(statement).toBeDefined();
      const principalWithAWS = statement?.Principal as { AWS: string };
      expect(principalWithAWS.AWS).toBe(
        `arn:aws:iam::${trustedAccountID}:root`,
      );
    });

    it("should allow permission granted to an organization with wildcard", async () => {
      const statementID = generateStatementID();
      createdStatements.push(statementID);

      // Add layer permission with wildcard and trusted organization
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: "*",
        OrganizationId: trustedOrgID,
      });

      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      // Verify no Security Hub findings were created
      expect(finding).toBeUndefined();

      // Verify the permission exists with correct organization condition
      const policy = await lambda.getLayerVersionPolicy({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
      });

      if (!policy.Policy) {
        throw new Error("Layer policy not found");
      }

      const policyDocument = JSON.parse(policy.Policy) as PolicyDocument;
      const statement = policyDocument.Statement.find(
        (stmt) => stmt.Sid === statementID,
      );
      expect(statement).toBeDefined();
      expect(statement?.Principal).toBe("*");
      expect(statement?.Condition?.StringEquals?.["aws:PrincipalOrgID"]).toBe(
        trustedOrgID,
      );
    });

    it("should allow permission granted to a trusted root account", async () => {
      const statementID = generateStatementID();
      createdStatements.push(statementID);

      const trustedRootARN = `arn:aws:iam::${trustedAccountID}:root`;

      // Add layer permission to trusted root account
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: trustedRootARN,
      });

      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      // Verify no Security Hub findings were created
      expect(finding).toBeUndefined();

      // Verify the permission exists
      const policy = await lambda.getLayerVersionPolicy({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
      });

      if (!policy.Policy) {
        throw new Error("Layer policy not found");
      }

      const policyDocument = JSON.parse(policy.Policy) as PolicyDocument;
      const statement = policyDocument.Statement.find(
        (stmt) => stmt.Sid === statementID,
      );
      expect(statement).toBeDefined();
      const principalWithAWS = statement?.Principal as { AWS: string };
      expect(principalWithAWS.AWS).toBe(trustedRootARN);
    });
  });

  describe("Non-compliant layer permissions", () => {
    const statementIDs: string[] = [];

    afterAll(async () => {
      await cleanUpPermissions({
        layerName,
        layerVersionNumber,
        statementIDs,
      });
    });

    it("should detect and remediate permission granted to an untrusted account", async () => {
      const statementID = generateStatementID();
      statementIDs.push(statementID);

      // Add layer permission to untrusted account
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: untrustedAccountID,
      });

      // Wait for detective control to detect the violation and create a Security Hub finding
      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      expect(finding).toBeDefined();
      expect(finding?.Title).toBe(
        "Non-compliant Lambda Layer Permission Detected",
      );
      expect(finding?.Description).toContain(
        "not in the list of trusted accounts",
      );

      const resolvedFinding =
        await waitForResponsiveControlToRemediateViolation(finding?.Id!); // eslint-disable-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain

      expect(resolvedFinding).toBeDefined();

      await verifyPermissionWasRemoved({
        layerName,
        layerVersionNumber,
        statementID,
      });
    });

    it("should detect and remediate wildcard permission without organization", async () => {
      const statementID = generateStatementID();
      statementIDs.push(statementID);

      // Add wildcard permission without organization
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: "*",
        // No OrganizationId - this grants access to all AWS accounts
      });

      // Wait for detective control to detect the violation
      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      expect(finding).toBeDefined();
      expect(finding?.Description).toContain(
        "would grant access to all AWS accounts",
      );

      const resolvedFinding =
        await waitForResponsiveControlToRemediateViolation(finding?.Id!); // eslint-disable-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain

      expect(resolvedFinding).toBeDefined();

      await verifyPermissionWasRemoved({
        layerName,
        layerVersionNumber,
        statementID,
      });
    });

    it("should detect and remediate permission granted to untrusted organization", async () => {
      const statementID = generateStatementID();
      statementIDs.push(statementID);

      // Add permission with untrusted organization
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: "*",
        OrganizationId: untrustedOrgID,
      });

      // Wait for detective control to detect the violation
      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      expect(finding).toBeDefined();
      expect(finding?.Description).toContain(
        "not in the list of trusted organization IDs",
      );

      const resolvedFinding =
        await waitForResponsiveControlToRemediateViolation(finding?.Id!); // eslint-disable-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain

      expect(resolvedFinding).toBeDefined();

      await verifyPermissionWasRemoved({
        layerName,
        layerVersionNumber,
        statementID,
      });
    });

    it("should detect and remediate permission granted to untrusted root account", async () => {
      const statementID = generateStatementID();
      statementIDs.push(statementID);

      const untrustedRootARN = `arn:aws:iam::${untrustedAccountID}:root`;

      // Add permission to untrusted root account
      await lambda.addLayerVersionPermission({
        LayerName: layerName,
        VersionNumber: layerVersionNumber,
        StatementId: statementID,
        Action: "lambda:GetLayerVersion",
        Principal: untrustedRootARN,
      });

      // Wait for detective control to detect the violation
      const finding = await waitForDetectiveControlToDetectViolation({
        layerVersionARN,
        statementID,
      });

      expect(finding).toBeDefined();
      expect(finding?.Description).toContain(
        "not in the list of trusted accounts",
      );

      const resolvedFinding =
        await waitForResponsiveControlToRemediateViolation(finding?.Id!); // eslint-disable-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain

      expect(resolvedFinding).toBeDefined();

      await verifyPermissionWasRemoved({
        layerName,
        layerVersionNumber,
        statementID,
      });
    });
  });
});
