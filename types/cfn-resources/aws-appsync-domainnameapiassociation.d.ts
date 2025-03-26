/**
 * TypeScript definitions for AWS::AppSync::DomainNameApiAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::DomainNameApiAssociation
 */
export namespace AWS_AppSync_DomainNameApiAssociation {
  /**
   * Resource Type definition for AWS::AppSync::DomainNameApiAssociation
   */
  export type DomainNameApiAssociationResourceType = {
    /**
     * Create-only property
     */
    DomainName: string;

    ApiId: string;

    /**
     * Read-only property
     */
    ApiAssociationIdentifier?: string;
  };
}
