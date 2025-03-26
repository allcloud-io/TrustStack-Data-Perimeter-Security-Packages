/**
 * TypeScript definitions for AWS::Greengrass::DeviceDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
 */
export namespace AWS_Greengrass_DeviceDefinitionVersion {
  export type DeviceType = {
    SyncShadow?: boolean;

    ThingArn: string;

    Id: string;

    CertificateArn: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::DeviceDefinitionVersion
   */
  export type DeviceDefinitionVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    DeviceDefinitionId: string;

    /**
     * Create-only property
     */
    Devices: DeviceType[];
  };
}
