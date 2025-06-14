# TrustStack Security Packages

TrustStack provides a suite of service-specific security packages designed to address specific service-related security concerns for sensitive workloads in AWS environments. Each package provides a set of controls that implement multiple layers of defense, including preventative, proactive, detective, and responsive controls. Each security package addresses service-specific considerations for data perimeter implementation while maintaining developer agility through guardrails-aware implementations of CDK constructs.

**Important Note**: These security packages focus on service-specific considerations and controls. They are designed to complement foundational data perimeter policies that organizations should implement based on their specific requirements and the general guidance provided in the [Data Perimeter Guidelines](../../docs/data-perimeter-guidelines.md).

**Table of Contents:**

- [Benefits](#benefits)
- [Packages](#packages)
  - [ECR Image Layer Access Security Package](#ecr-image-layer-access-security-package)
  - [Lambda Layer Permission Security Package](#lambda-layer-permission-security-package)
  - [Lambda Permission Security Package](#lambda-permission-security-package)
  - [Lambda VPC Security Package](#lambda-vpc-security-package)
  - [SNS Subscription Security Package](#sns-subscription-security-package)

## Benefits

TrustStack service-specific security controls provide several key benefits for organizations running sensitive workloads:

1. **Defense in Depth**: Implements multiple layers of security controls (preventative, proactive, detective, and responsive) to create a comprehensive security posture for specific AWS services.
2. **Prevention-First Approach**: Focuses on preventing security incidents before they occur, rather than just detecting them after the fact.
3. **Reduced Attack Surface**: Systematically eliminates potential vulnerabilities and exposure points across your AWS environment.
4. **Compliance Enablement**: Helps meet regulatory requirements for highly regulated industries, government agencies, and defense organizations.
5. **Automated Enforcement**: Enforces security policies automatically through guardrails and preventative controls, reducing human error.
6. **Developer Agility**: Maintains builder productivity through guardrails-aware CDK constructs that enforce security without impeding innovation.
7. **Operational Visibility**: Provides monitoring and alerting capabilities to quickly identify and respond to potential security issues.
8. **Data Protection**: Implements data perimeter controls to prevent unauthorized access to sensitive information.

## Packages

### ECR Image Layer Access Security Package

The ECR Image Layer Access Security package addresses the risk of unauthorized access to Amazon ECR private image layers through presigned URLs. The `GetDownloadUrlForLayer` API returns Amazon S3 presigned URLs that users can use to download ECR private image layers from service-owned buckets, creating a potential security risk if not properly controlled.

The [ECR Image Layer Access Security Package](lib/security-packages/ecr/image-layer-access/README.md) addresses this risk by implementing a comprehensive set of controls:

1. **Detective Controls**: CloudTrail monitoring to detect and alert on unauthorized `GetDownloadUrlForLayer` API calls in your environment.
2. **Proactive Controls**: Implementation guidelines for network perimeter controls to prevent access from unexpected networks to data stored in service-owned buckets.
3. **Responsive Controls**: Automated remediation workflows to address unauthorized access attempts.

For detailed implementation details, see the [ECR Image Layer Access Security Package documentation](lib/security-packages/ecr/image-layer-access/README.md).

### Lambda Layer Permission Security Package

The Lambda Layer Permission Security package addresses the risk of unauthorized access to AWS Lambda layers through overly permissive layer version permissions. AWS Lambda layers allow code sharing across functions, but improper permission management can expose sensitive code and dependencies to untrusted accounts or organizations, potentially leading to intellectual property theft and security vulnerabilities.

The [Lambda Layer Permission Security Package](lib/security-packages/lambda/layer-permission/README.md) addresses this risk by implementing a comprehensive set of controls:

1. **Proactive Controls**: CloudFormation hooks that validate `AWS::Lambda::LayerVersionPermission` resources during deployment to ensure only trusted principals are allowed.
2. **Detective Controls**: CloudTrail monitoring to detect `AddLayerVersionPermission` API calls with untrusted principals and create Security Hub findings.
3. **Responsive Controls**: Automated remediation to remove layer permissions granted to untrusted principals.

For detailed implementation details, see the [Lambda Layer Permission Security Package documentation](lib/security-packages/lambda/layer-permission/README.md).

### Lambda Permission Security Package

The Lambda Permission Security package addresses the risk of unauthorized principals (AWS accounts, IAM users, IAM roles, or AWS services) gaining access to invoke Lambda functions. This can lead to unauthorized execution of functions, potential data exfiltration, or other security incidents if permissions are not properly restricted. This package ensures that only trusted and authorized principals can invoke Lambda functions.

The package implements a comprehensive set of controls:

1.  **Proactive Controls**: A CloudFormation hook that validate `AWS::Lambda::Permission` resources during deployment to ensure only trusted principals are allowed.
2.  **Detective Controls**: CloudTrail monitoring to detect `lambda:AddPermission` events that grant access to untrusted principals and create Security Hub findings.
3.  **Responsive Controls**: Automated remediation to remove unauthorized permissions from Lambda functions.

For detailed implementation details, see the [Lambda Permission Security Package documentation](lib/security-packages/lambda/permission-security/README.md).

### Lambda VPC Security Package

The Lambda VPC Security package addresses the risk of AWS Lambda functions operating outside of customer-managed VPCs, which can expose functions to unauthorized network access or enable data exfiltration to untrusted networks. This package helps implement AWS data perimeter controls by ensuring Lambda functions are deployed only within customer-managed VPCs.

The package implements a comprehensive set of controls:

1. **Preventative Controls**: Service Control Policies (SCPs) that restrict Lambda function creation without VPC configurations using the `lambda:VpcIds` condition key
2. **Proactive Controls**: A CloudFormation hook that validate AWS::Lambda::Function resources specify proper VPC configurations during deployment
3. **Detective Controls**: CloudTrail monitoring to identify Lambda functions created without VPC configurations and create Security Hub findings for non-compliant resources

For detailed implementation details, see the [Lambda VPC Security Package documentation](lib/security-packages/lambda/vpc-security/README.md).

### SNS Subscription Security Package

[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) allows to specify [an HTTP/HTTPs endpoint, emails, SMS](https://docs.aws.amazon.com/sns/latest/dg/sns-create-subscribe-endpoint-to-topic.html) as the value for the Endpoint and Protocol parameter. Since the subsequent requests against the endpoints are not governed by IAM, they are not restricted with `aws:ResourceOrgID` implemented in an SCP. This creates a potential data exfiltration risk where sensitive data could be sent to unauthorized external endpoints.

The [SNS Subscription Security Package](lib/security-packages/sns/subscription-security/README.md) addresses this risk by implementing a comprehensive set of controls:

1. **Preventative Controls**: Service Control Policies (SCPs) that restrict SNS subscriptions to trusted endpoints and protocols
2. **Proactive Controls**: A CloudFormation hook that validate subscription endpoints during deployment
3. **Detective Controls**: CloudTrail monitoring to detect non-compliant subscriptions
4. **Responsive Controls**: Automated remediation to remove unauthorized subscriptions

For detailed implementation details, see the [SNS Subscription Security Package documentation](lib/security-packages/sns/subscription-security/README.md).
