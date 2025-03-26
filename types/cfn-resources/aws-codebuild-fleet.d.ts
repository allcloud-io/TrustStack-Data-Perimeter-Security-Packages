/**
 * TypeScript definitions for AWS::CodeBuild::Fleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeBuild::Fleet
 */
export namespace AWS_CodeBuild_Fleet {
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type VpcConfigType = {
    VpcId?: string;

    Subnets?: string[];

    SecurityGroupIds?: string[];
  };

  export type ProxyConfigurationType = {
    DefaultBehavior?: string;

    OrderedProxyRules?: FleetProxyRuleType[];
  };

  export type FleetProxyRuleType = {
    Type?: string;

    Effect?: string;

    Entities?: string[];
  };

  export type ScalingConfigurationInputType = {
    MaxCapacity?: number;

    ScalingType?: string;

    TargetTrackingScalingConfigs?: TargetTrackingScalingConfigurationType[];
  };

  export type TargetTrackingScalingConfigurationType = {
    MetricType?: string;

    TargetValue?: number;
  };

  export type ComputeConfigurationType = {
    vCpu?: number;

    memory?: number;

    disk?: number;

    machineType?: string;
  };

  /**
   * Resource Type definition for AWS::CodeBuild::Fleet
   */
  export type FleetResourceType = {
    Name?: string;

    BaseCapacity?: number;

    EnvironmentType?: string;

    ComputeType?: string;

    OverflowBehavior?: string;

    FleetServiceRole?: string;

    FleetVpcConfig?: VpcConfigType;

    FleetProxyConfiguration?: ProxyConfigurationType;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    Arn?: string;

    ImageId?: string;

    ScalingConfiguration?: ScalingConfigurationInputType;

    ComputeConfiguration?: ComputeConfigurationType;
  };
}
