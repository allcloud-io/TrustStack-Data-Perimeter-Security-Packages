/**
 * TypeScript definitions for AWS::IoT::PolicyPrincipalAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
 */
export namespace AWS_IoT_PolicyPrincipalAttachment {
  /**
   * Resource Type definition for AWS::IoT::PolicyPrincipalAttachment
   */
  export type PolicyPrincipalAttachmentResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    PolicyName: string;

    /**
     * Create-only property
     */
    Principal: string;
  };
}
