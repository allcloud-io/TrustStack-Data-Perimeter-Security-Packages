const iamRoleRegex = () => /^arn:aws:iam::(?<awsAccountID>\d{12}):role\/.+$/;

/**
 * Validates a Lambda layer permission principal against trusted principals.
 *
 * @returns Object with validation result and reason if invalid
 */
export function validateLayerPermissionPrincipal({
  principal,
  organizationID,
  trustedAccountIDs,
  trustedOrgIDs,
}: Readonly<{
  /** The principal to validate */
  principal: string;
  /** The organization ID of the principal */
  organizationID?: string;
  /** List of trusted AWS account IDs */
  trustedAccountIDs?: string[];
  /** List of trusted AWS organization IDs */
  trustedOrgIDs?: string[];
}>): { isValid: true } | { isValid: false; reason: string } {
  // Special case: asterisk with organization ID
  if (principal === "*" && organizationID) {
    if (!trustedOrgIDs || trustedOrgIDs.length === 0) {
      return {
        isValid: false,
        reason:
          "Organization ID is provided but no trusted organization IDs are configured",
      };
    }

    if (!trustedOrgIDs.includes(organizationID)) {
      return {
        isValid: false,
        reason:
          "Organization ID is not in the list of trusted organization IDs",
      };
    }

    return { isValid: true };
  }

  // Reject asterisk without organization ID
  if (principal === "*" && !organizationID) {
    return {
      isValid: false,
      reason:
        "Principal '*' without organization ID would grant access to all AWS accounts",
    };
  }

  // Check if principal is an AWS account ID
  if (isAWSAccountID(principal)) {
    if (!trustedAccountIDs || trustedAccountIDs.length === 0) {
      return {
        isValid: false,
        reason: "Trusted account IDs are not configured",
      };
    }

    if (!trustedAccountIDs.includes(principal)) {
      return {
        isValid: false,
        reason: `AWS account ID ${principal} is not in the list of trusted accounts`,
      };
    }

    return { isValid: true };
  }

  // Check if principal is an IAM account root ARN (arn:aws:iam::123456789012:root)
  const rootARNRegex = /^arn:aws[a-zA-Z-]*:iam::(?<awsAccountID>\d{12}):root$/;
  const rootARNMatch = rootARNRegex.exec(principal);
  if (rootARNMatch) {
    const awsAccountID = rootARNMatch.groups?.awsAccountID;

    if (!awsAccountID) {
      return {
        isValid: false,
        reason: `Invalid IAM account root ARN format: ${principal}`,
      };
    }

    if (!trustedAccountIDs || trustedAccountIDs.length === 0) {
      return {
        isValid: false,
        reason: "Trusted account IDs are not configured",
      };
    }

    if (!trustedAccountIDs.includes(awsAccountID)) {
      return {
        isValid: false,
        reason:
          `AWS account ID ${awsAccountID} for IAM root "${principal}" is not ` +
          `in the list of trusted accounts`,
      };
    }

    return { isValid: true };
  }

  // Check if principal is an IAM Role (not allowed for layer permissions)
  if (iamRoleRegex().test(principal)) {
    return {
      isValid: false,
      reason:
        "IAM role ARNs are not allowed for layer permissions. " +
        "Use account ID or account root ARN instead.",
    };
  }

  // For any other format, it's not allowed
  return {
    isValid: false,
    reason: `Principal ${principal} is not in a recognized format or is not allowed`,
  };
}

function isAWSAccountID(value: string): boolean {
  return /^\d{12}$/.test(value);
}
