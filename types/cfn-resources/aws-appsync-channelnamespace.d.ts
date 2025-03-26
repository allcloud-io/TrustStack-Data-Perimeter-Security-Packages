/**
 * TypeScript definitions for AWS::AppSync::ChannelNamespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AppSync ChannelNamespace
 */
export namespace AWS_AppSync_ChannelNamespace {
  export type AuthModesType = {};

  /**
   * String of APPSYNC_JS code to be used by the handlers.
   */
  export type CodeType = {};

  /**
   * Namespace indentifier.
   */
  export type NamespaceType = {};

  /**
   * The Amazon Resource Name (ARN) for the Channel Namespace.
   */
  export type ChannelNamespaceArnType = {};

  /**
   * An arbitrary set of tags (key-value pairs) for this AppSync API.
   */
  export type TagType = {
    /**
     * A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
     */
    Value: string;

    /**
     * A string used to identify this tag. You can specify a maximum of 128 characters for a tag key.
     */
    Key: string;
  };

  /**
   * An auth mode.
   */
  export type AuthModeType = {
    AuthType?: AuthenticationTypeType;
  };

  /**
   * An arbitrary set of tags (key-value pairs) for this AppSync API.
   */
  export type TagsType = {};

  /**
   * Security configuration for your AppSync API.
   */
  export type AuthenticationTypeType = {};

  /**
   * Resource schema for AppSync ChannelNamespace
   */
  export type ChannelNamespaceResourceType = {
    /**
     * List of AuthModes supported for Subscribe operations.
     */
    SubscribeAuthModes?: AuthModesType;

    /**
     * The Amazon S3 endpoint where the code is located.
     */
    CodeS3Location?: string;

    /**
     * List of AuthModes supported for Publish operations.
     */
    PublishAuthModes?: AuthModesType;

    CodeHandlers?: CodeType;

    /**
     * AppSync Api Id that this Channel Namespace belongs to.
     * Create-only property
     */
    ApiId: string;

    /**
     * Read-only property
     */
    ChannelNamespaceArn?: ChannelNamespaceArnType;

    Tags?: TagsType;

    /**
     * Create-only property
     */
    Name: NamespaceType;
  };
}
