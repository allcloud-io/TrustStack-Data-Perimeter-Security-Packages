/**
 * TypeScript definitions for AWS::CodeStarNotifications::NotificationRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeStarNotifications::NotificationRule
 */
export namespace AWS_CodeStarNotifications_NotificationRule {
  export type TargetType = {
    TargetType: string;

    TargetAddress: string;
  };

  /**
   * Resource Type definition for AWS::CodeStarNotifications::NotificationRule
   */
  export type NotificationRuleResourceType = {
    EventTypeId?: string;

    CreatedBy?: string;

    TargetAddress?: string;

    EventTypeIds: string[];

    Status?: string;

    DetailType: string;

    /**
     * Create-only property
     */
    Resource: string;

    Targets: TargetType[];

    Tags?: Record<string, any>;

    Name: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
