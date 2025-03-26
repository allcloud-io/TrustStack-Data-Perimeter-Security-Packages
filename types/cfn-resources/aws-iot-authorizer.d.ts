/**
 * TypeScript definitions for AWS::IoT::Authorizer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates an authorizer.
 */
export namespace AWS_IoT_Authorizer {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Creates an authorizer.
   */
  export type AuthorizerResourceType = {
    AuthorizerFunctionArn: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AuthorizerName?: string;

    /**
     * Create-only property
     */
    SigningDisabled?: boolean;

    Status?: string;

    TokenKeyName?: string;

    TokenSigningPublicKeys?: Record<string, any>;

    EnableCachingForHttp?: boolean;

    Tags?: TagType[];
  };
}
