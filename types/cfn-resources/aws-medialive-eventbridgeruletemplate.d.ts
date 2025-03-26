/**
 * TypeScript definitions for AWS::MediaLive::EventBridgeRuleTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplate Resource Type
 */
export namespace AWS_MediaLive_EventBridgeRuleTemplate {
  /**
   * The type of event to match with the rule.
   */
  export type EventBridgeRuleTemplateEventTypeType = {};

  /**
   * The target to which to send matching events.
   */
  export type EventBridgeRuleTemplateTargetType = {
    /**
     * Target ARNs must be either an SNS topic or CloudWatch log group.
     */
    Arn: string;
  };

  /**
   * Represents the tags associated with a resource.
   */
  export type TagMapType = {};

  /**
   * Definition of AWS::MediaLive::EventBridgeRuleTemplate Resource Type
   */
  export type EventBridgeRuleTemplateResourceType = {
    /**
     * An eventbridge rule template's ARN (Amazon Resource Name)
     * Read-only property
     */
    Arn?: string;

    /**
     * Placeholder documentation for __timestampIso8601
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * A resource's optional description.
     */
    Description?: string;

    /**
     * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
     */
    EventTargets?: EventBridgeRuleTemplateTargetType[];

    EventType: EventBridgeRuleTemplateEventTypeType;

    /**
     * An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
     * Read-only property
     */
    GroupId?: string;

    /**
     * An eventbridge rule template group's identifier. Can be either be its id or current name.
     */
    GroupIdentifier?: string;

    /**
     * An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
     * Read-only property
     */
    Id?: string;

    /**
     * Placeholder documentation for __string
     * Read-only property
     */
    Identifier?: string;

    /**
     * Placeholder documentation for __timestampIso8601
     * Read-only property
     */
    ModifiedAt?: string;

    /**
     * A resource's name. Names must be unique within the scope of a resource type in a specific region.
     */
    Name: string;

    /**
     * Create-only property
     */
    Tags?: TagMapType;
  };
}
