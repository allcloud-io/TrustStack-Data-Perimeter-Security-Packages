/**
 * TypeScript definitions for AWS::EC2::ClientVpnEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::ClientVpnEndpoint
 */
export namespace AWS_EC2_ClientVpnEndpoint {
  export type ConnectionLogOptionsType = {
    Enabled: boolean;

    CloudwatchLogGroup?: string;

    CloudwatchLogStream?: string;
  };

  export type ClientConnectOptionsType = {
    Enabled: boolean;

    LambdaFunctionArn?: string;
  };

  export type FederatedAuthenticationRequestType = {
    SAMLProviderArn: string;

    SelfServiceSAMLProviderArn?: string;
  };

  export type ClientLoginBannerOptionsType = {
    Enabled: boolean;

    BannerText?: string;
  };

  export type DirectoryServiceAuthenticationRequestType = {
    DirectoryId: string;
  };

  export type CertificateAuthenticationRequestType = {
    ClientRootCertificateChainArn: string;
  };

  export type ClientAuthenticationRequestType = {
    MutualAuthentication?: CertificateAuthenticationRequestType;

    Type: string;

    ActiveDirectory?: DirectoryServiceAuthenticationRequestType;

    FederatedAuthentication?: FederatedAuthenticationRequestType;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type TagSpecificationType = {
    ResourceType: string;

    Tags: TagType[];
  };

  /**
   * Resource Type definition for AWS::EC2::ClientVpnEndpoint
   */
  export type ClientVpnEndpointResourceType = {
    /**
     * Create-only property
     */
    ClientCidrBlock: string;

    ClientConnectOptions?: ClientConnectOptionsType;

    Description?: string;

    /**
     * Create-only property
     */
    TagSpecifications?: TagSpecificationType[];

    /**
     * Create-only property
     */
    AuthenticationOptions: ClientAuthenticationRequestType[];

    ServerCertificateArn: string;

    SessionTimeoutHours?: number;

    DnsServers?: string[];

    SecurityGroupIds?: string[];

    DisconnectOnSessionTimeout?: boolean;

    ConnectionLogOptions: ConnectionLogOptionsType;

    SplitTunnel?: boolean;

    ClientLoginBannerOptions?: ClientLoginBannerOptionsType;

    VpcId?: string;

    SelfServicePortal?: string;

    /**
     * Create-only property
     */
    TransportProtocol?: string;

    /**
     * Read-only property
     */
    Id?: string;

    VpnPort?: number;
  };
}
