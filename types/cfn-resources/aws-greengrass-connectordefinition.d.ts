/**
 * TypeScript definitions for AWS::Greengrass::ConnectorDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::ConnectorDefinition
 */
export namespace AWS_Greengrass_ConnectorDefinition {
  export type ConnectorDefinitionVersionType = {
    Connectors: ConnectorType[];
  };

  export type ConnectorType = {
    ConnectorArn: string;

    Parameters?: Record<string, any>;

    Id: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::ConnectorDefinition
   */
  export type ConnectorDefinitionResourceType = {
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
    InitialVersion?: ConnectorDefinitionVersionType;

    Tags?: Record<string, any>;
  };
}
