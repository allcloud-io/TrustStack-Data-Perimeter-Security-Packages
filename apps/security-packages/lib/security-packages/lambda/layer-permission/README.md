# Lambda Layer Permission Security Package

This document outlines a comprehensive approach to securing AWS Lambda layer access by preventing overly permissive layer version permissions.

**Table of Contents:**

- [Overview](#overview)
- [Security Risk](#security-risk)
- [Implementation Details](#implementation-details)
  - [Security Controls](#security-controls)
    - [Proactive Controls](#proactive-controls)
    - [Detective Controls](#detective-controls)
    - [Responsive Controls](#responsive-controls)
- [Deployment Instructions](#deployment-instructions)
  - [Configuration](#configuration)
- [Best Practices](#best-practices)
- [Additional Considerations](#additional-considerations)

## Overview

This security package addresses the risk of unauthorized access to AWS Lambda layers through overly permissive layer version permissions. AWS Lambda layers allow code sharing across functions, but improper permission management can expose sensitive code and dependencies to untrusted accounts or organizations.

The Lambda Layer Permission Security Package implements comprehensive controls to ensure that layer permissions are only granted to trusted identities, preventing unauthorized access to your organization's intellectual property and sensitive code.

## Security Risk

When using `AddLayerVersionPermission` API or `AWS::Lambda::LayerVersionPermission` CloudFormation resource, developers can inadvertently grant layer access to:

- All AWS accounts by setting Principal to `*` without specifying an OrganizationId
- Untrusted AWS accounts by specifying incorrect account IDs
- Entire organizations that shouldn't have access to proprietary layers

This can lead to:

- Intellectual property theft through unauthorized layer access
- Security vulnerabilities if malicious actors can inspect your code
- Compliance violations when sensitive code is exposed outside approved boundaries

## Implementation Details

The security package monitors and controls layer permissions through:

1. **API Monitoring**: Tracks `AddLayerVersionPermission` calls via CloudTrail
2. **Resource Validation**: Validates `AWS::Lambda::LayerVersionPermission` resources in CloudFormation templates
3. **Continuous Compliance**: Detects and remediates non-compliant permissions
4. **Security Hub Integration**: Reports findings for visibility and compliance tracking

### Security Controls

#### Proactive Controls

CloudFormation hooks that validate `AWS::Lambda::LayerVersionPermission` resources during deployment to:

- Ensure Principal values are in the list of trusted principals
- Validate OrganizationId when Principal is set to `*`
- Prevent deployment of non-compliant layer permissions

#### Detective Controls

EventBridge rules that monitor CloudTrail events for:

- `AddLayerVersionPermission` API calls with untrusted principals
- Layer permission changes that violate security policies
- Creation of Security Hub findings for non-compliant permissions

#### Responsive Controls

Automated remediation that:

- Removes layer permissions granted to untrusted principals
- Updates Security Hub findings when issues are resolved
- Provides audit trails of remediation actions

## Deployment Instructions

### Configuration

The Lambda Layer Permission Security Package package accepts the following configuration options:

| Parameter         | Type       | Description                                                        | Default value    |
| ----------------- | ---------- | ------------------------------------------------------------------ | ---------------- |
| trustedAccountIDs | `string[]` | List of trusted AWS account IDs that can access Lambda layers      | No default value |
| trustedOrgIDs     | `string[]` | List of trusted AWS Organization IDs that can access Lambda layers | No default value |

Enable this security package in your `deployment-manifest.yml` file by adding the `lambdaLayerPermissionSecurity` field under `spec.securityPackages`. Example:

```yaml
# Specification for the TrustStack security framework deployment
spec:
  # Configuration for the security packages to deploy
  securityPackages:
    # Configuration for the Lambda Layer Permission Security package
    lambdaLayerPermissionSecurity:
      # Whether the Lambda Layer Permission Security package is enabled
      enabled: true
      # Configuration for the Lambda Layer Permission Security package
      configuration:
        # List of trusted AWS account IDs that can access Lambda layers
        trustedAccountIDs:
          - "111122223333"
          - "444455556666"
        # List of trusted AWS Organization IDs that can access Lambda layers
        trustedOrgIDs:
          - "o-exampleorgid"
```

## Best Practices

When using this security package:

1. **Principle of Least Privilege**: Only grant layer access to accounts that genuinely need it
2. **Use Organization IDs**: When granting access to multiple accounts, use organization IDs instead of wildcards
3. **Regular Audits**: Review trusted principals list regularly to ensure it remains current
4. **Monitor Findings**: Act on Security Hub findings to maintain security posture

## Additional Considerations

While AWS Lambda doesn't currently support Resource Control Policies (RCPs), this security package provides comprehensive controls through proactive validation and continuous monitoring to achieve similar security outcomes.
