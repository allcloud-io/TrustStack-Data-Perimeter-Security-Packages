/**
 * TypeScript definitions for AWS::Events::ApiDestination
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Events::ApiDestination.
 */
export namespace AWS_Events_ApiDestination {
  /**
   * Resource Type definition for AWS::Events::ApiDestination.
   */
  export type ApiDestinationResourceType = {
    /**
     * Name of the apiDestination.
     * Create-only property
     */
    Name?: string;

    Description?: string;

    /**
     * The arn of the connection.
     */
    ConnectionArn: string;

    /**
     * The arn of the api destination.
     * Read-only property
     */
    Arn?: string;

    InvocationRateLimitPerSecond?: number;

    /**
     * Url endpoint to invoke.
     */
    InvocationEndpoint: string;

    HttpMethod: string;
  };
}
