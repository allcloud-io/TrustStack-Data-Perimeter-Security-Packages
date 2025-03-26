/**
 * TypeScript definitions for AWS::CloudFormation::HookDefaultVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Set a version as default version for a hook in CloudFormation Registry.
 */
export namespace AWS_CloudFormation_HookDefaultVersion {
  /**
   * Set a version as default version for a hook in CloudFormation Registry.
   */
  export type HookDefaultVersionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the type version.
     */
    TypeVersionArn?: string;

    /**
     * The name of the type being registered.
     * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     */
    TypeName?: string;

    /**
     * The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of an existing version of the hook to set as the default.
     */
    VersionId?: string;
  };
}
