/**
 * TypeScript definitions for AWS::Deadline::LicenseEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::LicenseEndpoint Resource Type
 */
export namespace AWS_Deadline_LicenseEndpoint {
  export type LicenseEndpointStatusType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Definition of AWS::Deadline::LicenseEndpoint Resource Type
   */
  export type LicenseEndpointResourceType = {
    /**
     * Read-only property
     */
    DnsName?: string;

    /**
     * Read-only property
     */
    LicenseEndpointId?: string;

    /**
     * Create-only property
     */
    SecurityGroupIds: string[];

    /**
     * Read-only property
     */
    Status?: LicenseEndpointStatusType;

    /**
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * Create-only property
     */
    SubnetIds: string[];

    /**
     * Create-only property
     */
    VpcId: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
