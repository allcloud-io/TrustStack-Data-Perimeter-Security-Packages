/**
 * TypeScript definitions for AWS::Events::Rule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Events::Rule
 */
export namespace AWS_Events_Rule {
  export type CapacityProviderStrategyItemType = {
    CapacityProvider: string;

    Base?: number;

    Weight?: number;
  };

  export type HttpParametersType = {
    PathParameterValues?: string[];

    HeaderParameters?: Record<string, any>;

    QueryStringParameters?: Record<string, any>;
  };

  export type DeadLetterConfigType = {
    Arn?: string;
  };

  export type RunCommandParametersType = {
    RunCommandTargets: RunCommandTargetType[];
  };

  export type PlacementStrategyType = {
    Field?: string;

    Type?: string;
  };

  export type InputTransformerType = {
    InputPathsMap?: Record<string, any>;

    InputTemplate: string;
  };

  export type KinesisParametersType = {
    PartitionKeyPath: string;
  };

  export type BatchRetryStrategyType = {
    Attempts?: number;
  };

  export type RedshiftDataParametersType = {
    StatementName?: string;

    Sqls?: string[];

    Database: string;

    SecretManagerArn?: string;

    DbUser?: string;

    Sql?: string;

    WithEvent?: boolean;
  };

  export type AppSyncParametersType = {
    GraphQLOperation: string;
  };

  export type TargetType = {
    InputPath?: string;

    HttpParameters?: HttpParametersType;

    DeadLetterConfig?: DeadLetterConfigType;

    RunCommandParameters?: RunCommandParametersType;

    InputTransformer?: InputTransformerType;

    KinesisParameters?: KinesisParametersType;

    RoleArn?: string;

    RedshiftDataParameters?: RedshiftDataParametersType;

    AppSyncParameters?: AppSyncParametersType;

    Input?: string;

    SqsParameters?: SqsParametersType;

    EcsParameters?: EcsParametersType;

    BatchParameters?: BatchParametersType;

    Id: string;

    Arn: string;

    SageMakerPipelineParameters?: SageMakerPipelineParametersType;

    RetryPolicy?: RetryPolicyType;
  };

  export type PlacementConstraintType = {
    Type?: string;

    Expression?: string;
  };

  export type AwsVpcConfigurationType = {
    SecurityGroups?: string[];

    Subnets: string[];

    AssignPublicIp?: string;
  };

  export type SqsParametersType = {
    MessageGroupId: string;
  };

  export type RunCommandTargetType = {
    Values: string[];

    Key: string;
  };

  export type EcsParametersType = {
    PlatformVersion?: string;

    Group?: string;

    EnableECSManagedTags?: boolean;

    EnableExecuteCommand?: boolean;

    PlacementConstraints?: PlacementConstraintType[];

    PropagateTags?: string;

    TaskCount?: number;

    PlacementStrategies?: PlacementStrategyType[];

    CapacityProviderStrategy?: CapacityProviderStrategyItemType[];

    LaunchType?: string;

    ReferenceId?: string;

    TagList?: TagType[];

    NetworkConfiguration?: NetworkConfigurationType;

    TaskDefinitionArn: string;
  };

  export type BatchParametersType = {
    ArrayProperties?: BatchArrayPropertiesType;

    JobName: string;

    RetryStrategy?: BatchRetryStrategyType;

    JobDefinition: string;
  };

  export type NetworkConfigurationType = {
    AwsVpcConfiguration?: AwsVpcConfigurationType;
  };

  export type TagType = {
    Value?: string;

    Key?: string;
  };

  export type SageMakerPipelineParametersType = {
    PipelineParameterList?: SageMakerPipelineParameterType[];
  };

  export type RetryPolicyType = {
    MaximumRetryAttempts?: number;

    MaximumEventAgeInSeconds?: number;
  };

  export type BatchArrayPropertiesType = {
    Size?: number;
  };

  export type SageMakerPipelineParameterType = {
    Value: string;

    Name: string;
  };

  /**
   * Resource Type definition for AWS::Events::Rule
   */
  export type RuleResourceType = {
    /**
     * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
     */
    EventBusName?: string;

    /**
     * The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
     */
    EventPattern?: string | Record<string, any>;

    /**
     * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.
     */
    ScheduleExpression?: string;

    /**
     * The description of the rule.
     */
    Description?: string;

    /**
     * The state of the rule.
     */
    State?: string;

    /**
     * Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
     * Targets are the resources that are invoked when a rule is triggered.
     */
    Targets?: TargetType[];

    /**
     * The ARN of the rule, such as arn:aws:events:us-east-2:123456789012:rule/example.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of the role that is used for target invocation.
     */
    RoleArn?: string;

    /**
     * The name of the rule.
     * Create-only property
     */
    Name?: string;
  };
}
