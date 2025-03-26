/**
 * TypeScript definitions for AWS::S3::MultiRegionAccessPointPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The policy to be attached to a Multi Region Access Point
 */
export namespace AWS_S3_MultiRegionAccessPointPolicy {
  /**
   * The policy to be attached to a Multi Region Access Point
   */
  export type MultiRegionAccessPointPolicyResourceType = {
    /**
     * The name of the Multi Region Access Point to apply policy
     * Create-only property
     */
    MrapName: string;

    /**
     * Policy document to apply to a Multi Region Access Point
     */
    Policy: Record<string, any>;

    /**
     * The Policy Status associated with this Multi Region Access Point
     * Read-only property
     */
    PolicyStatus?: Record<string, any>;
  };
}
