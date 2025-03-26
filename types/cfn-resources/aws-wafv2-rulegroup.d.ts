/**
 * TypeScript definitions for AWS::WAFv2::RuleGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Contains the Rules that identify the requests that you want to allow, block, or count. In a RuleGroup, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a RuleGroup, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the RuleGroup with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a RuleGroup, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 */
export namespace AWS_WAFv2_RuleGroup {
  export type AndStatementType = {
    Statements: StatementType[];
  };

  /**
   * Byte Match statement.
   */
  export type ByteMatchStatementType = {
    SearchString?: SearchStringType;

    SearchStringBase64?: SearchStringBase64Type;

    FieldToMatch: FieldToMatchType;

    TextTransformations: TextTransformationType[];

    PositionalConstraint: PositionalConstraintType;
  };

  /**
   * Description of the entity.
   */
  export type EntityDescriptionType = {};

  /**
   * Name of the RuleGroup.
   */
  export type EntityNameType = {};

  /**
   * Field of the request to match.
   */
  export type FieldToMatchType = {
    SingleHeader?: Record<string, any>;

    /**
     * One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
     */
    SingleQueryArgument?: Record<string, any>;

    /**
     * All query arguments of a web request.
     */
    AllQueryArguments?: Record<string, any>;

    /**
     * The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.
     */
    UriPath?: Record<string, any>;

    /**
     * The query string of a web request. This is the part of a URL that appears after a ? character, if any.
     */
    QueryString?: Record<string, any>;

    Body?: BodyType;

    /**
     * The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
     */
    Method?: Record<string, any>;

    JsonBody?: JsonBodyType;

    Headers?: HeadersType;

    Cookies?: CookiesType;

    JA3Fingerprint?: JA3FingerprintType;

    JA4Fingerprint?: JA4FingerprintType;
  };

  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers.
   */
  export type JsonBodyType = {
    MatchPattern: JsonMatchPatternType;

    MatchScope: JsonMatchScopeType;

    InvalidFallbackBehavior?: BodyParsingFallbackBehaviorType;

    OversizeHandling?: OversizeHandlingType;
  };

  /**
   * The inspection behavior to fall back to if the JSON in the request body is invalid.
   */
  export type BodyParsingFallbackBehaviorType = {};

  /**
   * The parts of the JSON to match against using the MatchPattern.
   */
  export type JsonMatchScopeType = {};

  /**
   * The pattern to look for in the JSON body.
   */
  export type JsonMatchPatternType = {
    /**
     * Inspect all parts of the web request's JSON body.
     */
    All?: Record<string, any>;

    IncludedPaths?: JsonPointerPathType[];
  };

  /**
   * JSON pointer path in the web request's JSON body
   */
  export type JsonPointerPathType = {};

  export type GeoMatchStatementType = {
    CountryCodes?: string[];

    ForwardedIPConfig?: ForwardedIPConfigurationType;
  };

  /**
   * Id of the RuleGroup
   */
  export type EntityIdType = {};

  export type IPSetReferenceStatementType = {
    Arn: ResourceArnType;

    IPSetForwardedIPConfig?: IPSetForwardedIPConfigurationType;
  };

  export type NotStatementType = {
    Statement: StatementType;
  };

  export type OrStatementType = {
    Statements: StatementType[];
  };

  /**
   * Position of the evaluation in the FieldToMatch of request.
   */
  export type PositionalConstraintType = {};

  export type RateBasedStatementType = {
    Limit: RateLimitType;

    EvaluationWindowSec?: EvaluationWindowSecType;

    AggregateKeyType: string;

    /**
     * Specifies the aggregate keys to use in a rate-base rule.
     */
    CustomKeys?: RateBasedStatementCustomKeyType[];

    ScopeDownStatement?: StatementType;

    ForwardedIPConfig?: ForwardedIPConfigurationType;
  };

  /**
   * Specifies a single custom aggregate key for a rate-base rule.
   */
  export type RateBasedStatementCustomKeyType = {
    Cookie?: RateLimitCookieType;

    ForwardedIP?: RateLimitForwardedIPType;

    Header?: RateLimitHeaderType;

    HTTPMethod?: RateLimitHTTPMethodType;

    IP?: RateLimitIPType;

    LabelNamespace?: RateLimitLabelNamespaceType;

    QueryArgument?: RateLimitQueryArgumentType;

    QueryString?: RateLimitQueryStringType;

    UriPath?: RateLimitUriPathType;

    JA3Fingerprint?: RateLimitJA3FingerprintType;

    JA4Fingerprint?: RateLimitJA4FingerprintType;
  };

  /**
   * Specifies a cookie as an aggregate key for a rate-based rule.
   */
  export type RateLimitCookieType = {
    /**
     * The name of the cookie to use.
     */
    Name: string;

    TextTransformations: TextTransformationType[];
  };

  /**
   * Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule.
   */
  export type RateLimitForwardedIPType = {};

  /**
   * Specifies a header as an aggregate key for a rate-based rule.
   */
  export type RateLimitHeaderType = {
    /**
     * The name of the header to use.
     */
    Name: string;

    TextTransformations: TextTransformationType[];
  };

  /**
   * Specifies the request's HTTP method as an aggregate key for a rate-based rule.
   */
  export type RateLimitHTTPMethodType = {};

  /**
   * Specifies the IP address in the web request as an aggregate key for a rate-based rule.
   */
  export type RateLimitIPType = {};

  /**
   * Specifies a label namespace to use as an aggregate key for a rate-based rule.
   */
  export type RateLimitLabelNamespaceType = {
    /**
     * The namespace to use for aggregation.
     */
    Namespace: string;
  };

  /**
   * Specifies a query argument in the request as an aggregate key for a rate-based rule.
   */
  export type RateLimitQueryArgumentType = {
    /**
     * The name of the query argument to use.
     */
    Name: string;

    TextTransformations: TextTransformationType[];
  };

  /**
   * Specifies the request's query string as an aggregate key for a rate-based rule.
   */
  export type RateLimitQueryStringType = {
    TextTransformations: TextTransformationType[];
  };

  /**
   * Specifies the request's URI Path as an aggregate key for a rate-based rule.
   */
  export type RateLimitUriPathType = {
    TextTransformations: TextTransformationType[];
  };

  /**
   * Specifies the request's JA3 fingerprint as an aggregate key for a rate-based rule.
   */
  export type RateLimitJA3FingerprintType = {
    FallbackBehavior: string;
  };

  /**
   * Specifies the request's JA4 fingerprint as an aggregate key for a rate-based rule.
   */
  export type RateLimitJA4FingerprintType = {
    FallbackBehavior: string;
  };

  export type RateLimitType = {};

  export type EvaluationWindowSecType = {};

  export type RegexPatternSetReferenceStatementType = {
    Arn: ResourceArnType;

    FieldToMatch: FieldToMatchType;

    TextTransformations: TextTransformationType[];
  };

  /**
   * ARN of the WAF entity.
   */
  export type ResourceArnType = {};

  export type ForwardedIPConfigurationType = {
    HeaderName: string;

    FallbackBehavior: string;
  };

  export type IPSetForwardedIPConfigurationType = {
    HeaderName: string;

    FallbackBehavior: string;

    Position: string;
  };

  /**
   * Rule of RuleGroup that contains condition and action.
   */
  export type RuleType = {
    Name: EntityNameType;

    Priority: RulePriorityType;

    Statement: StatementType;

    Action?: RuleActionType;

    /**
     * Collection of Rule Labels.
     */
    RuleLabels?: LabelType[];

    VisibilityConfig: VisibilityConfigType;

    CaptchaConfig?: CaptchaConfigType;

    ChallengeConfig?: ChallengeConfigType;
  };

  /**
   * Action taken when Rule matches its condition.
   */
  export type RuleActionType = {
    Allow?: AllowActionType;

    Block?: BlockActionType;

    Count?: CountActionType;

    Captcha?: CaptchaActionType;

    Challenge?: ChallengeActionType;
  };

  /**
   * Allow traffic towards application.
   */
  export type AllowActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Block traffic towards application.
   */
  export type BlockActionType = {
    CustomResponse?: CustomResponseType;
  };

  /**
   * Count traffic towards application.
   */
  export type CountActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Checks valid token exists with request.
   */
  export type CaptchaActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.
   */
  export type ChallengeActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * HTTP header name.
   */
  export type CustomHTTPHeaderNameType = {};

  /**
   * HTTP header value.
   */
  export type CustomHTTPHeaderValueType = {};

  /**
   * HTTP header.
   */
  export type CustomHTTPHeaderType = {
    Name: CustomHTTPHeaderNameType;

    Value: CustomHTTPHeaderValueType;
  };

  /**
   * Custom request handling.
   */
  export type CustomRequestHandlingType = {
    /**
     * Collection of HTTP headers.
     */
    InsertHeaders: CustomHTTPHeaderType[];
  };

  /**
   * Custom response code.
   */
  export type ResponseStatusCodeType = {};

  /**
   * Valid values are TEXT_PLAIN, TEXT_HTML, and APPLICATION_JSON.
   */
  export type ResponseContentTypeType = {};

  /**
   * Response content.
   */
  export type ResponseContentType = {};

  /**
   * Custom response body.
   */
  export type CustomResponseBodyType = {
    ContentType: ResponseContentTypeType;

    Content: ResponseContentType;
  };

  /**
   * Custom response.
   */
  export type CustomResponseType = {
    ResponseCode: ResponseStatusCodeType;

    /**
     * Custom response body key.
     */
    CustomResponseBodyKey?: string;

    /**
     * Collection of HTTP headers.
     */
    ResponseHeaders?: CustomHTTPHeaderType[];
  };

  /**
   * Custom response key and body map.
   */
  export type CustomResponseBodiesType = {};

  export type RuleGroupType = {
    Name?: EntityNameType;

    Id?: EntityIdType;

    Arn?: ResourceArnType;

    Description?: EntityDescriptionType;

    /**
     * Collection of Rules.
     */
    Rules?: RuleType[];

    VisibilityConfig?: VisibilityConfigType;

    Capacity?: number;
  };

  /**
   * Priority of the Rule, Rules get evaluated from lower to higher priority.
   */
  export type RulePriorityType = {};

  /**
   * Use CLOUDFRONT for CloudFront RuleGroup, use REGIONAL for Application Load Balancer and API Gateway.
   */
  export type ScopeType = {};

  /**
   * String that is searched to find a match.
   */
  export type SearchStringType = {};

  /**
   * Base64 encoded string that is searched to find a match.
   */
  export type SearchStringBase64Type = {};

  /**
   * Size Constraint statement.
   */
  export type SizeConstraintStatementType = {
    FieldToMatch: FieldToMatchType;

    ComparisonOperator: string;

    Size: number;

    TextTransformations: TextTransformationType[];
  };

  /**
   * Sqli Match Statement.
   */
  export type SqliMatchStatementType = {
    FieldToMatch: FieldToMatchType;

    TextTransformations: TextTransformationType[];

    SensitivityLevel?: SensitivityLevelType;
  };

  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  export type StatementType = {
    ByteMatchStatement?: ByteMatchStatementType;

    SqliMatchStatement?: SqliMatchStatementType;

    XssMatchStatement?: XssMatchStatementType;

    SizeConstraintStatement?: SizeConstraintStatementType;

    GeoMatchStatement?: GeoMatchStatementType;

    IPSetReferenceStatement?: IPSetReferenceStatementType;

    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatementType;

    RateBasedStatement?: RateBasedStatementType;

    AndStatement?: AndStatementType;

    OrStatement?: OrStatementType;

    NotStatement?: NotStatementType;

    LabelMatchStatement?: LabelMatchStatementType;

    RegexMatchStatement?: RegexMatchStatementType;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Text Transformation on the Search String before match.
   */
  export type TextTransformationType = {
    Priority: TextTransformationPriorityType;

    Type: TextTransformationTypeType;
  };

  /**
   * Priority of Rule being evaluated.
   */
  export type TextTransformationPriorityType = {};

  /**
   * Type of text transformation.
   */
  export type TextTransformationTypeType = {};

  /**
   * Visibility Metric of the RuleGroup.
   */
  export type VisibilityConfigType = {
    SampledRequestsEnabled: boolean;

    CloudWatchMetricsEnabled: boolean;

    MetricName: string;
  };

  /**
   * Xss Match Statement.
   */
  export type XssMatchStatementType = {
    FieldToMatch: FieldToMatchType;

    TextTransformations: TextTransformationType[];
  };

  /**
   * Name of the Label.
   */
  export type LabelNameType = {};

  export type LabelSummaryType = {
    Name?: LabelNameType;
  };

  export type LabelType = {
    Name: LabelNameType;
  };

  export type LabelMatchKeyType = {};

  export type LabelMatchScopeType = {};

  export type LabelMatchStatementType = {
    Scope: LabelMatchScopeType;

    Key: LabelMatchKeyType;
  };

  export type RegexMatchStatementType = {
    RegexString: string;

    FieldToMatch: FieldToMatchType;

    TextTransformations: TextTransformationType[];
  };

  export type CaptchaConfigType = {
    ImmunityTimeProperty?: ImmunityTimePropertyType;
  };

  export type ChallengeConfigType = {
    ImmunityTimeProperty?: ImmunityTimePropertyType;
  };

  export type ImmunityTimePropertyType = {
    ImmunityTime: number;
  };

  /**
   * The body of a web request. This immediately follows the request headers.
   */
  export type BodyType = {
    OversizeHandling?: OversizeHandlingType;
  };

  /**
   * Includes headers of a web request.
   */
  export type HeadersType = {
    MatchPattern: HeaderMatchPatternType;

    MatchScope: MapMatchScopeType;

    OversizeHandling: OversizeHandlingType;
  };

  /**
   * Includes cookies of a web request.
   */
  export type CookiesType = {
    MatchPattern: CookieMatchPatternType;

    MatchScope: MapMatchScopeType;

    OversizeHandling: OversizeHandlingType;
  };

  /**
   * The pattern to look for in the request headers.
   */
  export type HeaderMatchPatternType = {
    /**
     * Inspect all parts of the web request headers.
     */
    All?: Record<string, any>;

    IncludedHeaders?: string[];

    ExcludedHeaders?: string[];
  };

  /**
   * The pattern to look for in the request cookies.
   */
  export type CookieMatchPatternType = {
    /**
     * Inspect all parts of the web request cookies.
     */
    All?: Record<string, any>;

    IncludedCookies?: string[];

    ExcludedCookies?: string[];
  };

  /**
   * The parts of the request to match against using the MatchPattern.
   */
  export type MapMatchScopeType = {};

  /**
   * Handling of requests containing oversize fields
   */
  export type OversizeHandlingType = {};

  /**
   * Sensitivity Level current only used for sqli match statements.
   */
  export type SensitivityLevelType = {};

  /**
   * Includes the JA3 fingerprint of a web request.
   */
  export type JA3FingerprintType = {
    FallbackBehavior: string;
  };

  /**
   * Includes the JA4 fingerprint of a web request.
   */
  export type JA4FingerprintType = {
    FallbackBehavior: string;
  };

  /**
   * Contains the Rules that identify the requests that you want to allow, block, or count. In a RuleGroup, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a RuleGroup, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the RuleGroup with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a RuleGroup, a request needs to match only one of the specifications to be allowed, blocked, or counted.
   */
  export type RuleGroupResourceType = {
    /**
     * Read-only property
     */
    Arn?: ResourceArnType;

    Capacity: number;

    Description?: EntityDescriptionType;

    /**
     * Create-only property
     */
    Name?: EntityNameType;

    /**
     * Read-only property
     */
    Id?: EntityIdType;

    /**
     * Create-only property
     */
    Scope: ScopeType;

    /**
     * Collection of Rules.
     */
    Rules?: RuleType[];

    VisibilityConfig: VisibilityConfigType;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    LabelNamespace?: LabelNameType;

    CustomResponseBodies?: CustomResponseBodiesType;

    /**
     * Collection of Available Labels.
     */
    AvailableLabels?: LabelSummaryType[];

    /**
     * Collection of Consumed Labels.
     */
    ConsumedLabels?: LabelSummaryType[];
  };
}
