/**
 * TypeScript definitions for AWS::Rbin::Rule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Rbin::Rule
 */
export namespace AWS_Rbin_Rule {
  /**
   * Metadata of a retention rule, consisting of a key-value pair.
   */
  export type TagType = {
    /**
     * A unique identifier for the tag.
     */
    Key: string;

    /**
     * String which you can use to describe or define the tag.
     */
    Value: string;
  };

  /**
   * The resource tag of the rule.
   */
  export type ResourceTagType = {
    /**
     * The tag key of the resource.
     */
    ResourceTagKey: string;

    /**
     * The tag value of the resource
     */
    ResourceTagValue: string;
  };

  /**
   * The retention period of the rule.
   */
  export type RetentionPeriodType = {
    /**
     * The retention period value of the rule.
     */
    RetentionPeriodValue: number;

    /**
     * The retention period unit of the rule
     */
    RetentionPeriodUnit: string;
  };

  export type UnlockDelayType = {
    /**
     * The unlock delay period, measured in the unit specified for UnlockDelayUnit.
     */
    UnlockDelayValue?: number;

    /**
     * The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.
     */
    UnlockDelayUnit?: string;
  };

  /**
   * Resource Type definition for AWS::Rbin::Rule
   */
  export type RuleResourceType = {
    /**
     * Rule Arn is unique for each rule.
     * Read-only property
     */
    Arn?: string;

    /**
     * The unique ID of the retention rule.
     * Read-only property
     */
    Identifier?: string;

    /**
     * The description of the retention rule.
     */
    Description?: string;

    /**
     * Information about the resource tags used to identify resources that are retained by the retention rule.
     */
    ResourceTags?: ResourceTagType[];

    /**
     * Information about the exclude resource tags used to identify resources that are excluded by the retention rule.
     */
    ExcludeResourceTags?: ResourceTagType[];

    /**
     * The resource type retained by the retention rule.
     * Create-only property
     */
    ResourceType: string;

    /**
     * Information about the tags assigned to the retention rule.
     */
    Tags?: TagType[];

    /**
     * Information about the retention period for which the retention rule is to retain resources.
     */
    RetentionPeriod: RetentionPeriodType;

    /**
     * The state of the retention rule. Only retention rules that are in the available state retain resources.
     */
    Status?: string;

    /**
     * Information about the retention rule lock configuration.
     */
    LockConfiguration?: UnlockDelayType;

    /**
     * The lock state for the retention rule.
     * Read-only property
     */
    LockState?: string;
  };
}
