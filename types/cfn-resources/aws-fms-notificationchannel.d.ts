/**
 * TypeScript definitions for AWS::FMS::NotificationChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
 */
export namespace AWS_FMS_NotificationChannel {
  /**
   * A resource ARN.
   */
  export type ResourceArnType = {};

  /**
   * Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.
   */
  export type NotificationChannelResourceType = {
    SnsRoleName: ResourceArnType;

    SnsTopicArn: ResourceArnType;
  };
}
