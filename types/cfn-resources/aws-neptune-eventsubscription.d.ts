/**
 * TypeScript definitions for AWS::Neptune::EventSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Neptune::EventSubscription
 */
export namespace AWS_Neptune_EventSubscription {
  /**
   * Resource Type definition for AWS::Neptune::EventSubscription
   */
  export type EventSubscriptionResourceType = {
    Enabled?: boolean;

    EventCategories?: string[];

    /**
     * Create-only property
     */
    SnsTopicArn?: string;

    SourceIds?: string[];

    /**
     * Read-only property
     */
    Id?: string;

    SourceType?: string;
  };
}
