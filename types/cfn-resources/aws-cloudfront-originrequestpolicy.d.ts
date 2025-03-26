/**
 * TypeScript definitions for AWS::CloudFront::OriginRequestPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * An origin request policy.
 * When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
 * +  The request body and the URL path (without the domain name) from the viewer request.
 * +  The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
 * +  All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
 * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
 */
export namespace AWS_CloudFront_OriginRequestPolicy {
  /**
   * An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
   */
  export type CookiesConfigType = {
    /**
     * Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
     * +   `none` – No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any cookies that are listed in a `CachePolicy` *are* included in origin requests.
     * +   `whitelist` – Only the cookies in viewer requests that are listed in the `CookieNames` type are included in requests that CloudFront sends to the origin.
     * +   `all` – All cookies in viewer requests are included in requests that CloudFront sends to the origin.
     * +   `allExcept` – All cookies in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the `CookieNames` type, which are not included.
     */
    CookieBehavior: string;

    /**
     * Contains a list of cookie names.
     */
    Cookies?: string[];
  };

  /**
   * An object that determines whether any HTTP headers (and if so, which headers) are included in requests that CloudFront sends to the origin.
   */
  export type HeadersConfigType = {
    /**
     * Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:
     * +   `none` – No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any headers that are listed in a `CachePolicy` *are* included in origin requests.
     * +   `whitelist` – Only the HTTP headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin.
     * +   `allViewer` – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.
     * +   `allViewerAndWhitelistCloudFront` – All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the `Headers` type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.
     * +   `allExcept` – All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the `Headers` type, which are not included.
     */
    HeaderBehavior: string;

    /**
     * Contains a list of HTTP header names.
     */
    Headers?: string[];
  };

  /**
   * An origin request policy configuration.
   * This configuration determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
   * +  The request body and the URL path (without the domain name) from the viewer request.
   * +  The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
   * +  All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
   * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
   */
  export type OriginRequestPolicyConfigType = {
    /**
     * A comment to describe the origin request policy. The comment cannot be longer than 128 characters.
     */
    Comment?: string;

    /**
     * The cookies from viewer requests to include in origin requests.
     */
    CookiesConfig: CookiesConfigType;

    /**
     * The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.
     */
    HeadersConfig: HeadersConfigType;

    /**
     * A unique name to identify the origin request policy.
     */
    Name: string;

    /**
     * The URL query strings from viewer requests to include in origin requests.
     */
    QueryStringsConfig: QueryStringsConfigType;
  };

  /**
   * An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in requests that CloudFront sends to the origin.
   */
  export type QueryStringsConfigType = {
    /**
     * Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
     * +   `none` – No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to `none`, any query strings that are listed in a `CachePolicy` *are* included in origin requests.
     * +   `whitelist` – Only the query strings in viewer requests that are listed in the `QueryStringNames` type are included in requests that CloudFront sends to the origin.
     * +   `all` – All query strings in viewer requests are included in requests that CloudFront sends to the origin.
     * +   `allExcept` – All query strings in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the `QueryStringNames` type, which are not included.
     */
    QueryStringBehavior: string;

    /**
     * Contains a list of query string names.
     */
    QueryStrings?: string[];
  };

  /**
   * An origin request policy.
   * When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:
   * +  The request body and the URL path (without the domain name) from the viewer request.
   * +  The headers that CloudFront automatically includes in every origin request, including `Host`, `User-Agent`, and `X-Amz-Cf-Id`.
   * +  All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.
   * CloudFront sends a request when it can't find an object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use `CachePolicy`.
   */
  export type OriginRequestPolicyResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    LastModifiedTime?: string;

    /**
     * The origin request policy configuration.
     */
    OriginRequestPolicyConfig: OriginRequestPolicyConfigType;
  };
}
