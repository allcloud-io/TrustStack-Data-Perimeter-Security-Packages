/**
 * TypeScript definitions for AWS::M2::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents an application that runs on an AWS Mainframe Modernization Environment
 */
export namespace AWS_M2_Application {
  export type DefinitionType = {};

  export type EngineTypeType = {};

  export type TagMapType = {};

  /**
   * Represents an application that runs on an AWS Mainframe Modernization Environment
   */
  export type ApplicationResourceType = {
    /**
     * Read-only property
     */
    ApplicationArn?: string;

    /**
     * Read-only property
     */
    ApplicationId?: string;

    Definition?: DefinitionType;

    Description?: string;

    /**
     * Create-only property
     */
    EngineType: EngineTypeType;

    /**
     * The ID or the Amazon Resource Name (ARN) of the customer managed KMS Key used for encrypting application-related resources.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    RoleArn?: string;

    Tags?: TagMapType;
  };
}
