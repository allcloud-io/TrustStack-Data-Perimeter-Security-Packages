/**
 * TypeScript definitions for AWS::LookoutMetrics::Alert
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::LookoutMetrics::Alert
 */
export namespace AWS_LookoutMetrics_Alert {
  export type ArnType = {};

  export type ActionType = {
    SNSConfiguration?: SNSConfigurationType;

    LambdaConfiguration?: LambdaConfigurationType;
  };

  /**
   * Configuration options for an SNS alert action.
   */
  export type SNSConfigurationType = {
    /**
     * ARN of an IAM role that LookoutMetrics should assume to access the SNS topic.
     */
    RoleArn: ArnType;

    /**
     * ARN of an SNS topic to send alert notifications to.
     */
    SnsTopicArn: ArnType;
  };

  /**
   * Configuration options for a Lambda alert action.
   */
  export type LambdaConfigurationType = {
    /**
     * ARN of an IAM role that LookoutMetrics should assume to access the Lambda function.
     */
    RoleArn: ArnType;

    /**
     * ARN of a Lambda to send alert notifications to.
     */
    LambdaArn: ArnType;
  };

  /**
   * Resource Type definition for AWS::LookoutMetrics::Alert
   */
  export type AlertResourceType = {
    /**
     * The name of the alert. If not provided, a name is generated automatically.
     * Create-only property
     */
    AlertName?: string;

    /**
     * ARN assigned to the alert.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * A description for the alert.
     * Create-only property
     */
    AlertDescription?: string;

    /**
     * The Amazon resource name (ARN) of the Anomaly Detector to alert.
     * Create-only property
     */
    AnomalyDetectorArn: string;

    /**
     * A number between 0 and 100 (inclusive) that tunes the sensitivity of the alert.
     * Create-only property
     */
    AlertSensitivityThreshold: number;

    /**
     * The action to be taken by the alert when an anomaly is detected.
     * Create-only property
     */
    Action: ActionType;
  };
}
