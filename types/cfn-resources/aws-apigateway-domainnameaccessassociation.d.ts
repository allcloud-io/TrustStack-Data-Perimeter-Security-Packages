/**
 * TypeScript definitions for AWS::ApiGateway::DomainNameAccessAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApiGateway::DomainNameAccessAssociation.
 */
export namespace AWS_ApiGateway_DomainNameAccessAssociation {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::ApiGateway::DomainNameAccessAssociation.
   */
  export type DomainNameAccessAssociationResourceType = {
    /**
     * The amazon resource name (ARN) of the domain name access association resource.
     * Read-only property
     */
    DomainNameAccessAssociationArn?: string;

    /**
     * The amazon resource name (ARN) of the domain name resource.
     * Create-only property
     */
    DomainNameArn: string;

    /**
     * The source of the domain name access association resource.
     * Create-only property
     */
    AccessAssociationSource: string;

    /**
     * The source type of the domain name access association resource.
     * Create-only property
     */
    AccessAssociationSourceType: string;

    /**
     * An array of arbitrary tags (key-value pairs) to associate with the domainname access association.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
