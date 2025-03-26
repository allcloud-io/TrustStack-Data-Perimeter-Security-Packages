/**
 * TypeScript definitions for AWS::DataSync::LocationSMB
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationSMB.
 */
export namespace AWS_DataSync_LocationSMB {
  /**
   * The mount options used by DataSync to access the SMB server.
   */
  export type MountOptionsType = {
    /**
     * The specific SMB version that you want DataSync to use to mount your SMB share.
     */
    Version?: string;
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
   * Resource schema for AWS::DataSync::LocationSMB.
   */
  export type LocationSMBResourceType = {
    /**
     * The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
     */
    AgentArns: string[];

    /**
     * The name of the Windows domain that the SMB server belongs to.
     */
    Domain?: string;

    /**
     * Default: {"Version":"AUTOMATIC"}
     */
    MountOptions?: MountOptionsType;

    /**
     * The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
     */
    Password?: string;

    /**
     * The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.
     */
    ServerHostname?: string;

    /**
     * The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination
     */
    Subdirectory?: string;

    /**
     * The user who can mount the share, has the permissions to access files and folders in the SMB share.
     */
    User?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the SMB location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the SMB location that was described.
     * Read-only property
     */
    LocationUri?: string;

    /**
     * The authentication mode used to determine identity of user.
     */
    AuthenticationType?: string;

    /**
     * Specifies the IPv4 addresses for the DNS servers that your SMB file server belongs to. This parameter applies only if AuthenticationType is set to KERBEROS. If you have multiple domains in your environment, configuring this parameter makes sure that DataSync connects to the right SMB file server.
     * Default: null
     */
    DnsIpAddresses?: string[];

    /**
     * Specifies a service principal name (SPN), which is an identity in your Kerberos realm that has permission to access the files, folders, and file metadata in your SMB file server. SPNs are case sensitive and must include a prepended cifs/. For example, an SPN might look like cifs/kerberosuser@EXAMPLE.COM. Your task execution will fail if the SPN that you provide for this parameter doesn't match exactly what's in your keytab or krb5.conf files.
     */
    KerberosPrincipal?: string;

    /**
     * The Base64 string representation of the Keytab file. Specifies your Kerberos key table (keytab) file, which includes mappings between your service principal name (SPN) and encryption keys. To avoid task execution errors, make sure that the SPN in the keytab file matches exactly what you specify for KerberosPrincipal and in your krb5.conf file.
     */
    KerberosKeytab?: string;

    /**
     * The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket. Specifies a Kerberos configuration file (krb5.conf) that defines your Kerberos realm configuration. To avoid task execution errors, make sure that the service principal name (SPN) in the krb5.conf file matches exactly what you specify for KerberosPrincipal and in your keytab file.
     */
    KerberosKrb5Conf?: string;
  };
}
