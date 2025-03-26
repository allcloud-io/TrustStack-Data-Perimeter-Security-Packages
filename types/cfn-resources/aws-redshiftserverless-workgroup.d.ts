/**
 * TypeScript definitions for AWS::RedshiftServerless::Workgroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RedshiftServerless::Workgroup Resource Type
 */
export namespace AWS_RedshiftServerless_Workgroup {
  export type ConfigParameterType = {
    ParameterKey?: string;

    ParameterValue?: string;
  };

  export type EndpointType = {
    Address?: string;

    Port?: number;

    VpcEndpoints?: VpcEndpointType[];
  };

  export type NetworkInterfaceType = {
    NetworkInterfaceId?: string;

    SubnetId?: string;

    PrivateIpAddress?: string;

    AvailabilityZone?: string;
  };

  export type PerformanceTargetType = {
    Status?: PerformanceTargetStatusType;

    Level?: number;
  };

  export type VpcEndpointType = {
    VpcEndpointId?: string;

    VpcId?: string;

    NetworkInterfaces?: NetworkInterfaceType[];
  };

  export type WorkgroupType = {
    WorkgroupId?: string;

    WorkgroupArn?: string;

    WorkgroupName?: string;

    NamespaceName?: string;

    BaseCapacity?: number;

    MaxCapacity?: number;

    EnhancedVpcRouting?: boolean;

    ConfigParameters?: ConfigParameterType[];

    SecurityGroupIds?: string[];

    SubnetIds?: string[];

    Status?: WorkgroupStatusType;

    Endpoint?: EndpointType;

    PubliclyAccessible?: boolean;

    CreationDate?: string;

    PricePerformanceTarget?: PerformanceTargetType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type WorkgroupStatusType = {};

  export type PerformanceTargetStatusType = {};

  /**
   * Definition of AWS::RedshiftServerless::Workgroup Resource Type
   */
  export type WorkgroupResourceType = {
    /**
     * The name of the workgroup.
     * Create-only property
     */
    WorkgroupName: string;

    /**
     * The namespace the workgroup is associated with.
     * Create-only property
     */
    NamespaceName?: string;

    /**
     * The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
     */
    BaseCapacity?: number;

    /**
     * The max compute capacity of the workgroup in Redshift Processing Units (RPUs).
     */
    MaxCapacity?: number;

    /**
     * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
     * Default: false
     */
    EnhancedVpcRouting?: boolean;

    /**
     * A list of parameters to set for finer control over a database. Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.
     */
    ConfigParameters?: ConfigParameterType[];

    /**
     * A list of security group IDs to associate with the workgroup.
     */
    SecurityGroupIds?: string[];

    /**
     * A list of subnet IDs the workgroup is associated with.
     */
    SubnetIds?: string[];

    /**
     * A value that specifies whether the workgroup can be accessible from a public network.
     * Default: false
     */
    PubliclyAccessible?: boolean;

    /**
     * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
     */
    Port?: number;

    /**
     * A property that represents the price performance target settings for the workgroup.
     */
    PricePerformanceTarget?: PerformanceTargetType;

    /**
     * The map of the key-value pairs used to tag the workgroup.
     */
    Tags?: TagType[];

    /**
     * Definition for workgroup resource
     * Read-only property
     */
    Workgroup?: WorkgroupType;
  };
}
