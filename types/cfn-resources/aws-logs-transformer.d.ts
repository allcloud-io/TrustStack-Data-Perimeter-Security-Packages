/**
 * TypeScript definitions for AWS::Logs::Transformer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a transformer on the log group to transform logs into consistent structured and information rich format.
 */
export namespace AWS_Logs_Transformer {
  /**
   * Individual processor configuration
   */
  export type ProcessorType = {
    ParseCloudfront?: ParseCloudfrontType;

    ParseVPC?: ParseVPCType;

    ParseWAF?: ParseWAFType;

    ParseJSON?: Record<string, any>;

    ParseRoute53?: ParseRoute53Type;

    ParsePostgres?: ParsePostgresType;

    ParseKeyValue?: Record<string, any>;

    CopyValue?: Record<string, any>;

    Csv?: Record<string, any>;

    DateTimeConverter?: Record<string, any>;

    DeleteKeys?: Record<string, any>;

    Grok?: Record<string, any>;

    ListToMap?: Record<string, any>;

    AddKeys?: Record<string, any>;

    MoveKeys?: Record<string, any>;

    RenameKeys?: Record<string, any>;

    LowerCaseString?: Record<string, any>;

    SplitString?: Record<string, any>;

    SubstituteString?: Record<string, any>;

    TrimString?: Record<string, any>;

    UpperCaseString?: Record<string, any>;

    TypeConverter?: Record<string, any>;
  };

  export type ParseCloudfrontType = {
    Source?: NonEmptyStringType;
  };

  export type ParseVPCType = {
    Source?: NonEmptyStringType;
  };

  export type ParseWAFType = {
    Source?: NonEmptyStringType;
  };

  export type ParseRoute53Type = {
    Source?: NonEmptyStringType;
  };

  export type ParsePostgresType = {
    Source?: NonEmptyStringType;
  };

  export type AddKeyEntryType = {
    Key: NonEmptyAndMaxLengthStringType;

    Value: string;

    OverwriteIfExists?: boolean;
  };

  export type CopyValueEntryType = {
    Source: NonEmptyStringType;

    Target: NonEmptyAndMaxLengthStringType;

    OverwriteIfExists?: boolean;
  };

  export type ColumnType = {};

  export type WithKeyType = {};

  export type MatchPatternType = {};

  export type MoveKeyEntryType = {
    Source: NonEmptyStringType;

    Target: NonEmptyStringType;

    OverwriteIfExists?: boolean;
  };

  export type RenameKeyEntryType = {
    Key: NonEmptyStringType;

    RenameTo: NonEmptyStringType;

    OverwriteIfExists?: boolean;
  };

  export type SplitStringEntryType = {
    Source: NonEmptyStringType;

    Delimiter: string;
  };

  export type SubstituteStringEntryType = {
    Source: NonEmptyStringType;

    From: NonEmptyAndMaxLengthStringType;

    To: NonEmptyAndMaxLengthStringType;
  };

  export type TypeConverterEntryType = {
    Key: NonEmptyStringType;

    Type: string;
  };

  export type NonEmptyAndMaxLengthStringType = {};

  export type NonEmptyStringType = {};

  export type MaxLengthStringType = {};

  /**
   * Specifies a transformer on the log group to transform logs into consistent structured and information rich format.
   */
  export type TransformerResourceType = {
    /**
     * Existing log group that you want to associate with this transformer.
     * Create-only property
     */
    LogGroupIdentifier: string;

    /**
     * List of processors in a transformer
     */
    TransformerConfig: ProcessorType[];
  };
}
