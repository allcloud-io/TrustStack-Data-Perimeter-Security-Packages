/**
 * TypeScript definitions for AWS::Greengrass::ConnectorDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinitionVersion
 */
export namespace AWS_Greengrass_ConnectorDefinitionVersion {
  export type ConnectorType = {
    ConnectorArn: string;

    Parameters?: Record<string, any>;

    Id: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::ConnectorDefinitionVersion
   */
  export type ConnectorDefinitionVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Connectors: ConnectorType[];

    /**
     * Create-only property
     */
    ConnectorDefinitionId: string;
  };
}
