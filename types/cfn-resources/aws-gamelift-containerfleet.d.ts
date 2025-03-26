/**
 * TypeScript definitions for AWS::GameLift::ContainerFleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::ContainerFleet resource creates an Amazon GameLift (GameLift) container fleet to host game servers.
 */
export namespace AWS_GameLift_ContainerFleet {
  /**
   * Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.
   */
  export type ConnectionPortRangeType = {
    /**
     * A starting value for a range of allowed port numbers.
     */
    FromPort: number;

    /**
     * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
     */
    ToPort: number;
  };

  /**
   * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift hosting resource. New game sessions that are started on the fleet are assigned an IP address/port number combination, which must fall into the fleet's allowed ranges. For fleets created with a custom game server, the ranges reflect the server's game session assignments. For Realtime Servers fleets, Amazon GameLift automatically opens two port ranges, one for TCP messaging and one for UDP, for use by the Realtime servers.
   */
  export type IpPermissionType = {
    /**
     * A starting value for a range of allowed port numbers.
     */
    FromPort: number;

    /**
     * A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
     */
    IpRange: string;

    /**
     * The network communication protocol used by the fleet.
     */
    Protocol: string;

    /**
     * An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.
     */
    ToPort: number;
  };

  /**
   * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".
   * The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a CreateGameSession request, Amazon GameLift checks that the player (identified by CreatorId) has created fewer than 10 game sessions in the past 60 minutes.
   */
  export type GameSessionCreationLimitPolicyType = {
    /**
     * The maximum number of game sessions that an individual can create during the policy period.
     */
    NewGameSessionsPerCreator?: number;

    /**
     * The time span used in evaluating the resource creation limit policy.
     */
    PolicyPeriodInMinutes?: number;
  };

  /**
   * Configures the service that provides logs.
   */
  export type LogDestinationType = {};

  /**
   * A policy the location and provider of logs from the fleet.
   */
  export type LogConfigurationType = {
    LogDestination?: LogDestinationType;

    /**
     * The name of the S3 bucket to pull logs from if S3 is the LogDestination
     */
    S3BucketName?: string;
  };

  export type LocationType = {};

  /**
   * Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region.
   */
  export type LocationCapacityType = {
    /**
     * The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.
     */
    DesiredEC2Instances: number;

    /**
     * The minimum value allowed for the fleet's instance count for a location.
     */
    MinSize: number;

    /**
     * The maximum value that is allowed for the fleet's instance count for a location.
     */
    MaxSize: number;
  };

  /**
   * A remote location where a multi-location fleet can deploy EC2 instances for game hosting.
   */
  export type LocationConfigurationType = {
    Location: LocationType;

    LocationCapacity?: LocationCapacityType;

    StoppedActions?: StoppedActionsType;
  };

  /**
   * Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.
   */
  export type ScalingPolicyType = {
    /**
     * Comparison operator to use when measuring a metric against the threshold value.
     */
    ComparisonOperator?: string;

    /**
     * Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
     */
    EvaluationPeriods?: number;

    /**
     * Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.
     */
    MetricName: string;

    /**
     * A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
     */
    Name: string;

    /**
     * The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
     */
    PolicyType?: string;

    /**
     * Amount of adjustment to make, based on the scaling adjustment type.
     */
    ScalingAdjustment?: number;

    /**
     * The type of adjustment to make to a fleet's instance count.
     */
    ScalingAdjustmentType?: string;

    /**
     * An object that contains settings for a target-based scaling policy.
     */
    TargetConfiguration?: TargetConfigurationType;

    /**
     * Metric value used to trigger a scaling event.
     */
    Threshold?: number;
  };

  /**
   * A list of fleet actions that have been suspended in the fleet location.
   */
  export type StoppedActionsType = {};

  /**
   * Settings for a target-based scaling policy. A target-based policy tracks a particular fleet metric specifies a target value for the metric. As player usage changes, the policy triggers Amazon GameLift to adjust capacity so that the metric returns to the target value. The target configuration specifies settings as needed for the target based policy, including the target value.
   */
  export type TargetConfigurationType = {
    /**
     * Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).
     */
    TargetValue: number;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
     */
    Value: string;
  };

  /**
   * Provides information about the last deployment ID and its status.
   */
  export type DeploymentDetailsType = {
    /**
     * The ID of the last deployment on the container fleet. This field will be empty if the container fleet does not have a ContainerGroupDefinition attached.
     */
    LatestDeploymentId?: string;
  };

  /**
   * Provides details about how to drain old tasks and replace them with new updated tasks.
   */
  export type DeploymentConfigurationType = {
    /**
     * The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.
     */
    ProtectionStrategy?: string;

    /**
     * The minimum percentage of healthy required; defaults to 75.
     */
    MinimumHealthyPercentage?: number;

    /**
     * The strategy to apply in case of impairment; defaults to MAINTAIN.
     */
    ImpairmentStrategy?: string;
  };

  /**
   * The AWS::GameLift::ContainerFleet resource creates an Amazon GameLift (GameLift) container fleet to host game servers.
   */
  export type ContainerFleetResourceType = {
    /**
     * Unique fleet ID
     * Read-only property
     */
    FleetId?: string;

    /**
     * A unique identifier for an AWS IAM role that manages access to your AWS services. Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
     */
    FleetRoleArn: string;

    /**
     * A human-readable description of a fleet.
     */
    Description?: string;

    /**
     * The name of the container group definition that will be created per game server. You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.
     */
    GameServerContainerGroupDefinitionName?: string;

    /**
     * The Amazon Resource Name (ARN) of the game server container group definition. This field will be empty if GameServerContainerGroupDefinitionName is not specified.
     * Read-only property
     */
    GameServerContainerGroupDefinitionArn?: string;

    /**
     * The name of the container group definition that will be created per instance. This field is optional if you specify GameServerContainerGroupDefinitionName.
     */
    PerInstanceContainerGroupDefinitionName?: string;

    /**
     * The Amazon Resource Name (ARN) of the per instance container group definition. This field will be empty if PerInstanceContainerGroupDefinitionName is not specified.
     * Read-only property
     */
    PerInstanceContainerGroupDefinitionArn?: string;

    InstanceConnectionPortRange?: ConnectionPortRangeType;

    /**
     * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
     */
    InstanceInboundPermissions?: IpPermissionType[];

    /**
     * The number of desired game server container groups per instance, a number between 1-5000.
     */
    GameServerContainerGroupsPerInstance?: number;

    /**
     * The maximum number of game server container groups per instance, a number between 1-5000.
     * Read-only property
     */
    MaximumGameServerContainerGroupsPerInstance?: number;

    /**
     * A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The current status of the container fleet.
     * Read-only property
     */
    Status?: string;

    /**
     * Read-only property
     */
    DeploymentDetails?: DeploymentDetailsType;

    DeploymentConfiguration?: DeploymentConfigurationType;

    /**
     * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     * Create-only property
     */
    InstanceType?: string;

    /**
     * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
     * Create-only property
     */
    BillingType?: string;

    /**
     * Create-only property
     */
    Locations?: LocationConfigurationType[];

    /**
     * A list of rules that control how a fleet is scaled.
     */
    ScalingPolicies?: ScalingPolicyType[];

    /**
     * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
     */
    MetricGroups?: string[];

    /**
     * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
     */
    NewGameSessionProtectionPolicy?: string;

    /**
     * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
     */
    GameSessionCreationLimitPolicy?: GameSessionCreationLimitPolicyType;

    LogConfiguration?: LogConfigurationType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift container fleet resource and uniquely identifies it across all AWS Regions.
     * Read-only property
     */
    FleetArn?: string;
  };
}
