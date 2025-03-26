/**
 * TypeScript definitions for AWS::Glue::TableOptimizer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::TableOptimizer
 */
export namespace AWS_Glue_TableOptimizer {
  export type RetentionConfigurationType = {
    IcebergConfiguration?: IcebergConfigurationType;
  };

  export type OrphanFileDeletionConfigurationType = {
    IcebergConfiguration?: IcebergConfigurationType;
  };

  export type TableOptimizerConfigurationType = {
    Enabled: boolean;

    RetentionConfiguration?: RetentionConfigurationType;

    VpcConfiguration?: VpcConfigurationType;

    RoleArn: string;

    OrphanFileDeletionConfiguration?: OrphanFileDeletionConfigurationType;
  };

  export type VpcConfigurationType = {
    GlueConnectionName?: string;
  };

  export type IcebergConfigurationType = {
    OrphanFileRetentionPeriodInDays?: number;

    Location?: string;
  };

  /**
   * Resource Type definition for AWS::Glue::TableOptimizer
   */
  export type TableOptimizerResourceType = {
    /**
     * Create-only property
     */
    DatabaseName: string;

    /**
     * Create-only property
     */
    TableName: string;

    /**
     * Create-only property
     */
    Type: string;

    TableOptimizerConfiguration: TableOptimizerConfigurationType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    CatalogId: string;
  };
}
