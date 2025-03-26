/**
 * TypeScript definitions for AWS::DMS::DataProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DMS::DataProvider
 */
export namespace AWS_DMS_DataProvider {
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

  export type DmsSslModeValueType = {};

  export type Db2SslModeValueType = {};

  export type MongoDbSslModeValueType = {};

  export type MongoDbAuthTypeType = {};

  export type MongoDbAuthMechanismType = {};

  /**
   * Resource schema for AWS::DMS::DataProvider
   */
  export type DataProviderResourceType = {
    /**
     * The property describes a name to identify the data provider.
     */
    DataProviderName?: string;

    /**
     * The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn
     */
    DataProviderIdentifier?: string;

    /**
     * The data provider ARN.
     * Read-only property
     */
    DataProviderArn?: string;

    /**
     * The data provider creation time.
     * Read-only property
     */
    DataProviderCreationTime?: string;

    /**
     * The optional description of the data provider.
     */
    Description?: string;

    /**
     * The property describes a data engine for the data provider.
     */
    Engine: string;

    /**
     * The property describes the exact settings which can be modified
     * Default: false
     */
    ExactSettings?: boolean;

    /**
     * The property identifies the exact type of settings for the data provider.
     */
    Settings?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
