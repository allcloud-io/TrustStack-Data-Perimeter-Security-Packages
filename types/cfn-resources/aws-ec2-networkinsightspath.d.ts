/**
 * TypeScript definitions for AWS::EC2::NetworkInsightsPath
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EC2::NetworkInsightsPath
 */
export namespace AWS_EC2_NetworkInsightsPath {
  export type TagsType = {};

  export type TagType = {
    Key: string;

    Value?: string;
  };

  export type IpAddressType = {};

  export type ProtocolType = {};

  export type PortType = {};

  export type FilterPortRangeType = {
    FromPort?: number;

    ToPort?: number;
  };

  export type PathFilterType = {
    SourceAddress?: IpAddressType;

    SourcePortRange?: FilterPortRangeType;

    DestinationAddress?: IpAddressType;

    DestinationPortRange?: FilterPortRangeType;
  };

  /**
   * Resource schema for AWS::EC2::NetworkInsightsPath
   */
  export type NetworkInsightsPathResourceType = {
    /**
     * Read-only property
     */
    NetworkInsightsPathId?: string;

    /**
     * Read-only property
     */
    NetworkInsightsPathArn?: string;

    /**
     * Read-only property
     */
    CreatedDate?: string;

    /**
     * Create-only property
     */
    SourceIp?: IpAddressType;

    /**
     * Create-only property
     */
    FilterAtSource?: PathFilterType;

    /**
     * Create-only property
     */
    FilterAtDestination?: PathFilterType;

    /**
     * Create-only property
     */
    DestinationIp?: IpAddressType;

    /**
     * Create-only property
     */
    Source: string;

    /**
     * Create-only property
     */
    Destination?: string;

    /**
     * Read-only property
     */
    SourceArn?: string;

    /**
     * Read-only property
     */
    DestinationArn?: string;

    /**
     * Create-only property
     */
    Protocol: ProtocolType;

    /**
     * Create-only property
     */
    DestinationPort?: PortType;

    Tags?: TagType[];
  };
}
