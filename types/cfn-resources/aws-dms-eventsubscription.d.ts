/**
 * TypeScript definitions for AWS::DMS::EventSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DMS::EventSubscription
 */
export namespace AWS_DMS_EventSubscription {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::DMS::EventSubscription
   */
  export type EventSubscriptionResourceType = {
    SourceType?: string;

    EventCategories?: string[];

    Enabled?: boolean;

    /**
     * Create-only property
     */
    SubscriptionName?: string;

    SnsTopicArn: string;

    /**
     * Create-only property
     */
    SourceIds?: string[];

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
