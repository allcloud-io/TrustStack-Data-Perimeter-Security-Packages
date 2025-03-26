/**
 * TypeScript definitions for AWS::WAFv2::WebACL
 * Generated from CloudFormation Resource Schema
 */

/**
 * Contains the Rules that identify the requests that you want to allow, block, or count. In a WebACL, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a WebACL, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the WebACL with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a WebACL, a request needs to match only one of the specifications to be allowed, blocked, or counted.
 */
export namespace AWS_WAFv2_WebACL {
  /**
   * HTTP header name.
   */
  export type CustomHTTPHeaderNameType = {};

  /**
   * String that is searched to find a match.
   */
  export type SearchStringType = {};

  /**
   * The inspection behavior to fall back to if the JSON in the request body is invalid.
   */
  export type BodyParsingFallbackBehaviorType = {};

  /**
   * Custom response code.
   */
  export type ResponseStatusCodeType = {};

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
   * Includes the JA4 fingerprint of a web request.
   */
  export type JA4FingerprintType = {
    FallbackBehavior: string;
  };

  export type RegexMatchStatementType = {
    TextTransformations: TextTransformationType[];

    RegexString: string;

    FieldToMatch: FieldToMatchType;
  };

  export type RegexPatternSetReferenceStatementType = {
    TextTransformations: TextTransformationType[];

    Arn: ResourceArnType;

    FieldToMatch: FieldToMatchType;
  };

  export type IPSetReferenceStatementType = {
    IPSetForwardedIPConfig?: IPSetForwardedIPConfigurationType;

    Arn: ResourceArnType;
  };

  /**
   * Configures the inspection size in the request body.
   */
  export type RequestBodyAssociatedResourceTypeConfigType = {
    DefaultSizeInspectionLimit: SizeInspectionLimitType;
  };

  /**
   * Specifies the request's JA3 fingerprint as an aggregate key for a rate-based rule.
   */
  export type RateLimitJA3FingerprintType = {
    FallbackBehavior: string;
  };

  /**
   * AssociationConfig for body inspection
   */
  export type AssociationConfigType = {
    RequestBody?: RequestBodyType;
  };

  /**
   * The parts of the JSON to match against using the MatchPattern.
   */
  export type JsonMatchScopeType = {};

  /**
   * Priority of the Rule, Rules get evaluated from lower to higher priority.
   */
  export type RulePriorityType = {};

  /**
   * Action override for rules in the rule group.
   */
  export type RuleActionOverrideType = {
    ActionToUse: RuleActionType;

    Name: EntityNameType;
  };

  /**
   * Excluded Rule in the RuleGroup or ManagedRuleGroup will not be evaluated.
   */
  export type ExcludedRuleType = {
    Name: EntityNameType;
  };

  /**
   * Description of the entity.
   */
  export type EntityDescriptionType = {};

  /**
   * Specifies a query argument in the request as an aggregate key for a rate-based rule.
   */
  export type RateLimitQueryArgumentType = {
    TextTransformations: TextTransformationType[];

    /**
     * The name of the query argument to use.
     */
    Name: string;
  };

  /**
   * Rule of WebACL that contains condition and action.
   */
  export type RuleType = {
    Action?: RuleActionType;

    Priority: RulePriorityType;

    Statement: StatementType;

    ChallengeConfig?: ChallengeConfigType;

    OverrideAction?: OverrideActionType;

    /**
     * Collection of Rule Labels.
     */
    RuleLabels?: LabelType[];

    VisibilityConfig: VisibilityConfigType;

    CaptchaConfig?: CaptchaConfigType;

    Name: EntityNameType;
  };

  /**
   * Priority of Rule being evaluated.
   */
  export type TextTransformationPriorityType = {};

  /**
   * Specifies a header as an aggregate key for a rate-based rule.
   */
  export type RateLimitHeaderType = {
    TextTransformations: TextTransformationType[];

    /**
     * The name of the header to use.
     */
    Name: string;
  };

  export type IPSetForwardedIPConfigurationType = {
    FallbackBehavior: string;

    HeaderName: string;

    Position: string;
  };

  /**
   * Size Constraint statement.
   */
  export type SizeConstraintStatementType = {
    ComparisonOperator: string;

    TextTransformations: TextTransformationType[];

    Size: number;

    FieldToMatch: FieldToMatchType;
  };

  export type AndStatementType = {
    Statements: StatementType[];
  };

  /**
   * Response content.
   */
  export type ResponseContentType = {};

  /**
   * Includes the JA3 fingerprint of a web request.
   */
  export type JA3FingerprintType = {
    FallbackBehavior: string;
  };

  /**
   * Name of the WebACL.
   */
  export type EntityNameType = {};

  export type NotStatementType = {
    Statement: StatementType;
  };

  /**
   * Response status codes that indicate success or failure of a login request
   */
  export type ResponseInspectionStatusCodeType = {
    SuccessCodes: number[];

    FailureCodes: number[];
  };

  export type PhoneNumberFieldType = {};

  /**
   * Action taken when Rule matches its condition.
   */
  export type RuleActionType = {
    Captcha?: CaptchaActionType;

    Block?: BlockActionType;

    Count?: CountActionType;

    Allow?: AllowActionType;

    Challenge?: ChallengeActionType;
  };

  /**
   * Specifies the request's URI Path as an aggregate key for a rate-based rule.
   */
  export type RateLimitUriPathType = {
    TextTransformations: TextTransformationType[];
  };

  /**
   * Type of text transformation.
   */
  export type TextTransformationTypeType = {};

  /**
   * Name of the Label.
   */
  export type LabelNameType = {};

  /**
   * Position of the evaluation in the FieldToMatch of request.
   */
  export type PositionalConstraintType = {};

  /**
   * HTTP header value.
   */
  export type CustomHTTPHeaderValueType = {};

  export type LabelMatchStatementType = {
    Scope: LabelMatchScopeType;

    Key: LabelMatchKeyType;
  };

  /**
   * Response body contents that indicate success or failure of a login request
   */
  export type ResponseInspectionBodyContainsType = {
    SuccessStrings: string[];

    FailureStrings: string[];
  };

  export type ExcludedRulesType = {};

  /**
   * Field of the request to match.
   */
  export type FieldToMatchType = {
    JsonBody?: JsonBodyType;

    /**
     * All query arguments of a web request.
     */
    AllQueryArguments?: Record<string, any>;

    JA3Fingerprint?: JA3FingerprintType;

    /**
     * One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
     */
    SingleQueryArgument?: Record<string, any>;

    /**
     * The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.
     */
    UriPath?: Record<string, any>;

    /**
     * The query string of a web request. This is the part of a URL that appears after a ? character, if any.
     */
    QueryString?: Record<string, any>;

    Headers?: HeadersType;

    Cookies?: CookiesType;

    JA4Fingerprint?: JA4FingerprintType;

    /**
     * The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
     */
    Method?: Record<string, any>;

    Body?: BodyType;

    SingleHeader?: Record<string, any>;
  };

  /**
   * Map of AssociatedResourceType and RequestBodyAssociatedResourceTypeConfig
   */
  export type RequestBodyType = {};

  /**
   * First level statement that contains conditions, such as ByteMatch, SizeConstraint, etc
   */
  export type StatementType = {
    SizeConstraintStatement?: SizeConstraintStatementType;

    AndStatement?: AndStatementType;

    XssMatchStatement?: XssMatchStatementType;

    NotStatement?: NotStatementType;

    ByteMatchStatement?: ByteMatchStatementType;

    RateBasedStatement?: RateBasedStatementType;

    GeoMatchStatement?: GeoMatchStatementType;

    RuleGroupReferenceStatement?: RuleGroupReferenceStatementType;

    LabelMatchStatement?: LabelMatchStatementType;

    RegexMatchStatement?: RegexMatchStatementType;

    SqliMatchStatement?: SqliMatchStatementType;

    RegexPatternSetReferenceStatement?: RegexPatternSetReferenceStatementType;

    OrStatement?: OrStatementType;

    ManagedRuleGroupStatement?: ManagedRuleGroupStatementType;

    IPSetReferenceStatement?: IPSetReferenceStatementType;
  };

  export type ChallengeConfigType = {
    ImmunityTimeProperty?: ImmunityTimePropertyType;
  };

  export type RateBasedStatementType = {
    AggregateKeyType: string;

    /**
     * Specifies the aggregate keys to use in a rate-base rule.
     */
    CustomKeys?: RateBasedStatementCustomKeyType[];

    ForwardedIPConfig?: ForwardedIPConfigurationType;

    Limit: RateLimitType;

    EvaluationWindowSec?: EvaluationWindowSecType;

    ScopeDownStatement?: StatementType;
  };

  export type LabelMatchKeyType = {};

  export type FieldIdentifierType = {
    Identifier: string;
  };

  /**
   * Collection of Rules.
   */
  export type RulesType = {};

  /**
   * Handling of requests containing oversize fields
   */
  export type OversizeHandlingType = {};

  /**
   * Base64 encoded string that is searched to find a match.
   */
  export type SearchStringBase64Type = {};

  export type UriPathType = {};

  /**
   * Custom response key and body map.
   */
  export type CustomResponseBodiesType = {};

  export type TagType = {
    Value?: string;

    Key?: string;
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
   * Response headers that indicate success or failure of a login request
   */
  export type ResponseInspectionHeaderType = {
    SuccessValues: string[];

    FailureValues: string[];

    Name: string;
  };

  /**
   * Checks valid token exists with request.
   */
  export type CaptchaActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Block traffic towards application.
   */
  export type BlockActionType = {
    CustomResponse?: CustomResponseType;
  };

  export type LabelType = {
    Name: LabelNameType;
  };

  /**
   * Response JSON that indicate success or failure of a login request
   */
  export type ResponseInspectionJsonType = {
    Identifier: string;

    SuccessValues: string[];

    FailureValues: string[];
  };

  /**
   * ManagedRuleGroupConfig.
   */
  export type ManagedRuleGroupConfigType = {
    UsernameField?: FieldIdentifierType;

    LoginPath?: string;

    AWSManagedRulesATPRuleSet?: AWSManagedRulesATPRuleSetType;

    AWSManagedRulesBotControlRuleSet?: AWSManagedRulesBotControlRuleSetType;

    PasswordField?: FieldIdentifierType;

    AWSManagedRulesACFPRuleSet?: AWSManagedRulesACFPRuleSetType;

    PayloadType?: string;
  };

  /**
   * Includes cookies of a web request.
   */
  export type CookiesType = {
    MatchScope: MapMatchScopeType;

    MatchPattern: CookieMatchPatternType;

    OversizeHandling: OversizeHandlingType;
  };

  /**
   * Allow traffic towards application.
   */
  export type AllowActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Configures how to use the Bot Control managed rule group in the web ACL
   */
  export type AWSManagedRulesBotControlRuleSetType = {
    InspectionLevel: string;

    EnableMachineLearning?: boolean;
  };

  /**
   * Sqli Match Statement.
   */
  export type SqliMatchStatementType = {
    SensitivityLevel?: SensitivityLevelType;

    TextTransformations: TextTransformationType[];

    FieldToMatch: FieldToMatchType;
  };

  export type ManagedRuleGroupStatementType = {
    VendorName: string;

    Version?: string;

    /**
     * Action overrides for rules in the rule group.
     */
    RuleActionOverrides?: RuleActionOverrideType[];

    /**
     * Collection of ManagedRuleGroupConfig.
     */
    ManagedRuleGroupConfigs?: ManagedRuleGroupConfigType[];

    ExcludedRules?: ExcludedRuleType[];

    Name: EntityNameType;

    ScopeDownStatement?: StatementType;
  };

  export type EvaluationWindowSecType = {};

  /**
   * Specifies a cookie as an aggregate key for a rate-based rule.
   */
  export type RateLimitCookieType = {
    TextTransformations: TextTransformationType[];

    /**
     * The name of the cookie to use.
     */
    Name: string;
  };

  export type AddressFieldType = {};

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
   * Specifies the IP address in the web request as an aggregate key for a rate-based rule.
   */
  export type RateLimitIPType = {};

  /**
   * Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.
   */
  export type ChallengeActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Allow traffic towards application.
   */
  export type CountActionType = {
    CustomRequestHandling?: CustomRequestHandlingType;
  };

  /**
   * Byte Match statement.
   */
  export type ByteMatchStatementType = {
    SearchStringBase64?: SearchStringBase64Type;

    TextTransformations: TextTransformationType[];

    PositionalConstraint: PositionalConstraintType;

    SearchString?: SearchStringType;

    FieldToMatch: FieldToMatchType;
  };

  export type SizeInspectionLimitType = {};

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
   * Override a RuleGroup or ManagedRuleGroup behavior. This can only be applied to Rule that has RuleGroupReferenceStatement or ManagedRuleGroupReferenceStatement.
   */
  export type OverrideActionType = {
    /**
     * Count traffic towards application.
     */
    Count?: Record<string, any>;

    /**
     * Keep the RuleGroup or ManagedRuleGroup behavior as is.
     */
    None?: Record<string, any>;
  };

  export type GeoMatchStatementType = {
    ForwardedIPConfig?: ForwardedIPConfigurationType;

    CountryCodes?: string[];
  };

  /**
   * Visibility Metric of the WebACL.
   */
  export type VisibilityConfigType = {
    MetricName: string;

    SampledRequestsEnabled: boolean;

    CloudWatchMetricsEnabled: boolean;
  };

  /**
   * Configures how to use the Account creation fraud prevention managed rule group in the web ACL
   */
  export type AWSManagedRulesACFPRuleSetType = {
    RegistrationPagePath: string;

    ResponseInspection?: ResponseInspectionType;

    CreationPath: string;

    EnableRegexInPath?: boolean;

    RequestInspection: RequestInspectionACFPType;
  };

  export type RuleGroupReferenceStatementType = {
    /**
     * Action overrides for rules in the rule group.
     */
    RuleActionOverrides?: RuleActionOverrideType[];

    Arn: ResourceArnType;

    ExcludedRules?: ExcludedRuleType[];
  };

  /**
   * List of domains to accept in web request tokens, in addition to the domain of the protected resource.
   */
  export type TokenDomainsType = {};

  /**
   * Specifies the request's JA4 fingerprint as an aggregate key for a rate-based rule.
   */
  export type RateLimitJA4FingerprintType = {
    FallbackBehavior: string;
  };

  /**
   * ARN of the WAF entity.
   */
  export type ResourceArnType = {};

  /**
   * Default Action WebACL will take against ingress traffic when there is no matching Rule.
   */
  export type DefaultActionType = {
    Block?: BlockActionType;

    Allow?: AllowActionType;
  };

  /**
   * JSON pointer path in the web request's JSON body
   */
  export type JsonPointerPathType = {};

  /**
   * Specifies a single custom aggregate key for a rate-base rule.
   */
  export type RateBasedStatementCustomKeyType = {
    Cookie?: RateLimitCookieType;

    ForwardedIP?: RateLimitForwardedIPType;

    QueryArgument?: RateLimitQueryArgumentType;

    JA3Fingerprint?: RateLimitJA3FingerprintType;

    Header?: RateLimitHeaderType;

    HTTPMethod?: RateLimitHTTPMethodType;

    QueryString?: RateLimitQueryStringType;

    UriPath?: RateLimitUriPathType;

    IP?: RateLimitIPType;

    JA4Fingerprint?: RateLimitJA4FingerprintType;

    LabelNamespace?: RateLimitLabelNamespaceType;
  };

  /**
   * Configures the inspection of login responses
   */
  export type ResponseInspectionType = {
    Header?: ResponseInspectionHeaderType;

    BodyContains?: ResponseInspectionBodyContainsType;

    Json?: ResponseInspectionJsonType;

    StatusCode?: ResponseInspectionStatusCodeType;
  };

  export type LabelMatchScopeType = {};

  /**
   * Specifies the request's HTTP method as an aggregate key for a rate-based rule.
   */
  export type RateLimitHTTPMethodType = {};

  /**
   * Configures the inspection of sign-up requests
   */
  export type RequestInspectionACFPType = {
    UsernameField?: FieldIdentifierType;

    EmailField?: FieldIdentifierType;

    PasswordField?: FieldIdentifierType;

    AddressFields?: AddressFieldType[];

    PayloadType: string;

    PhoneNumberFields?: PhoneNumberFieldType[];
  };

  export type ImmunityTimePropertyType = {
    ImmunityTime: number;
  };

  /**
   * Specifies a label namespace to use as an aggregate key for a rate-based rule.
   */
  export type RateLimitLabelNamespaceType = {
    /**
     * The namespace to use for aggregation.
     */
    Namespace: string;
  };

  export type SingleQueryArgumentType = {
    Name?: string;
  };

  /**
   * Xss Match Statement.
   */
  export type XssMatchStatementType = {
    TextTransformations: TextTransformationType[];

    FieldToMatch: FieldToMatchType;
  };

  /**
   * Includes headers of a web request.
   */
  export type HeadersType = {
    MatchScope: MapMatchScopeType;

    MatchPattern: HeaderMatchPatternType;

    OversizeHandling: OversizeHandlingType;
  };

  /**
   * Specifies the first IP address in an HTTP header as an aggregate key for a rate-based rule.
   */
  export type RateLimitForwardedIPType = {};

  /**
   * Configures how to use the Account Takeover Prevention managed rule group in the web ACL
   */
  export type AWSManagedRulesATPRuleSetType = {
    ResponseInspection?: ResponseInspectionType;

    EnableRegexInPath?: boolean;

    LoginPath: string;

    RequestInspection?: RequestInspectionType;
  };

  /**
   * Configures the inspection of login requests
   */
  export type RequestInspectionType = {
    UsernameField: FieldIdentifierType;

    PasswordField: FieldIdentifierType;

    PayloadType: string;
  };

  /**
   * Inspect the request body as JSON. The request body immediately follows the request headers.
   */
  export type JsonBodyType = {
    MatchScope: JsonMatchScopeType;

    MatchPattern: JsonMatchPatternType;

    InvalidFallbackBehavior?: BodyParsingFallbackBehaviorType;

    OversizeHandling?: OversizeHandlingType;
  };

  export type RateLimitType = {};

  export type OrStatementType = {
    Statements: StatementType[];
  };

  /**
   * The body of a web request. This immediately follows the request headers.
   */
  export type BodyType = {
    OversizeHandling?: OversizeHandlingType;
  };

  /**
   * HTTP header.
   */
  export type CustomHTTPHeaderType = {
    Value: CustomHTTPHeaderValueType;

    Name: CustomHTTPHeaderNameType;
  };

  /**
   * Specifies the request's query string as an aggregate key for a rate-based rule.
   */
  export type RateLimitQueryStringType = {
    TextTransformations: TextTransformationType[];
  };

  export type QueryStringType = {};

  /**
   * Valid values are TEXT_PLAIN, TEXT_HTML, and APPLICATION_JSON.
   */
  export type ResponseContentTypeType = {};

  /**
   * Text Transformation on the Search String before match.
   */
  export type TextTransformationType = {
    Type: TextTransformationTypeType;

    Priority: TextTransformationPriorityType;
  };

  /**
   * Id of the WebACL
   */
  export type EntityIdType = {};

  /**
   * Sensitivity Level current only used for sqli match statements.
   */
  export type SensitivityLevelType = {};

  /**
   * Use CLOUDFRONT for CloudFront WebACL, use REGIONAL for Application Load Balancer and API Gateway.
   */
  export type ScopeType = {};

  /**
   * Custom response body.
   */
  export type CustomResponseBodyType = {
    ContentType: ResponseContentTypeType;

    Content: ResponseContentType;
  };

  export type ForwardedIPConfigurationType = {
    FallbackBehavior: string;

    HeaderName: string;
  };

  export type CaptchaConfigType = {
    ImmunityTimeProperty?: ImmunityTimePropertyType;
  };

  export type SingleHeaderType = {
    Name?: string;
  };

  /**
   * The parts of the request to match against using the MatchPattern.
   */
  export type MapMatchScopeType = {};

  /**
   * Contains the Rules that identify the requests that you want to allow, block, or count. In a WebACL, you also specify a default action (ALLOW or BLOCK), and the action for each Rule that you add to a WebACL, for example, block requests from specified IP addresses or block requests from specified referrers. You also associate the WebACL with a CloudFront distribution to identify the requests that you want AWS WAF to filter. If you add more than one Rule to a WebACL, a request needs to match only one of the specifications to be allowed, blocked, or counted.
   */
  export type WebACLResourceType = {
    Description?: EntityDescriptionType;

    AssociationConfig?: AssociationConfigType;

    ChallengeConfig?: ChallengeConfigType;

    /**
     * Collection of Rules.
     */
    Rules?: RuleType[];

    VisibilityConfig: VisibilityConfigType;

    /**
     * Read-only property
     */
    LabelNamespace?: LabelNameType;

    /**
     * Create-only property
     */
    Name?: EntityNameType;

    TokenDomains?: TokenDomainsType;

    DefaultAction: DefaultActionType;

    /**
     * Create-only property
     */
    Scope: ScopeType;

    /**
     * Read-only property
     */
    Capacity?: number;

    CustomResponseBodies?: CustomResponseBodiesType;

    /**
     * Read-only property
     */
    Id?: EntityIdType;

    /**
     * Read-only property
     */
    Arn?: ResourceArnType;

    CaptchaConfig?: CaptchaConfigType;

    Tags?: TagType[];
  };
}
