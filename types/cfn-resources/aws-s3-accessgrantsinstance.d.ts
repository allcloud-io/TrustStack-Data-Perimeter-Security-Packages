/**
 * TypeScript definitions for AWS::S3::AccessGrantsInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::S3::AccessGrantsInstance resource is an Amazon S3 resource type that hosts Access Grants and their associated locations
 */
export namespace AWS_S3_AccessGrantsInstance {
  /**
   * The Amazon Resource Name (ARN) of the specified Access Grants instance.
   */
  export type AccessGrantsInstanceArnType = {};

  /**
   * The Amazon Resource Name (ARN) of the specified AWS Identity Center.
   */
  export type IdentityCenterArnType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The AWS::S3::AccessGrantsInstance resource is an Amazon S3 resource type that hosts Access Grants and their associated locations
   */
  export type AccessGrantsInstanceResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the specified Access Grants instance.
     * Read-only property
     */
    AccessGrantsInstanceArn?: AccessGrantsInstanceArnType;

    /**
     * The Amazon Resource Name (ARN) of the specified AWS Identity Center.
     */
    IdentityCenterArn?: IdentityCenterArnType;

    /**
     * A unique identifier for the specified access grants instance.
     * Read-only property
     */
    AccessGrantsInstanceId?: string;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
