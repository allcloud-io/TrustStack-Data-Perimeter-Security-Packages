/**
 * TypeScript definitions for AWS::EC2::NetworkInterfacePermission
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::NetworkInterfacePermission
 */
export namespace AWS_EC2_NetworkInterfacePermission {
  /**
   * Resource Type definition for AWS::EC2::NetworkInterfacePermission
   */
  export type NetworkInterfacePermissionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    AwsAccountId: string;

    /**
     * Create-only property
     */
    NetworkInterfaceId: string;

    /**
     * Create-only property
     */
    Permission: string;
  };
}
