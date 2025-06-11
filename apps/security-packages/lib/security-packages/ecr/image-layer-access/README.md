# ECR Image Layer Access Security Package

This document outlines a comprehensive approach to securing ECR image layer access using multiple layers of controls.

**Table of Contents:**

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Package Components](#package-components)
  - [1. Preventative Control](#1-preventative-control)
  - [2. Detective Control](#2-detective-control)
  - [3. Proactive Controls](#3-proactive-controls)
  - [4. Responsive Control](#4-responsive-control)
- [Deployment Instructions](#deployment-instructions)
  - [Prerequisites](#prerequisites)
  - [Configuration](#configuration)
- [Security Best Practices](#security-best-practices)
- [Compliance Considerations](#compliance-considerations)

## Overview

The ECR Image Layer Access Security Package addresses the risk of unauthorized access to Amazon ECR private image layers through presigned URLs. The `GetDownloadUrlForLayer` API returns Amazon S3 presigned URLs that users can use to download ECR private image layers from service-owned buckets, creating a potential security risk if not properly controlled.

## Problem Statement

Amazon Elastic Container Registry (ECR) is a fully managed container registry service that allows you to store, manage, and deploy Docker container images. When users need to download layers from a private ECR repository, the following process occurs:

1. A user or application with appropriate IAM permissions calls the `GetDownloadUrlForLayer` API
2. ECR returns a presigned S3 URL for the requested image layer
3. The user downloads the layer directly from an Amazon S3 bucket owned by the ECR service

This mechanism creates several potential security risks:

- **Data Exfiltration**: Once obtained, presigned URLs can be shared with unauthorized entities both within and outside the organization
- **Unauthorized Access**: Without proper controls, users might access container images containing sensitive code or configurations
- **Lack of Network-Level Controls**: Since the presigned URLs access S3 buckets directly, standard VPC endpoint policies may not be sufficient to control access

## Package Components

This package implements a comprehensive set of controls to mitigate these risks:

### 1. Preventative Control

Service Control Policy (SCP) that restricts `GetDownloadUrlForLayer` API calls based on:

- Allowed IAM role names (via `aws:PrincipalARN` condition)
- Source IP addresses (optional network restrictions)
- VPC endpoints (optional VPC endpoint restrictions)

These SCPs can be applied at the AWS Organizations level to enforce consistent control across all accounts.

### 2. Detective Control

CloudTrail monitoring to create AWS Security Hub findings for unauthorized `GetDownloadUrlForLayer` API calls in your environment. This allows security teams to identify potentially unauthorized access attempts.

### 3. Proactive Controls

Implementation guidelines for network perimeter controls to prevent access from unexpected networks to data stored in service-owned buckets. This includes best practices for:

- Configuring VPC endpoints with restrictive policies
- Using AWS PrivateLink for ECR access
- Setting up proper network segmentation

### 4. Responsive Control

Automated remediation to address unauthorized access attempts, including:

- Revocation of IAM permissions
- Automatic notification of security teams

## Deployment Instructions

### Prerequisites

1. AWS Organizations with all features enabled
2. CloudTrail enabled in all accounts
3. Verify Network Perimeter Control best practices

   1. Configure VPC Endpoints for ECR API and ECR Docker. Sample VPC endpoint policy:

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

### Configuration

The ECR Image Layer Access Security Package package accepts the following configuration options:

| Parameter           | Type       | Description                   | Default value    |
| ------------------- | ---------- | ----------------------------- | ---------------- |
| allowedRoleNames    | `string[]` | List of allowed role names    | No default value |
| allowedNetworks     | `string[]` | List of allowed networks      | No default value |
| allowedVPCEndpoints | `string[]` | List of allowed VPC endpoints | No default value |

Enable this security package in your `deployment-manifest.yml` file by adding the `ecrImageLayerAccess` field under `spec.securityPackages`. Example:

```yaml
# Specification for the TrustStack security framework deployment
spec:
  # Configuration for the security packages to deploy
  securityPackages:
    # Configuration for the ECR Image Layer Access security package
    ecrImageLayerAccess:
      # Whether the ECR Image Layer Access security package is enabled
      enabled: true
      # Configuration for the ECR Image Layer Access security package
      configuration:
        # List of allowed role names
        allowedRoleNames:
          - TrustedRole
          - TrustedRole2
        # List of allowed networks
        allowedNetworks:
          - 10.0.0.0/8
          - 172.16.0.0/12
          - 192.168.0.0/16
        # List of allowed VPC endpoints
        allowedVPCEndpoints:
          - vpce-0123456789abcdefg
          - vpce-0123456789abcdefh
```

## Security Best Practices

In addition to the controls provided in this package, consider implementing these best practices:

1. **Principle of Least Privilege**: Grant minimal permissions required for users and applications to perform their tasks
2. **Image Scanning**: Enable ECR image scanning to identify vulnerabilities in container images
3. **Image Signing**: Implement image signing and verification to ensure only trusted images are used
4. **Regular Access Reviews**: Periodically review and audit access patterns to ECR resources
5. **Cross-Account Access Controls**: If sharing ECR repositories across accounts, implement strict cross-account access policies

## Compliance Considerations

This package helps address compliance requirements related to data protection and access control in several frameworks:

- **NIST 800-53**: Addresses control families including Access Control (AC), Audit and Accountability (AU), and System and Information Integrity (SI)
- **PCI DSS**: Helps meet requirements for restricting access to sensitive data (Requirements 7 and 8)
- **HIPAA**: Supports technical safeguards for access control and audit controls
- **FedRAMP**: Aligns with security controls for data protection and access management
