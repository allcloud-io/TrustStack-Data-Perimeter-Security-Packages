/**
 * TypeScript definitions for AWS::KafkaConnect::WorkerConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * The configuration of the workers, which are the processes that run the connector logic.
 */
export namespace AWS_KafkaConnect_WorkerConfiguration {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The configuration of the workers, which are the processes that run the connector logic.
   */
  export type WorkerConfigurationResourceType = {
    /**
     * The name of the worker configuration.
     * Create-only property
     */
    Name: string;

    /**
     * A summary description of the worker configuration.
     * Create-only property
     */
    Description?: string;

    /**
     * The Amazon Resource Name (ARN) of the custom configuration.
     * Read-only property
     */
    WorkerConfigurationArn?: string;

    /**
     * Base64 encoded contents of connect-distributed.properties file.
     * Create-only property
     */
    PropertiesFileContent: string;

    /**
     * The description of a revision of the worker configuration.
     * Read-only property
     */
    Revision?: number;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
