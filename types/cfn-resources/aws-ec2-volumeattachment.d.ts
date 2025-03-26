/**
 * TypeScript definitions for AWS::EC2::VolumeAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
 * Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.
 * If an Amazon EBS volume is the root device of an instance, it cannot be detached while the instance is in the "running" state. To detach the root volume, stop the instance first.
 * If the root volume is detached from an instance with an MKT product code, then the product codes from that volume are no longer associated with the instance.
 */
export namespace AWS_EC2_VolumeAttachment {
  /**
   * The ID of the Amazon EBS volume
   */
  export type VolumeIdType = {};

  export type IdType = {};

  /**
   * The ID of the instance to which the volume attaches
   */
  export type InstanceIdType = {};

  /**
   * The device name
   */
  export type DeviceType = {};

  /**
   * Attaches an Amazon EBS volume to a running instance and exposes it to the instance with the specified device name.
   * Before this resource can be deleted (and therefore the volume detached), you must first unmount the volume in the instance. Failure to do so results in the volume being stuck in the busy state while it is trying to detach, which could possibly damage the file system or the data it contains.
   * If an Amazon EBS volume is the root device of an instance, it cannot be detached while the instance is in the "running" state. To detach the root volume, stop the instance first.
   * If the root volume is detached from an instance with an MKT product code, then the product codes from that volume are no longer associated with the instance.
   */
  export type VolumeAttachmentResourceType = {
    /**
     * The ID of the Amazon EBS volume. The volume and instance must be within the same Availability Zone. This value can be a reference to an AWS::EC2::Volume resource, or it can be the volume ID of an existing Amazon EBS volume.
     * Create-only property
     */
    VolumeId: VolumeIdType;

    /**
     * The ID of the instance to which the volume attaches. This value can be a reference to an AWS::EC2::Instance resource, or it can be the physical ID of an existing EC2 instance.
     * Create-only property
     */
    InstanceId: InstanceIdType;

    /**
     * The device name (for example, `/dev/sdh` or `xvdh`).
     * Create-only property
     */
    Device?: DeviceType;
  };
}
