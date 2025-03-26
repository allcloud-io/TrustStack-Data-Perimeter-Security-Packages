/**
 * TypeScript definitions for AWS::OpenSearchServerless::Collection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchServerless collection resource
 */
export namespace AWS_OpenSearchServerless_Collection {
  /**
   * A key-value pair metadata associated with resource
   */
  export type TagType = {
    /**
     * The key in the key-value pair
     */
    Key: string;

    /**
     * The value in the key-value pair
     */
    Value: string;
  };

  /**
   * The possible types for the collection
   */
  export type CollectionTypeType = {};

  /**
   * The possible standby replicas for the collection
   */
  export type StandbyReplicasType = {};

  /**
   * Amazon OpenSearchServerless collection resource
   */
  export type CollectionResourceType = {
    /**
     * The description of the collection
     */
    Description?: string;

    /**
     * The identifier of the collection
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the collection.
     * The name must meet the following criteria:
     * Unique to your account and AWS Region
     * Starts with a lowercase letter
     * Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
     * Contains between 3 and 32 characters
     *
     * Create-only property
     */
    Name: string;

    /**
     * List of tags to be added to the resource
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the collection.
     * Read-only property
     */
    Arn?: string;

    /**
     * The endpoint for the collection.
     * Read-only property
     */
    CollectionEndpoint?: string;

    /**
     * The OpenSearch Dashboards endpoint for the collection.
     * Read-only property
     */
    DashboardEndpoint?: string;

    /**
     * Create-only property
     */
    Type?: CollectionTypeType;

    StandbyReplicas?: StandbyReplicasType;
  };
}
