/**
 * TypeScript definitions for AWS::Config::ConfigurationRecorder
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::ConfigurationRecorder
 */
export namespace AWS_Config_ConfigurationRecorder {
  export type RecordingStrategyType = {
    UseOnly: string;
  };

  export type ExclusionByResourceTypesType = {
    ResourceTypes: string[];
  };

  export type RecordingModeOverrideType = {
    ResourceTypes: string[];

    RecordingFrequency: string;

    Description?: string;
  };

  export type RecordingGroupType = {
    IncludeGlobalResourceTypes?: boolean;

    ResourceTypes?: string[];

    RecordingStrategy?: RecordingStrategyType;

    ExclusionByResourceTypes?: ExclusionByResourceTypesType;

    AllSupported?: boolean;
  };

  export type RecordingModeType = {
    RecordingModeOverrides?: RecordingModeOverrideType[];

    RecordingFrequency: string;
  };

  /**
   * Resource Type definition for AWS::Config::ConfigurationRecorder
   */
  export type ConfigurationRecorderResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    RecordingGroup?: RecordingGroupType;

    RecordingMode?: RecordingModeType;

    RoleARN: string;

    /**
     * Create-only property
     */
    Name?: string;
  };
}
