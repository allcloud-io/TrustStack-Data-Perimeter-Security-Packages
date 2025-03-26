/**
 * TypeScript definitions for AWS::Greengrass::LoggerDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::LoggerDefinition
 */
export namespace AWS_Greengrass_LoggerDefinition {
  export type LoggerDefinitionVersionType = {
    Loggers: LoggerType[];
  };

  export type LoggerType = {
    Space?: number;

    Type: string;

    Level: string;

    Id: string;

    Component: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::LoggerDefinition
   */
  export type LoggerDefinitionResourceType = {
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
    InitialVersion?: LoggerDefinitionVersionType;

    Tags?: Record<string, any>;
  };
}
