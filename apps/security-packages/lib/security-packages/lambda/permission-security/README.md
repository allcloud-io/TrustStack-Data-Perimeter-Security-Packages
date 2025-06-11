# Lambda Permission Security Package

This document outlines a comprehensive approach to securing Lambda function invocation permissions using multiple layers of controls.

**Table of Contents:**

- [Overview](#overview)
- [Controls](#controls)
  - [Proactive Control: CloudFormation Hook](#proactive-control-cloudformation-hook)
    - [Security Benefits](#security-benefits)
  - [Detective Control: CloudTrail Monitoring](#detective-control-cloudtrail-monitoring)
    - [Security Benefits](#security-benefits-1)
  - [Responsive Control: Automated Remediation](#responsive-control-automated-remediation)
    - [Security Benefits](#security-benefits-2)
- [Deployment Instructions](#deployment-instructions)
  - [Configuration](#configuration)
- [Conclusion](#conclusion)

## Overview

AWS Lambda resource-based policies allow you to grant permissions to other AWS accounts or services to invoke your Lambda functions. However, without proper controls, this can lead to potential security risks if permissions are granted to untrusted principals.

This security package provides a multi-layered approach to securing Lambda permissions:

1. **Proactive Control**: A CloudFormation hook that prevents deployments that include Lambda permissions with untrusted principals.
2. **Detective Control**: CloudTrail monitoring to detect attempts to create Lambda permissions with untrusted principals, generating AWS Security Hub findings for non-compliant permissions.
3. **Responsive Control**: Automated remediation to remove unauthorized Lambda permissions when detected.

By implementing all three types of controls, you can significantly reduce the risk of unauthorized access to your Lambda functions.

## Controls

### Proactive Control: CloudFormation Hook

The CloudFormation hook validates Lambda permission principals during CloudFormation deployments. It checks:

- AWS account IDs against a list of trusted accounts
- Service principals against a list of trusted services
- Organization IDs against a list of trusted organizations

This prevents the creation of Lambda resources with unauthorized permissions at deployment time.

The hook integrates with AWS CloudFormation to reject templates that include Lambda permissions with untrusted principals before they are deployed. This provides a proactive security control that can block non-compliant resources from being created.

#### Security Benefits

1. **Infrastructure as Code Protection**: Validates Lambda permissions during CloudFormation deployments
2. **Early Detection**: Catches issues before resources are created
3. **Developer Feedback**: Provides clear error messages explaining why permissions are denied
4. **Configurable Rules**: Supports organization-specific trusted principals

### Detective Control: CloudTrail Monitoring

The detective control uses EventBridge and a Lambda function to monitor for Lambda permission creation and validate that permissions use trusted principals. This provides an additional layer of protection by detecting and alerting on non-compliant permissions even if they somehow bypass the proactive control.

The monitoring process works as follows:

1. **CloudTrail Logging**: AWS CloudTrail captures all Lambda API calls, including permission creation
2. **EventBridge Rule**: An EventBridge rule filters CloudTrail events for Lambda `AddPermission` API calls
3. **Lambda Processing**: When a permission is created, a Lambda function:
   - Extracts the principal and organization ID from the event
   - Validates them against the trusted configuration
   - Creates findings in AWS Security Hub for non-compliant permissions

#### Security Benefits

1. **Near Real-Time Detection**: Identifies non-compliant permissions immediately after creation
2. **Centralized Visibility**: Creates findings in Security Hub for centralized monitoring
3. **Custom Validation Rules**: Supports organization-specific trusted principals
4. **Comprehensive Logging**: Provides detailed logs of validation results for auditing

### Responsive Control: Automated Remediation

To complete the defense-in-depth strategy, the package includes automated remediation for unauthorized Lambda permissions. This responsive control helps ensure that any permissions that bypass preventative and proactive controls are quickly identified and removed.

The responsive control works as follows:

1. **Event Detection**: An EventBridge rule monitors for Security Hub findings related to unauthorized Lambda permissions
2. **Remediation Logic**: When a finding is detected, a Lambda function:
   - Retrieves the full finding details from Security Hub
   - Gets the Lambda function policy
   - Identifies the unauthorized statement
   - Removes the permission using the Lambda `RemovePermission` API
   - Updates the Security Hub finding to mark it as resolved

#### Security Benefits

1. **Automatic Enforcement**: Continuously enforces Lambda permission policies
2. **Rapid Response**: Minimizes the time window during which unauthorized permissions could potentially be exploited
3. **Comprehensive Coverage**: Provides protection across all accounts in your AWS organization
4. **Audit Trail**: Creates detailed logs of all remediation actions for compliance and forensic purposes

## Deployment Instructions

### Configuration

The Lambda Permission Security Package package accepts the following configuration options:

| Parameter                | Type       | Description                                                                                                                       | Default value    |
| ------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| trustedAccountIDs        | `string[]` | List of trusted AWS account IDs that can invoke Lambda functions                                                                  | No default value |
| trustedOrgIDs            | `string[]` | List of trusted AWS Organization IDs that can invoke Lambda functions                                                             | No default value |
| trustedServicePrincipals | `string[]` | List of trusted AWS service principals that can invoke Lambda functions.<br/>For example: "s3.amazonaws.com", "sns.amazonaws.com" | No default value |

Enable this security package in your `deployment-manifest.yml` file by adding the `lambdaPermissionSecurity` field under `spec.securityPackages`. Example:

```yaml
# Specification for the TrustStack security framework deployment
spec:
  # Configuration for the security packages to deploy
  securityPackages:
    # Configuration for the Lambda Permission Security package
    lambdaPermissionSecurity:
      # Whether the Lambda Permission Security package is enabled
      enabled: true
      # Configuration for the Lambda Permission Security package
      configuration:
        # List of trusted AWS account IDs that can invoke Lambda functions
        trustedAccountIDs:
          - "111122223333"
          - "444455556666"
        # List of trusted AWS Organization IDs that can invoke Lambda functions
        trustedOrgIDs:
          - "o-exampleorgid"
        # List of trusted AWS service principals that can invoke Lambda functions
        # For example: "s3.amazonaws.com", "sns.amazonaws.com"
        trustedServicePrincipals:
          - "s3.amazonaws.com"
          - "sns.amazonaws.com"
          - "events.amazonaws.com"
```

## Conclusion

By implementing this comprehensive approach to securing Lambda permissions, you can significantly reduce the risk of unauthorized access to your Lambda functions. The combination of proactive, detective, and responsive controls provides a robust security posture that aligns with the [Data Perimeter Guidelines](../../../../../../docs/data-perimeter-guidelines.md).
