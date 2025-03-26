/**
 * TypeScript definitions for AWS::AmazonMQ::Broker
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AmazonMQ::Broker
 */
export namespace AWS_AmazonMQ_Broker {
  export type LogListType = {
    Audit?: boolean;

    General?: boolean;
  };

  export type LdapServerMetadataType = {
    Hosts: string[];

    UserRoleName?: string;

    UserSearchMatching: string;

    RoleName?: string;

    UserBase: string;

    UserSearchSubtree?: boolean;

    RoleSearchMatching: string;

    ServiceAccountUsername: string;

    RoleBase: string;

    ServiceAccountPassword: string;

    RoleSearchSubtree?: boolean;
  };

  export type UserType = {
    ReplicationUser?: boolean;

    Username: string;

    Groups?: string[];

    ConsoleAccess?: boolean;

    JolokiaApiAccess?: string;

    Password: string;
  };

  export type MaintenanceWindowType = {
    DayOfWeek: string;

    TimeOfDay: string;

    TimeZone: string;
  };

  export type TagsEntryType = {
    Value: string;

    Key: string;
  };

  export type EncryptionOptionsType = {
    KmsKeyId?: string;

    UseAwsOwnedKey: boolean;
  };

  export type ConfigurationIdType = {
    Revision: number;

    Id: string;
  };

  /**
   * Resource Type definition for AWS::AmazonMQ::Broker
   */
  export type BrokerResourceType = {
    SecurityGroups?: string[];

    DataReplicationPrimaryBrokerArn?: string;

    Configuration?: ConfigurationIdType;

    /**
     * Create-only property
     */
    AuthenticationStrategy?: string;

    Users: UserType[];

    /**
     * Create-only property
     */
    SubnetIds?: string[];

    /**
     * Read-only property
     */
    StompEndpoints?: string[];

    /**
     * Read-only property
     */
    MqttEndpoints?: string[];

    /**
     * Read-only property
     */
    AmqpEndpoints?: string[];

    /**
     * Create-only property
     */
    DeploymentMode: string;

    /**
     * Create-only property
     */
    EngineType: string;

    /**
     * Create-only property
     */
    EncryptionOptions?: EncryptionOptionsType;

    Tags?: TagsEntryType[];

    /**
     * Read-only property
     */
    ConfigurationRevision?: number;

    /**
     * Create-only property
     */
    StorageType?: string;

    EngineVersion?: string;

    MaintenanceWindowStartTime?: MaintenanceWindowType;

    HostInstanceType: string;

    AutoMinorVersionUpgrade?: boolean;

    Logs?: LogListType;

    /**
     * Read-only property
     */
    ConfigurationId?: string;

    DataReplicationMode?: string;

    /**
     * Create-only property
     */
    BrokerName: string;

    /**
     * Read-only property
     */
    WssEndpoints?: string[];

    /**
     * Read-only property
     */
    IpAddresses?: string[];

    /**
     * Read-only property
     */
    OpenWireEndpoints?: string[];

    LdapServerMetadata?: LdapServerMetadataType;

    /**
     * Create-only property
     */
    PubliclyAccessible: boolean;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
