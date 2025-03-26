/**
 * TypeScript definitions for AWS::DMS::MigrationProject
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DMS::MigrationProject
 */
export namespace AWS_DMS_MigrationProject {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
     */
    Value: string;
  };

  /**
   * It is an object that describes Source and Target DataProviders and credentials for connecting to databases that are used in MigrationProject
   */
  export type DataProviderDescriptorType = {
    DataProviderIdentifier?: string;

    DataProviderName?: string;

    DataProviderArn?: string;

    SecretsManagerSecretId?: string;

    SecretsManagerAccessRoleArn?: string;
  };

  /**
   * Resource schema for AWS::DMS::MigrationProject
   */
  export type MigrationProjectResourceType = {
    /**
     * The property describes a name to identify the migration project.
     */
    MigrationProjectName?: string;

    /**
     * The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
     */
    MigrationProjectIdentifier?: string;

    /**
     * The property describes an ARN of the migration project.
     * Read-only property
     */
    MigrationProjectArn?: string;

    /**
     * The property describes a creating time of the migration project.
     */
    MigrationProjectCreationTime?: string;

    /**
     * The property describes an instance profile identifier for the migration project. For create
     */
    InstanceProfileIdentifier?: string;

    /**
     * The property describes an instance profile name for the migration project. For read
     */
    InstanceProfileName?: string;

    /**
     * The property describes an instance profile arn for the migration project. For read
     */
    InstanceProfileArn?: string;

    /**
     * The property describes transformation rules for the migration project.
     */
    TransformationRules?: string;

    /**
     * The optional description of the migration project.
     */
    Description?: string;

    /**
     * The property describes schema conversion application attributes for the migration project.
     */
    SchemaConversionApplicationAttributes?: Record<string, any>;

    /**
     * The property describes source data provider descriptors for the migration project.
     */
    SourceDataProviderDescriptors?: DataProviderDescriptorType[];

    /**
     * The property describes target data provider descriptors for the migration project.
     */
    TargetDataProviderDescriptors?: DataProviderDescriptorType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
