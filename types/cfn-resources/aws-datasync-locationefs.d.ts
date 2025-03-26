/**
 * TypeScript definitions for AWS::DataSync::LocationEFS
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationEFS.
 */
export namespace AWS_DataSync_LocationEFS {
  /**
   * The subnet and security group that DataSync uses to access target EFS file system.
   */
  export type Ec2ConfigType = {
    /**
     * The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
     */
    SecurityGroupArns: string[];

    /**
     * The ARN of the subnet that DataSync uses to access the target EFS file system.
     */
    SubnetArn: string;
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
   * Resource schema for AWS::DataSync::LocationEFS.
   */
  export type LocationEFSResourceType = {
    /**
     * Create-only property
     */
    Ec2Config: Ec2ConfigType;

    /**
     * The Amazon Resource Name (ARN) for the Amazon EFS file system.
     * Create-only property
     */
    EfsFilesystemArn?: string;

    /**
     * The Amazon Resource Name (ARN) for the Amazon EFS Access point that DataSync uses when accessing the EFS file system.
     */
    AccessPointArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the AWS IAM role that the DataSync will assume when mounting the EFS file system.
     */
    FileSystemAccessRoleArn?: string;

    /**
     * Protocol that is used for encrypting the traffic exchanged between the DataSync Agent and the EFS file system.
     */
    InTransitEncryption?: string;

    /**
     * A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the EFS location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
