/**
 * TypeScript definitions for AWS::Config::ConfigurationAggregator
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Config::ConfigurationAggregator
 */
export namespace AWS_Config_ConfigurationAggregator {
  export type AccountAggregationSourceType = {
    AllAwsRegions?: boolean;

    AwsRegions?: string[];

    AccountIds: string[];
  };

  export type OrganizationAggregationSourceType = {
    AllAwsRegions?: boolean;

    AwsRegions?: string[];

    RoleArn: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Config::ConfigurationAggregator
   */
  export type ConfigurationAggregatorResourceType = {
    AccountAggregationSources?: AccountAggregationSourceType[];

    /**
     * The name of the aggregator.
     * Create-only property
     */
    ConfigurationAggregatorName?: string;

    /**
     * The Amazon Resource Name (ARN) of the aggregator.
     * Read-only property
     */
    ConfigurationAggregatorArn?: string;

    OrganizationAggregationSource?: OrganizationAggregationSourceType;

    /**
     * The tags for the configuration aggregator.
     */
    Tags?: TagType[];
  };
}
