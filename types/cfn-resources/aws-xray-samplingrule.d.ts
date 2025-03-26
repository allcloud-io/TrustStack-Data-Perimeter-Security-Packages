/**
 * TypeScript definitions for AWS::XRay::SamplingRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.
 */
export namespace AWS_XRay_SamplingRule {
  export type SamplingRuleType = {
    /**
     * Matches attributes derived from the request.
     */
    Attributes?: Record<string, any>;

    /**
     * The percentage of matching requests to instrument, after the reservoir is exhausted.
     */
    FixedRate: number;

    /**
     * Matches the hostname from a request URL.
     */
    Host: string;

    /**
     * Matches the HTTP method from a request URL.
     */
    HTTPMethod: string;

    /**
     * The priority of the sampling rule.
     */
    Priority: number;

    /**
     * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
     */
    ReservoirSize: number;

    /**
     * Matches the ARN of the AWS resource on which the service runs.
     */
    ResourceARN: string;

    RuleARN?: RuleARNType;

    RuleName?: RuleNameType;

    /**
     * Matches the name that the service uses to identify itself in segments.
     */
    ServiceName: string;

    /**
     * Matches the origin that the service uses to identify its type in segments.
     */
    ServiceType: string;

    /**
     * Matches the path from a request URL.
     */
    URLPath: string;

    /**
     * The version of the sampling rule format (1)
     */
    Version?: number;
  };

  export type SamplingRuleRecordType = {
    /**
     * When the rule was created, in Unix time seconds.
     */
    CreatedAt?: string;

    /**
     * When the rule was modified, in Unix time seconds.
     */
    ModifiedAt?: string;

    SamplingRule?: SamplingRuleType;
  };

  export type SamplingRuleUpdateType = {
    /**
     * Matches attributes derived from the request.
     */
    Attributes?: Record<string, any>;

    /**
     * The percentage of matching requests to instrument, after the reservoir is exhausted.
     */
    FixedRate?: number;

    /**
     * Matches the hostname from a request URL.
     */
    Host?: string;

    /**
     * Matches the HTTP method from a request URL.
     */
    HTTPMethod?: string;

    /**
     * The priority of the sampling rule.
     */
    Priority?: number;

    /**
     * A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
     */
    ReservoirSize?: number;

    /**
     * Matches the ARN of the AWS resource on which the service runs.
     */
    ResourceARN?: string;

    RuleARN?: RuleARNType;

    RuleName?: RuleNameType;

    /**
     * Matches the name that the service uses to identify itself in segments.
     */
    ServiceName?: string;

    /**
     * Matches the origin that the service uses to identify its type in segments.
     */
    ServiceType?: string;

    /**
     * Matches the path from a request URL.
     */
    URLPath?: string;
  };

  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   */
  export type RuleNameType = {};

  /**
   * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
   */
  export type RuleARNType = {};

  export type TagType = {
    /**
     * The key name of the tag.
     */
    Key: string;

    /**
     * The value for the tag.
     */
    Value: string;
  };

  /**
   * An array of key-value pairs to apply to this resource.
   */
  export type TagsType = {};

  /**
   * This schema provides construct and validation rules for AWS-XRay SamplingRule resource parameters.
   */
  export type SamplingRuleResourceType = {
    SamplingRule?: SamplingRuleType;

    SamplingRuleRecord?: SamplingRuleRecordType;

    SamplingRuleUpdate?: SamplingRuleUpdateType;

    /**
     * Read-only property
     */
    RuleARN?: RuleARNType;

    RuleName?: RuleNameType;

    Tags?: TagsType;
  };
}
