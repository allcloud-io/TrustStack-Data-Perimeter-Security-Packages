/**
 * TypeScript definitions for AWS::DLM::LifecyclePolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::DLM::LifecyclePolicy
 */
export namespace AWS_DLM_LifecyclePolicy {
  export type ActionType = {
    CrossRegionCopy: CrossRegionCopyActionType[];

    Name: string;
  };

  export type ExclusionsType = {
    ExcludeTags?: ExcludeTagsType;

    ExcludeVolumeTypes?: ExcludeVolumeTypesListType;

    ExcludeBootVolumes?: boolean;
  };

  export type ArchiveRuleType = {
    RetainRule: ArchiveRetainRuleType;
  };

  export type ExcludeVolumeTypesListType = {};

  export type DeprecateRuleType = {
    IntervalUnit?: string;

    Count?: number;

    Interval?: number;
  };

  export type CrossRegionCopyDeprecateRuleType = {
    IntervalUnit: string;

    Interval: number;
  };

  export type CreateRuleType = {
    IntervalUnit?: string;

    Scripts?: ScriptType[];

    Times?: string[];

    CronExpression?: string;

    Interval?: number;

    Location?: string;
  };

  export type PolicyDetailsType = {
    PolicyLanguage?: string;

    ResourceTypes?: string[];

    Schedules?: ScheduleType[];

    PolicyType?: string;

    CreateInterval?: number;

    Parameters?: ParametersType;

    ExtendDeletion?: boolean;

    Exclusions?: ExclusionsType;

    Actions?: ActionType[];

    ResourceType?: string;

    RetainInterval?: number;

    EventSource?: EventSourceType;

    CrossRegionCopyTargets?: CrossRegionCopyTargetsType;

    TargetTags?: TagType[];

    ResourceLocations?: string[];

    CopyTags?: boolean;
  };

  export type ScriptType = {
    ExecutionHandlerService?: string;

    ExecutionTimeout?: number;

    Stages?: string[];

    ExecutionHandler?: string;

    MaximumRetryCount?: number;

    ExecuteOperationOnScriptFailure?: boolean;
  };

  export type ParametersType = {
    ExcludeBootVolume?: boolean;

    NoReboot?: boolean;

    ExcludeDataVolumeTags?: TagType[];
  };

  export type CrossRegionCopyRuleType = {
    TargetRegion?: string;

    Target?: string;

    DeprecateRule?: CrossRegionCopyDeprecateRuleType;

    Encrypted: boolean;

    CmkArn?: string;

    RetainRule?: CrossRegionCopyRetainRuleType;

    CopyTags?: boolean;
  };

  export type EncryptionConfigurationType = {
    Encrypted: boolean;

    CmkArn?: string;
  };

  export type CrossRegionCopyRetainRuleType = {
    IntervalUnit: string;

    Interval: number;
  };

  export type ExcludeTagsType = {};

  export type EventParametersType = {
    DescriptionRegex?: string;

    EventType: string;

    SnapshotOwner: string[];
  };

  export type RetainRuleType = {
    IntervalUnit?: string;

    Count?: number;

    Interval?: number;
  };

  export type CrossRegionCopyActionType = {
    Target: string;

    EncryptionConfiguration: EncryptionConfigurationType;

    RetainRule?: CrossRegionCopyRetainRuleType;
  };

  export type EventSourceType = {
    Type: string;

    Parameters?: EventParametersType;
  };

  export type ArchiveRetainRuleType = {
    RetentionArchiveTier: RetentionArchiveTierType;
  };

  export type CrossRegionCopyTargetsType = {};

  export type ScheduleType = {
    ShareRules?: ShareRuleType[];

    DeprecateRule?: DeprecateRuleType;

    TagsToAdd?: TagType[];

    CreateRule?: CreateRuleType;

    VariableTags?: TagType[];

    FastRestoreRule?: FastRestoreRuleType;

    ArchiveRule?: ArchiveRuleType;

    RetainRule?: RetainRuleType;

    CrossRegionCopyRules?: CrossRegionCopyRuleType[];

    Name?: string;

    CopyTags?: boolean;
  };

  export type FastRestoreRuleType = {
    IntervalUnit?: string;

    Count?: number;

    AvailabilityZones?: string[];

    Interval?: number;
  };

  export type RetentionArchiveTierType = {
    IntervalUnit?: string;

    Count?: number;

    Interval?: number;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ShareRuleType = {
    TargetAccounts?: string[];

    UnshareIntervalUnit?: string;

    UnshareInterval?: number;
  };

  /**
   * Resource Type definition for AWS::DLM::LifecyclePolicy
   */
  export type LifecyclePolicyResourceType = {
    CreateInterval?: number;

    Description?: string;

    ExtendDeletion?: boolean;

    Exclusions?: ExclusionsType;

    RetainInterval?: number;

    ExecutionRoleArn?: string;

    DefaultPolicy?: string;

    State?: string;

    CrossRegionCopyTargets?: CrossRegionCopyTargetsType;

    PolicyDetails?: PolicyDetailsType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];

    CopyTags?: boolean;
  };
}
