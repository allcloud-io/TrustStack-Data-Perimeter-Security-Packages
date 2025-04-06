# CloudFormation Hook for SNS Subscription Security

This CloudFormation hook validates that all SNS subscriptions defined in a CloudFormation template have trusted endpoints. This helps enforce security best practices and prevent data exfiltration through untrusted SNS subscription endpoints.

**Table of Contents:**

- [CloudFormation Hook for SNS Subscription Security](#cloudformation-hook-for-sns-subscription-security)
  - [Security Benefits](#security-benefits)
  - [How It Works](#how-it-works)
  - [Usage](#usage)
    - [Compliant Example](#compliant-example)
    - [Non-Compliant Examples](#non-compliant-examples)
  - [Testing](#testing)

## Security Benefits

Validating SNS subscription endpoints provides several security benefits:

1. **Prevents data exfiltration**: Ensures that SNS notifications are only sent to trusted endpoints
2. **Reduces attack surface**: Limits the potential for attackers to subscribe to SNS topics with untrusted endpoints
3. **Enforces least privilege**: Ensures that SNS topics only communicate with approved endpoints
4. **Compliance**: Helps meet security compliance requirements for data protection

## How It Works

The hook inspects all resources in a CloudFormation template and checks for:

1. `AWS::SNS::Subscription` resources

For each of these resources, it verifies that:

1. The `Protocol` property is defined
2. The `Endpoint` property is defined (for protocols that require it)
3. For email and email-json protocols, the email domain is in the list of trusted domains
4. For http and https protocols, the URL domain is in the list of trusted domains
5. For AWS service protocols (sqs, lambda, firehose, application), no additional validation is performed

If any SNS subscription does not meet these requirements, the hook will fail the CloudFormation deployment with a detailed error message.

## Usage

### Compliant Example

```yaml
Resources:
  MySnsTopic:
    Type: AWS::SNS::Topic
    Properties:
      TopicName: my-topic

  CompliantEmailSubscription:
    Type: AWS::SNS::Subscription
    Properties:
      Protocol: email
      Endpoint: user@example.com
      TopicArn: !Ref MySnsTopic
```

### Non-Compliant Examples

Untrusted email domain:

```yaml
Resources:
  MySnsTopic:
    Type: AWS::SNS::Topic
    Properties:
      TopicName: my-topic

  NonCompliantEmailSubscription:
    Type: AWS::SNS::Subscription
    Properties:
      Protocol: email
      Endpoint: user@untrusted-domain.com
      TopicArn: !Ref MySnsTopic
```

Missing Endpoint:

```yaml
Resources:
  MySnsTopic:
    Type: AWS::SNS::Topic
    Properties:
      TopicName: my-topic

  NonCompliantSubscription:
    Type: AWS::SNS::Subscription
    Properties:
      Protocol: email
      # Missing Endpoint
      TopicArn: !Ref MySnsTopic
```

## Testing

The hook includes unit tests that verify its behavior with various SNS subscription configurations.

Sample CloudFormation templates are provided in the `sample-templates` directory to demonstrate compliant and non-compliant configurations. You can use these templates to conduct an end-to-end test of the hook.
