/**
 * TypeScript definitions for AWS::SupportApp::SlackWorkspaceConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * An AWS Support App resource that creates, updates, lists, and deletes Slack workspace configurations.
 */
export namespace AWS_SupportApp_SlackWorkspaceConfiguration {
  /**
   * An AWS Support App resource that creates, updates, lists, and deletes Slack workspace configurations.
   */
  export type SlackWorkspaceConfigurationResourceType = {
    /**
     * The team ID in Slack, which uniquely identifies a workspace.
     * Create-only property
     */
    TeamId: string;

    /**
     * An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.
     */
    VersionId?: string;
  };
}
