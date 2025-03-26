/**
 * TypeScript definitions for AWS::Lightsail::Bucket
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::Bucket
 */
export namespace AWS_Lightsail_Bucket {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * An object that sets the public accessibility of objects in the specified bucket.
   */
  export type AccessRulesType = {
    /**
     * Specifies the anonymous access to all objects in a bucket.
     */
    GetObject?: string;

    /**
     * A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.
     */
    AllowPublicOverrides?: boolean;
  };

  /**
   * Resource Type definition for AWS::Lightsail::Bucket
   */
  export type BucketResourceType = {
    /**
     * The name for the bucket.
     * Create-only property
     */
    BucketName: string;

    /**
     * The ID of the bundle to use for the bucket.
     */
    BundleId: string;

    /**
     * Read-only property
     */
    BucketArn?: string;

    /**
     * Specifies whether to enable or disable versioning of objects in the bucket.
     */
    ObjectVersioning?: boolean;

    AccessRules?: AccessRulesType;

    /**
     * The names of the Lightsail resources for which to set bucket access.
     */
    ResourcesReceivingAccess?: string[];

    /**
     * An array of strings to specify the AWS account IDs that can access the bucket.
     */
    ReadOnlyAccessAccounts?: string[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The URL of the bucket.
     * Read-only property
     */
    Url?: string;

    /**
     * Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle. You can update a bucket's bundle only one time within a monthly AWS billing cycle.
     * Read-only property
     */
    AbleToUpdateBundle?: boolean;
  };
}
