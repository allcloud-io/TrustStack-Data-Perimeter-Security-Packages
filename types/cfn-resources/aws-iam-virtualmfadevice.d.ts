/**
 * TypeScript definitions for AWS::IAM::VirtualMFADevice
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IAM::VirtualMFADevice
 */
export namespace AWS_IAM_VirtualMFADevice {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;

    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;
  };

  /**
   * Resource Type definition for AWS::IAM::VirtualMFADevice
   */
  export type VirtualMFADeviceResourceType = {
    /**
     * Create-only property
     */
    VirtualMfaDeviceName?: string;

    /**
     * Create-only property
     */
    Path?: string;

    /**
     * Read-only property
     */
    SerialNumber?: string;

    Users: string[];

    Tags?: TagType[];
  };
}
