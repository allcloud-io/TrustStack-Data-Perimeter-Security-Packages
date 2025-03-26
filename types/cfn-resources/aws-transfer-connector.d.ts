/**
 * TypeScript definitions for AWS::Transfer::Connector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Transfer::Connector
 */
export namespace AWS_Transfer_Connector {
  /**
   * Creates a key-value pair for a specific resource.
   */
  export type TagType = {
    /**
     * The name assigned to the tag that you create.
     */
    Key: string;

    /**
     * Contains one or more values that you assigned to the key name you create.
     */
    Value: string;
  };

  /**
   * The public host key for the external server to which you are connecting.
   */
  export type SftpConnectorTrustedHostKeyType = {};

  /**
   * Resource Type definition for AWS::Transfer::Connector
   */
  export type ConnectorResourceType = {
    /**
     * Specifies the access role for the connector.
     */
    AccessRole: string;

    /**
     * Configuration for an AS2 connector.
     */
    As2Config?: Record<string, any>;

    /**
     * Configuration for an SFTP connector.
     */
    SftpConfig?: Record<string, any>;

    /**
     * Specifies the unique Amazon Resource Name (ARN) for the connector.
     * Read-only property
     */
    Arn?: string;

    /**
     * A unique identifier for the connector.
     * Read-only property
     */
    ConnectorId?: string;

    /**
     * Specifies the logging role for the connector.
     */
    LoggingRole?: string;

    /**
     * The list of egress IP addresses of this connector. These IP addresses are assigned automatically when you create the connector.
     * Read-only property
     */
    ServiceManagedEgressIpAddresses?: string[];

    /**
     * Key-value pairs that can be used to group and search for connectors. Tags are metadata attached to connectors for any purpose.
     */
    Tags?: TagType[];

    /**
     * URL for Connector
     */
    Url: string;

    /**
     * Security policy for SFTP Connector
     */
    SecurityPolicyName?: string;
  };
}
