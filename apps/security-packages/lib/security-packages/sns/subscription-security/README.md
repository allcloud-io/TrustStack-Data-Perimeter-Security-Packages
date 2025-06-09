# SNS Subscription Security Package

This document outlines a comprehensive approach to securing SNS subscriptions using multiple layers of controls.

**Table of Contents:**

- [SNS Subscription Security Package](#sns-subscription-security-package)
  - [Overview](#overview)
  - [Controls](#controls)
    - [Preventative Control: Service Control Policy](#preventative-control-service-control-policy)
      - [Customization](#customization)
      - [Security Benefits](#security-benefits)
      - [Considerations](#considerations)
    - [Proactive Control: CloudFormation Hook](#proactive-control-cloudformation-hook)
    - [Detective Control: CloudTrail Monitoring](#detective-control-cloudtrail-monitoring)
      - [Security Benefits](#security-benefits-1)
    - [Responsive Control: Automated Remediation](#responsive-control-automated-remediation)
      - [Key Components](#key-components)
      - [Security Benefits](#security-benefits-2)
      - [Implementation Considerations](#implementation-considerations)
  - [Implementation Guide](#implementation-guide)
    - [Step 4: Implement Responsive Controls](#step-4-implement-responsive-controls)
  - [Conclusion](#conclusion)

## Overview

This package provides a multi-layered approach to securing SNS subscriptions:

1. **Preventative Control**: Service Control Policy (SCP) that restrict the creation of SNS subscriptions to trusted endpoints.
2. **Proactive Control**: A CloudFormation hook that prevent deployments that include SNS subscriptions with untrusted endpoints.
3. **Detective Control**: CloudTrail monitoring to detect attempts to create SNS subscriptions with untrusted endpoints. Than, AWS Security Hub findings are created for non-compliant subscriptions.
4. **Responsive Control**: When a finding is detected, we trigger a Lambda function that:
   - Deletes the non-compliant SNS subscription
   - Updates the Security Hub finding to mark it as resolved

By implementing all four types of controls, you can significantly reduce the risk of data exfiltration through SNS subscriptions.

## Controls

This package implements a comprehensive set of security controls including preventative (SCP policies), proactive (CloudFormation hooks), detective (CloudTrail monitoring), and responsive (automated remediation) measures to protect against data exfiltration through untrusted SNS subscription endpoints. These controls are described below.

### Preventative Control: Service Control Policy

A Service Control Policy (SCP) to complements the CloudFormation hook by providing a preventative control at the AWS Organizations level. It serves four key functions:

1. Prevents subscribing AWS service endpoints (e.g., SQS, Lambda, Firehose) from outside the organization by enforcing that the resource's organization ID matches the principal's organization ID.
2. Limits SNS subscriptions to a specific set of allowed protocols (e.g., email, email-json, http, https, sqs, lambda), denying any other protocol types.
3. For email and email-json protocols, restricts subscriptions to a predefined list of trusted email domains.
4. For HTTP and HTTPS protocols, restricts subscriptions to a predefined list of trusted web domains.

#### Security Benefits

Using this SCP provides several security benefits:

1. **Preventative Control**: Blocks SNS subscriptions to untrusted endpoints at the API level.
2. **Organization-Wide Protection**: Applies to all accounts in the organizational units where the SCP is attached.
3. **Defense in Depth**: Complements the CloudFormation hook to provide multiple layers of protection.
4. **API-Level Restriction**: Prevents subscriptions created through the AWS Management Console, AWS CLI, or AWS SDKs.

#### Considerations

1. **Testing**: Test the policy in a non-production environment before applying it to production accounts.
2. **Existing Subscriptions**: This policy does not affect existing subscriptions, only new ones.
3. **Maintenance**: Update the policy as your organization's trusted domains change.

### Proactive Control: CloudFormation Hook

The CloudFormation hook validates SNS subscription endpoints during CloudFormation deployments. It checks:

- Email domains for email/email-json protocols
- URL domains for HTTP/HTTPS protocols
- AWS service protocols (SQS, Lambda, etc.)

For detailed information about the CloudFormation hook implementation, including configuration options, compliant and non-compliant examples, and testing procedures, refer to the [SNS Subscription Endpoint Validation CloudFormation Hook README](proactive-control/README.md).

### Detective Control: CloudTrail Monitoring

The detective control uses EventBridge and a Lambda function to monitor for SNS subscription creation and validate that subscriptions use trusted endpoints. This provides an additional layer of protection by detecting and alerting on non-compliant subscriptions even if they somehow bypass the preventative and proactive controls.

The monitoring process works as follows:

1. **CloudTrail Logging**: AWS CloudTrail captures all SNS API calls, including subscription creation
2. **EventBridge Rule**: An EventBridge rule filters CloudTrail events for SNS `Subscribe` API calls
3. **Lambda Processing**: When a subscription is created, the Lambda function:
   - Extracts the protocol and endpoint from the event
   - Validates the endpoint against the trusted domains configuration
   - Performs appropriate validation based on the protocol type (email, HTTP/HTTPS, AWS services)
4. **Security Hub Integration**: The Lambda creates findings in AWS Security Hub:
   - Non-compliant subscriptions generate HIGH severity findings
   - Findings include detailed information about the subscription and why it failed validation
   - Remediation guidance is provided for each finding

#### Security Benefits

1. **Near Real-Time Detection**: Identifies non-compliant subscriptions immediately after creation
2. **Centralized Visibility**: Creates findings in Security Hub for centralized monitoring
3. **Custom Validation Rules**: Supports organization-specific trusted domains
4. **Comprehensive Logging**: Provides detailed logs of validation results for auditing
5. **Data Exfiltration Prevention**: Identifies potential data exfiltration channels via untrusted endpoints

### Responsive Control: Automated Remediation

To complete the defense-in-depth strategy, we offer automated remediation for unauthorized SNS subscriptions. This responsive control helps ensure that any subscriptions that bypass preventative and detective controls are quickly identified and canceled.

#### Security Benefits

1. **Automatic Enforcement**: Continuously enforces SNS subscription policies, even for resources created outside of CloudFormation.
2. **Rapid Response**: Minimizes the time window during which unauthorized subscriptions could potentially exfiltrate data.
3. **Comprehensive Coverage**: Provides protection across all accounts in your AWS organization.
4. **Audit Trail**: Creates detailed logs of all remediation actions for compliance and forensic purposes.

## Conclusion

By implementing this comprehensive approach to securing SNS subscriptions, you can significantly reduce the risk of data exfiltration through untrusted endpoints. The combination of preventative, proactive, detective, and responsive controls provides a robust security posture that aligns with the [Data Perimeter Guidelines](../../../../../../docs/data-perimeter-guidelines.md).
