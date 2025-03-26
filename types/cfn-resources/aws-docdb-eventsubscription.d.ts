/**
 * TypeScript definitions for AWS::DocDB::EventSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DocDB::EventSubscription
 */
export namespace AWS_DocDB_EventSubscription {
  /**
   * Resource Type definition for AWS::DocDB::EventSubscription
   */
  export type EventSubscriptionResourceType = {
    SourceType?: string;

    Enabled?: boolean;

    EventCategories?: string[];

    /**
     * Create-only property
     */
    SubscriptionName?: string;

    /**
     * Create-only property
     */
    SnsTopicArn: string;

    SourceIds?: string[];

    /**
     * Read-only property
     */
    Id?: string;
  };
}
