/**
 * TypeScript definitions for AWS::VerifiedPermissions::Policy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::VerifiedPermissions::Policy Resource Type
 */
export namespace AWS_VerifiedPermissions_Policy {
  export type EntityIdentifierType = {
    EntityType: string;

    EntityId: string;
  };

  export type PolicyDefinitionType = {};

  export type PolicyTypeType = {};

  export type StaticPolicyDefinitionType = {
    Description?: string;

    Statement: string;
  };

  export type TemplateLinkedPolicyDefinitionType = {
    PolicyTemplateId: string;

    Principal?: EntityIdentifierType;

    Resource?: EntityIdentifierType;
  };

  /**
   * Definition of AWS::VerifiedPermissions::Policy Resource Type
   */
  export type PolicyResourceType = {
    Definition: PolicyDefinitionType;

    /**
     * Read-only property
     */
    PolicyId?: string;

    /**
     * Create-only property
     */
    PolicyStoreId: string;

    /**
     * Read-only property
     */
    PolicyType?: PolicyTypeType;
  };
}
