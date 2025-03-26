/**
 * TypeScript definitions for AWS::Logs::LogAnomalyDetector
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Logs::LogAnomalyDetector resource specifies a CloudWatch Logs LogAnomalyDetector.
 */
export namespace AWS_Logs_LogAnomalyDetector {
  /**
   * The AWS::Logs::LogAnomalyDetector resource specifies a CloudWatch Logs LogAnomalyDetector.
   */
  export type LogAnomalyDetectorResourceType = {
    /**
     * Account ID for owner of detector
     */
    AccountId?: string;

    /**
     * The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
     */
    KmsKeyId?: string;

    /**
     * Name of detector
     */
    DetectorName?: string;

    /**
     * List of Arns for the given log group
     */
    LogGroupArnList?: string[];

    /**
     * How often log group is evaluated
     */
    EvaluationFrequency?: string;

    FilterPattern?: string;

    /**
     * Current status of detector.
     * Read-only property
     */
    AnomalyDetectorStatus?: string;

    AnomalyVisibilityTime?: number;

    /**
     * When detector was created.
     * Read-only property
     */
    CreationTimeStamp?: number;

    /**
     * When detector was lsat modified.
     * Read-only property
     */
    LastModifiedTimeStamp?: number;

    /**
     * ARN of LogAnomalyDetector
     * Read-only property
     */
    AnomalyDetectorArn?: string;
  };
}
