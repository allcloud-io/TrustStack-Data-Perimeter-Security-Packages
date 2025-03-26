/**
 * TypeScript definitions for AWS::GameLift::GameServerGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.
 */
export namespace AWS_GameLift_GameServerGroup {
  /**
   * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
   */
  export type AutoScalingPolicyType = {
    EstimatedInstanceWarmup?: EstimatedInstanceWarmupType;

    TargetTrackingConfiguration: TargetTrackingConfigurationType;
  };

  /**
   * Length of time, in seconds, it takes for a new instance to start new game server processes and register with GameLift FleetIQ.
   */
  export type EstimatedInstanceWarmupType = {};

  /**
   * Settings for a target-based scaling policy applied to Auto Scaling group.
   */
  export type TargetTrackingConfigurationType = {
    TargetValue: TargetValueType;
  };

  /**
   * Desired value to use with a game server group target-based scaling policy.
   */
  export type TargetValueType = {};

  /**
   * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
   */
  export type BalancingStrategyType = {};

  /**
   * The type of delete to perform.
   */
  export type DeleteOptionType = {};

  /**
   * An identifier for the new game server group.
   */
  export type GameServerGroupNameType = {};

  /**
   * A flag that indicates whether instances in the game server group are protected from early termination.
   */
  export type GameServerProtectionPolicyType = {};

  /**
   * A generated unique ID for the game server group.
   */
  export type GameServerGroupArnType = {};

  /**
   * A set of EC2 instance types to use when creating instances in the group.
   */
  export type InstanceDefinitionsType = {};

  /**
   * An allowed instance type for your game server group.
   */
  export type InstanceDefinitionType = {
    InstanceType: InstanceTypeType;

    WeightedCapacity?: WeightedCapacityType;
  };

  /**
   * An EC2 instance type designation.
   */
  export type InstanceTypeType = {};

  /**
   * Instance weighting that indicates how much this instance type contributes to the total capacity of a game server group.
   */
  export type WeightedCapacityType = {};

  /**
   * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
   */
  export type LaunchTemplateType = {
    LaunchTemplateId?: LaunchTemplateIdType;

    LaunchTemplateName?: LaunchTemplateNameType;

    Version?: VersionType;
  };

  /**
   * A unique identifier for an existing EC2 launch template.
   */
  export type LaunchTemplateIdType = {};

  /**
   * A readable identifier for an existing EC2 launch template.
   */
  export type LaunchTemplateNameType = {};

  /**
   * The version of the EC2 launch template to use.
   */
  export type VersionType = {};

  /**
   * The maximum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
   */
  export type MaxSizeType = {};

  /**
   * The minimum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
   */
  export type MinSizeType = {};

  /**
   * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
   */
  export type RoleArnType = {};

  /**
   * A list of labels to assign to the new game server group resource. Updating game server group tags with CloudFormation will not take effect. Please update this property using AWS GameLift APIs instead.
   */
  export type TagsType = {};

  export type TagType = {
    /**
     * The key for a developer-defined key:value pair for tagging an AWS resource.
     */
    Key?: string;

    /**
     * The value for a developer-defined key:value pair for tagging an AWS resource.
     */
    Value?: string;
  };

  /**
   * A list of virtual private cloud (VPC) subnets to use with instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
   */
  export type VpcSubnetsType = {};

  /**
   * Properties that describe a game server group resource. A game server group manages certain properties of a corresponding EC2 Auto Scaling group.
   */
  export type GameServerGroupType = {
    AutoScalingGroupArn?: AutoScalingGroupArnType;

    BalancingStrategy?: BalancingStrategyType;

    CreationTime?: CreationTimeType;

    GameServerGroupArn?: GameServerGroupArnType;

    GameServerGroupName?: GameServerGroupNameType;

    GameServerProtectionPolicy?: GameServerProtectionPolicyType;

    InstanceDefinitions?: InstanceDefinitionsType;

    LastUpdatedTime?: LastUpdatedTimeType;

    RoleArn?: RoleArnType;

    Status?: StatusType;

    StatusReason?: StatusReasonType;

    SuspendedActions?: SuspendedActionsType;
  };

  /**
   * A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
   */
  export type AutoScalingGroupArnType = {};

  /**
   * A timestamp that indicates when this data object was created.
   */
  export type CreationTimeType = {};

  /**
   * A timestamp that indicates when this game server group was last updated.
   */
  export type LastUpdatedTimeType = {};

  /**
   * The current status of the game server group.
   */
  export type StatusType = {};

  /**
   * Additional information about the current game server group status.
   */
  export type StatusReasonType = {};

  export type SuspendedActionsType = {};

  /**
   * The AWS::GameLift::GameServerGroup resource creates an Amazon GameLift (GameLift) GameServerGroup.
   */
  export type GameServerGroupResourceType = {
    /**
     * A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
     * Read-only property
     */
    AutoScalingGroupArn?: AutoScalingGroupArnType;

    /**
     * Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
     */
    AutoScalingPolicy?: AutoScalingPolicyType;

    /**
     * The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
     */
    BalancingStrategy?: BalancingStrategyType;

    /**
     * The type of delete to perform.
     */
    DeleteOption?: DeleteOptionType;

    /**
     * A generated unique ID for the game server group.
     * Read-only property
     */
    GameServerGroupArn?: GameServerGroupArnType;

    /**
     * An identifier for the new game server group.
     */
    GameServerGroupName: GameServerGroupNameType;

    /**
     * A flag that indicates whether instances in the game server group are protected from early termination.
     */
    GameServerProtectionPolicy?: GameServerProtectionPolicyType;

    /**
     * A set of EC2 instance types to use when creating instances in the group.
     */
    InstanceDefinitions: InstanceDefinitionsType;

    /**
     * The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
     */
    LaunchTemplate?: LaunchTemplateType;

    /**
     * The maximum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
     */
    MaxSize?: MaxSizeType;

    /**
     * The minimum number of instances allowed in the EC2 Auto Scaling group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
     */
    MinSize?: MinSizeType;

    /**
     * The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
     */
    RoleArn: RoleArnType;

    /**
     * A list of labels to assign to the new game server group resource. Updating game server group tags with CloudFormation will not take effect. Please update this property using AWS GameLift APIs instead.
     */
    Tags?: TagsType;

    /**
     * A list of virtual private cloud (VPC) subnets to use with instances in the game server group. Updating this game server group property will not take effect for the created EC2 Auto Scaling group, please update the EC2 Auto Scaling group directly after creating the resource.
     */
    VpcSubnets?: VpcSubnetsType;
  };
}
