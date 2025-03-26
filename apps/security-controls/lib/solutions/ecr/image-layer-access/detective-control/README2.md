# Lambda Hook for ECR Image Layer Access Control

This component implements a responsive control mechanism that automatically remediates unauthorized access attempts to ECR image layers through the `GetDownloadUrlForLayer` API.

## Solution Overview

The Lambda hook provides automated remediation by:

1. Receiving alerts from the detective control when unauthorized `GetDownloadUrlForLayer` API calls are detected
2. Analyzing the context of the API call to determine if it's unauthorized
3. Taking appropriate remediation actions, such as:
   - Revoking IAM permissions
   - Terminating the user session
   - Notifying security teams

## Implementation Details

### Lambda Function Architecture

The remediation Lambda function:

1. Receives events from CloudWatch Events (or directly from the detective control Lambda)
2. Evaluates the event context against a set of rules to determine if it represents an unauthorized access
3. Executes appropriate remediation actions
4. Logs the event and actions taken for audit purposes

## Deployment Instructions

### Prerequisites

- AWS CloudTrail enabled in your account
- CloudWatch Events configured to capture CloudTrail events
- SNS topic for security alerts
- Permissions to create CloudFormation stacks, Lambda functions, and IAM roles

### Deployment Steps

1. Create a new CloudFormation stack using the template above
2. Provide the ARN of an existing SNS topic for security alerts
3. Customize the allowed role patterns and networks as needed
4. Review the IAM permissions and adjust as necessary for your environment
5. Deploy the stack

## Customization Options

### Customizing Remediation Actions

You can enhance the remediation Lambda function to:

- Integrate with your incident response workflow
- Add more sophisticated rules for determining unauthorized access
- Implement different remediation strategies based on the context

### Extending Monitoring Coverage

You can extend the CloudWatch Events rule to:

- Monitor additional ECR-related API calls
- Correlate events across multiple services
- Implement more complex event patterns for detection

## Security Considerations

- **IAM Permissions**: The Lambda function needs permissions to modify IAM policies. These should be carefully scoped in a production environment.
- **False Positives**: The remediation logic should be carefully tested to avoid disrupting legitimate workflows.
- **Testing**: Always test the remediation actions in a non-production environment first.

## Maintenance and Operations

- Regularly review the logs from the remediation function
- Update the allowed role patterns and networks as your environment evolves
- Conduct periodic tests to ensure the remediation workflow functions as expected
