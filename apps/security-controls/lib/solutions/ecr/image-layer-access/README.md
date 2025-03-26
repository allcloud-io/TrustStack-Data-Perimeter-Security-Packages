# ECR Image Layer Access Security Solution

## Overview

The ECR Image Layer Access Security Solution addresses the risk of unauthorized access to Amazon ECR private image layers through presigned URLs. The `GetDownloadUrlForLayer` API returns Amazon S3 presigned URLs that users can use to download ECR private image layers from service-owned buckets, creating a potential security risk if not properly controlled.

## Problem Statement

Amazon Elastic Container Registry (ECR) is a fully managed container registry service that allows you to store, manage, and deploy Docker container images. When users need to download layers from a private ECR repository, the following process occurs:

1. A user or application with appropriate IAM permissions calls the `GetDownloadUrlForLayer` API
2. ECR returns a presigned S3 URL for the requested image layer
3. The user downloads the layer directly from an Amazon S3 bucket owned by the ECR service

This mechanism creates several potential security risks:

- **Data Exfiltration**: Once obtained, presigned URLs can be shared with unauthorized entities both within and outside the organization
- **Unauthorized Access**: Without proper controls, users might access container images containing sensitive code or configurations
- **Lack of Network-Level Controls**: Since the presigned URLs access S3 buckets directly, standard VPC endpoint policies may not be sufficient to control access

## Solution Components

This solution implements a comprehensive set of controls to mitigate these risks:

### 1. Preventative Controls

Service Control Policies (SCPs) that restrict `GetDownloadUrlForLayer` permissions to administrators or specific applications only. These SCPs can be applied at the AWS Organizations level to enforce consistent control across all accounts.

**Implementation**: [SCP Policy](./scp-policy/README.md)

### 2. Detective Controls

CloudTrail monitoring to detect and alert on `GetDownloadUrlForLayer` API calls in your environment. This allows security teams to identify potentially unauthorized access attempts.

**Implementation**: [Detective Control](./detective-control/README.md)

### 3. Proactive Controls

Implementation guidelines for network perimeter controls to prevent access from unexpected networks to data stored in service-owned buckets. This includes best practices for:

- Configuring VPC endpoints with restrictive policies
- Using AWS PrivateLink for ECR access
- Setting up proper network segmentation

**Implementation**: See the implementation guidelines in this documentation

### 4. Responsive Controls

Automated remediation workflows to address unauthorized access attempts, including:

- Automatic notification of security teams
- Revocation of IAM permissions
- Session termination for suspicious activities

**Implementation**: [Lambda Hook](./lambda-hook/README.md)

## Deployment Instructions

### Prerequisites

- AWS Organizations with all features enabled
- CloudTrail enabled in all accounts
- AWS Config enabled in all accounts
- Administrative access to the organization management account

### Implementing the SCP Policy

The Service Control Policy (SCP) in this solution restricts the `ecr:GetDownloadUrlForLayer` API action to specific IAM roles or conditions. Follow these steps to deploy the SCP:

1. Navigate to the [SCP Policy](./scp-policy/README.md) directory
2. Review and customize the policy according to your organizational requirements
3. Deploy the policy using your organization's SCP management process

### Setting Up Detective Controls

The detective controls monitor CloudTrail logs for `GetDownloadUrlForLayer` API calls and alert on suspicious activity:

1. Navigate to the [Detective Control](./detective-control/README.md) directory
2. Deploy the CloudFormation templates to set up the necessary CloudWatch rules and alerting mechanisms

### Network Perimeter Control Best Practices

To implement effective network perimeter controls:

1. Configure VPC Endpoints for ECR API and ECR Docker:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowPull",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:BatchCheckLayerAvailability"
      ],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "aws:PrincipalOrgID": "o-xxxxxxxxxx" // Your organization ID
        }
      }
    }
  ]
}
```

2. Use AWS PrivateLink to establish private connectivity between your VPC and ECR
3. Implement network access control lists (NACLs) and security groups to restrict traffic flow

### Implementing Responsive Controls

The responsive controls automatically remediate unauthorized access attempts:

1. Navigate to the [Lambda Hook](./lambda-hook/README.md) directory
2. Deploy the CloudFormation templates to set up the remediation workflows

## Security Best Practices

In addition to the controls provided in this solution, consider implementing these best practices:

1. **Principle of Least Privilege**: Grant minimal permissions required for users and applications to perform their tasks
2. **Image Scanning**: Enable ECR image scanning to identify vulnerabilities in container images
3. **Image Signing**: Implement image signing and verification to ensure only trusted images are used
4. **Regular Access Reviews**: Periodically review and audit access patterns to ECR resources
5. **Cross-Account Access Controls**: If sharing ECR repositories across accounts, implement strict cross-account access policies

## Compliance Considerations

This solution helps address compliance requirements related to data protection and access control in several frameworks:

- **NIST 800-53**: Addresses control families including Access Control (AC), Audit and Accountability (AU), and System and Information Integrity (SI)
- **PCI DSS**: Helps meet requirements for restricting access to sensitive data (Requirements 7 and 8)
- **HIPAA**: Supports technical safeguards for access control and audit controls
- **FedRAMP**: Aligns with security controls for data protection and access management

## Troubleshooting

### Common Issues

1. **Legitimate Access Blocked**: If legitimate users or applications are blocked from accessing ECR layers:

   - Review the SCP configuration to ensure necessary exceptions are in place
   - Check CloudTrail logs to understand why access was denied

2. **Alerting False Positives**: If you receive excessive alerts about legitimate access:

   - Adjust the CloudWatch rule patterns to better filter events
   - Add known legitimate patterns to an allowlist

3. **Remediation Workflow Failures**: If automated remediation fails:
   - Check Lambda execution logs for error details
   - Verify that the remediation role has sufficient permissions

For additional support, please contact your security administrator or cloud operations team.
