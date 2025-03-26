/**
 * TypeScript definitions for AWS::SecurityHub::ProductSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SecurityHub::ProductSubscription resource represents a subscription to a service that is allowed to generate findings for your Security Hub account. One product subscription resource is created for each product enabled.
 */
export namespace AWS_SecurityHub_ProductSubscription {
  /**
   * The AWS::SecurityHub::ProductSubscription resource represents a subscription to a service that is allowed to generate findings for your Security Hub account. One product subscription resource is created for each product enabled.
   */
  export type ProductSubscriptionResourceType = {
    /**
     * The generic ARN of the product being subscribed to
     * Create-only property
     */
    ProductArn: string;

    /**
     * The ARN of the product subscription for the account
     * Read-only property
     */
    ProductSubscriptionArn?: string;
  };
}
