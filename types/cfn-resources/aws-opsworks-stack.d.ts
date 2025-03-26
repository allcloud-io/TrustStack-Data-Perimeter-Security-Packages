/**
 * TypeScript definitions for AWS::OpsWorks::Stack
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorks::Stack
 */
export namespace AWS_OpsWorks_Stack {
  export type SourceType = {
    Password?: string;

    Revision?: string;

    SshKey?: string;

    Type?: string;

    Url?: string;

    Username?: string;
  };

  export type StackConfigurationManagerType = {
    Name?: string;

    Version?: string;
  };

  export type RdsDbInstanceType = {
    DbPassword: string;

    DbUser: string;

    RdsDbInstanceArn: string;
  };

  export type ElasticIpType = {
    Ip: string;

    Name?: string;
  };

  export type ChefConfigurationType = {
    BerkshelfVersion?: string;

    ManageBerkshelf?: boolean;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::OpsWorks::Stack
   */
  export type StackResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    AgentVersion?: string;

    Attributes?: Record<string, any>;

    ChefConfiguration?: ChefConfigurationType;

    /**
     * Create-only property
     */
    CloneAppIds?: string[];

    /**
     * Create-only property
     */
    ClonePermissions?: boolean;

    ConfigurationManager?: StackConfigurationManagerType;

    CustomCookbooksSource?: SourceType;

    CustomJson?: Record<string, any>;

    DefaultAvailabilityZone?: string;

    DefaultInstanceProfileArn: string;

    DefaultOs?: string;

    DefaultRootDeviceType?: string;

    DefaultSshKeyName?: string;

    DefaultSubnetId?: string;

    EcsClusterArn?: string;

    ElasticIps?: ElasticIpType[];

    HostnameTheme?: string;

    Name: string;

    RdsDbInstances?: RdsDbInstanceType[];

    /**
     * Create-only property
     */
    ServiceRoleArn: string;

    /**
     * Create-only property
     */
    SourceStackId?: string;

    Tags?: TagType[];

    UseCustomCookbooks?: boolean;

    UseOpsworksSecurityGroups?: boolean;

    /**
     * Create-only property
     */
    VpcId?: string;
  };
}
