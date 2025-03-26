/**
 * TypeScript definitions for AWS::GlobalAccelerator::Accelerator
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GlobalAccelerator::Accelerator
 */
export namespace AWS_GlobalAccelerator_Accelerator {
  /**
   * Tag is a key-value pair associated with accelerator.
   */
  export type TagType = {
    /**
     * Key of the tag. Value can be 1 to 127 characters.
     */
    Key: string;

    /**
     * Value for the tag. Value can be 1 to 255 characters.
     */
    Value: string;
  };

  /**
   * An IPV4 address
   */
  export type IpAddressType = {};

  /**
   * Resource Type definition for AWS::GlobalAccelerator::Accelerator
   */
  export type AcceleratorResourceType = {
    /**
     * Name of accelerator.
     */
    Name: string;

    /**
     * IP Address type.
     * Default: "IPV4"
     */
    IpAddressType?: string;

    /**
     * The IP addresses from BYOIP Prefix pool.
     * Default: null
     */
    IpAddresses?: IpAddressType[];

    /**
     * Indicates whether an accelerator is enabled. The value is true or false.
     * Default: true
     */
    Enabled?: boolean;

    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 addresses.
     * Read-only property
     */
    DnsName?: string;

    /**
     * The IPv4 addresses assigned to the accelerator.
     * Read-only property
     */
    Ipv4Addresses?: string[];

    /**
     * The IPv6 addresses assigned if the accelerator is dualstack
     * Default: null
     * Read-only property
     */
    Ipv6Addresses?: string[];

    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6 addresses.
     * Read-only property
     */
    DualStackDnsName?: string;

    /**
     * The Amazon Resource Name (ARN) of the accelerator.
     * Read-only property
     */
    AcceleratorArn?: string;

    Tags?: TagType[];
  };
}
