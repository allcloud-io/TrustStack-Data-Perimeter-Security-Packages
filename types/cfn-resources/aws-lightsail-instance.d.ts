/**
 * TypeScript definitions for AWS::Lightsail::Instance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::Instance
 */
export namespace AWS_Lightsail_Instance {
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
    Value?: string;
  };

  /**
   * IPv6 Cidrs
   */
  export type ipv6CidrsType = {};

  /**
   * cidrs
   */
  export type cidrsType = {};

  /**
   * cidr List Aliases
   */
  export type cidrListAliasesType = {};

  /**
   * An object that represents additional parameters when enabling or modifying the automatic snapshot add-on
   */
  export type AutoSnapshotAddOnType = {
    /**
     * The daily time when an automatic snapshot will be created.
     */
    SnapshotTimeOfDay?: string;
  };

  /**
   * A addon associate with a resource.
   */
  export type AddOnType = {
    /**
     * The add-on type
     */
    AddOnType: string;

    /**
     * Status of the Addon
     */
    Status?: string;

    AutoSnapshotAddOnRequest?: AutoSnapshotAddOnType;
  };

  /**
   * Location of a resource.
   */
  export type LocationType = {
    /**
     * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
     */
    AvailabilityZone?: string;

    /**
     * The Region Name in which to create your instance.
     */
    RegionName?: string;
  };

  /**
   * Disk associated with the Instance.
   */
  export type DiskType = {
    /**
     * The names to use for your new Lightsail disk.
     */
    DiskName: string;

    /**
     * Size of the disk attached to the Instance.
     */
    SizeInGb?: string;

    /**
     * Is the Attached disk is the system disk of the Instance.
     */
    IsSystemDisk?: boolean;

    /**
     * IOPS of disk.
     */
    IOPS?: number;

    /**
     * Path of the disk attached to the instance.
     */
    Path: string;

    /**
     * Instance attached to the disk.
     */
    AttachedTo?: string;

    /**
     * Attachment state of the disk.
     */
    AttachmentState?: string;
  };

  /**
   * Hardware of the Instance.
   */
  export type HardwareType = {
    /**
     * CPU count of the Instance.
     */
    CpuCount?: number;

    /**
     * RAM Size of the Instance.
     */
    RamSizeInGb?: number;

    /**
     * Disks attached to the Instance.
     */
    Disks?: DiskType[];
  };

  /**
   * Current State of the Instance.
   */
  export type StateType = {
    /**
     * Status code of the Instance.
     */
    Code?: number;

    /**
     * Status code of the Instance.
     */
    Name?: string;
  };

  /**
   * Port of the Instance.
   */
  export type PortType = {
    /**
     * From Port of the Instance.
     */
    FromPort?: number;

    /**
     * To Port of the Instance.
     */
    ToPort?: number;

    /**
     * Port Protocol of the Instance.
     */
    Protocol?: string;

    /**
     * Access From Protocol of the Instance.
     */
    AccessFrom?: string;

    /**
     * Access Type Protocol of the Instance.
     */
    AccessType?: string;

    /**
     * CommonName for Protocol of the Instance.
     */
    CommonName?: string;

    /**
     * Access Direction for Protocol of the Instance(inbound/outbound).
     */
    AccessDirection?: string;

    Ipv6Cidrs?: ipv6CidrsType;

    CidrListAliases?: cidrListAliasesType;

    Cidrs?: cidrsType;
  };

  /**
   * Monthly Transfer of the Instance.
   */
  export type MonthlyTransferType = {
    /**
     * GbPerMonthAllocated of the Instance.
     */
    GbPerMonthAllocated?: string;
  };

  /**
   * Networking of the Instance.
   */
  export type NetworkingType = {
    /**
     * Ports to the Instance.
     */
    Ports: PortType[];

    MonthlyTransfer?: MonthlyTransferType;
  };

  /**
   * Resource Type definition for AWS::Lightsail::Instance
   */
  export type InstanceResourceType = {
    /**
     * Support code to help identify any issues
     * Read-only property
     */
    SupportCode?: string;

    /**
     * Resource type of Lightsail instance.
     * Read-only property
     */
    ResourceType?: string;

    /**
     * Is the IP Address of the Instance is the static IP
     * Read-only property
     */
    IsStaticIp?: boolean;

    /**
     * Private IP Address of the Instance
     * Read-only property
     */
    PrivateIpAddress?: string;

    /**
     * Public IP Address of the Instance
     * Read-only property
     */
    PublicIpAddress?: string;

    /**
     * IPv6 addresses of the instance
     * Read-only property
     */
    Ipv6Addresses?: string[];

    Location?: LocationType;

    Hardware?: HardwareType;

    State?: StateType;

    Networking?: NetworkingType;

    /**
     * Username of the  Lightsail instance.
     * Read-only property
     */
    UserName?: string;

    /**
     * SSH Key Name of the  Lightsail instance.
     * Read-only property
     */
    SshKeyName?: string;

    /**
     * The names to use for your new Lightsail instance.
     * Create-only property
     */
    InstanceName: string;

    /**
     * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
     * Create-only property
     */
    AvailabilityZone?: string;

    /**
     * The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).
     * Create-only property
     */
    BundleId: string;

    /**
     * The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).
     * Create-only property
     */
    BlueprintId: string;

    /**
     * An array of objects representing the add-ons to enable for the new instance.
     */
    AddOns?: AddOnType[];

    /**
     * A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.
     */
    UserData?: string;

    /**
     * The name of your key pair.
     */
    KeyPairName?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    InstanceArn?: string;
  };
}
