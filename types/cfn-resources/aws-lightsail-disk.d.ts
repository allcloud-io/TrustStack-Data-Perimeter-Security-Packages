/**
 * TypeScript definitions for AWS::Lightsail::Disk
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lightsail::Disk
 */
export namespace AWS_Lightsail_Disk {
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
     * The Availability Zone in which to create your disk. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
     */
    AvailabilityZone?: string;

    /**
     * The Region Name in which to create your disk.
     */
    RegionName?: string;
  };

  /**
   * Resource Type definition for AWS::Lightsail::Disk
   */
  export type DiskResourceType = {
    /**
     * The names to use for your new Lightsail disk.
     * Create-only property
     */
    DiskName: string;

    /**
     * Read-only property
     */
    DiskArn?: string;

    /**
     * Support code to help identify any issues
     * Read-only property
     */
    SupportCode?: string;

    /**
     * The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
     * Create-only property
     */
    AvailabilityZone?: string;

    Location?: LocationType;

    /**
     * Resource type of Lightsail instance.
     * Read-only property
     */
    ResourceType?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * An array of objects representing the add-ons to enable for the new instance.
     */
    AddOns?: AddOnType[];

    /**
     * State of the Lightsail disk
     * Read-only property
     */
    State?: string;

    /**
     * Attachment State of the Lightsail disk
     * Read-only property
     */
    AttachmentState?: string;

    /**
     * Size of the Lightsail disk
     * Create-only property
     */
    SizeInGb: number;

    /**
     * Iops of the Lightsail disk
     * Read-only property
     */
    Iops?: number;

    /**
     * Check is Disk is attached state
     * Read-only property
     */
    IsAttached?: boolean;

    /**
     * Path of the  attached Disk
     * Read-only property
     */
    Path?: string;

    /**
     * Name of the attached Lightsail Instance
     * Read-only property
     */
    AttachedTo?: string;
  };
}
