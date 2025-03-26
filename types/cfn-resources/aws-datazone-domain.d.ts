/**
 * TypeScript definitions for AWS::DataZone::Domain
 * Generated from CloudFormation Resource Schema
 */

/**
 * A domain is an organizing entity for connecting together assets, users, and their projects
 */
export namespace AWS_DataZone_Domain {
  /**
   * The type of single sign-on in Amazon DataZone.
   */
  export type AuthTypeType = {};

  /**
   * The status of the Amazon DataZone domain.
   */
  export type DomainStatusType = {};

  /**
   * The single-sign on configuration of the Amazon DataZone domain.
   */
  export type SingleSignOnType = {
    Type?: AuthTypeType;

    UserAssignment?: UserAssignmentType;
  };

  /**
   * A key-value pair to associate with the domain.
   */
  export type TagType = {
    /**
     * The key name of the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * The single sign-on user assignment in Amazon DataZone.
   */
  export type UserAssignmentType = {};

  /**
   * A domain is an organizing entity for connecting together assets, users, and their projects
   */
  export type DomainResourceType = {
    /**
     * The ARN of the Amazon DataZone domain.
     * Read-only property
     */
    Arn?: string;

    /**
     * The timestamp of when the Amazon DataZone domain was last updated.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The description of the Amazon DataZone domain.
     */
    Description?: string;

    /**
     * The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
     */
    DomainExecutionRole: string;

    /**
     * The service role of the domain that is created.
     */
    ServiceRole?: string;

    /**
     * The version of the domain.
     * Create-only property
     */
    DomainVersion?: string;

    /**
     * The id of the Amazon DataZone domain.
     * Read-only property
     */
    Id?: string;

    /**
     * The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
     * Create-only property
     */
    KmsKeyIdentifier?: string;

    /**
     * The timestamp of when the Amazon DataZone domain was last updated.
     * Read-only property
     */
    LastUpdatedAt?: string;

    /**
     * The identifier of the AWS account that manages the domain.
     * Read-only property
     */
    ManagedAccountId?: string;

    /**
     * The name of the Amazon DataZone domain.
     */
    Name: string;

    /**
     * The URL of the data portal for this Amazon DataZone domain.
     * Read-only property
     */
    PortalUrl?: string;

    /**
     * The single-sign on configuration of the Amazon DataZone domain.
     */
    SingleSignOn?: SingleSignOnType;

    /**
     * The status of the Amazon DataZone domain.
     * Read-only property
     */
    Status?: DomainStatusType;

    /**
     * The tags specified for the Amazon DataZone domain.
     */
    Tags?: TagType[];
  };
}
