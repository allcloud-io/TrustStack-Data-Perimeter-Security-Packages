/**
 * TypeScript definitions for AWS::DirectoryService::MicrosoftAD
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DirectoryService::MicrosoftAD
 */
export namespace AWS_DirectoryService_MicrosoftAD {
  export type VpcSettingsType = {
    SubnetIds: string[];

    VpcId: string;
  };

  /**
   * Resource Type definition for AWS::DirectoryService::MicrosoftAD
   */
  export type MicrosoftADResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Alias?: string;

    /**
     * Read-only property
     */
    DnsIpAddresses?: string[];

    /**
     * Create-only property
     */
    CreateAlias?: boolean;

    /**
     * Create-only property
     */
    Edition?: string;

    EnableSso?: boolean;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Password: string;

    /**
     * Create-only property
     */
    ShortName?: string;

    /**
     * Create-only property
     */
    VpcSettings: VpcSettingsType;
  };
}
