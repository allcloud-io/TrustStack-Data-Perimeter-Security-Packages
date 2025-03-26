/**
 * TypeScript definitions for AWS::IoT::FleetMetric
 * Generated from CloudFormation Resource Schema
 */

/**
 * An aggregated metric of certain devices in your fleet
 */
export namespace AWS_IoT_FleetMetric {
  /**
   * A key-value pair to associate with a resource
   */
  export type TagType = {
    /**
     * The tag's key
     */
    Key: string;

    /**
     * The tag's value
     */
    Value: string;
  };

  /**
   * Aggregation types supported by Fleet Indexing
   */
  export type AggregationTypeType = {
    /**
     * Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality
     */
    Name: string;

    /**
     * Fleet Indexing aggregation type values
     */
    Values: string[];
  };

  /**
   * The datetime value in ISO 8601 format. The timezone is always UTC. (YYYY-MM-DDThh:mm:ss.sssZ)
   */
  export type iso8601UTCType = {};

  /**
   * An aggregated metric of certain devices in your fleet
   */
  export type FleetMetricResourceType = {
    /**
     * The name of the fleet metric
     * Create-only property
     */
    MetricName: string;

    /**
     * The description of a fleet metric
     */
    Description?: string;

    /**
     * The Fleet Indexing query used by a fleet metric
     */
    QueryString?: string;

    /**
     * The period of metric emission in seconds
     */
    Period?: number;

    /**
     * The aggregation field to perform aggregation and metric emission
     */
    AggregationField?: string;

    /**
     * The version of a Fleet Indexing query used by a fleet metric
     */
    QueryVersion?: string;

    /**
     * The index name of a fleet metric
     */
    IndexName?: string;

    /**
     * The unit of data points emitted by a fleet metric
     */
    Unit?: string;

    AggregationType?: AggregationTypeType;

    /**
     * The Amazon Resource Number (ARN) of a fleet metric metric
     * Read-only property
     */
    MetricArn?: string;

    /**
     * The creation date of a fleet metric
     * Read-only property
     */
    CreationDate?: iso8601UTCType;

    /**
     * The last modified date of a fleet metric
     * Read-only property
     */
    LastModifiedDate?: iso8601UTCType;

    /**
     * The version of a fleet metric
     * Read-only property
     */
    Version?: number;

    /**
     * An array of key-value pairs to apply to this resource
     */
    Tags?: TagType[];
  };
}
