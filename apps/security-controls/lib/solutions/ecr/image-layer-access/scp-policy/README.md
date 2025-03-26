# SCP Policy for ECR Image Layer Access Control

This Service Control Policy (SCP) restricts the use of the `ecr:GetDownloadUrlForLayer` API action to help prevent unauthorized access to ECR private image layers through presigned URLs.

## Policy Description

The SCP policy implements preventative controls by:

1. Denying the `ecr:GetDownloadUrlForLayer` API action for all principals except those explicitly allowed
2. Allowing specific IAM roles or conditions (e.g., specific IP ranges, VPCs) to use the API when necessary

## Policy Implementation

Below is the SCP policy that can be deployed at the AWS Organizations level:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "DenyGetDownloadUrlForLayerExceptAllowed",
      "Effect": "Deny",
      "Action": ["ecr:GetDownloadUrlForLayer"],
      "Resource": "*",
      "Condition": {
        "StringNotLike": {
          "aws:PrincipalARN": [
            "arn:aws:iam::*:role/AdminRole",
            "arn:aws:iam::*:role/DeploymentRole",
            "arn:aws:iam::*:role/ECRAccessRole"
          ]
        }
      }
    }
  ]
}
```

## Customization Options

The policy can be customized in several ways to meet your organization's specific requirements:

### Allow Based on Role Names

You can modify the `aws:PrincipalARN` condition to include specific role patterns:

```json
"StringNotLike": {
  "aws:PrincipalARN": [
    "arn:aws:iam::*:role/AdminRole",
    "arn:aws:iam::*:role/*-ECRAccess-*"
  ]
}
```

### Allow Based on Source IP

To allow access only from specific IP ranges:

```json
"Condition": {
  "StringNotLike": {
    "aws:PrincipalARN": [
      "arn:aws:iam::*:role/AdminRole"
    ]
  },
  "NotIpAddress": {
    "aws:SourceIp": [
      "192.168.0.0/16",
      "10.0.0.0/8"
    ]
  }
}
```

### Allow Based on VPC Endpoint

To allow access only through specific VPC endpoints:

```json
"Condition": {
  "StringNotLike": {
    "aws:PrincipalARN": [
      "arn:aws:iam::*:role/AdminRole"
    ]
  },
  "StringNotEquals": {
    "aws:SourceVpce": [
      "vpce-11111111",
      "vpce-22222222"
    ]
  }
}
```

## Deployment

### Prerequisites

- AWS Organizations with all features enabled
- Administrative access to the organization management account

### Deployment Steps

1. Log in to the AWS Organizations management account
2. Navigate to AWS Organizations > Policies > Service control policies
3. Click "Create policy"
4. Enter a name and description for the policy
5. Copy and paste the JSON policy document (customized as needed)
6. Click "Create policy"
7. Attach the policy to the appropriate organizational units (OUs) or accounts

## Considerations

- **Testing**: Before applying this SCP widely, test it on non-production accounts to ensure it doesn't disrupt legitimate workflows
- **Exceptions**: Consider specific workflows that legitimately require `GetDownloadUrlForLayer` and adjust the policy accordingly
- **CI/CD Pipelines**: Ensure CI/CD pipelines that pull ECR images are either excluded from this policy or configured to use IAM roles that are explicitly allowed

## Monitoring and Compliance

After deploying this SCP, you should:

1. Monitor AWS CloudTrail for any denied `ecr:GetDownloadUrlForLayer` API calls
2. Review and update the allowed roles/conditions regularly as your environment evolves
3. Validate policy effectiveness through regular security assessments
