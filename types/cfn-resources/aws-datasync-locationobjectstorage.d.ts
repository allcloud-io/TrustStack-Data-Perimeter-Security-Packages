/**
 * TypeScript definitions for AWS::DataSync::LocationObjectStorage
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationObjectStorage.
 */
export namespace AWS_DataSync_LocationObjectStorage {
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
   * Resource schema for AWS::DataSync::LocationObjectStorage.
   */
  export type LocationObjectStorageResourceType = {
    /**
     * Optional. The access key is used if credentials are required to access the self-managed object storage server.
     */
    AccessKey?: string;

    /**
     * The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
     */
    AgentArns: string[];

    /**
     * The name of the bucket on the self-managed object storage server.
     * Create-only property
     */
    BucketName?: string;

    /**
     * Optional. The secret key is used if credentials are required to access the self-managed object storage server.
     */
    SecretKey?: string;

    /**
     * X.509 PEM content containing a certificate authority or chain to trust.
     */
    ServerCertificate?: string;

    /**
     * The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.
     */
    ServerHostname?: string;

    /**
     * The port that your self-managed server accepts inbound network traffic on.
     */
    ServerPort?: number;

    /**
     * The protocol that the object storage server uses to communicate.
     */
    ServerProtocol?: string;

    /**
     * The subdirectory in the self-managed object storage server that is used to read data from.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the object storage location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
