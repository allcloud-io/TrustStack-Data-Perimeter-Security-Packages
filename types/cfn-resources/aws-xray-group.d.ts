/**
 * TypeScript definitions for AWS::XRay::Group
 * Generated from CloudFormation Resource Schema
 */

/**
 * This schema provides construct and validation rules for AWS-XRay Group resource parameters.
 */
export namespace AWS_XRay_Group {
  export type InsightsConfigurationType = {
    /**
     * Set the InsightsEnabled value to true to enable insights or false to disable insights.
     */
    InsightsEnabled?: boolean;

    /**
     * Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.
     */
    NotificationsEnabled?: boolean;
  };

  export type TagType = {
    /**
     * The key name of the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * An array of key-value pairs to apply to this resource.
   */
  export type TagsType = {};

  /**
   * This schema provides construct and validation rules for AWS-XRay Group resource parameters.
   */
  export type GroupResourceType = {
    /**
     * The filter expression defining criteria by which to group traces.
     */
    FilterExpression?: string;

    /**
     * The case-sensitive name of the new group. Names must be unique.
     */
    GroupName: string;

    /**
     * The ARN of the group that was generated on creation.
     * Read-only property
     */
    GroupARN?: string;

    InsightsConfiguration?: InsightsConfigurationType;

    Tags?: TagsType;
  };
}
