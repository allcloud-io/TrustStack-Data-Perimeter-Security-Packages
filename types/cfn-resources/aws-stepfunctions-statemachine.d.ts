/**
 * TypeScript definitions for AWS::StepFunctions::StateMachine
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for StateMachine
 */
export namespace AWS_StepFunctions_StateMachine {
  export type TagsEntryType = {
    Key: string;

    Value: string;
  };

  export type CloudWatchLogsLogGroupType = {
    LogGroupArn?: string;
  };

  export type LogDestinationType = {
    CloudWatchLogsLogGroup?: CloudWatchLogsLogGroupType;
  };

  export type LoggingConfigurationType = {
    Level?: string;

    IncludeExecutionData?: boolean;

    Destinations?: LogDestinationType[];
  };

  export type TracingConfigurationType = {
    Enabled?: boolean;
  };

  export type EncryptionConfigurationType = {
    KmsKeyId?: string;

    KmsDataKeyReusePeriodSeconds?: number;

    Type: string;
  };

  export type S3LocationType = {
    Bucket: string;

    Key: string;

    Version?: string;
  };

  export type DefinitionSubstitutionsType = {};

  export type DefinitionType = {};

  /**
   * Resource schema for StateMachine
   */
  export type StateMachineResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Name?: string;

    DefinitionString?: string;

    RoleArn: string;

    /**
     * Create-only property
     */
    StateMachineName?: string;

    /**
     * Create-only property
     */
    StateMachineType?: string;

    /**
     * Read-only property
     */
    StateMachineRevisionId?: string;

    LoggingConfiguration?: LoggingConfigurationType;

    TracingConfiguration?: TracingConfigurationType;

    EncryptionConfiguration?: EncryptionConfigurationType;

    DefinitionS3Location?: S3LocationType;

    DefinitionSubstitutions?: DefinitionSubstitutionsType;

    Definition?: DefinitionType;

    Tags?: TagsEntryType[];
  };
}
