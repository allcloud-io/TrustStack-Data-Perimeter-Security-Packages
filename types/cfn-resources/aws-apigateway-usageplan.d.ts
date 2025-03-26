/**
 * TypeScript definitions for AWS::ApiGateway::UsagePlan
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::UsagePlan` resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see Creating and Using API Usage Plans in Amazon API Gateway in the *API Gateway Developer Guide*.
 * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
 */
export namespace AWS_ApiGateway_UsagePlan {
  export type ApiStageType = {
    ApiId?: string;

    Stage?: string;

    Throttle?: Record<string, any>;
  };

  /**
   * `ThrottleSettings` is a property of the AWS::ApiGateway::UsagePlan resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.
   */
  export type ThrottleSettingsType = {
    BurstLimit?: number;

    RateLimit?: number;
  };

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

  /**
   * `QuotaSettings` is a property of the AWS::ApiGateway::UsagePlan resource that specifies a target for the maximum number of requests users can make to your REST APIs.
   * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
   */
  export type QuotaSettingsType = {
    Limit?: number;

    Offset?: number;

    Period?: string;
  };

  /**
   * The `AWS::ApiGateway::UsagePlan` resource creates a usage plan for deployed APIs. A usage plan sets a target for the throttling and quota limits on individual client API keys. For more information, see Creating and Using API Usage Plans in Amazon API Gateway in the *API Gateway Developer Guide*.
   * In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.
   */
  export type UsagePlanResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    ApiStages?: ApiStageType[];

    Description?: string;

    Quota?: QuotaSettingsType;

    Tags?: TagType[];

    Throttle?: ThrottleSettingsType;

    UsagePlanName?: string;
  };
}
