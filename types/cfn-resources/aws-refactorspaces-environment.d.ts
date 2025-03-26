/**
 * TypeScript definitions for AWS::RefactorSpaces::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RefactorSpaces::Environment Resource Type
 */
export namespace AWS_RefactorSpaces_Environment {
  export type NetworkFabricTypeType = {};

  /**
   * A label for tagging Environment resource
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * Definition of AWS::RefactorSpaces::Environment Resource Type
   */
  export type EnvironmentResourceType = {
    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Read-only property
     */
    EnvironmentIdentifier?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Create-only property
     */
    NetworkFabricType?: NetworkFabricTypeType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    TransitGatewayId?: string;

    /**
     * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
     */
    Tags?: TagType[];
  };
}
