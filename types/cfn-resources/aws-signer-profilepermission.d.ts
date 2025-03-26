/**
 * TypeScript definitions for AWS::Signer::ProfilePermission
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_Signer_ProfilePermission {
  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type ProfilePermissionResourceType = {
    /**
     * Create-only property
     */
    ProfileName: string;

    /**
     * Create-only property
     */
    ProfileVersion?: string;

    /**
     * Create-only property
     */
    Action: string;

    /**
     * Create-only property
     */
    Principal: string;

    /**
     * Create-only property
     */
    StatementId: string;
  };
}
