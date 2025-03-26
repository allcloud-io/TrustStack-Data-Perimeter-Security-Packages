/**
 * TypeScript definitions for AWS::IoTAnalytics::Dataset
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoTAnalytics::Dataset
 */
export namespace AWS_IoTAnalytics_Dataset {
  export type DatasetContentVersionValueType = {
    DatasetName: string;
  };

  export type GlueConfigurationType = {
    DatabaseName: string;

    TableName: string;
  };

  export type ActionType = {
    ActionName: string;

    ContainerAction?: ContainerActionType;

    QueryAction?: QueryActionType;
  };

  export type VariableType = {
    VariableName: string;

    DatasetContentVersionValue?: DatasetContentVersionValueType;

    StringValue?: string;

    DoubleValue?: number;

    OutputFileUriValue?: OutputFileUriValueType;
  };

  export type IotEventsDestinationConfigurationType = {
    InputName: string;

    RoleArn: string;
  };

  export type LateDataRuleType = {
    RuleConfiguration: LateDataRuleConfigurationType;

    RuleName?: string;
  };

  export type DeltaTimeSessionWindowConfigurationType = {
    TimeoutInMinutes: number;
  };

  export type QueryActionType = {
    Filters?: FilterType[];

    SqlQuery: string;
  };

  export type VersioningConfigurationType = {
    Unlimited?: boolean;

    MaxVersions?: number;
  };

  export type RetentionPeriodType = {
    NumberOfDays?: number;

    Unlimited?: boolean;
  };

  export type ResourceConfigurationType = {
    VolumeSizeInGB: number;

    ComputeType: string;
  };

  export type DatasetContentDeliveryRuleType = {
    Destination: DatasetContentDeliveryRuleDestinationType;

    EntryName?: string;
  };

  export type TriggerType = {
    TriggeringDataset?: TriggeringDatasetType;

    Schedule?: ScheduleType;
  };

  export type DeltaTimeType = {
    OffsetSeconds: number;

    TimeExpression: string;
  };

  export type ContainerActionType = {
    Variables?: VariableType[];

    ExecutionRoleArn: string;

    Image: string;

    ResourceConfiguration: ResourceConfigurationType;
  };

  export type FilterType = {
    DeltaTime?: DeltaTimeType;
  };

  export type OutputFileUriValueType = {
    FileName: string;
  };

  export type ScheduleType = {
    ScheduleExpression: string;
  };

  export type S3DestinationConfigurationType = {
    GlueConfiguration?: GlueConfigurationType;

    Bucket: string;

    Key: string;

    RoleArn: string;
  };

  export type LateDataRuleConfigurationType = {
    DeltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfigurationType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type DatasetContentDeliveryRuleDestinationType = {
    IotEventsDestinationConfiguration?: IotEventsDestinationConfigurationType;

    S3DestinationConfiguration?: S3DestinationConfigurationType;
  };

  export type TriggeringDatasetType = {
    DatasetName: string;
  };

  /**
   * Resource Type definition for AWS::IoTAnalytics::Dataset
   */
  export type DatasetResourceType = {
    Actions: ActionType[];

    LateDataRules?: LateDataRuleType[];

    /**
     * Create-only property
     */
    DatasetName?: string;

    ContentDeliveryRules?: DatasetContentDeliveryRuleType[];

    Triggers?: TriggerType[];

    VersioningConfiguration?: VersioningConfigurationType;

    /**
     * Read-only property
     */
    Id?: string;

    RetentionPeriod?: RetentionPeriodType;

    Tags?: TagType[];
  };
}
