/**
 * TypeScript definitions for AWS::Greengrass::LoggerDefinitionVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::LoggerDefinitionVersion
 */
export namespace AWS_Greengrass_LoggerDefinitionVersion {
  export type LoggerType = {
    Space?: number;

    Type: string;

    Level: string;

    Id: string;

    Component: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::LoggerDefinitionVersion
   */
  export type LoggerDefinitionVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    LoggerDefinitionId: string;

    /**
     * Create-only property
     */
    Loggers: LoggerType[];
  };
}
