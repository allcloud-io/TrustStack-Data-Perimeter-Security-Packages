/**
 * TypeScript definitions for AWS::MSK::ClusterPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::ClusterPolicy
 */
export namespace AWS_MSK_ClusterPolicy {
  /**
   * Resource Type definition for AWS::MSK::ClusterPolicy
   */
  export type ClusterPolicyResourceType = {
    /**
     * A policy document containing permissions to add to the specified cluster.
     */
    Policy: Record<string, any>;

    /**
     * The arn of the cluster for the resource policy.
     * Create-only property
     */
    ClusterArn: string;

    /**
     * The current version of the policy attached to the specified cluster
     * Read-only property
     */
    CurrentVersion?: string;
  };
}
