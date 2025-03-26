/**
 * TypeScript definitions for AWS::EFS::MountTarget
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::EFS::MountTarget` resource is an Amazon EFS resource that creates a mount target for an EFS file system. You can then mount the file system on Amazon EC2 instances or other resources by using the mount target.
 */
export namespace AWS_EFS_MountTarget {
  /**
   * The `AWS::EFS::MountTarget` resource is an Amazon EFS resource that creates a mount target for an EFS file system. You can then mount the file system on Amazon EC2 instances or other resources by using the mount target.
   */
  export type MountTargetResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Valid IPv4 address within the address range of the specified subnet.
     * Create-only property
     */
    IpAddress?: string;

    /**
     * The ID of the file system for which to create the mount target.
     * Create-only property
     */
    FileSystemId: string;

    /**
     * VPC security group IDs, of the form `sg-xxxxxxxx`. These must be for the same VPC as the subnet specified. The maximum number of security groups depends on account quota. For more information, see Amazon VPC Quotas in the *Amazon VPC User Guide* (see the *Security Groups* table).
     */
    SecurityGroups: string[];

    /**
     * The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone.
     * Create-only property
     */
    SubnetId: string;
  };
}
