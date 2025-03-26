/**
 * TypeScript definitions for AWS::Greengrass::CoreDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::CoreDefinitionVersion
 */
export namespace AWS_Greengrass_CoreDefinitionVersion {
  export type CoreType = {
    SyncShadow?: boolean;

    ThingArn: string;

    Id: string;

    CertificateArn: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::CoreDefinitionVersion
   */
  export type CoreDefinitionVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Cores: CoreType[];

    /**
     * Create-only property
     */
    CoreDefinitionId: string;
  };
}
