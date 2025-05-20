const iamRoleRegex = () => /^arn:aws:iam::(?<awsAccountID>\d{12}):role\/.+$/;

/**
 * Validates a Lambda permission principal against trusted principals.
 *
 * @returns Object with validation result and reason if invalid
 */
export function validateLambdaPermissionPrincipal({
  principal,
  principalOrgID,
  sourceARN,
  sourceAccount,
  trustedAccountIDs,
  trustedOrgIDs,
  trustedServicePrincipals,
}: Readonly<{
  /** The principal to validate */
  principal: string;
  /** The organization ID of the principal */
  principalOrgID?: string;
  sourceARN?: string;
  sourceAccount?: string;
  /** List of trusted AWS account IDs */
  trustedAccountIDs?: string[];
  /** List of trusted AWS organization IDs */
  trustedOrgIDs?: string[];
  /** List of trusted AWS service principals */
  trustedServicePrincipals?: string[];
}>): { isValid: true } | { isValid: false; reason: string } {
  if (principalOrgID) {
    if (!trustedOrgIDs || trustedOrgIDs.length === 0) {
      return {
        isValid: false,
        reason:
          "Principal organization ID is provided but no trusted organization IDs " +
          "are configured",
      };
    }

    if (!trustedOrgIDs.includes(principalOrgID)) {
      return {
        isValid: false,
        reason:
          "Principal organization ID is not in the list of trusted organization IDs",
      };
    }
  }

  // Check if principal is a service principal (e.g., s3.amazonaws.com)
  if (principal.includes(".amazonaws.com")) {
    if (!sourceARN && !sourceAccount) {
      return {
        isValid: false,
        reason:
          "Source ARN or source account is required for service principals",
      };
    }

    if (!trustedAccountIDs || trustedAccountIDs.length === 0) {
      return {
        isValid: false,
        reason: "Trusted account IDs are not configured",
      };
    }

    let awsAccountID: string | undefined;
    if (sourceAccount) {
      awsAccountID = sourceAccount;
    } else {
      /* istanbul ignore next */
      awsAccountID = sourceARN?.split(":")[4];

      if (!awsAccountID && !sourceAccount) {
        return {
          isValid: false,
          reason:
            "Source ARN does not contain an account ID and source account is not provided",
        };
      }
    }

    if (
      awsAccountID &&
      isAWSAccountID(awsAccountID) &&
      !trustedAccountIDs.includes(awsAccountID)
    ) {
      return {
        isValid: false,
        reason: `Source account ${awsAccountID} is not in the list of trusted accounts`,
      };
    }

    if (!trustedServicePrincipals || trustedServicePrincipals.length === 0) {
      return { isValid: true };
    }

    if (!trustedServicePrincipals.includes(principal)) {
      return {
        isValid: false,
        reason: `Service principal ${principal} is not in the list of trusted service principals`,
      };
    }

    return { isValid: true };
  }

  // Check if principal is an AWS account ID
  if (isAWSAccountID(principal)) {
    if (principalOrgID) {
      return { isValid: true };
    }

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

  // Check if principal is an IAM Role
  if (iamRoleRegex().test(principal)) {
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style, @typescript-eslint/no-non-null-assertion
    const awsAccountID = iamRoleRegex().exec(principal)!.groups
      ?.awsAccountID as string;

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
          `AWS account ID ${awsAccountID} for IAM role "${principal}" is not ` +
          `in the list of trusted accounts`,
      };
    }

    return { isValid: true };
  }

  // For asterisk (*) or any other format, it's not allowed
  return {
    isValid: false,
    reason: `Principal ${principal} is not in a recognized format or is not allowed`,
  };
}

function isAWSAccountID(value: string): boolean {
  return /^\d{12}$/.test(value);
}
