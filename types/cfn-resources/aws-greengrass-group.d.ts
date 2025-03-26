/**
 * TypeScript definitions for AWS::Greengrass::Group
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::Group
 */
export namespace AWS_Greengrass_Group {
  export type GroupVersionType = {
    LoggerDefinitionVersionArn?: string;

    DeviceDefinitionVersionArn?: string;

    FunctionDefinitionVersionArn?: string;

    CoreDefinitionVersionArn?: string;

    ResourceDefinitionVersionArn?: string;

    ConnectorDefinitionVersionArn?: string;

    SubscriptionDefinitionVersionArn?: string;
  };

  /**
   * Resource Type definition for AWS::Greengrass::Group
   */
  export type GroupResourceType = {
    /**
     * Read-only property
     */
    RoleAttachedAt?: string;

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

    RoleArn?: string;

    Name: string;

    /**
     * Create-only property
     */
    InitialVersion?: GroupVersionType;

    Tags?: Record<string, any>;
  };
}
