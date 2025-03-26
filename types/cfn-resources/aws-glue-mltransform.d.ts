/**
 * TypeScript definitions for AWS::Glue::MLTransform
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::MLTransform
 */
export namespace AWS_Glue_MLTransform {
  export type GlueTablesType = {
    ConnectionName?: string;

    DatabaseName: string;

    TableName: string;

    CatalogId?: string;
  };

  export type TransformEncryptionType = {
    TaskRunSecurityConfigurationName?: string;

    MLUserDataEncryption?: MLUserDataEncryptionType;
  };

  export type MLUserDataEncryptionType = {
    KmsKeyId?: string;

    MLUserDataEncryptionMode: string;
  };

  export type TransformParametersType = {
    TransformType: string;

    FindMatchesParameters?: FindMatchesParametersType;
  };

  export type InputRecordTablesType = {
    GlueTables?: GlueTablesType[];
  };

  export type FindMatchesParametersType = {
    PrecisionRecallTradeoff?: number;

    EnforceProvidedLabels?: boolean;

    PrimaryKeyColumnName: string;

    AccuracyCostTradeoff?: number;
  };

  /**
   * Resource Type definition for AWS::Glue::MLTransform
   */
  export type MLTransformResourceType = {
    MaxRetries?: number;

    Description?: string;

    TransformEncryption?: TransformEncryptionType;

    Timeout?: number;

    Name?: string;

    Role: string;

    WorkerType?: string;

    GlueVersion?: string;

    TransformParameters: TransformParametersType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    InputRecordTables: InputRecordTablesType;

    NumberOfWorkers?: number;

    Tags?: Record<string, any>;

    MaxCapacity?: number;
  };
}
