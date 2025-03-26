/**
 * TypeScript definitions for AWS::DMS::DataMigration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DMS::DataMigration.
 */
export namespace AWS_DMS_DataMigration {
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
    Value: string;
  };

  export type DataMigrationSettingsType = {
    /**
     * The property specifies whether to enable the Cloudwatch log.
     */
    CloudwatchLogsEnabled?: boolean;

    /**
     * The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
     */
    NumberOfJobs?: number;

    /**
     * The property specifies the rules of selecting objects for data migration.
     */
    SelectionRules?: string;
  };

  export type SourceDataSettingsType = {
    /**
     * The property is a point in the database engine's log that defines a time where you can begin CDC.
     */
    CDCStartPosition?: string;

    /**
     * The property indicates the start time for a change data capture (CDC) operation. The value is server time in UTC format.
     */
    CDCStartTime?: string;

    /**
     * The property indicates the stop time for a change data capture (CDC) operation. The value is server time in UTC format.
     */
    CDCStopTime?: string;

    /**
     * The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.
     */
    SlotName?: string;
  };

  /**
   * Resource schema for AWS::DMS::DataMigration.
   */
  export type DataMigrationResourceType = {
    /**
     * The property describes a name to identify the data migration.
     */
    DataMigrationName?: string;

    /**
     * The property describes an ARN of the data migration.
     * Read-only property
     */
    DataMigrationArn?: string;

    /**
     * The property describes an ARN of the data migration.
     */
    DataMigrationIdentifier?: string;

    /**
     * The property describes the create time of the data migration.
     * Read-only property
     */
    DataMigrationCreateTime?: string;

    /**
     * The property describes Amazon Resource Name (ARN) of the service access role.
     */
    ServiceAccessRoleArn: string;

    /**
     * The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
     */
    MigrationProjectIdentifier: string;

    /**
     * The property describes the type of migration.
     */
    DataMigrationType: string;

    /**
     * The property describes the settings for the data migration.
     */
    DataMigrationSettings?: DataMigrationSettingsType;

    /**
     * The property describes the settings for the data migration.
     */
    SourceDataSettings?: SourceDataSettingsType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
