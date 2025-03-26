/**
 * TypeScript definitions for AWS::Greengrass::DeviceDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::DeviceDefinition
 */
export namespace AWS_Greengrass_DeviceDefinition {
  export type DeviceDefinitionVersionType = {
    Devices: DeviceType[];
  };

  export type DeviceType = {
    SyncShadow?: boolean;

    ThingArn: string;

    Id: string;

    CertificateArn: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::DeviceDefinition
   */
  export type DeviceDefinitionResourceType = {
    /**
     * Read-only property
     */
    LatestVersionArn?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Name: string;

    /**
     * Create-only property
     */
    InitialVersion?: DeviceDefinitionVersionType;

    Tags?: Record<string, any>;
  };
}
