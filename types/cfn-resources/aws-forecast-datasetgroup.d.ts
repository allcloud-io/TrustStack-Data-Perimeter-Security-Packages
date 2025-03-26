/**
 * TypeScript definitions for AWS::Forecast::DatasetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a dataset group that holds a collection of related datasets
 */
export namespace AWS_Forecast_DatasetGroup {
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

  export type ArnType = {};

  /**
   * The number of items to return in the response.
   */
  export type MaxResultsType = {};

  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   */
  export type NextTokenType = {};

  /**
   * Represents a dataset group that holds a collection of related datasets
   */
  export type DatasetGroupResourceType = {
    /**
     * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
     */
    DatasetArns?: ArnType[];

    /**
     * A name for the dataset group.
     * Create-only property
     */
    DatasetGroupName: string;

    /**
     * The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.
     */
    Domain: string;

    /**
     * The tags of Application Insights application.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the dataset group to delete.
     * Read-only property
     */
    DatasetGroupArn?: string;
  };
}
