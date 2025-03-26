/**
 * TypeScript definitions for AWS::ECR::RegistryPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ECR::RegistryPolicy` resource creates or updates the permissions policy for a private registry.
 * A private registry policy is used to specify permissions for another AWS-account and is used when configuring cross-account replication. For more information, see Registry permissions in the *Amazon Elastic Container Registry User Guide*.
 */
export namespace AWS_ECR_RegistryPolicy {
  /**
   * The registry id.
   */
  export type RegistryIdType = {};

  /**
   * The `AWS::ECR::RegistryPolicy` resource creates or updates the permissions policy for a private registry.
   * A private registry policy is used to specify permissions for another AWS-account and is used when configuring cross-account replication. For more information, see Registry permissions in the *Amazon Elastic Container Registry User Guide*.
   */
  export type RegistryPolicyResourceType = {
    /**
     * Read-only property
     */
    RegistryId?: RegistryIdType;

    /**
     * The JSON policy text for your registry.
     */
    PolicyText: Record<string, any>;
  };
}
