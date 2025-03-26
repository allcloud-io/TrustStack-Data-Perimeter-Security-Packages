/**
 * TypeScript definitions for AWS::Chatbot::SlackChannelConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Chatbot::SlackChannelConfiguration.
 */
export namespace AWS_Chatbot_SlackChannelConfiguration {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource schema for AWS::Chatbot::SlackChannelConfiguration.
   */
  export type SlackChannelConfigurationResourceType = {
    /**
     * The id of the Slack workspace
     * Create-only property
     */
    SlackWorkspaceId: string;

    /**
     * The id of the Slack channel
     */
    SlackChannelId: string;

    /**
     * The name of the configuration
     * Create-only property
     */
    ConfigurationName: string;

    /**
     * The ARN of the IAM role that defines the permissions for AWS Chatbot
     */
    IamRoleArn: string;

    /**
     * ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
     */
    SnsTopicArns?: string[];

    /**
     * Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
     * Default: "NONE"
     */
    LoggingLevel?: string;

    /**
     * Amazon Resource Name (ARN) of the configuration
     * Read-only property
     */
    Arn?: string;

    /**
     * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
     */
    GuardrailPolicies?: string[];

    /**
     * The tags to add to the configuration
     */
    Tags?: TagType[];

    /**
     * Enables use of a user role requirement in your chat configuration
     * Default: false
     */
    UserRoleRequired?: boolean;

    /**
     * ARNs of Custom Actions to associate with notifications in the provided chat channel.
     */
    CustomizationResourceArns?: string[];
  };
}
