/**
 * TypeScript definitions for AWS::Pinpoint::EmailChannel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::EmailChannel
 */
export namespace AWS_Pinpoint_EmailChannel {
  /**
   * Resource Type definition for AWS::Pinpoint::EmailChannel
   */
  export type EmailChannelResourceType = {
    ConfigurationSet?: string;

    FromAddress: string;

    OrchestrationSendingRoleArn?: string;

    Enabled?: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationId: string;

    Identity: string;

    RoleArn?: string;
  };
}
