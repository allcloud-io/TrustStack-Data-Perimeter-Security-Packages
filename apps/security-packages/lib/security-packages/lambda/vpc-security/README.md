# Lambda VPC Security Package

## Overview

AWS Lambda allows associating AWS Lambda functions with either an AWS managed network or a customer managed VPC. Running Lambda functions outside of a VPC can create security risks by potentially exposing functions to unauthorized network access or allowing Lambda functions to exfiltrate data to untrusted networks.

This security package helps implement the AWS data perimeter by ensuring Lambda functions are deployed only within approved customer-managed VPCs with proper network controls.

## Security Controls

### Preventative Controls

The preventative control uses Service Control Policies (SCPs) to:

- Deny Lambda function creation without VPC configurations using the `lambda:VpcIds` condition key
- Optionally restrict Lambda functions to specific approved VPCs

Example SCP:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyLambdaFunctionCreationWithoutVpcConfig",
      "Effect": "Deny",
      "Action": ["lambda:CreateFunction", "lambda:UpdateFunctionConfiguration"],
      "Resource": "*",
      "Condition": {
        "Null": {
          "lambda:VpcIds": "true"
        }
      }
    }
  ]
}
```

### Proactive Controls

The proactive control uses CloudFormation Hooks to:

- Validate that AWS::Lambda::Function resources specify the VpcConfig property during deployment
- Ensure Lambda functions specify both subnet IDs and security group IDs in their VPC configuration
- Optionally validate that VPC configurations use only approved VPCs

### Detective Controls

The detective control monitors CloudTrail for Lambda function creation and update events:

- Identifies Lambda functions created without VPC configurations
- Creates Security Hub findings for non-compliant resources
- Uses the AWS Config rule `lambda-inside-vpc` for additional coverage

### Responsive Controls

The responsive control automatically remediates non-compliant Lambda functions:

- Processes Security Hub findings for Lambda functions without VPC configurations
- Automatically updates Lambda functions to use an approved VPC configuration
- Updates Security Hub findings with remediation status

## Configuration

The Lambda VPC Security package accepts the following configuration options:

| Parameter     | Type     | Description                                                                                                       | Default |
| ------------- | -------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| allowedVPCIDs | string[] | Optional list of VPC IDs that Lambda functions are allowed to use. If not specified, any VPC is considered valid. | []      |

Example configuration:

```yaml
securityPackages:
  lambdaVpcSecurity:
    enabled: true
    configuration:
      allowedVPCIDs:
        - vpc-0123456789abcdef0
        - vpc-0123456789abcdef1
```

## Deployment Considerations

- Ensure that all Lambda functions have access to the resources they need through VPC endpoints or NAT gateways
- Consider implementing this package during the early stages of your AWS environment setup
- Review existing Lambda functions to ensure they comply with this security control before enabling it
