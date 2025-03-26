/**
 * TypeScript definitions for AWS::AppSync::ApiKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppSync::ApiKey
 */
export namespace AWS_AppSync_ApiKey {
  /**
   * Resource Type definition for AWS::AppSync::ApiKey
   */
  export type ApiKeyResourceType = {
    /**
     * Read-only property
     */
    ApiKey?: string;

    Description?: string;

    /**
     * Read-only property
     */
    ApiKeyId?: string;

    Expires?: number;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ApiId: string;
  };
}
