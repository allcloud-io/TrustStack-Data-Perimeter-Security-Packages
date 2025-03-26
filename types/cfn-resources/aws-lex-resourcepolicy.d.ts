/**
 * TypeScript definitions for AWS::Lex::ResourcePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * A resource policy with specified policy statements that attaches to a Lex bot or bot alias.
 */
export namespace AWS_Lex_ResourcePolicy {
  /**
   * The Amazon Resource Name (ARN) of the bot or bot alias that the resource policy is attached to.
   */
  export type ResourceArnType = {};

  /**
   * A resource policy to add to the resource. The policy is a JSON structure following the IAM syntax that contains one or more statements that define the policy.
   */
  export type PolicyType = {};

  /**
   * The current revision of the resource policy. Use the revision ID to make sure that you are updating the most current version of a resource policy when you add a policy statement to a resource, delete a resource, or update a resource.
   */
  export type RevisionIdType = {};

  /**
   * The Physical ID of the resource policy.
   */
  export type PhysicalIdType = {};

  /**
   * A resource policy with specified policy statements that attaches to a Lex bot or bot alias.
   */
  export type ResourcePolicyResourceType = {
    ResourceArn: ResourceArnType;

    /**
     * Read-only property
     */
    RevisionId?: RevisionIdType;

    Policy: PolicyType;

    /**
     * Read-only property
     */
    Id?: PhysicalIdType;
  };
}
