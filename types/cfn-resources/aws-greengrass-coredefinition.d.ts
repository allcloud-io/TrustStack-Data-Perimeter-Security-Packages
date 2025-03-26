/**
 * TypeScript definitions for AWS::Greengrass::CoreDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::CoreDefinition
 */
export namespace AWS_Greengrass_CoreDefinition {
  export type CoreDefinitionVersionType = {
    Cores: CoreType[];
  };

  export type CoreType = {
    SyncShadow?: boolean;

    ThingArn: string;

    Id: string;

    CertificateArn: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::CoreDefinition
   */
  export type CoreDefinitionResourceType = {
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
    InitialVersion?: CoreDefinitionVersionType;

    Tags?: Record<string, any>;
  };
}
