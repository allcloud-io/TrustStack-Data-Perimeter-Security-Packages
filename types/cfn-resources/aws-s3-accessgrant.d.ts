/**
 * TypeScript definitions for AWS::S3::AccessGrant
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3::AccessGrant resource is an Amazon S3 resource type representing permissions to a specific S3 bucket or prefix hosted in an S3 Access Grants instance.
 */
export namespace AWS_S3_AccessGrant {
  export type GranteeType = {
    /**
     * Configures the transfer acceleration state for an Amazon S3 bucket.
     */
    GranteeType: string;

    /**
     * The unique identifier of the Grantee
     */
    GranteeIdentifier: string;
  };

  export type AccessGrantsLocationConfigurationType = {
    /**
     * The S3 sub prefix of a registered location in your S3 Access Grants instance
     */
    S3SubPrefix: string;
  };

  /**
   * the Amazon Resource Name (ARN) of the specified access grant.
   */
  export type AccessGrantArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The AWS::S3::AccessGrant resource is an Amazon S3 resource type representing permissions to a specific S3 bucket or prefix hosted in an S3 Access Grants instance.
   */
  export type AccessGrantResourceType = {
    /**
     * The ID assigned to this access grant.
     * Read-only property
     */
    AccessGrantId?: string;

    /**
     * The custom S3 location to be accessed by the grantee
     */
    AccessGrantsLocationId: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The level of access to be afforded to the grantee
     */
    Permission: string;

    /**
     * The ARN of the application grantees will use to access the location
     */
    ApplicationArn?: string;

    /**
     * The type of S3SubPrefix.
     * Create-only property
     */
    S3PrefixType?: string;

    /**
     * The S3 path of the data to which you are granting access. It is a combination of the S3 path of the registered location and the subprefix.
     * Read-only property
     */
    GrantScope?: string;

    /**
     * The Amazon Resource Name (ARN) of the specified access grant.
     * Read-only property
     */
    AccessGrantArn?: AccessGrantArnType;

    /**
     * The principal who will be granted permission to access S3.
     */
    Grantee: GranteeType;

    /**
     * The configuration options of the grant location, which is the S3 path to the data to which you are granting access.
     */
    AccessGrantsLocationConfiguration?: AccessGrantsLocationConfigurationType;
  };
}
