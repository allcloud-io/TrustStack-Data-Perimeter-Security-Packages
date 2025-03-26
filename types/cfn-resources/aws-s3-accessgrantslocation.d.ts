/**
 * TypeScript definitions for AWS::S3::AccessGrantsLocation
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3::AccessGrantsLocation resource is an Amazon S3 resource type hosted in an access grants instance which can be the target of S3 access grants.
 */
export namespace AWS_S3_AccessGrantsLocation {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The AWS::S3::AccessGrantsLocation resource is an Amazon S3 resource type hosted in an access grants instance which can be the target of S3 access grants.
   */
  export type AccessGrantsLocationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the specified Access Grants location.
     * Read-only property
     */
    AccessGrantsLocationArn?: string;

    /**
     * The unique identifier for the specified Access Grants location.
     * Read-only property
     */
    AccessGrantsLocationId?: string;

    /**
     * The Amazon Resource Name (ARN) of the access grant location's associated IAM role.
     */
    IamRoleArn?: string;

    /**
     * Descriptor for where the location actually points
     */
    LocationScope?: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
