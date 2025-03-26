/**
 * TypeScript definitions for AWS::OpenSearchService::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchService application resource
 */
export namespace AWS_OpenSearchService_Application {
  /**
   * AppConfig type values.
   */
  export type AppConfigTypeType = {};

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
   * A key-value pair of AppConfig
   */
  export type AppConfigType = {
    /**
     * The configuration key
     */
    Key: AppConfigTypeType;

    /**
     * The configuration value.
     */
    Value: string;
  };

  /**
   * Datasource arn and description
   */
  export type DataSourceType = {
    /**
     * The ARN of the data source.
     */
    DataSourceArn: any;

    /**
     * Description of the data source.
     */
    DataSourceDescription?: string;
  };

  /**
   * Amazon OpenSearchService application resource
   */
  export type ApplicationResourceType = {
    /**
     * Options for configuring IAM Identity Center
     */
    IamIdentityCenterOptions?: Record<string, any>;

    /**
     * Amazon Resource Name (ARN) format.
     * Read-only property
     */
    Arn?: string;

    /**
     * The identifier of the application.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the application.
     * Create-only property
     */
    Name: string;

    /**
     * The endpoint for the application.
     */
    Endpoint?: string;

    /**
     * List of application configurations.
     */
    AppConfigs?: AppConfigType[];

    /**
     * List of data sources.
     */
    DataSources?: DataSourceType[];

    /**
     * An arbitrary set of tags (key-value pairs) for this application.
     */
    Tags?: TagType[];
  };
}
