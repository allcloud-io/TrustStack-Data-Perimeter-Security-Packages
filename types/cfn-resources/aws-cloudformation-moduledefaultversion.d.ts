/**
 * TypeScript definitions for AWS::CloudFormation::ModuleDefaultVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * A module that has been registered in the CloudFormation registry as the default version
 */
export namespace AWS_CloudFormation_ModuleDefaultVersion {
  /**
   * A module that has been registered in the CloudFormation registry as the default version
   */
  export type ModuleDefaultVersionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the module version to set as the default version.
     * Create-only property
     */
    Arn?: string;

    /**
     * The name of a module existing in the registry.
     * Create-only property
     */
    ModuleName?: string;

    /**
     * The ID of an existing version of the named module to set as the default.
     * Create-only property
     */
    VersionId?: string;
  };
}
