/**
 * TypeScript definitions for AWS::CodeStarConnections::Connection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for AWS::CodeStarConnections::Connection resource which can be used to connect external source providers with AWS CodePipeline
 */
export namespace AWS_CodeStarConnections_Connection {
  /**
   * A key-value pair to associate with a resource.
   */
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
   * Schema for AWS::CodeStarConnections::Connection resource which can be used to connect external source providers with AWS CodePipeline
   */
  export type ConnectionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.
     * Read-only property
     */
    ConnectionArn?: string;

    /**
     * The name of the connection. Connection names must be unique in an AWS user account.
     * Create-only property
     */
    ConnectionName: string;

    /**
     * The current status of the connection.
     * Read-only property
     */
    ConnectionStatus?: string;

    /**
     * The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
     * Read-only property
     */
    OwnerAccountId?: string;

    /**
     * The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.
     * Create-only property
     */
    ProviderType?: string;

    /**
     * The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.
     * Create-only property
     */
    HostArn?: string;

    /**
     * Specifies the tags applied to a connection.
     */
    Tags?: TagType[];
  };
}
