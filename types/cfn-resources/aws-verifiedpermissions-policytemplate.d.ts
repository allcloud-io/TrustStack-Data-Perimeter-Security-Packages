/**
 * TypeScript definitions for AWS::VerifiedPermissions::PolicyTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::VerifiedPermissions::PolicyTemplate Resource Type
 */
export namespace AWS_VerifiedPermissions_PolicyTemplate {
  /**
   * Definition of AWS::VerifiedPermissions::PolicyTemplate Resource Type
   */
  export type PolicyTemplateResourceType = {
    Description?: string;

    /**
     * Create-only property
     */
    PolicyStoreId: string;

    /**
     * Read-only property
     */
    PolicyTemplateId?: string;

    Statement: string;
  };
}
