/**
 * TypeScript definitions for AWS::ApiGateway::ApiKey
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::ApiKey` resource creates a unique key that you can distribute to clients who are executing API Gateway `Method` resources that require an API key. To specify which API key clients must use, map the API key with the `RestApi` and `Stage` resources that include the methods that require a key.
 */
export namespace AWS_ApiGateway_ApiKey {
  /**
   * `StageKey` is a property of the AWS::ApiGateway::ApiKey resource that specifies the stage to associate with the API key. This association allows only clients with the key to make requests to methods in that stage.
   */
  export type StageKeyType = {
    RestApiId?: string;

    StageName?: string;
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
   * The `AWS::ApiGateway::ApiKey` resource creates a unique key that you can distribute to clients who are executing API Gateway `Method` resources that require an API key. To specify which API key clients must use, map the API key with the `RestApi` and `Stage` resources that include the methods that require a key.
   */
  export type ApiKeyResourceType = {
    /**
     * Read-only property
     */
    APIKeyId?: string;

    CustomerId?: string;

    Description?: string;

    /**
     * Default: false
     */
    Enabled?: boolean;

    /**
     * Create-only property
     */
    GenerateDistinctId?: boolean;

    /**
     * A name for the API key. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the API key name. For more information, see Name Type.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * Create-only property
     */
    Name?: string;

    StageKeys?: StageKeyType[];

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Value?: string;
  };
}
