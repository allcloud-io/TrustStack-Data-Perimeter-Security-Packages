/**
 * TypeScript definitions for AWS::FSx::StorageVirtualMachine
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::FSx::StorageVirtualMachine
 */
export namespace AWS_FSx_StorageVirtualMachine {
  export type SelfManagedActiveDirectoryConfigurationType = {
    FileSystemAdministratorsGroup?: string;

    UserName?: string;

    DomainName?: string;

    OrganizationalUnitDistinguishedName?: string;

    DnsIps?: string[];

    Password?: string;
  };

  export type ActiveDirectoryConfigurationType = {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfigurationType;

    NetBiosName?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::FSx::StorageVirtualMachine
   */
  export type StorageVirtualMachineResourceType = {
    /**
     * Read-only property
     */
    ResourceARN?: string;

    SvmAdminPassword?: string;

    /**
     * Read-only property
     */
    StorageVirtualMachineId?: string;

    ActiveDirectoryConfiguration?: ActiveDirectoryConfigurationType;

    /**
     * Create-only property
     */
    RootVolumeSecurityStyle?: string;

    /**
     * Create-only property
     */
    FileSystemId: string;

    /**
     * Read-only property
     */
    UUID?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
