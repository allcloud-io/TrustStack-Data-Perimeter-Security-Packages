/**
 * TypeScript definitions for AWS::EC2::IPAMScope
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema of AWS::EC2::IPAMScope Type
 */
export namespace AWS_EC2_IPAMScope {
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
    Value: string;
  };

  /**
   * Resource Schema of AWS::EC2::IPAMScope Type
   */
  export type IPAMScopeResourceType = {
    /**
     * Id of the IPAM scope.
     * Read-only property
     */
    IpamScopeId?: string;

    /**
     * The Amazon Resource Name (ARN) of the IPAM scope.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Id of the IPAM this scope is a part of.
     * Create-only property
     */
    IpamId: string;

    /**
     * The Amazon Resource Name (ARN) of the IPAM this scope is a part of.
     * Read-only property
     */
    IpamArn?: string;

    /**
     * Determines whether this scope contains publicly routable space or space for a private network
     * Read-only property
     */
    IpamScopeType?: string;

    /**
     * Is this one of the default scopes created with the IPAM.
     * Read-only property
     */
    IsDefault?: boolean;

    Description?: string;

    /**
     * The number of pools that currently exist in this scope.
     * Read-only property
     */
    PoolCount?: number;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
