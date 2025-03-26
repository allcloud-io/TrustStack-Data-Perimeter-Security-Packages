# Detective Control for ECR Image Layer Access

This component implements detective controls to monitor AWS CloudTrail for any `ecr:GetDownloadUrlForLayer` API calls in your AWS environment. It creates a CloudWatch Events rule that triggers an alert when these API calls are detected.

## Solution Overview

The detective control consists of:

1. A CloudWatch Events rule that monitors for `ecr:GetDownloadUrlForLayer` API calls
2. An SNS topic for notifications
3. A Lambda function that processes the events and sends detailed alerts

## Implementation Details

### CloudWatch Events Rule

The CloudWatch Events rule filters CloudTrail events for `ecr:GetDownloadUrlForLayer` API calls:

```json
{
  "source": ["aws.ecr"],
  "detail-type": ["AWS API Call via CloudTrail"],
  "detail": {
    "eventSource": ["ecr.amazonaws.com"],
    "eventName": ["GetDownloadUrlForLayer"]
  }
}
```

### SNS Topic

The SNS topic receives alerts when `GetDownloadUrlForLayer` API calls are detected. Security teams can subscribe to this topic to receive notifications.

### Lambda Function

The Lambda function processes the CloudTrail events and generates detailed alerts with the following information:

- Who made the API call (IAM identity)
- Which ECR repository and image layer was accessed
- Source IP address
- Request parameters
- Timestamp and request context

## CloudFormation Template

The following CloudFormation template can be used to deploy the detective control:

```yaml
AWSTemplateFormatVersion: "2010-09-09"
Description: "Detective Control for ECR Image Layer Access"

Parameters:
  AlertEmail:
    Type: String
    Description: Email address to receive alerts
    Default: ""

Resources:
  ECRImageLayerAccessSNSTopic:
    Type: AWS::SNS::Topic
    Properties:
      DisplayName: ECR-Image-Layer-Access-Alerts
      TopicName: ECRImageLayerAccessAlerts

  EmailSubscription:
    Type: AWS::SNS::Subscription
    Condition: HasAlertEmail
    Properties:
      Protocol: email
      Endpoint: !Ref AlertEmail
      TopicArn: !Ref ECRImageLayerAccessSNSTopic

  ECRImageLayerAccessEventRule:
    Type: AWS::Events::Rule
    Properties:
      Name: ECRImageLayerAccessMonitoring
      Description: Monitors for GetDownloadUrlForLayer API calls
      EventPattern:
        source:
          - aws.ecr
        detail-type:
          - AWS API Call via CloudTrail
        detail:
          eventSource:
            - ecr.amazonaws.com
          eventName:
            - GetDownloadUrlForLayer
      State: ENABLED
      Targets:
        - Arn: !GetAtt ECRImageLayerAccessMonitorFunction.Arn
          Id: ECRImageLayerAccessMonitorFunction

  ECRImageLayerAccessMonitorFunction:
    Type: AWS::Lambda::Function
    Properties:
      FunctionName: ECRImageLayerAccessMonitor
      Description: Processes GetDownloadUrlForLayer API calls and sends alerts
      Runtime: python3.9
      Handler: index.handler
      Role: !GetAtt ECRImageLayerAccessMonitorRole.Arn
      Code:
        ZipFile: |
          import json
          import boto3
          import os

          def handler(event, context):
              print(f"Processing event: {json.dumps(event)}")
              
              # Extract relevant information from the CloudTrail event
              detail = event.get('detail', {})
              event_name = detail.get('eventName')
              event_time = detail.get('eventTime')
              source_ip = detail.get('sourceIPAddress')
              
              # Get IAM identity information
              user_identity = detail.get('userIdentity', {})
              identity_type = user_identity.get('type')
              identity_name = user_identity.get('userName') or user_identity.get('sessionName') or 'Unknown'
              
              # Get request parameters
              request_parameters = detail.get('requestParameters', {})
              repository_name = request_parameters.get('repositoryName', 'Unknown')
              layer_digest = request_parameters.get('layerDigest', 'Unknown')
              
              # Construct alert message
              alert_message = f"""
              ALERT: GetDownloadUrlForLayer API Call Detected
              
              Time: {event_time}
              Identity Type: {identity_type}
              Identity Name: {identity_name}
              Source IP: {source_ip}
              Repository: {repository_name}
              Layer Digest: {layer_digest}
              
              Raw Event: {json.dumps(detail, indent=2)}
              """
              
              # Send notification to SNS
              sns = boto3.client('sns')
              sns.publish(
                  TopicArn=os.environ['SNS_TOPIC_ARN'],
                  Subject='ECR GetDownloadUrlForLayer API Call Detected',
                  Message=alert_message
              )
              
              return {
                  'statusCode': 200,
                  'body': json.dumps('Alert sent successfully')
              }

      Environment:
        Variables:
          SNS_TOPIC_ARN: !Ref ECRImageLayerAccessSNSTopic
      Timeout: 30
      MemorySize: 128

  ECRImageLayerAccessMonitorRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Effect: Allow
            Principal:
              Service: lambda.amazonaws.com
            Action: sts:AssumeRole
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
      Policies:
        - PolicyName: SNSPublishPolicy
          PolicyDocument:
            Version: "2012-10-17"
            Statement:
              - Effect: Allow
                Action: sns:Publish
                Resource: !Ref ECRImageLayerAccessSNSTopic

  LambdaPermissionForEvents:
    Type: AWS::Lambda::Permission
    Properties:
      FunctionName: !Ref ECRImageLayerAccessMonitorFunction
      Action: lambda:InvokeFunction
      Principal: events.amazonaws.com
      SourceArn: !GetAtt ECRImageLayerAccessEventRule.Arn

Conditions:
  HasAlertEmail: !Not [!Equals [!Ref AlertEmail, ""]]

Outputs:
  SNSTopicARN:
    Description: ARN of the SNS topic for alerts
    Value: !Ref ECRImageLayerAccessSNSTopic
  EventRuleName:
    Description: Name of the CloudWatch Events rule
    Value: !Ref ECRImageLayerAccessEventRule
```

## Deployment Instructions

### Prerequisites

- AWS CloudTrail enabled in your account
- Permissions to create CloudFormation stacks, Lambda functions, IAM roles, CloudWatch Events rules, and SNS topics

### Deployment Steps

1. Create a new CloudFormation stack using the template above
2. Specify an email address to receive alerts (optional)
3. Once the stack is created, confirm the SNS subscription by clicking the link in the verification email (if an email was provided)

## Customization Options

### Additional Filtering

You can modify the CloudWatch Events rule pattern to add more specific filtering, such as:

- Filtering by specific ECR repositories
- Excluding specific IAM roles (e.g., legitimate CI/CD roles)
- Focusing on calls from specific IP ranges

### Integration with Security Tools

You can enhance the Lambda function to:

- Send alerts to your SIEM system
- Create security incidents in your ticketing system
- Trigger automated remediation workflows

## Maintenance and Monitoring

- Regularly review the alerts to identify patterns of legitimate and potentially unauthorized access
- Update the filtering rules based on your findings to reduce false positives
- Consider implementing automated remediation for clearly unauthorized access
