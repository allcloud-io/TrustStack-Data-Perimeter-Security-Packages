import { describe, expect, it } from "@jest/globals";
import { validateLayerPermissionPrincipal } from "./validate-layer-permission-principal";

describe("validateLayerPermissionPrincipal", () => {
  describe("Account ID validation", () => {
    it("should accept trusted account ID", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "123456789012",
        trustedAccountIDs: ["123456789012", "987654321098"],
      });
      expect(result).toEqual({ isValid: true });
    });

    it("should reject untrusted account ID", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "999999999999",
        trustedAccountIDs: ["123456789012", "987654321098"],
      });
      expect(result).toEqual({
        isValid: false,
        reason:
          "AWS account ID 999999999999 is not in the list of trusted accounts",
      });
    });

    it("should reject when no trusted accounts configured", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "123456789012",
        trustedAccountIDs: [],
      });
      expect(result).toEqual({
        isValid: false,
        reason: "Trusted account IDs are not configured",
      });
    });
  });

  describe("Organization validation", () => {
    it("should accept wildcard with trusted organization", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "*",
        organizationID: "o-exampleorgid",
        trustedOrgIDs: ["o-exampleorgid"],
      });
      expect(result).toEqual({ isValid: true });
    });

    it("should reject wildcard without organization", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "*",
        trustedOrgIDs: ["o-exampleorgid"],
      });
      expect(result).toEqual({
        isValid: false,
        reason:
          "Principal '*' without organization ID would grant access to all AWS accounts",
      });
    });

    it("should reject untrusted organization", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "*",
        organizationID: "o-untrustedorg",
        trustedOrgIDs: ["o-exampleorgid"],
      });
      expect(result).toEqual({
        isValid: false,
        reason:
          "Organization ID is not in the list of trusted organization IDs",
      });
    });
  });

  describe("IAM account root ARN validation", () => {
    it("should accept trusted account root ARN", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "arn:aws:iam::123456789012:root",
        trustedAccountIDs: ["123456789012"],
      });
      expect(result).toEqual({ isValid: true });
    });

    it("should reject untrusted account root ARN", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "arn:aws:iam::999999999999:root",
        trustedAccountIDs: ["123456789012"],
      });
      expect(result).toEqual({
        isValid: false,
        reason:
          'AWS account ID 999999999999 for IAM root "arn:aws:iam::999999999999:root" ' +
          "is not in the list of trusted accounts",
      });
    });

    it("should reject IAM role ARN", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "arn:aws:iam::123456789012:role/SomeRole",
        trustedAccountIDs: ["123456789012"],
      });
      expect(result).toEqual({
        isValid: false,
        reason:
          "IAM role ARNs are not allowed for layer permissions. " +
          "Use account ID or account root ARN instead.",
      });
    });
  });

  describe("Edge cases", () => {
    it("should reject unrecognized principal format", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "not-a-valid-principal",
        trustedAccountIDs: ["123456789012"],
      });
      expect(result).toEqual({
        isValid: false,
        reason:
          "Principal not-a-valid-principal is not in a recognized format or " +
          "is not allowed",
      });
    });

    it("should handle undefined configuration", () => {
      const result = validateLayerPermissionPrincipal({
        principal: "123456789012",
      });
      expect(result).toEqual({
        isValid: false,
        reason: "Trusted account IDs are not configured",
      });
    });
  });
});
