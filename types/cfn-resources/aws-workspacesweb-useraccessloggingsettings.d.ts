/**
 * TypeScript definitions for AWS::WorkSpacesWeb::UserAccessLoggingSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::UserAccessLoggingSettings Resource Type
 */
export namespace AWS_WorkSpacesWeb_UserAccessLoggingSettings {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::UserAccessLoggingSettings Resource Type
   */
  export type UserAccessLoggingSettingsResourceType = {
    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    /**
     * Kinesis stream ARN to which log events are published.
     */
    KinesisStreamArn: string;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    UserAccessLoggingSettingsArn?: string;
  };
}
