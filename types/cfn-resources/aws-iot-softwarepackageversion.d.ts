/**
 * TypeScript definitions for AWS::IoT::SoftwarePackageVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * resource definition
 */
export namespace AWS_IoT_SoftwarePackageVersion {
  export type PackageVersionStatusType = {};

  export type ResourceAttributesType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * resource definition
   */
  export type SoftwarePackageVersionResourceType = {
    Attributes?: ResourceAttributesType;

    Description?: string;

    /**
     * Read-only property
     */
    ErrorReason?: string;

    /**
     * Create-only property
     */
    PackageName: string;

    /**
     * Read-only property
     */
    PackageVersionArn?: string;

    /**
     * Read-only property
     */
    Status?: PackageVersionStatusType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    VersionName?: string;
  };
}
