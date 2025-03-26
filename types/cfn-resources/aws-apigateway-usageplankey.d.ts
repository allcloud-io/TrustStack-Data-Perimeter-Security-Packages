/**
 * TypeScript definitions for AWS::ApiGateway::UsagePlanKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::UsagePlanKey` resource associates an API key with a usage plan. This association determines which users the usage plan is applied to.
 */
export namespace AWS_ApiGateway_UsagePlanKey {
  /**
   * The `AWS::ApiGateway::UsagePlanKey` resource associates an API key with a usage plan. This association determines which users the usage plan is applied to.
   */
  export type UsagePlanKeyResourceType = {
    /**
     * The Id of the UsagePlanKey resource.
     * Create-only property
     */
    KeyId: string;

    /**
     * Create-only property
     */
    KeyType: string;

    /**
     * The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer.
     * Create-only property
     */
    UsagePlanId: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
