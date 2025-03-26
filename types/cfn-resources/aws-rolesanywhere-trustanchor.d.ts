/**
 * TypeScript definitions for AWS::RolesAnywhere::TrustAnchor
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RolesAnywhere::TrustAnchor Resource Type.
 */
export namespace AWS_RolesAnywhere_TrustAnchor {
  export type NotificationChannelType = {};

  export type NotificationEventType = {};

  export type NotificationSettingType = {
    Enabled: boolean;

    Event: NotificationEventType;

    Threshold?: number;

    Channel?: NotificationChannelType;
  };

  export type SourceType = {
    SourceType?: TrustAnchorTypeType;

    SourceData?: SourceDataType;
  };

  export type SourceDataType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TrustAnchorTypeType = {};

  /**
   * Definition of AWS::RolesAnywhere::TrustAnchor Resource Type.
   */
  export type TrustAnchorResourceType = {
    Enabled?: boolean;

    Name: string;

    NotificationSettings?: NotificationSettingType[];

    Source: SourceType;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    TrustAnchorId?: string;

    /**
     * Read-only property
     */
    TrustAnchorArn?: string;
  };
}
