/**
 * TypeScript definitions for AWS::Greengrass::SubscriptionDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::SubscriptionDefinition
 */
export namespace AWS_Greengrass_SubscriptionDefinition {
  export type SubscriptionDefinitionVersionType = {
    Subscriptions: SubscriptionType[];
  };

  export type SubscriptionType = {
    Target: string;

    Id: string;

    Source: string;

    Subject: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::SubscriptionDefinition
   */
  export type SubscriptionDefinitionResourceType = {
    /**
     * Read-only property
     */
    LatestVersionArn?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Name: string;

    /**
     * Create-only property
     */
    InitialVersion?: SubscriptionDefinitionVersionType;

    Tags?: Record<string, any>;
  };
}
