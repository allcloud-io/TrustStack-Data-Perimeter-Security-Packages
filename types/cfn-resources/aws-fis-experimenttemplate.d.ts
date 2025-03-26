/**
 * TypeScript definitions for AWS::FIS::ExperimentTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::FIS::ExperimentTemplate
 */
export namespace AWS_FIS_ExperimentTemplate {
  export type ExperimentTemplateIdType = {};

  /**
   * A description for the experiment template.
   */
  export type ExperimentTemplateDescriptionType = {};

  export type StopConditionSourceType = {};

  export type StopConditionValueType = {};

  export type ExperimentTemplateStopConditionType = {
    Source: StopConditionSourceType;

    Value?: StopConditionValueType;
  };

  export type CloudWatchDashboardType = {
    DashboardIdentifier: string;
  };

  /**
   * One or more stop conditions.
   */
  export type ExperimentTemplateStopConditionListType = {};

  /**
   * The AWS resource type. The resource type must be supported for the specified action.
   */
  export type ResourceTypeType = {};

  export type ResourceArnType = {};

  /**
   * The Amazon Resource Names (ARNs) of the target resources.
   */
  export type ResourceArnListType = {};

  /**
   * Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.
   */
  export type ExperimentTemplateTargetSelectionModeType = {};

  /**
   * The attribute path for the filter.
   */
  export type ExperimentTemplateTargetFilterPathType = {};

  export type ExperimentTemplateTargetFilterValueType = {};

  /**
   * The attribute values for the filter.
   */
  export type ExperimentTemplateTargetFilterValuesType = {};

  /**
   * Describes a filter used for the target resource input in an experiment template.
   */
  export type ExperimentTemplateTargetFilterType = {
    Path: ExperimentTemplateTargetFilterPathType;

    Values: ExperimentTemplateTargetFilterValuesType;
  };

  export type ExperimentTemplateTargetFilterListType = {};

  /**
   * Specifies a target for an experiment.
   */
  export type ExperimentTemplateTargetType = {
    ResourceType: ResourceTypeType;

    ResourceArns?: ResourceArnListType;

    ResourceTags?: Record<string, any>;

    Parameters?: Record<string, any>;

    Filters?: ExperimentTemplateTargetFilterListType;

    SelectionMode: ExperimentTemplateTargetSelectionModeType;
  };

  /**
   * The targets for the experiment.
   */
  export type ExperimentTemplateTargetMapType = {};

  /**
   * The ID of the action.
   */
  export type ActionIdType = {};

  /**
   * A description for the action.
   */
  export type ExperimentTemplateActionItemDescriptionType = {};

  export type ExperimentTemplateActionItemParameterType = {};

  export type ExperimentTemplateActionItemTargetType = {};

  export type ExperimentTemplateActionItemStartAfterType = {};

  /**
   * The names of the actions that must be completed before the current action starts.
   */
  export type ExperimentTemplateActionItemStartAfterListType = {};

  /**
   * Specifies an action for the experiment template.
   */
  export type ExperimentTemplateActionType = {
    ActionId: ActionIdType;

    Description?: ExperimentTemplateActionItemDescriptionType;

    /**
     * The parameters for the action, if applicable.
     */
    Parameters?: Record<string, any>;

    /**
     * One or more targets for the action.
     */
    Targets?: Record<string, any>;

    StartAfter?: ExperimentTemplateActionItemStartAfterListType;
  };

  /**
   * The actions for the experiment.
   */
  export type ExperimentTemplateActionMapType = {};

  export type ExperimentTemplateLogConfigurationType = {
    CloudWatchLogsConfiguration?: Record<string, any>;

    S3Configuration?: Record<string, any>;

    LogSchemaVersion: number;
  };

  export type ExperimentTemplateExperimentOptionsType = {
    /**
     * The account targeting setting for the experiment template.
     */
    AccountTargeting?: string;

    /**
     * The target resolution failure mode for the experiment template.
     */
    EmptyTargetResolutionMode?: string;
  };

  export type ExperimentTemplateExperimentReportConfigurationType = {
    Outputs: Record<string, any>;

    DataSources?: Record<string, any>;

    PreExperimentDuration?: string;

    PostExperimentDuration?: string;
  };

  /**
   * The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
   */
  export type RoleArnType = {};

  /**
   * Resource schema for AWS::FIS::ExperimentTemplate
   */
  export type ExperimentTemplateResourceType = {
    /**
     * Read-only property
     */
    Id?: ExperimentTemplateIdType;

    Description: ExperimentTemplateDescriptionType;

    Targets: ExperimentTemplateTargetMapType;

    Actions?: ExperimentTemplateActionMapType;

    StopConditions: ExperimentTemplateStopConditionListType;

    LogConfiguration?: ExperimentTemplateLogConfigurationType;

    RoleArn: RoleArnType;

    /**
     * Create-only property
     */
    Tags: Record<string, any>;

    ExperimentOptions?: ExperimentTemplateExperimentOptionsType;

    ExperimentReportConfiguration?: ExperimentTemplateExperimentReportConfigurationType;
  };
}
