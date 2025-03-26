/**
 * TypeScript definitions for AWS::AppConfig::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppConfig::Environment
 */
export namespace AWS_AppConfig_Environment {
  /**
   * Amazon CloudWatch alarm to monitor during the deployment process.
   */
  export type MonitorType = {
    /**
     * Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
     */
    AlarmArn: string;

    /**
     * ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn.
     */
    AlarmRoleArn?: string;
  };

  /**
   * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  export type TagType = {
    /**
     * The tag value can be up to 256 characters.
     */
    Value: string;

    /**
     * The key-value string map. The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::AppConfig::Environment
   */
  export type EnvironmentResourceType = {
    /**
     * The environment ID.
     * Read-only property
     */
    EnvironmentId?: string;

    /**
     * A description of the environment.
     */
    Description?: string;

    /**
     * Amazon CloudWatch alarms to monitor during the deployment process.
     */
    Monitors?: MonitorType[];

    /**
     * On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html
     */
    DeletionProtectionCheck?: string;

    /**
     * The application ID.
     * Create-only property
     */
    ApplicationId: string;

    /**
     * Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     */
    Tags?: TagType[];

    /**
     * A name for the environment.
     */
    Name: string;
  };
}
