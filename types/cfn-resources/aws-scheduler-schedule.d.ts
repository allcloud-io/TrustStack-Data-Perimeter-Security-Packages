/**
 * TypeScript definitions for AWS::Scheduler::Schedule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Scheduler::Schedule Resource Type
 */
export namespace AWS_Scheduler_Schedule {
  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify ENABLED only when LaunchType in EcsParameters is set to FARGATE.
   */
  export type AssignPublicIpType = {};

  /**
   * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the awsvpc network mode.
   */
  export type AwsVpcConfigurationType = {
    /**
     * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
     */
    Subnets: string[];

    /**
     * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
     */
    SecurityGroups?: string[];

    AssignPublicIp?: AssignPublicIpType;
  };

  /**
   * The details of a capacity provider strategy.
   */
  export type CapacityProviderStrategyItemType = {
    /**
     * The short name of the capacity provider.
     */
    CapacityProvider: string;

    /**
     * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
     */
    Weight?: number;

    /**
     * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
     */
    Base?: number;
  };

  /**
   * A DeadLetterConfig object that contains information about a dead-letter queue configuration.
   */
  export type DeadLetterConfigType = {
    /**
     * The ARN of the SQS queue specified as the target for the dead-letter queue.
     */
    Arn?: string;
  };

  /**
   * The custom parameters to be used when the target is an Amazon ECS task.
   */
  export type EcsParametersType = {
    /**
     * The ARN of the task definition to use if the event target is an Amazon ECS task.
     */
    TaskDefinitionArn: string;

    /**
     * The number of tasks to create based on TaskDefinition. The default is 1.
     */
    TaskCount?: number;

    LaunchType?: LaunchTypeType;

    NetworkConfiguration?: NetworkConfigurationType;

    /**
     * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.
     */
    PlatformVersion?: string;

    /**
     * Specifies an ECS task group for the task. The maximum length is 255 characters.
     */
    Group?: string;

    /**
     * The capacity provider strategy to use for the task.
     */
    CapacityProviderStrategy?: CapacityProviderStrategyItemType[];

    /**
     * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
     */
    EnableECSManagedTags?: boolean;

    /**
     * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
     */
    EnableExecuteCommand?: boolean;

    /**
     * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
     */
    PlacementConstraints?: PlacementConstraintType[];

    /**
     * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
     */
    PlacementStrategy?: PlacementStrategyType[];

    PropagateTags?: PropagateTagsType;

    /**
     * The reference ID to use for the task.
     */
    ReferenceId?: string;

    /**
     * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.
     */
    Tags?: TagMapType[];
  };

  /**
   * EventBridge PutEvent predefined target type.
   */
  export type EventBridgeParametersType = {
    /**
     * Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
     */
    DetailType: string;

    /**
     * The source of the event.
     */
    Source: string;
  };

  /**
   * Flexible time window allows configuration of a window within which a schedule can be invoked
   */
  export type FlexibleTimeWindowType = {
    Mode: FlexibleTimeWindowModeType;

    /**
     * The maximum time window during which a schedule can be invoked.
     */
    MaximumWindowInMinutes?: number;
  };

  /**
   * Determines whether the schedule is executed within a flexible time window.
   */
  export type FlexibleTimeWindowModeType = {};

  /**
   * The custom parameter you can use to control the shard to which EventBridge Scheduler sends the event.
   */
  export type KinesisParametersType = {
    /**
     * The custom parameter used as the Kinesis partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.
     */
    PartitionKey: string;
  };

  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The FARGATE value is supported only in the Regions where AWS Fargate with Amazon ECS is supported. For more information, see AWS Fargate on Amazon ECS in the Amazon Elastic Container Service Developer Guide.
   */
  export type LaunchTypeType = {};

  /**
   * This structure specifies the network configuration for an ECS task.
   */
  export type NetworkConfigurationType = {
    AwsvpcConfiguration?: AwsVpcConfigurationType;
  };

  /**
   * An object representing a constraint on task placement.
   */
  export type PlacementConstraintType = {
    Type?: PlacementConstraintTypeType;

    /**
     * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
     */
    Expression?: string;
  };

  /**
   * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   */
  export type PlacementConstraintTypeType = {};

  /**
   * The task placement strategy for a task or service.
   */
  export type PlacementStrategyType = {
    Type?: PlacementStrategyTypeType;

    /**
     * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
     */
    Field?: string;
  };

  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   */
  export type PlacementStrategyTypeType = {};

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
   */
  export type PropagateTagsType = {};

  /**
   * A RetryPolicy object that includes information about the retry policy settings.
   */
  export type RetryPolicyType = {
    /**
     * The maximum amount of time, in seconds, to continue to make retry attempts.
     */
    MaximumEventAgeInSeconds?: number;

    /**
     * The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.
     */
    MaximumRetryAttempts?: number;
  };

  /**
   * Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline.
   */
  export type SageMakerPipelineParameterType = {
    /**
     * Name of parameter to start execution of a SageMaker Model Building Pipeline.
     */
    Name: string;

    /**
     * Value of parameter to start execution of a SageMaker Model Building Pipeline.
     */
    Value: string;
  };

  /**
   * These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on AWS EventBridge Scheduler schedules.
   */
  export type SageMakerPipelineParametersType = {
    /**
     * List of Parameter names and values for SageMaker Model Building Pipeline execution.
     */
    PipelineParameterList?: SageMakerPipelineParameterType[];
  };

  /**
   * Specifies whether the schedule is enabled or disabled.
   */
  export type ScheduleStateType = {};

  /**
   * Contains the message group ID to use when the target is a FIFO queue. If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   */
  export type SqsParametersType = {
    /**
     * The FIFO message group ID to use as the target.
     */
    MessageGroupId?: string;
  };

  export type TagMapType = {};

  /**
   * The schedule target.
   */
  export type TargetType = {
    /**
     * The Amazon Resource Name (ARN) of the target.
     */
    Arn: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.
     */
    RoleArn: string;

    DeadLetterConfig?: DeadLetterConfigType;

    RetryPolicy?: RetryPolicyType;

    /**
     * The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.
     */
    Input?: string;

    EcsParameters?: EcsParametersType;

    EventBridgeParameters?: EventBridgeParametersType;

    KinesisParameters?: KinesisParametersType;

    SageMakerPipelineParameters?: SageMakerPipelineParametersType;

    SqsParameters?: SqsParametersType;
  };

  /**
   * Definition of AWS::Scheduler::Schedule Resource Type
   */
  export type ScheduleResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the schedule.
     * Read-only property
     */
    Arn?: string;

    /**
     * The description of the schedule.
     */
    Description?: string;

    /**
     * The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.
     */
    EndDate?: string;

    FlexibleTimeWindow: FlexibleTimeWindowType;

    /**
     * The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
     */
    GroupName?: string;

    /**
     * The ARN for a KMS Key that will be used to encrypt customer data.
     */
    KmsKeyArn?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * The scheduling expression.
     */
    ScheduleExpression: string;

    /**
     * The timezone in which the scheduling expression is evaluated.
     */
    ScheduleExpressionTimezone?: string;

    /**
     * The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.
     */
    StartDate?: string;

    State?: ScheduleStateType;

    Target: TargetType;
  };
}
