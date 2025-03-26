/**
 * TypeScript definitions for AWS::OpsWorks::Volume
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::OpsWorks::Volume
 */
export namespace AWS_OpsWorks_Volume {
  /**
   * Resource Type definition for AWS::OpsWorks::Volume
   */
  export type VolumeResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Ec2VolumeId: string;

    MountPoint?: string;

    Name?: string;

    /**
     * Create-only property
     */
    StackId: string;
  };
}
