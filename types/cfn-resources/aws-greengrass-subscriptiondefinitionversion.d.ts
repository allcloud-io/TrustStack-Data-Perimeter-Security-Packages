/**
 * TypeScript definitions for AWS::Greengrass::SubscriptionDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::SubscriptionDefinitionVersion
 */
export namespace AWS_Greengrass_SubscriptionDefinitionVersion {
  export type SubscriptionType = {
    Target: string;

    Id: string;

    Source: string;

    Subject: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::SubscriptionDefinitionVersion
   */
  export type SubscriptionDefinitionVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    SubscriptionDefinitionId: string;

    /**
     * Create-only property
     */
    Subscriptions: SubscriptionType[];
  };
}
