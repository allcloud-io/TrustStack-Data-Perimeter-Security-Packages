/**
 * TypeScript definitions for AWS::LakeFormation::Resource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::LakeFormation::Resource
 */
export namespace AWS_LakeFormation_Resource {
  /**
   * Resource Type definition for AWS::LakeFormation::Resource
   */
  export type ResourceResourceType = {
    /**
     * Create-only property
     */
    ResourceArn: string;

    WithFederation?: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    HybridAccessEnabled?: boolean;

    UseServiceLinkedRole: boolean;

    RoleArn?: string;
  };
}
