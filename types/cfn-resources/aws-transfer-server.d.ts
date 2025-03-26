/**
 * TypeScript definitions for AWS::Transfer::Server
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Transfer::Server Resource Type
 */
export namespace AWS_Transfer_Server {
  export type As2TransportType = {};

  /**
   * Indicates whether optimization to directory listing on S3 servers is used. Disabled by default for compatibility.
   */
  export type DirectoryListingOptimizationType = {};

  export type DomainType = {};

  export type EndpointDetailsType = {
    AddressAllocationIds?: string[];

    SubnetIds?: string[];

    VpcEndpointId?: string;

    VpcId?: string;

    SecurityGroupIds?: string[];
  };

  export type EndpointTypeType = {};

  export type IdentityProviderDetailsType = {
    Url?: string;

    InvocationRole?: string;

    DirectoryId?: string;

    Function?: string;

    SftpAuthenticationMethods?: SftpAuthenticationMethodsType;
  };

  export type IdentityProviderTypeType = {};

  export type ProtocolType = {};

  export type ProtocolDetailsType = {
    PassiveIp?: string;

    TlsSessionResumptionMode?: TlsSessionResumptionModeType;

    SetStatOption?: SetStatOptionType;

    As2Transports?: As2TransportType[];
  };

  export type S3StorageOptionsType = {
    DirectoryListingOptimization?: DirectoryListingOptimizationType;
  };

  export type SetStatOptionType = {};

  export type SftpAuthenticationMethodsType = {};

  export type StateType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TlsSessionResumptionModeType = {};

  export type WorkflowDetailType = {
    WorkflowId: string;

    ExecutionRole: string;
  };

  export type WorkflowDetailsType = {
    OnUpload?: WorkflowDetailType[];

    OnPartialUpload?: WorkflowDetailType[];
  };

  /**
   * Definition of AWS::Transfer::Server Resource Type
   */
  export type ServerResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The list of egress IP addresses of this server. These IP addresses are only relevant for servers that use the AS2 protocol. They are used for sending asynchronous MDNs. These IP addresses are assigned automatically when you create an AS2 server. Additionally, if you update an existing server and add the AS2 protocol, static IP addresses are assigned as well.
     * Read-only property
     */
    As2ServiceManagedEgressIpAddresses?: string[];

    Certificate?: string;

    /**
     * Create-only property
     */
    Domain?: DomainType;

    EndpointDetails?: EndpointDetailsType;

    EndpointType?: EndpointTypeType;

    IdentityProviderDetails?: IdentityProviderDetailsType;

    /**
     * Create-only property
     */
    IdentityProviderType?: IdentityProviderTypeType;

    LoggingRole?: string;

    PostAuthenticationLoginBanner?: string;

    PreAuthenticationLoginBanner?: string;

    ProtocolDetails?: ProtocolDetailsType;

    Protocols?: ProtocolType[];

    S3StorageOptions?: S3StorageOptionsType;

    SecurityPolicyName?: string;

    /**
     * Read-only property
     */
    ServerId?: string;

    /**
     * Read-only property
     */
    State?: StateType;

    StructuredLogDestinations?: string[];

    Tags?: TagType[];

    WorkflowDetails?: WorkflowDetailsType;
  };
}
