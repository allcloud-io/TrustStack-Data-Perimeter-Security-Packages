/**
 * TypeScript definitions for AWS::Glue::SecurityConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::SecurityConfiguration
 */
export namespace AWS_Glue_SecurityConfiguration {
  export type S3EncryptionsType = {};

  export type EncryptionConfigurationType = {
    S3Encryptions?: S3EncryptionsType;

    JobBookmarksEncryption?: JobBookmarksEncryptionType;

    CloudWatchEncryption?: CloudWatchEncryptionType;
  };

  export type CloudWatchEncryptionType = {
    KmsKeyArn?: string;

    CloudWatchEncryptionMode?: string;
  };

  export type JobBookmarksEncryptionType = {
    KmsKeyArn?: string;

    JobBookmarksEncryptionMode?: string;
  };

  /**
   * Resource Type definition for AWS::Glue::SecurityConfiguration
   */
  export type SecurityConfigurationResourceType = {
    EncryptionConfiguration: EncryptionConfigurationType;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
