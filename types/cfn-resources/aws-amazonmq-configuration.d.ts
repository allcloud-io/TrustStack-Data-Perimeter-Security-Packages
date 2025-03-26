/**
 * TypeScript definitions for AWS::AmazonMQ::Configuration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AmazonMQ::Configuration
 */
export namespace AWS_AmazonMQ_Configuration {
  export type TagsEntryType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::AmazonMQ::Configuration
   */
  export type ConfigurationResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the Amazon MQ configuration.
     * Read-only property
     */
    Arn?: string;

    /**
     * The authentication strategy associated with the configuration. The default is SIMPLE.
     * Create-only property
     */
    AuthenticationStrategy?: string;

    /**
     * The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.
     * Create-only property
     */
    EngineType: string;

    /**
     * The version of the broker engine.
     * Create-only property
     */
    EngineVersion?: string;

    /**
     * The base64-encoded XML configuration.
     */
    Data?: string;

    /**
     * The description of the configuration.
     */
    Description?: string;

    /**
     * The ID of the Amazon MQ configuration.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the configuration.
     * Create-only property
     */
    Name: string;

    /**
     * The revision number of the configuration.
     * Read-only property
     */
    Revision?: string;

    /**
     * Create tags when creating the configuration.
     */
    Tags?: TagsEntryType[];
  };
}
