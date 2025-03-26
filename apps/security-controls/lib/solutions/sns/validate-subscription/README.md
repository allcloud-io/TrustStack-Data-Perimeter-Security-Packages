# SNS Subscription Security Solution

This document outlines a comprehensive approach to securing SNS subscriptions using multiple layers of controls.

**Table of Contents:**

- [SNS Subscription Security Solution](#sns-subscription-security-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Controls](#controls)
    - [Preventative Control: Service Control Policy](#preventative-control-service-control-policy)
      - [Customization](#customization)
      - [Security Benefits](#security-benefits)
      - [Considerations](#considerations)
    - [Proactive Control: CloudFormation Hook](#proactive-control-cloudformation-hook)
    - [Detective Control: CloudTrail Monitoring](#detective-control-cloudtrail-monitoring)
      - [Key Components](#key-components)
      - [Security Benefits](#security-benefits-1)
    - [Responsive Control: Automated Remediation](#responsive-control-automated-remediation)
      - [Key Components](#key-components-1)
      - [Security Benefits](#security-benefits-2)
      - [Implementation Considerations](#implementation-considerations)
  - [Implementation Guide](#implementation-guide)
    - [Step 1: Implement Preventative Controls](#step-1-implement-preventative-controls)
    - [Step 2: Implement Proactive Controls](#step-2-implement-proactive-controls)
    - [Step 3: Implement Detective Controls](#step-3-implement-detective-controls)
    - [Step 4: Implement Responsive Controls](#step-4-implement-responsive-controls)
  - [Conclusion](#conclusion)

## Overview

The solution provides a multi-layered approach to securing SNS subscriptions:

1. **Preventative Control**: Service Control Policy (SCP) that restrict the creation of SNS subscriptions to trusted endpoints and protocols.
2. **Proactive Control**: A CloudFormation hook that prevent deployments that include SNS subscriptions with untrusted endpoints and protocols.
3. **Detective Control**: CloudTrail monitoring to detect attempts to create SNS subscriptions with untrusted endpoints and protocols. Than, AWS Security Hub findings are created for non-compliant subscriptions.
4. **Responsive Control**: When a finding is detected, we trigger a Lambda function that:
   - Deletes the non-compliant SNS subscription
   - Updates the Security Hub finding to mark it as resolved
   - Sends a notification about the remediation action

By implementing all four types of controls, you can significantly reduce the risk of data exfiltration through SNS subscriptions.

## Controls

The solution implements a comprehensive set of security controls including preventative (SCP policies), proactive (CloudFormation hooks), detective (CloudTrail monitoring), and responsive (automated remediation) measures to protect against data exfiltration through untrusted SNS subscription endpoints. These controls are described below.

### Preventative Control: Service Control Policy

The Service Control Policy (SCP) in `scp-policy/policy.json` implements preventative controls. It complements the CloudFormation hook by providing a preventative control at the AWS Organizations level. It contains four key statements:

1. **RestrictSNSSubscriptionToOrganizationResources**: Prevents subscribing AWS service endpoints (e.g., SQS, Lambda, Firehose) from outside the organization by enforcing that the resource's organization ID matches the principal's organization ID.
2. **RestrictSNSSubscriptionProtocols**: Limits SNS subscriptions to a specific set of allowed protocols (e.g., email, email-json, http, https, sqs, lambda), denying any other protocol types.
3. **RestrictSNSEmailSubscriptionToTrustedDomains**: For email and email-json protocols, restricts subscriptions to a predefined list of trusted email domains.
4. **RestrictSNSHttpSubscriptionToTrustedDomains**: For HTTP and HTTPS protocols, restricts subscriptions to a predefined list of trusted web domains.

#### Customization

You should customize the trusted endpoints and protocols based on your organization's requirements:

1. **Trusted AWS Service Protocols**: Adjust the ARN patterns for AWS services as needed.
2. **Trusted Email Domains**: Replace `example.com`, `example.org`, and `amazonaws.com` with your organization's trusted email domains.
3. **Trusted HTTP/HTTPS Domains**: Replace the HTTP/HTTPS domain patterns with your organization's trusted domains.

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

The hook is configurable, allowing organizations to define their own lists of trusted domains and protocols.

For detailed information about the CloudFormation hook implementation, including configuration options, compliant and non-compliant examples, and testing procedures, refer to the [SNS Subscription Endpoint Validation CloudFormation Hook README](lambda-hook/README.md).

### Detective Control: CloudTrail Monitoring

The detective control uses EventBridge and a Lambda function to monitor for SNS subscription creation and validate that subscriptions use trusted endpoints. This provides an additional layer of protection by detecting and alerting on non-compliant subscriptions even if they somehow bypass the preventative and proactive controls.

The monitoring process works as follows:

1. **CloudTrail logging**: AWS CloudTrail captures all SNS API calls, including subscription creation
2. **EventBridge rule**: An EventBridge rule filters CloudTrail events for SNS `Subscribe` API calls
3. **Lambda processing**: When a subscription is created, the Lambda function:
   - Extracts the protocol and endpoint from the event
   - Validates the endpoint against the trusted domains configuration
   - Performs appropriate validation based on the protocol type (email, HTTP/HTTPS, AWS services)
4. **Security Hub integration**: The Lambda creates findings in AWS Security Hub:
   - Non-compliant subscriptions generate HIGH severity findings
   - Findings include detailed information about the subscription and why it failed validation
   - Remediation guidance is provided for each finding

#### Key Components

The detective control implementation consists of:

1. **Lambda Function**: Processes CloudTrail events and validates subscriptions
2. **EventBridge Rule**: Triggers the Lambda based on CloudTrail SNS Subscribe events
3. **Security Hub Integration**: Creates and updates findings for non-compliant subscriptions
4. **Configurable Validation Rules**: Customizable list of trusted domains and protocols
5. **IAM Role**: Provides permissions for the Lambda to access SNS and Security Hub

#### Security Benefits

1. **Near real-time detection**: Identifies non-compliant subscriptions immediately after creation
2. **Centralized visibility**: Creates findings in Security Hub for centralized monitoring
3. **Custom validation rules**: Supports organization-specific trusted domains and protocols
4. **Comprehensive logging**: Provides detailed logs of validation results for auditing
5. **Data exfiltration prevention**: Identifies potential data exfiltration channels via untrusted endpoints

### Responsive Control: Automated Remediation

To complete the defense-in-depth strategy, we offer automated remediation for unauthorized SNS subscriptions. This responsive control helps ensure that any subscriptions that bypass preventative and detective controls are quickly identified and remediated.

#### Key Components

<!-- TODO: Describe the key components of the responsive control once it is implemented -->

#### Security Benefits

1. **Automatic Enforcement**: Continuously enforces SNS subscription policies, even for resources created outside of CloudFormation.
2. **Rapid Response**: Minimizes the time window during which unauthorized subscriptions could potentially exfiltrate data.
3. **Comprehensive Coverage**: Provides protection across all accounts in your AWS organization.
4. **Audit Trail**: Creates detailed logs of all remediation actions for compliance and forensic purposes.

#### Implementation Considerations

1. **Remediation Timing**: Configure the frequency of evaluations based on your organization's risk tolerance.
2. **Notification Strategy**: Define escalation paths for security teams when remediation actions are taken.

## Implementation Guide

### Step 1: Implement Preventative Controls

1. Customize the trusted domains and protocols.
2. Implement the SCP in your AWS Organizations.

### Step 2: Implement Proactive Controls

1. Deploy the CloudFormation hook in your AWS accounts.
2. Customize the trusted domains and protocols in the hook configuration.
3. Test the hook with the sample templates.

### Step 3: Implement Detective Controls

1. Ensure CloudTrail is enabled and logging SNS API calls.
2. Deploy the Lambda function (`detective-control/handler.ts`) to process subscription events.
3. Configure the trusted domains and protocols in the Lambda configuration.
4. Set up an EventBridge rule to filter CloudTrail events for SNS subscription creation:
   ```json
   {
     "source": ["aws.sns"],
     "detail-type": ["AWS API Call via CloudTrail"],
     "detail": {
       "eventSource": ["sns.amazonaws.com"],
       "eventName": ["Subscribe"]
     }
   }
   ```
5. Ensure the Lambda has appropriate IAM permissions to create and update Security Hub findings
6. Configure Security Hub to receive and display findings from the detective control.
7. Establish a monitoring process for reviewing and acting on Security Hub findings.

### Step 4: Implement Responsive Controls

<!-- TODO: Update this section's content once the responsive control is implemented -->

1. Deploy the automated remediation solution to continuously scan for and remediate non-compliant SNS subscriptions.
2. Configure the remediation frequency based on your organization's security requirements.
3. Set up notification channels for security teams to be alerted when remediation actions are taken.
4. Implement logging and monitoring for the remediation process to maintain a comprehensive audit trail.
5. Regularly review remediation logs to identify patterns of attempted policy violations that may indicate security issues.

## Conclusion

By implementing this comprehensive approach to securing SNS subscriptions, you can significantly reduce the risk of data exfiltration through untrusted endpoints. The combination of preventative, proactive, and detective controls provides a robust security posture that aligns with the [Data Perimeter Guidelines](../../../../docs/DATA_PERIMETER_GUIDELINES.md).
