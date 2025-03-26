/**
 * TypeScript definitions for AWS::Glue::DataCatalogEncryptionSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
 */
export namespace AWS_Glue_DataCatalogEncryptionSettings {
  export type ConnectionPasswordEncryptionType = {
    KmsKeyId?: string;

    ReturnConnectionPasswordEncrypted?: boolean;
  };

  export type EncryptionAtRestType = {
    CatalogEncryptionMode?: string;

    CatalogEncryptionServiceRole?: string;

    SseAwsKmsKeyId?: string;
  };

  export type DataCatalogEncryptionSettingsType = {
    ConnectionPasswordEncryption?: ConnectionPasswordEncryptionType;

    EncryptionAtRest?: EncryptionAtRestType;
  };

  /**
   * Resource Type definition for AWS::Glue::DataCatalogEncryptionSettings
   */
  export type DataCatalogEncryptionSettingsResourceType = {
    /**
     * Create-only property
     */
    CatalogId: string;

    DataCatalogEncryptionSettings: DataCatalogEncryptionSettingsType;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
