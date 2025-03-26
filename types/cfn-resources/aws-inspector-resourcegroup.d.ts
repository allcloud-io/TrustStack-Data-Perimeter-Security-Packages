/**
 * TypeScript definitions for AWS::Inspector::ResourceGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Inspector::ResourceGroup
 */
export namespace AWS_Inspector_ResourceGroup {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::Inspector::ResourceGroup
   */
  export type ResourceGroupResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ResourceGroupTags: TagType[];
  };
}
