/**
 * TypeScript definitions for AWS::MediaLive::Input
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MediaLive::Input
 */
export namespace AWS_MediaLive_Input {
  export type SrtCallerSourceRequestType = {
    SrtListenerPort?: string;

    StreamId?: string;

    MinimumLatency?: number;

    Decryption?: SrtCallerDecryptionRequestType;

    SrtListenerAddress?: string;
  };

  export type SrtCallerDecryptionRequestType = {
    Algorithm?: string;

    PassphraseSecretArn?: string;
  };

  export type InputSourceRequestType = {
    PasswordParam?: string;

    Username?: string;

    Url?: string;
  };

  export type MulticastSettingsCreateRequestType = {
    Sources?: MulticastSourceCreateRequestType[];
  };

  export type InputDeviceSettingsType = {
    Id?: string;
  };

  export type InputDestinationRequestType = {
    StreamName?: string;

    NetworkRoutes?: InputRequestDestinationRouteType[];

    StaticIpAddress?: string;

    Network?: string;
  };

  export type SrtSettingsRequestType = {
    SrtCallerSources?: SrtCallerSourceRequestType[];
  };

  export type InputVpcRequestType = {
    SecurityGroupIds?: string[];

    SubnetIds?: string[];
  };

  export type InputRequestDestinationRouteType = {
    Cidr?: string;

    Gateway?: string;
  };

  export type MediaConnectFlowRequestType = {
    FlowArn?: string;
  };

  export type MulticastSourceCreateRequestType = {
    Url?: string;

    SourceIp?: string;
  };

  /**
   * Resource Type definition for AWS::MediaLive::Input
   */
  export type InputResourceType = {
    SrtSettings?: SrtSettingsRequestType;

    /**
     * Create-only property
     */
    InputNetworkLocation?: string;

    Destinations?: InputDestinationRequestType[];

    /**
     * Create-only property
     */
    Vpc?: InputVpcRequestType;

    MediaConnectFlows?: MediaConnectFlowRequestType[];

    Sources?: InputSourceRequestType[];

    RoleArn?: string;

    Name?: string;

    /**
     * Create-only property
     */
    Type?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    InputSecurityGroups?: string[];

    MulticastSettings?: MulticastSettingsCreateRequestType;

    InputDevices?: InputDeviceSettingsType[];

    Tags?: Record<string, any>;
  };
}
