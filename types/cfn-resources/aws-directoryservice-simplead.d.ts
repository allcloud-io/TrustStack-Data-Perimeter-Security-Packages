/**
 * TypeScript definitions for AWS::DirectoryService::SimpleAD
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DirectoryService::SimpleAD
 */
export namespace AWS_DirectoryService_SimpleAD {
  export type VpcSettingsType = {
    /**
     * The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
     */
    SubnetIds: string[];

    /**
     * The identifier of the VPC in which to create the directory.
     */
    VpcId: string;
  };

  /**
   * Resource Type definition for AWS::DirectoryService::SimpleAD
   */
  export type SimpleADResourceType = {
    /**
     * The unique identifier for a directory.
     * Read-only property
     */
    DirectoryId?: string;

    /**
     * The alias for a directory.
     * Read-only property
     */
    Alias?: string;

    /**
     * The IP addresses of the DNS servers for the directory, such as [ "172.31.3.154", "172.31.63.203" ].
     * Read-only property
     */
    DnsIpAddresses?: string[];

    /**
     * The name of the configuration set.
     * Create-only property
     */
    CreateAlias?: boolean;

    /**
     * Description for the directory.
     * Create-only property
     */
    Description?: string;

    /**
     * Whether to enable single sign-on for a Simple Active Directory in AWS.
     */
    EnableSso?: boolean;

    /**
     * The fully qualified domain name for the AWS Managed Simple AD directory.
     * Create-only property
     */
    Name: string;

    /**
     * The password for the default administrative user named Admin.
     * Create-only property
     */
    Password?: string;

    /**
     * The NetBIOS name for your domain.
     * Create-only property
     */
    ShortName?: string;

    /**
     * The size of the directory.
     * Create-only property
     */
    Size: string;

    /**
     * VPC settings of the Simple AD directory server in AWS.
     * Create-only property
     */
    VpcSettings: VpcSettingsType;
  };
}
