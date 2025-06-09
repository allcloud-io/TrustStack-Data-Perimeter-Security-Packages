# TrustStack: Enabling Sensitive Workloads in the Public Cloud with Prevention-First Security and Builder Agility

TrustStack is a prevention-first cybersecurity framework that enables highly regulated organizations, government agencies, and defense units to securely run sensitive workloads in AWS commercial regions. TrustStack was built in collaboration with the AWS Identity Services Team and Landing Zone Accelerator Service Team to combine military-grade standards with developer agility, ensuring sensitive workloads are protected without compromising the speed of innovation.

This project implements the Data Perimeter Accelerator component of the TrustStack framework. The Data Perimeter Accelerator generates security configurations which you can easily deploy using the AWS Landing Zone Accelerator (LZA). Reference the [How it works?](#how-it-works) section for more details.

**Table of Contents:**

This guide is organized to help you understand TrustStack's capabilities, implement it in your environment, and contribute to the project's development. Below table of contents should help you navigate to the relevant information for your needs.

- [TrustStack: Enabling Sensitive Workloads in the Public Cloud with Prevention-First Security and Builder Agility](#truststack-enabling-sensitive-workloads-in-the-public-cloud-with-prevention-first-security-and-builder-agility)
  - [About TrustStack](#about-truststack)
    - [Prevention-First Philosophy: Detection Isn't Enough](#prevention-first-philosophy-detection-isnt-enough)
    - [Why Prevention Matters for Sensitive Workloads](#why-prevention-matters-for-sensitive-workloads)
    - [Key Differentiators](#key-differentiators)
    - [Data Perimeter Guidelines](#data-perimeter-guidelines)
    - [Security Packages Offered By TrustStack](#security-packages-offered-by-truststack)
  - [How it works?](#how-it-works)
  - [User Guide](#user-guide)
  - [Local Development Guide](#local-development-guide)

## About TrustStack

### Prevention-First Philosophy: Detection Isn't Enough

At TrustStack, we believe that sensitive workloads cannot rely solely on detection mechanisms. Detection is reactive by nature, addressing threats after they occur. For mission-critical applications and sensitive data, this approach is insufficient. TrustStack puts prevention at the forefront, embedding robust guardrails and prescriptive controls directly into the cloud environment to stop unauthorized actions before they happen.

Sensitive workloads demand a proactive security approach that eliminates vulnerabilities before they can be exploited. TrustStack ensures that prevention is the foundation of its security architecture while retaining builders' agility to innovate and deploy applications seamlessly.

### Why Prevention Matters for Sensitive Workloads

Sensitive workloads in government, defense, and highly regulated industries operate in environments where a single security breach can have catastrophic consequences. A detection-only approach introduces unacceptable risk by allowing threats to materialize before countermeasures are deployed. Prevention-first security eliminates these vulnerabilities before they can be exploited.

TrustStack flips this paradigm by embedding preventive controls directly into the infrastructure:

- Unauthorized actions are blocked at the source, reducing reliance on reactive measures like incident response or forensic analysis.
- Developers retain their agility through pre-built constructs that enforce security policies without slowing down application deployment cycles.

This prevention-first approach ensures that sensitive workloads remain secure while enabling organizations to innovate confidently in the cloud.

### Key Differentiators

1. **Preventive Controls First, Detection as Backup** - TrustStack ensures that sensitive workloads are shielded by a robust prevention layer, minimizing attack surfaces and eliminating potential vulnerabilities before they can be exploited. While detection mechanisms are integrated for monitoring and alerting, they serve as a secondary layer of defense—not the primary one.

2. **Builders' Agility Through Guardrails-Aware CDK Construct Library** - TrustStack retains developer agility through its guardrails-aware CDK construct library, enabling builders to deploy applications securely within a "walled garden" environment. Developers can focus on innovation while TrustStack enforces security policies automatically in the background, ensuring compliance without slowing down application deployment cycles.

3. **Prescriptive Data Perimeter Implementation** - A fully prescriptive data perimeter ensures that sensitive data remains isolated and protected from unauthorized access or accidental exposure. This guarantees compliance with stringent regulatory requirements while maintaining operational efficiency.

4. **Generative AI for Developer Productivity** - Powered by TrustStack, developers gain access to a Generative AI-driven environment that accelerates productivity while enforcing security best practices. The AI provides guardrails-aware coding suggestions, automates repetitive tasks, and enhances deployment agility without compromising security.

5. **End-to-End Cloud-Native Detective Controls** - Advanced monitoring capabilities provide real-time threat detection and alerting, enabling organizations to identify and mitigate risks seamlessly across their cloud environments.

6. **Pre-Provisioned Incident Response Environment** - TrustStack includes a ready-to-use incident response environment, allowing teams to respond rapidly to breaches or anomalies without delays in setup or provisioning.

7. **Seamless Integration with AWS Services** - Built-in collaboration with AWS experts, TrustStack integrates natively with AWS Identity Services and other tools to provide a seamless security experience for builders and operators alike.

### Data Perimeter Guidelines

The [Data Perimeter Guidelines](docs/data-perimeter-guidelines.md) document provides comprehensive guidance on implementing data perimeter controls in AWS environments to establish clear boundaries that protect your AWS resources and data. The security packages offered by TrustStack comply with these guidelines.

### Security Packages Offered By TrustStack

TrustStack offers a comprehensive set of security packages that protect sensitive workloads while maintaining developer agility. Each security package addresses specific security concerns. Refer to [TrustStack Security Packages](apps/security-packages/README.md) for detailed information about the security controls offered by TrustStack.

## How it works?

At its core, TrustStack's Data Perimeter Accelerator is a configuration engine for AWS Landing Zone Accelerator (LZA). The framework generates LZA-compatible security configurations that can be seamlessly integrated into your existing AWS multi-account environment.

**Deployment Architecture:**

We recommend deploying the TrustStack framework in the same account as your Landing Zone Accelerator deployment to ensure optimal integration and management.

**Configuration Generation Process:**

1. **Asset Generation**: When you deploy the TrustStack framework, an Amazon S3 bucket is automatically created in your AWS account. This bucket serves as the output location for all Landing Zone Accelerator-compatible assets generated by the TrustStack framework.

2. **Security Package Selection**: You can choose from TrustStack's comprehensive suite of security packages based on your organization's specific requirements and compliance needs.

3. **Download and Deploy**: The generated security configurations can be downloaded from the S3 bucket and integrated into your Landing Zone Accelerator deployment, enabling you to deploy your chosen security packages across your AWS organization.

This approach ensures that TrustStack's prevention-first security controls are consistently applied across all accounts and workloads in your AWS environment while maintaining compatibility with your existing LZA infrastructure.

## User Guide

<!-- TODO: Add an introduction paragraph on how to deploy and use the TrustStack framework -->

The [User Guide](docs/user-guide.md) provides a step-by-step guide on how to deploy the TrustStack framework in your AWS organization.

## Local Development Guide

The [Local Development Guide](docs/local-development-guide.md) provides detailed instructions for setting up your local development environment.
