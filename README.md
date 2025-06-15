# TrustStack Data Perimeter Security Packages Engine

TrustStack is a prevention-first cybersecurity framework that enables highly regulated organizations, government agencies, and defense units to securely run sensitive workloads in AWS commercial regions. Visit [TrustStack's documentation](https://github.com/allcloud-io/TrustStack) for more information.

TrustStack Data Perimeter Security Packages Engine generates security configurations that can be seamlessly deployed using the AWS Landing Zone Accelerator (LZA). These security configurations implement [AWS data perimeter service-specific guidance](https://github.com/aws-samples/data-perimeter-policy-examples/tree/main/service_specific_guidance) as part of the TrustStack framework. For more details, see the [How it works](#how-it-works) section.

**Table of Contents:**

This guide helps you understand how to implement **TrustStack Data Perimeter Security Packages** in your environment and contribute to the project's development. Use the table of contents below to navigate to the information most relevant to your needs.

- [About this project](#about-this-project)
  - [Data Perimeter Guidelines](#data-perimeter-guidelines)
  - [Security Packages Offered by TrustStack](#security-packages-offered-by-truststack)
- [How it works?](#how-it-works)
- [Deployment Guide](#deployment-guide)
- [Development Guide](#development-guide)

## About this project

### Data Perimeter Guidelines

The [Data Perimeter Guidelines](docs/data-perimeter-guidelines.md) document provides general guidance on implementing data perimeter controls in AWS environments to establish clear boundaries that protect your AWS resources and data. The security packages offered by TrustStack implement service-specific considerations that complement these general guidelines.

**Important Note**: TrustStack Data Perimiter Security Packages currently focuses on service-specific controls and does not include foundational/default data perimeter policies. Organizations should implement comprehensive data perimeter controls by combining TrustStack Data Perimeter Security Packages with foundational data perimeter policies based on their specific requirements.

### Security Packages Offered by TrustStack

TrustStack offers a suite of security packages that address service-specific security concerns while maintaining developer agility. Each security package implements service-specific guidance for data perimeter implementation. For detailed information, refer to [TrustStack Security Packages](apps/security-packages/README.md).

## How it works?

At its core, TrustStack Data Perimeter Security Packages are generated configurations for AWS Landing Zone Accelerator (LZA) that can be seamlessly integrated into your existing AWS multi-account environment.

**Deployment Architecture:**

We recommend deploying the TrustStack Data Perimeter Security Packages Engine in the same account as your Landing Zone Accelerator deployment to ensure optimal integration and management.

**Configuration Generation Process:**

1. **Asset Generation**: When you deploy the TrustStack Data Perimeter Security Packages Engine, an Amazon S3 bucket is automatically created in your AWS account. This bucket serves as the output location for all generated Landing Zone Accelerator-compatible assets.

2. **Security Package Selection**: Based on your organization's specific requirements and compliance needs, you can select from available TrustStack Data Perimeter Security Packages.

3. **Download and Deploy**: The generated security configurations can be downloaded from the S3 bucket and integrated into your Landing Zone Accelerator deployment, enabling you to deploy your chosen security packages across your AWS organization.

This approach ensures that TrustStack's prevention-first security controls are consistently applied across all accounts and workloads in your AWS environment while maintaining compatibility with your existing LZA infrastructure.

## Deployment Guide

The [Deployment Guide](docs/deployment-guide.md) provides step-by-step instructions for deploying TrustStack Data Perimeter Security Packages in your AWS organization.

## Development Guide

The [Development Guide](docs/development-guide.md) provides detailed instructions for setting up your local development environment and contributing to the project.
