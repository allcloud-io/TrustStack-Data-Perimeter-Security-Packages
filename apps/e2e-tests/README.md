# TrustStack End-to-End Testing Resources

This AWS CDK application deploys the necessary infrastructure resources for end-to-end testing of the TrustStack security framework in an AWS environment.

## Overview

The End-to-End Tests application is part of the TrustStack monorepo and provides a comprehensive testing environment to validate TrustStack's security controls against real AWS infrastructure. It provisions AWS resources required to test various security packages and their controls in a controlled environment.

## Stacks

The application consists of two main CDK stacks:

### 1. E2ETestingResourcesStack

This stack creates foundational AWS resources required for testing TrustStack security packages:

- **VPC Infrastructure**:
  - Authorized VPC with public and private subnets
  - Unauthorized VPC for testing negative scenarios
  - VPC Endpoints for ECR Docker API, SNS, and S3 gateway
- **IAM Resources**:
  - IAM Role for Lambda functions with VPC access
  - IAM User with ECR access for testing image layer security
- **EC2 Resources**:
  - Bastion host in the private subnet with SSM access for secure connections
  - Security groups for different test scenarios
- **SNS Resources**:
  - SNS Topic for testing subscription security controls
- **ECR Resources**:
  - ECR Repository for testing image layer security controls

All resource identifiers are stored in SSM Parameter Store for easy retrieval in test scripts.

### 2. MockHTTPAPIStack

This stack provides a mock HTTP API with endpoints that simulate real-world scenarios for testing:

- HTTP API Gateway with Lambda integrations
- Lambda functions that handle SNS subscription confirmations with various behaviors:
  - Immediate confirmation
  - Delayed confirmation
  - Confirmation via SubscribeURL
  - Delayed confirmation via SubscribeURL

## Usage

### Deployment

To deploy the stacks to your AWS account:

```bash
# Deploy the application
task e2e:cdk:deploy -- --all
```

To deploy only a specific stack:

```bash
task e2e:cdk:deploy -- E2ETestingResources
# or
task e2e:cdk:deploy -- MockHTTPAPI
```

### Running Tests

The infrastructure provisioned by this application is used by TrustStack's automated tests to validate security controls. After deployment, the resources can be referenced in test scripts through SSM parameters.

## Resource Cleanup

To avoid incurring charges, remember to destroy the resources when they are no longer needed:

```bash
task e2e:cdk:destroy -- --all
```

## Structure

- `bin/` - Contains the CDK app entry point
- `lib/` - Contains the stack definitions and constructs
  - `e2e-testing-resources.stack.ts` - Defines the E2ETestingResourcesStack
  - `mock-http-api/` - Contains the MockHTTPAPIStack and related lambda functions
    - `lambdas/` - Implementation of mock HTTP endpoints
- `cdk.json` - CDK application configuration
