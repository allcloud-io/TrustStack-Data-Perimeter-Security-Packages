import { validateLambdaPermissionPrincipal } from "./validate-lambda-permission-principal";

describe("validateLambdaPermissionPrincipal", () => {
  const trustedAccountIDs = ["111122223333", "444455556666"];
  const trustedOrgIDs = ["o-exampleorgid", "o-anotherorgid"];
  const trustedServicePrincipals = [
    "s3.amazonaws.com",
    "sns.amazonaws.com",
    "events.amazonaws.com",
  ];

  describe("Organization ID validation", () => {
    it("should reject when principal organization ID is provided but no trusted organization IDs are configured", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        principalOrgID: "o-exampleorgid",
        trustedAccountIDs,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Principal organization ID is provided but no trusted organization IDs are configured",
      });
    });

    it("should reject when principal organization ID is not in the list of trusted organization IDs", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        principalOrgID: "o-untrustedorgid",
        trustedAccountIDs,
        trustedOrgIDs,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Principal organization ID is not in the list of trusted organization IDs",
      });
    });

    it("should pass when principal organization ID is in the list of trusted organization IDs", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "sns.amazonaws.com",
        principalOrgID: "o-exampleorgid",
        sourceARN: `arn:aws:sns:us-east-1:${trustedAccountIDs[0]}:example-topic`,
        sourceAccount: trustedAccountIDs[0],
        trustedAccountIDs,
        trustedOrgIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({ isValid: true });
    });
  });

  describe("Service principal validation", () => {
    it("should reject service principals without source ARN or source account", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Source ARN or source account is required for service principals",
      });
    });

    it("should reject when trusted account IDs are not configured", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        sourceARN: "arn:aws:s3:::example-bucket",
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason: "Trusted account IDs are not configured",
      });
    });

    it("should reject when source account is not in the list of trusted accounts", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        sourceAccount: "999988887777",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Source account 999988887777 is not in the list of trusted accounts",
      });
    });

    it("should reject when source ARN account is not in the list of trusted accounts", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "sns.amazonaws.com",
        sourceARN: "arn:aws:sns:us-east-1:999988887777:example-topic",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Source account 999988887777 is not in the list of trusted accounts",
      });
    });

    it("should fail when source ARN does not contain an account ID and source account is not provided", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        sourceARN: "arn:aws:s3:::example-bucket",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Source ARN does not contain an account ID and source account is not provided",
      });
    });

    it("should pass when source account is in trusted accounts but service principals not configured", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        sourceAccount: "111122223333",
        trustedAccountIDs,
      });

      expect(result).toEqual({ isValid: true });
    });

    it("should reject when service principal is not in the list of trusted service principals", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "untrusted.amazonaws.com",
        sourceAccount: "111122223333",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Service principal untrusted.amazonaws.com is not in the list of trusted service principals",
      });
    });

    it("should pass when service principal and source account are trusted", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "s3.amazonaws.com",
        sourceAccount: "111122223333",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({ isValid: true });
    });
  });

  describe("AWS account ID validation", () => {
    it("should pass when principal organization ID is provided", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "111122223333",
        principalOrgID: trustedOrgIDs[0],
        trustedOrgIDs,
      });

      expect(result).toEqual({ isValid: true });
    });

    it("should reject when trusted account IDs are not configured", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "111122223333",
      });

      expect(result).toEqual({
        isValid: false,
        reason: "Trusted account IDs are not configured",
      });
    });

    it("should reject when AWS account ID is not in the list of trusted accounts", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "999988887777",
        trustedAccountIDs,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "AWS account ID 999988887777 is not in the list of trusted accounts",
      });
    });

    it("should pass when AWS account ID is in the list of trusted accounts", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "111122223333",
        trustedAccountIDs,
      });

      expect(result).toEqual({ isValid: true });
    });
  });

  describe("IAM Role validation", () => {
    it("should reject when trusted account IDs are not configured", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "arn:aws:iam::111122223333:role/example-role",
      });

      expect(result).toEqual({
        isValid: false,
        reason: "Trusted account IDs are not configured",
      });
    });

    it("should reject when IAM role account ID is not in the list of trusted accounts", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "arn:aws:iam::999988887777:role/example-role",
        trustedAccountIDs,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          'AWS account ID 999988887777 for IAM role "arn:aws:iam::999988887777:role/example-role" is not in the list of trusted accounts',
      });
    });

    it("should pass when IAM role account ID is in the list of trusted accounts", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "arn:aws:iam::111122223333:role/example-role",
        trustedAccountIDs,
      });

      expect(result).toEqual({ isValid: true });
    });
  });

  describe("Other principal formats", () => {
    it("should reject wildcard (*) principals", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "*",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason: "Principal * is not in a recognized format or is not allowed",
      });
    });

    it("should reject unrecognized principal formats", () => {
      const result = validateLambdaPermissionPrincipal({
        principal: "unrecognized-format",
        trustedAccountIDs,
        trustedServicePrincipals,
      });

      expect(result).toEqual({
        isValid: false,
        reason:
          "Principal unrecognized-format is not in a recognized format or is not allowed",
      });
    });
  });
});
