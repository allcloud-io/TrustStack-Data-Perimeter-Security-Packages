/**
 * TypeScript definitions for AWS::MediaLive::CloudWatchAlarmTemplateGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplateGroup Resource Type
 */
export namespace AWS_MediaLive_CloudWatchAlarmTemplateGroup {
  /**
   * Represents the tags associated with a resource.
   */
  export type TagMapType = {};

  /**
   * Definition of AWS::MediaLive::CloudWatchAlarmTemplateGroup Resource Type
   */
  export type CloudWatchAlarmTemplateGroupResourceType = {
    /**
     * A cloudwatch alarm template group's ARN (Amazon Resource Name)
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * A resource's optional description.
     */
    Description?: string;

    /**
     * A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Identifier?: string;

    /**
     * Read-only property
     */
    ModifiedAt?: string;

    /**
     * A resource's name. Names must be unique within the scope of a resource type in a specific region.
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Tags?: TagMapType;
  };
}
