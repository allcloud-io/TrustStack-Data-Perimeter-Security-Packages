/**
 * TypeScript definitions for AWS::SupportApp::SlackChannelConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * An AWS Support App resource that creates, updates, lists and deletes Slack channel configurations.
 */
export namespace AWS_SupportApp_SlackChannelConfiguration {
  /**
   * An AWS Support App resource that creates, updates, lists and deletes Slack channel configurations.
   */
  export type SlackChannelConfigurationResourceType = {
    /**
     * The team ID in Slack, which uniquely identifies a workspace.
     * Create-only property
     */
    TeamId: string;

    /**
     * The channel ID in Slack, which identifies a channel within a workspace.
     * Create-only property
     */
    ChannelId: string;

    /**
     * The channel name in Slack.
     */
    ChannelName?: string;

    /**
     * Whether to notify when a case is created or reopened.
     */
    NotifyOnCreateOrReopenCase?: boolean;

    /**
     * Whether to notify when a correspondence is added to a case.
     */
    NotifyOnAddCorrespondenceToCase?: boolean;

    /**
     * Whether to notify when a case is resolved.
     */
    NotifyOnResolveCase?: boolean;

    /**
     * The severity level of a support case that a customer wants to get notified for.
     */
    NotifyOnCaseSeverity: string;

    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.
     */
    ChannelRoleArn: string;
  };
}
