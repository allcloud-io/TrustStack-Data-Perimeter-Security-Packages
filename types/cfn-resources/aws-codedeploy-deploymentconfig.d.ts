/**
 * TypeScript definitions for AWS::CodeDeploy::DeploymentConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeDeploy::DeploymentConfig
 */
export namespace AWS_CodeDeploy_DeploymentConfig {
  export type TimeBasedLinearType = {
    LinearInterval: number;

    LinearPercentage: number;
  };

  export type TimeBasedCanaryType = {
    CanaryPercentage: number;

    CanaryInterval: number;
  };

  export type TrafficRoutingConfigType = {
    Type: string;

    TimeBasedLinear?: TimeBasedLinearType;

    TimeBasedCanary?: TimeBasedCanaryType;
  };

  export type MinimumHealthyHostsPerZoneType = {
    Value: number;

    Type: string;
  };

  export type ZonalConfigType = {
    FirstZoneMonitorDurationInSeconds?: number;

    MonitorDurationInSeconds?: number;

    MinimumHealthyHostsPerZone?: MinimumHealthyHostsPerZoneType;
  };

  export type MinimumHealthyHostsType = {
    Value: number;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::CodeDeploy::DeploymentConfig
   */
  export type DeploymentConfigResourceType = {
    /**
     * The destination platform type for the deployment (Lambda, Server, or ECS).
     * Create-only property
     */
    ComputePlatform?: string;

    /**
     * A name for the deployment configuration. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see Name Type.
     * Create-only property
     */
    DeploymentConfigName?: string;

    /**
     * The minimum number of healthy instances that should be available at any time during the deployment. There are two parameters expected in the input: type and value.
     * Create-only property
     */
    MinimumHealthyHosts?: MinimumHealthyHostsType;

    /**
     * The zonal deployment config that specifies how the zonal deployment behaves
     * Create-only property
     */
    ZonalConfig?: ZonalConfigType;

    /**
     * The configuration that specifies how the deployment traffic is routed.
     * Create-only property
     */
    TrafficRoutingConfig?: TrafficRoutingConfigType;
  };
}
