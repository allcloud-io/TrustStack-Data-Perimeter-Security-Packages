/**
 * TypeScript definitions for AWS::Redshift::Integration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Integration from a source AWS service to a Redshift cluster
 */
export namespace AWS_Redshift_Integration {
  /**
   * An array of key-value pairs to apply to this resource.
   */
  export type TagsType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
   */
  export type EncryptionContextMapType = {};

  /**
   * Integration from a source AWS service to a Redshift cluster
   */
  export type IntegrationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the integration.
     * Read-only property
     */
    IntegrationArn?: string;

    /**
     * The name of the integration.
     */
    IntegrationName?: string;

    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication
     * Create-only property
     */
    SourceArn: string;

    /**
     * The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication
     * Create-only property
     */
    TargetArn: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The time (UTC) when the integration was created.
     * Read-only property
     */
    CreateTime?: string;

    /**
     * An KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default AWS owned KMS key is used.
     * Create-only property
     */
    KMSKeyId?: string;

    /**
     * Create-only property
     */
    AdditionalEncryptionContext?: EncryptionContextMapType;
  };
}
