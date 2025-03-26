/**
 * TypeScript definitions for AWS::CloudFormation::CustomResource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CloudFormation::CustomResource
 */
export namespace AWS_CloudFormation_CustomResource {
  /**
   * Resource Type definition for AWS::CloudFormation::CustomResource
   */
  export type CustomResourceResourceType = {
    /**
     * Create-only property
     */
    ServiceToken: string;

    ServiceTimeout?: number;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
