/**
 * TypeScript definitions for AWS::DataSync::StorageSystem
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::StorageSystem.
 */
export namespace AWS_DataSync_StorageSystem {
  /**
   * The server name and network port required to connect with the management interface of the on-premises storage system.
   */
  export type ServerConfigurationType = {
    /**
     * The domain name or IP address of the storage system's management interface.
     */
    ServerHostname: string;

    /**
     * The network port needed to access the system's management interface
     */
    ServerPort?: number;
  };

  /**
   * The username and password for accessing your on-premises storage system's management interface.
   */
  export type ServerCredentialsType = {
    /**
     * The username for your storage system's management interface.
     */
    Username: string;

    /**
     * The password for your storage system's management interface
     */
    Password: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key for an AWS resource tag.
     */
    Key: string;

    /**
     * The value for an AWS resource tag.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::DataSync::StorageSystem.
   */
  export type StorageSystemResourceType = {
    ServerConfiguration: ServerConfigurationType;

    ServerCredentials?: ServerCredentialsType;

    /**
     * The ARN of a secret stored by AWS Secrets Manager.
     * Read-only property
     */
    SecretsManagerArn?: string;

    /**
     * The type of on-premises storage system that DataSync Discovery will analyze.
     */
    SystemType: string;

    /**
     * The ARN of the DataSync agent that connects to and reads from the on-premises storage system's management interface.
     */
    AgentArns: string[];

    /**
     * The ARN of the Amazon CloudWatch log group used to monitor and log discovery job events.
     */
    CloudWatchLogGroupArn?: string;

    /**
     * A familiar name for the on-premises storage system.
     */
    Name?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The ARN of the on-premises storage system added to DataSync Discovery.
     * Read-only property
     */
    StorageSystemArn?: string;

    /**
     * Indicates whether the DataSync agent can access the on-premises storage system.
     * Read-only property
     */
    ConnectivityStatus?: string;
  };
}
