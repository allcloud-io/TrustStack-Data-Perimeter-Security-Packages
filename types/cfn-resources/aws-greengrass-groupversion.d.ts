/**
 * TypeScript definitions for AWS::Greengrass::GroupVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Greengrass::GroupVersion
 */
export namespace AWS_Greengrass_GroupVersion {
  /**
   * Resource Type definition for AWS::Greengrass::GroupVersion
   */
  export type GroupVersionResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    LoggerDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    DeviceDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    FunctionDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    CoreDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    ResourceDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    ConnectorDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    SubscriptionDefinitionVersionArn?: string;

    /**
     * Create-only property
     */
    GroupId: string;
  };
}
