/**
 * TypeScript definitions for AWS::EC2::NetworkInsightsAnalysis
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EC2::NetworkInsightsAnalysis
 */
export namespace AWS_EC2_NetworkInsightsAnalysis {
  export type PathComponentType = {
    AdditionalDetails?: AdditionalDetailType[];

    InboundHeader?: AnalysisPacketHeaderType;

    Vpc?: AnalysisComponentType;

    DestinationVpc?: AnalysisComponentType;

    SecurityGroupRule?: AnalysisSecurityGroupRuleType;

    TransitGateway?: AnalysisComponentType;

    ElasticLoadBalancerListener?: AnalysisComponentType;

    Explanations?: ExplanationType[];

    ServiceName?: string;

    SequenceNumber?: number;

    SourceVpc?: AnalysisComponentType;

    OutboundHeader?: AnalysisPacketHeaderType;

    AclRule?: AnalysisAclRuleType;

    TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRouteType;

    Component?: AnalysisComponentType;

    Subnet?: AnalysisComponentType;

    RouteTableRoute?: AnalysisRouteTableRouteType;
  };

  export type AnalysisLoadBalancerListenerType = {
    InstancePort?: PortType;

    LoadBalancerPort?: PortType;
  };

  export type AnalysisLoadBalancerTargetType = {
    Address?: IpAddressType;

    Instance?: AnalysisComponentType;

    Port?: PortType;

    AvailabilityZone?: string;
  };

  export type ExplanationType = {
    VpnGateway?: AnalysisComponentType;

    PacketField?: string;

    TransitGatewayAttachment?: AnalysisComponentType;

    Protocols?: ProtocolType[];

    IngressRouteTable?: AnalysisComponentType;

    ClassicLoadBalancerListener?: AnalysisLoadBalancerListenerType;

    VpcPeeringConnection?: AnalysisComponentType;

    Address?: IpAddressType;

    Port?: PortType;

    Addresses?: IpAddressType[];

    ElasticLoadBalancerListener?: AnalysisComponentType;

    TransitGatewayRouteTable?: AnalysisComponentType;

    ExplanationCode?: string;

    InternetGateway?: AnalysisComponentType;

    SourceVpc?: AnalysisComponentType;

    AttachedTo?: AnalysisComponentType;

    PrefixList?: AnalysisComponentType;

    TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRouteType;

    ComponentRegion?: string;

    LoadBalancerTargetGroup?: AnalysisComponentType;

    NetworkInterface?: AnalysisComponentType;

    CustomerGateway?: AnalysisComponentType;

    DestinationVpc?: AnalysisComponentType;

    SecurityGroup?: AnalysisComponentType;

    TransitGateway?: AnalysisComponentType;

    RouteTable?: AnalysisComponentType;

    State?: string;

    LoadBalancerListenerPort?: PortType;

    vpcEndpoint?: AnalysisComponentType;

    Subnet?: AnalysisComponentType;

    Cidrs?: string[];

    Destination?: AnalysisComponentType;

    SecurityGroups?: AnalysisComponentType[];

    ComponentAccount?: string;

    VpnConnection?: AnalysisComponentType;

    Vpc?: AnalysisComponentType;

    NatGateway?: AnalysisComponentType;

    Direction?: string;

    LoadBalancerTargetPort?: PortType;

    LoadBalancerTarget?: AnalysisLoadBalancerTargetType;

    LoadBalancerTargetGroups?: AnalysisComponentType[];

    Component?: AnalysisComponentType;

    MissingComponent?: string;

    RouteTableRoute?: AnalysisRouteTableRouteType;

    AvailabilityZones?: string[];

    PortRanges?: PortRangeType[];

    Acl?: AnalysisComponentType;

    SecurityGroupRule?: AnalysisSecurityGroupRuleType;

    SubnetRouteTable?: AnalysisComponentType;

    LoadBalancerArn?: ResourceArnType;

    AclRule?: AnalysisAclRuleType;
  };

  export type PortType = {};

  export type AnalysisPacketHeaderType = {
    DestinationPortRanges?: PortRangeType[];

    SourcePortRanges?: PortRangeType[];

    DestinationAddresses?: IpAddressType[];

    Protocol?: ProtocolType;

    SourceAddresses?: IpAddressType[];
  };

  export type AdditionalDetailType = {
    ServiceName?: string;

    AdditionalDetailType?: string;

    LoadBalancers?: AnalysisComponentType[];

    Component?: AnalysisComponentType;
  };

  export type AlternatePathHintType = {
    ComponentArn?: string;

    ComponentId?: string;
  };

  export type TransitGatewayRouteTableRouteType = {
    PrefixListId?: string;

    ResourceId?: string;

    State?: string;

    ResourceType?: string;

    RouteOrigin?: string;

    DestinationCidr?: string;

    AttachmentId?: string;
  };

  export type ProtocolType = {};

  export type TagsType = {};

  export type AnalysisSecurityGroupRuleType = {
    PortRange?: PortRangeType;

    Cidr?: string;

    PrefixListId?: string;

    SecurityGroupId?: string;

    Protocol?: ProtocolType;

    Direction?: string;
  };

  export type AnalysisComponentType = {
    Id?: string;

    Arn?: string;
  };

  export type AnalysisAclRuleType = {
    PortRange?: PortRangeType;

    Cidr?: string;

    RuleAction?: string;

    Egress?: boolean;

    RuleNumber?: number;

    Protocol?: ProtocolType;
  };

  export type AnalysisRouteTableRouteType = {
    Origin?: string;

    destinationPrefixListId?: string;

    destinationCidr?: string;

    NetworkInterfaceId?: string;

    TransitGatewayId?: string;

    VpcPeeringConnectionId?: string;

    instanceId?: string;

    State?: string;

    egressOnlyInternetGatewayId?: string;

    NatGatewayId?: string;

    gatewayId?: string;
  };

  export type ResourceArnType = {};

  export type PortRangeType = {
    From?: number;

    To?: number;
  };

  export type IpAddressType = {};

  export type TagType = {
    Value?: string;

    Key: string;
  };

  /**
   * Resource schema for AWS::EC2::NetworkInsightsAnalysis
   */
  export type NetworkInsightsAnalysisResourceType = {
    /**
     * Read-only property
     */
    Status?: string;

    /**
     * Read-only property
     */
    ReturnPathComponents?: PathComponentType[];

    /**
     * Read-only property
     */
    NetworkInsightsAnalysisId?: string;

    /**
     * Create-only property
     */
    NetworkInsightsPathId: string;

    /**
     * Read-only property
     */
    NetworkPathFound?: boolean;

    /**
     * Read-only property
     */
    SuggestedAccounts?: string[];

    /**
     * Create-only property
     */
    FilterInArns?: ResourceArnType[];

    /**
     * Read-only property
     */
    NetworkInsightsAnalysisArn?: string;

    /**
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * Read-only property
     */
    StartDate?: string;

    /**
     * Read-only property
     */
    AlternatePathHints?: AlternatePathHintType[];

    /**
     * Read-only property
     */
    Explanations?: ExplanationType[];

    /**
     * Read-only property
     */
    ForwardPathComponents?: PathComponentType[];

    AdditionalAccounts?: string[];

    Tags?: TagType[];
  };
}
