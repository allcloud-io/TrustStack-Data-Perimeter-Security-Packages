/**
 * TypeScript definitions for AWS::EventSchemas::RegistryPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EventSchemas::RegistryPolicy
 */
export namespace AWS_EventSchemas_RegistryPolicy {
  /**
   * Resource Type definition for AWS::EventSchemas::RegistryPolicy
   */
  export type RegistryPolicyResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Policy: Record<string, any>;

    RegistryName: string;

    RevisionId?: string;
  };
}
