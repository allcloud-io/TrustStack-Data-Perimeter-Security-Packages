/**
 * TypeScript definitions for AWS::WAFv2::LoggingConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * A WAFv2 Logging Configuration Resource Provider
 */
export namespace AWS_WAFv2_LoggingConfiguration {
  export type FilterType = {
    /**
     * How to handle logs that satisfy the filter's conditions and requirement.
     */
    Behavior: string;

    /**
     * Match conditions for the filter.
     */
    Conditions: ConditionType[];

    /**
     * Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
     */
    Requirement: string;
  };

  export type ConditionType = {
    /**
     * A single action condition.
     */
    ActionCondition?: Record<string, any>;

    /**
     * A single label name condition.
     */
    LabelNameCondition?: Record<string, any>;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type FieldToMatchType = {
    /**
     * Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform.
     */
    Method?: Record<string, any>;

    /**
     * Inspect the query string. This is the part of a URL that appears after a ? character, if any.
     */
    QueryString?: Record<string, any>;

    /**
     * Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
     */
    SingleHeader?: Record<string, any>;

    /**
     * Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.
     */
    UriPath?: Record<string, any>;
  };

  /**
   * A WAFv2 Logging Configuration Resource Provider
   */
  export type LoggingConfigurationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.
     * Create-only property
     */
    ResourceArn: string;

    /**
     * The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.
     */
    LogDestinationConfigs: string[];

    /**
     * The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
     */
    RedactedFields?: FieldToMatchType[];

    /**
     * Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration.
     * Read-only property
     */
    ManagedByFirewallManager?: boolean;

    /**
     * Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
     */
    LoggingFilter?: Record<string, any>;
  };
}
