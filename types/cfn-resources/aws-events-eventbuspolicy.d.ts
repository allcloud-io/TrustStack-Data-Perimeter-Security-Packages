/**
 * TypeScript definitions for AWS::Events::EventBusPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Events::EventBusPolicy
 */
export namespace AWS_Events_EventBusPolicy {
  export type ConditionType = {
    Value?: string;

    Type?: string;

    Key?: string;
  };

  /**
   * Resource Type definition for AWS::Events::EventBusPolicy
   */
  export type EventBusPolicyResourceType = {
    /**
     * Create-only property
     */
    EventBusName?: string;

    Condition?: ConditionType;

    Action?: string;

    /**
     * Create-only property
     */
    StatementId: string;

    Statement?: Record<string, any>;

    /**
     * Read-only property
     */
    Id?: string;

    Principal?: string;
  };
}
