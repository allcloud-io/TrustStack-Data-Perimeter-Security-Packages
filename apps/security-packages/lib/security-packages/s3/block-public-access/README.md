# S3 Block Public Access CloudFormation Package

This document outlines a comprehensive approach to enforcing S3 Block Public Access settings using multiple layers of controls.

**Table of Contents:**

- [S3 Block Public Access CloudFormation Package](#s3-block-public-access-cloudformation-package)
  - [Overview](#overview)
    - [Security Benefits](#security-benefits)
  - [Controls](#controls)
    - [Preventative Control: Service Control Policy](#preventative-control-service-control-policy)
    - [Proactive Control: CloudFormation Hook](#proactive-control-cloudformation-hook)
      - [How It Works](#how-it-works)
      - [Usage](#usage)
        - [Compliant Example](#compliant-example)
        - [Non-Compliant Examples](#non-compliant-examples)
      - [Testing](#testing)
    - [Detective Control: CloudTrail Monitoring](#detective-control-cloudtrail-monitoring)
      - [Key Components](#key-components)
      - [Security Benefits](#security-benefits-1)
    - [Responsive Control: Automated Remediation](#responsive-control-automated-remediation)
  - [Implementation Guide](#implementation-guide)
  - [Conclusion](#conclusion)

## Overview

S3 Block Public Access is a feature that provides settings to help you manage public access to Amazon S3 resources. This package implements a defense-in-depth approach to ensure all S3 buckets are protected from public access using Service Control Policies (SCPs), CloudFormation hooks, monitoring, and automated remediation.

### Security Benefits

Enabling Block Public Access on all S3 buckets provides several security benefits:

1. **Prevents accidental exposure**: Blocks public access even if bucket policies or ACLs are misconfigured
2. **Defense in depth**: Adds an additional layer of protection against data leaks
3. **Compliance**: Helps meet security compliance requirements for data protection
4. **Standardization**: Enforces consistent security controls across all S3 resources

## Controls

The package implements a comprehensive set of security controls including preventative (SCP policies), proactive (CloudFormation hooks), detective (CloudTrail monitoring), and responsive (automated remediation) measures to protect against accidental or intentional public exposure of S3 buckets. These controls help prevent data breaches, unauthorized access to sensitive information, and compliance violations by ensuring that S3 resources maintain proper access restrictions at all times.

### Preventative Control: Service Control Policy

The Service Control Policy (SCP) in `scp-policy/policy.json` implements preventative controls. It complements the CloudFormation hook by providing a preventative control at the AWS Organizations level. It contains 5 key statements:

1. **EnforceSecureTransportForS3Operations**: Prevents operations like `PutBucketPolicy`, `PutBucketAcl`, and `PutObjectAcl` when secure transport (HTTPS) is not used, ensuring all S3 operations are encrypted in transit.

2. **DenyDisablingAnyBucketPublicAccessSettings**: Prevents anyone from disabling the Block Public Access settings on individual buckets by denying the `PutPublicAccessBlock` action when any of the four settings would be set to `false`.

3. **DenySettingPublicBucketPolicies**: Blocks the ability to set public bucket policies by denying `PutBucketPolicy` when the policy would make the bucket public.

4. **DenyDisablingAccountLevelPublicAccessBlock**: Ensures that account-level Block Public Access settings cannot be disabled by denying the `PutAccountPublicAccessBlock` action when any of the four settings would be set to `false`.

5. **DenyBucketCreationWithoutPublicAccessBlock**: Prevents the creation of new buckets without Block Public Access enabled by denying `CreateBucket` operations that don't set the public access block flag to `true`.

### Proactive Control: CloudFormation Hook

The CloudFormation hook validates that all S3 buckets and Multi-Region Access Points defined in a CloudFormation template have Block Public Access enabled. This helps enforce security best practices and prevent accidental public exposure of S3 buckets.

#### How It Works

The hook inspects all resources in a CloudFormation template and checks for:

1. `AWS::S3::Bucket` resources
2. `AWS::S3::MultiRegionAccessPoint` resources

For each of these resources, it verifies that:

1. The `PublicAccessBlockConfiguration` property is defined
2. All four Block Public Access settings are enabled:
   - `BlockPublicAcls: true`
   - `IgnorePublicAcls: true`
   - `BlockPublicPolicy: true`
   - `RestrictPublicBuckets: true`

If any S3 bucket or Multi-Region Access Point does not meet these requirements, the hook will fail the CloudFormation deployment with a detailed error message.

#### Usage

##### Compliant Example

```yaml
Resources:
  CompliantS3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-secure-bucket
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        IgnorePublicAcls: true
        BlockPublicPolicy: true
        RestrictPublicBuckets: true
```

##### Non-Compliant Examples

Missing PublicAccessBlockConfiguration:

```yaml
Resources:
  NonCompliantS3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-insecure-bucket
      # Missing PublicAccessBlockConfiguration
```

Incomplete PublicAccessBlockConfiguration:

```yaml
Resources:
  PartiallyCompliantS3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-partially-secure-bucket
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        IgnorePublicAcls: true
        # Missing BlockPublicPolicy and RestrictPublicBuckets
```

#### Testing

The hook includes unit tests that verify its behavior with various S3 bucket configurations.

Sample CloudFormation templates are provided in the `sample-templates` directory to demonstrate compliant and non-compliant configurations. You can use these templates to conduct an end-to-end test of the hook.

### Detective Control: CloudTrail Monitoring

The detective control uses EventBridge and a Lambda function to monitor S3 bucket configurations and detect non-compliant buckets that don't have Block Public Access enabled. The process works as follows:

1. **CloudTrail logging**: AWS CloudTrail captures all S3 API calls related to bucket creation and configuration
2. **EventBridge rule**: An EventBridge rule filters CloudTrail events for relevant S3 operations:
   - `CreateBucket`
   - `PutBucketPolicy`
   - `PutBucketAcl`
   - `PutPublicAccessBlock`
   - `DeletePublicAccessBlock`
3. **Lambda processing**: When a relevant event is detected, the Lambda function:
   - Extracts bucket information from the event
   - Checks if the bucket has proper Block Public Access settings
   - Verifies all four Block Public Access settings are enabled
   - For buckets without explicit settings, checks if policies or ACLs make the bucket public
4. **Security Hub integration**: The Lambda creates findings in AWS Security Hub:
   - Non-compliant buckets generate HIGH severity findings
   - Compliant buckets update existing findings to RESOLVED status
   - Findings include detailed remediation guidance

#### Key Components

The detective control implementation consists of:

1. **Lambda Function**: Processes events and creates Security Hub findings
2. **EventBridge Rule**: Triggers the Lambda based on CloudTrail S3 events
3. **IAM Role**: Provides permissions for the Lambda to access S3 and Security Hub
4. **CloudWatch Logs**: Stores Lambda execution logs for troubleshooting

#### Security Benefits

1. **Near real-time detection**: Detects non-compliant buckets shortly after creation or modification
2. **Centralized visibility**: Integrates with Security Hub for centralized security findings
3. **Continuous monitoring**: Provides ongoing assurance that buckets maintain compliance
4. **Compliance support**: Maps findings to common compliance frameworks (NIST, PCI DSS, CIS)

## Conclusion

By following the implementation guide and customizing the package to your organization's specific requirements, you can establish robust protection for your S3 resources and align with AWS security best practices.
