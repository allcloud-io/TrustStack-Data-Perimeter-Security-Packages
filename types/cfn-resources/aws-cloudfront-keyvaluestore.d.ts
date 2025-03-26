/**
 * TypeScript definitions for AWS::CloudFront::KeyValueStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.
 */
export namespace AWS_CloudFront_KeyValueStore {
  /**
   * The import source for the key value store.
   */
  export type ImportSourceType = {
    /**
     * The source type of the import source for the key value store.
     */
    SourceType: string;

    /**
     * The Amazon Resource Name (ARN) of the import source for the key value store.
     */
    SourceArn: string;
  };

  /**
   * The key value store. Use this to separate data from function code, allowing you to update data without having to publish a new version of a function. The key value store holds keys and their corresponding values.
   */
  export type KeyValueStoreResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Status?: string;

    /**
     * The name of the key value store.
     * Create-only property
     */
    Name: string;

    /**
     * A comment for the key value store.
     */
    Comment?: string;

    /**
     * The import source for the key value store.
     */
    ImportSource?: ImportSourceType;
  };
}
