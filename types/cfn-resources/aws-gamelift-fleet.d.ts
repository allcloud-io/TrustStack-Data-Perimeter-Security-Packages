/**
 * TypeScript definitions for AWS::GameLift::Fleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 or Anywhere instances, each of which can host multiple game sessions.
 */
export namespace AWS_GameLift_Fleet {
  /**
   * Configuration for Anywhere fleet.
   */
  export type AnywhereConfigurationType = {
    /**
     * Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.
     */
    Cost: string;
  };

  /**
   * Information about the use of a TLS/SSL certificate for a fleet. TLS certificate generation is enabled at the fleet level, with one certificate generated for the fleet. When this feature is enabled, the certificate can be retrieved using the GameLift Server SDK call GetInstanceCertificate. All instances in a fleet share the same certificate.
   */
  export type CertificateConfigurationType = {
    CertificateType: string;
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
     * The minimum value allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
     */
    MinSize: number;

    /**
     * The maximum value that is allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
     */
    MaxSize: number;
  };

  /**
   * A remote location where a multi-location fleet can deploy EC2 instances for game hosting.
   */
  export type LocationConfigurationType = {
    Location: LocationType;

    LocationCapacity?: LocationCapacityType;
  };

  /**
   * A policy that limits the number of game sessions a player can create on the same fleet. This optional policy gives game owners control over how players can consume available game server resources. A resource creation policy makes the following statement: "An individual player can create a maximum number of new game sessions within a specified time period".
   * The policy is evaluated when a player tries to create a new game session. For example, assume you have a policy of 10 new game sessions and a time period of 60 minutes. On receiving a CreateGameSession request, Amazon GameLift checks that the player (identified by CreatorId) has created fewer than 10 game sessions in the past 60 minutes.
   */
  export type ResourceCreationLimitPolicyType = {
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
   * A collection of server process configurations that describe the processes to run on each instance in a fleet. All fleets must have a runtime configuration. Each instance in the fleet maintains server processes as specified in the runtime configuration, launching new ones as existing processes end. Each instance regularly checks for an updated runtime configuration makes adjustments as called for.
   * The runtime configuration enables the instances in a fleet to run multiple processes simultaneously. Potential scenarios are as follows: (1) Run multiple processes of a single game server executable to maximize usage of your hosting resources. (2) Run one or more processes of different executables, such as your game server and a metrics tracking program. (3) Run multiple processes of a single game server but with different launch parameters, for example to run one process on each instance in debug mode.
   * An Amazon GameLift instance is limited to 50 processes running simultaneously. A runtime configuration must specify fewer than this limit. To calculate the total number of processes specified in a runtime configuration, add the values of the ConcurrentExecutions parameter for each ServerProcess object in the runtime configuration.
   */
  export type RuntimeConfigurationType = {
    /**
     * The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.
     */
    GameSessionActivationTimeoutSeconds?: number;

    /**
     * The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.
     */
    MaxConcurrentGameSessionActivations?: number;

    /**
     * A collection of server process configurations that describe which server processes to run on each instance in a fleet.
     */
    ServerProcesses?: ServerProcessType[];
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

    Location?: LocationType;

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
     * Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
     */
    Status?: string;

    /**
     * An object that contains settings for a target-based scaling policy.
     */
    TargetConfiguration?: TargetConfigurationType;

    /**
     * Metric value used to trigger a scaling event.
     */
    Threshold?: number;

    /**
     * The current status of the fleet's scaling policies in a requested fleet location. The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.
     */
    UpdateStatus?: string;
  };

  /**
   * A set of instructions for launching server processes on each instance in a fleet. Each instruction set identifies the location of the server executable, optional launch parameters, and the number of server processes with this configuration to maintain concurrently on the instance. Server process configurations make up a fleet's RuntimeConfiguration.
   */
  export type ServerProcessType = {
    /**
     * The number of server processes that use this configuration to run concurrently on an instance.
     */
    ConcurrentExecutions: number;

    /**
     * The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:
     * Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"
     * Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"
     */
    LaunchPath: string;

    /**
     * An optional list of parameters to pass to the server executable or Realtime script on launch.
     */
    Parameters?: string;
  };

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
   * The AWS::GameLift::Fleet resource creates an Amazon GameLift (GameLift) fleet to host game servers. A fleet is a set of EC2 or Anywhere instances, each of which can host multiple game sessions.
   */
  export type FleetResourceType = {
    /**
     * A list of rules that control how a fleet is scaled.
     */
    ScalingPolicies?: ScalingPolicyType[];

    /**
     * Configuration for Anywhere fleet.
     */
    AnywhereConfiguration?: AnywhereConfigurationType;

    /**
     * Determines whether to apply fleet or location capacities on fleet creation.
     * Create-only property
     */
    ApplyCapacity?: string;

    /**
     * Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.
     * Create-only property
     */
    CertificateConfiguration?: CertificateConfigurationType;

    /**
     * ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.
     * Create-only property
     */
    ComputeType?: string;

    /**
     * A human-readable description of a fleet.
     */
    Description?: string;

    /**
     * [DEPRECATED] The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
     */
    DesiredEC2Instances?: number;

    /**
     * A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
     */
    EC2InboundPermissions?: IpPermissionType[];

    /**
     * The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
     * Create-only property
     */
    EC2InstanceType?: string;

    /**
     * Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
     * Create-only property
     */
    FleetType?: string;

    /**
     * A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
     * Create-only property
     */
    InstanceRoleARN?: string;

    /**
     * Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.
     * Create-only property
     */
    InstanceRoleCredentialsProvider?: string;

    Locations?: LocationConfigurationType[];

    /**
     * This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()
     * Create-only property
     */
    LogPaths?: string[];

    /**
     * [DEPRECATED] The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
     */
    MaxSize?: number;

    /**
     * The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
     */
    MetricGroups?: string[];

    /**
     * [DEPRECATED] The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
     */
    MinSize?: number;

    /**
     * A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
     */
    Name: string;

    /**
     * A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
     */
    NewGameSessionProtectionPolicy?: string;

    /**
     * A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings.
     * Create-only property
     */
    PeerVpcAwsAccountId?: string;

    /**
     * A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.
     * Create-only property
     */
    PeerVpcId?: string;

    /**
     * A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
     */
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicyType;

    /**
     * Unique fleet ID
     * Read-only property
     */
    FleetId?: string;

    /**
     * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
     * Create-only property
     */
    BuildId?: string;

    /**
     * A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.
     * Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.
     * Create-only property
     */
    ScriptId?: string;

    /**
     * Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.
     * This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.
     */
    RuntimeConfiguration?: RuntimeConfigurationType;

    /**
     * This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.
     * Create-only property
     */
    ServerLaunchParameters?: string;

    /**
     * This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.
     * Create-only property
     */
    ServerLaunchPath?: string;
  };
}
