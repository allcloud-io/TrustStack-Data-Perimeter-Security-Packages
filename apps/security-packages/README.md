# TrustStack Security Packages

TrustStack provides a comprehensive suite of security packages designed to protect sensitive workloads in AWS environments. Each package provides a set of controls that implement multiple layers of defense, including preventative, proactive, detective, and responsive controls. Each security package addresses specific security concerns while maintaining developer agility through guardrails-aware implementations of CDK constructs.

**Table of Contents:**

- [TrustStack Security Packages](#truststack-security-packages)
  - [Security Benefits](#security-benefits)
  - [Packages](#packages)
    - [S3 Block Public Access Security Package](#s3-block-public-access-security-package)
    - [SNS Subscription Security Package](#sns-subscription-security-package)
    - [ECR Image Layer Access Security Package](#ecr-image-layer-access-security-package)

## Security Benefits

TrustStack security controls provide several key benefits for organizations running sensitive workloads:

1. **Defense in Depth**: Implements multiple layers of security controls (preventative, proactive, detective, and responsive) to create a comprehensive security posture.
2. **Prevention-First Approach**: Focuses on preventing security incidents before they occur, rather than just detecting them after the fact.
3. **Reduced Attack Surface**: Systematically eliminates potential vulnerabilities and exposure points across your AWS environment.
4. **Compliance Enablement**: Helps meet regulatory requirements for highly regulated industries, government agencies, and defense organizations.
5. **Automated Enforcement**: Enforces security policies automatically through guardrails and preventative controls, reducing human error.
6. **Developer Agility**: Maintains builder productivity through guardrails-aware CDK constructs that enforce security without impeding innovation.
7. **Operational Visibility**: Provides comprehensive monitoring and alerting capabilities to quickly identify and respond to potential security issues.
8. **Data Protection**: Implements strong data perimeter controls to prevent unauthorized access to sensitive information.

## Packages

### S3 Block Public Access Security Package

The S3 Block Public Access Security Package addresses the risk of accidental or intentional public exposure of S3 buckets by implementing a comprehensive set of controls:

1. **Preventative Controls**: Service Control Policies (SCPs) that enforce Block Public Access settings at the AWS Organizations level.
2. **Proactive Controls**: CloudFormation hooks that validate S3 bucket configurations during deployment to ensure Block Public Access settings are enabled.
3. **Detective Controls**: CloudTrail monitoring to detect any changes to S3 bucket configurations that may expose data publicly.
4. **Responsive Controls**: Automated remediation to correct any non-compliant S3 bucket configurations.

For detailed implementation details, see the [S3 Block Public Access Security Package documentation](lib/security-packages/s3/block-public-access/README.md).

### SNS Subscription Security Package

[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) allows to specify [an HTTP/HTTPs endpoint, emails, SMS](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) as the value for the Endpoint and Protocol parameter. Since the subsequent requests against the endpoints are not governed by IAM, they are not restricted with `aws:ResourceOrgID` implemented in an SCP. This creates a potential data exfiltration risk where sensitive data could be sent to unauthorized external endpoints.

The [SNS Subscription Security Package](lib/security-packages/sns/subscription-security/README.md) addresses this risk by implementing a comprehensive set of controls:

1. **Preventative Controls**: Service Control Policies (SCPs) that restrict SNS subscriptions to trusted endpoints and protocols
2. **Proactive Controls**: CloudFormation hooks that validate subscription endpoints during deployment
3. **Detective Controls**: CloudTrail monitoring to detect non-compliant subscriptions
4. **Responsive Controls**: Automated remediation to remove unauthorized subscriptions

For detailed implementation details, see the [SNS Subscription Security Package documentation](lib/security-packages/sns/subscription-security/README.md).

### ECR Image Layer Access Security Package

The ECR Image Layer Access Security package addresses the risk of unauthorized access to Amazon ECR private image layers through presigned URLs. The `GetDownloadUrlForLayer` API returns Amazon S3 presigned URLs that users can use to download ECR private image layers from service-owned buckets, creating a potential security risk if not properly controlled.

The [ECR Image Layer Access Security Package](lib/security-packages/ecr/image-layer-access/README.md) addresses this risk by implementing a comprehensive set of controls:

1. **Detective Controls**: CloudTrail monitoring to detect and alert on unauthorized `GetDownloadUrlForLayer` API calls in your environment.
2. **Proactive Controls**: Implementation guidelines for network perimeter controls to prevent access from unexpected networks to data stored in service-owned buckets.
3. **Responsive Controls**: Automated remediation workflows to address unauthorized access attempts.

For detailed implementation details, see the [ECR Image Layer Access Security Package documentation](lib/security-packages/ecr/image-layer-access/README.md).
