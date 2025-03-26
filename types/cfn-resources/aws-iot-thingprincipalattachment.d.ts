/**
 * TypeScript definitions for AWS::IoT::ThingPrincipalAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::ThingPrincipalAttachment
 */
export namespace AWS_IoT_ThingPrincipalAttachment {
  /**
   * Resource Type definition for AWS::IoT::ThingPrincipalAttachment
   */
  export type ThingPrincipalAttachmentResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Principal: string;

    /**
     * Create-only property
     */
    ThingName: string;
  };
}
