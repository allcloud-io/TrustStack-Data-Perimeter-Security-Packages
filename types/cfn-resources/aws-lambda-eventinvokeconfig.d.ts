/**
 * TypeScript definitions for AWS::Lambda::EventInvokeConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Lambda::EventInvokeConfig resource configures options for asynchronous invocation on a version or an alias.
 */
export namespace AWS_Lambda_EventInvokeConfig {
  /**
   * A destination for events after they have been sent to a function for processing.
   */
  export type DestinationConfigType = {
    OnFailure?: OnFailureType;

    OnSuccess?: OnSuccessType;
  };

  /**
   * The destination configuration for failed invocations.
   */
  export type OnFailureType = {
    /**
     * The Amazon Resource Name (ARN) of the destination resource.
     */
    Destination: string;
  };

  /**
   * The destination configuration for successful invocations.
   */
  export type OnSuccessType = {
    /**
     * The Amazon Resource Name (ARN) of the destination resource.
     */
    Destination: string;
  };

  /**
   * The AWS::Lambda::EventInvokeConfig resource configures options for asynchronous invocation on a version or an alias.
   */
  export type EventInvokeConfigResourceType = {
    DestinationConfig?: DestinationConfigType;

    /**
     * The name of the Lambda function.
     * Create-only property
     */
    FunctionName: string;

    /**
     * The maximum age of a request that Lambda sends to a function for processing.
     */
    MaximumEventAgeInSeconds?: number;

    /**
     * The maximum number of times to retry when the function returns an error.
     */
    MaximumRetryAttempts?: number;

    /**
     * The identifier of a version or alias.
     * Create-only property
     */
    Qualifier: string;
  };
}
