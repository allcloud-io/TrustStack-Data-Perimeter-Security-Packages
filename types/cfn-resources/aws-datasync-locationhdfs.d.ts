/**
 * TypeScript definitions for AWS::DataSync::LocationHDFS
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationHDFS.
 */
export namespace AWS_DataSync_LocationHDFS {
  /**
   * HDFS Name Node IP and port information.
   */
  export type NameNodeType = {
    /**
     * The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster.
     */
    Hostname: string;

    /**
     * The port on which the Name Node is listening on for client requests.
     */
    Port: number;
  };

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
   * Configuration information for RPC Protection and Data Transfer Protection. These parameters can be set to AUTHENTICATION, INTEGRITY, or PRIVACY. The default value is PRIVACY.
   */
  export type QopConfigurationType = {
    /**
     * Configuration for RPC Protection.
     */
    RpcProtection?: string;

    /**
     * Configuration for Data Transfer Protection.
     */
    DataTransferProtection?: string;
  };

  /**
   * Resource schema for AWS::DataSync::LocationHDFS.
   */
  export type LocationHDFSResourceType = {
    /**
     * An array of Name Node(s) of the HDFS location.
     */
    NameNodes: NameNodeType[];

    /**
     * Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.
     */
    BlockSize?: number;

    /**
     * Number of copies of each block that exists inside the HDFS cluster.
     * Default: 3
     */
    ReplicationFactor?: number;

    /**
     * The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.
     */
    KmsKeyProviderUri?: string;

    QopConfiguration?: QopConfigurationType;

    /**
     * The authentication mode used to determine identity of user.
     */
    AuthenticationType: string;

    /**
     * The user name that has read and write permissions on the specified HDFS cluster.
     */
    SimpleUser?: string;

    /**
     * The unique identity, or principal, to which Kerberos can assign tickets.
     */
    KerberosPrincipal?: string;

    /**
     * The Base64 string representation of the Keytab file.
     */
    KerberosKeytab?: string;

    /**
     * The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.
     */
    KerberosKrb5Conf?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * ARN(s) of the agent(s) to use for an HDFS location.
     */
    AgentArns: string[];

    /**
     * The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.
     */
    Subdirectory?: string;

    /**
     * The Amazon Resource Name (ARN) of the HDFS location.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the HDFS location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
