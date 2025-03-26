/**
 * TypeScript definitions for AWS::RDS::Integration
 * Generated from CloudFormation Resource Schema
 */

/**
 * A zero-ETL integration with Amazon Redshift.
 */
export namespace AWS_RDS_Integration {
  /**
   * An array of key-value pairs to apply to this resource.
   */
  export type TagsType = {};

  /**
   * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
   * For more information, see Tagging Amazon RDS Resources in the *Amazon RDS User Guide* or Tagging Amazon Aurora and Amazon RDS Resources in the *Amazon Aurora User Guide*.
   */
  export type TagType = {
    /**
     * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Key: string;

    /**
     * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Value?: string;
  };

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
   */
  export type EncryptionContextMapType = {};

  /**
   * A zero-ETL integration with Amazon Redshift.
   */
  export type IntegrationResourceType = {
    /**
     * The name of the integration.
     */
    IntegrationName?: string;

    /**
     * A description of the integration.
     */
    Description?: string;

    /**
     * A list of tags. For more information, see Tagging Amazon RDS Resources in the *Amazon RDS User Guide.*.
     */
    Tags?: TagType[];

    /**
     * Data filters for the integration. These filters determine which tables from the source database are sent to the target Amazon Redshift data warehouse.
     */
    DataFilter?: string;

    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication.
     * Create-only property
     */
    SourceArn: string;

    /**
     * The ARN of the Redshift data warehouse to use as the target for replication.
     * Create-only property
     */
    TargetArn: string;

    /**
     * Read-only property
     */
    IntegrationArn?: string;

    /**
     * The AWS Key Management System (AWS KMS) key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, RDS uses a default AWS owned key.
     * Create-only property
     */
    KMSKeyId?: string;

    /**
     * An optional set of non-secret key–value pairs that contains additional contextual information about the data. For more information, see Encryption context in the *Key Management Service Developer Guide*.
     * You can only include this parameter if you specify the `KMSKeyId` parameter.
     * Create-only property
     */
    AdditionalEncryptionContext?: EncryptionContextMapType;

    /**
     * Read-only property
     */
    CreateTime?: string;
  };
}
