/**
 * TypeScript definitions for AWS::CloudFormation::ResourceDefaultVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * The default version of a resource that has been registered in the CloudFormation Registry.
 */
export namespace AWS_CloudFormation_ResourceDefaultVersion {
  /**
   * The default version of a resource that has been registered in the CloudFormation Registry.
   */
  export type ResourceDefaultVersionResourceType = {
    /**
     * The ID of an existing version of the resource to set as the default.
     */
    VersionId?: string;

    /**
     * The name of the type being registered.
     * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     */
    TypeName?: string;

    /**
     * The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a ResourceDefaultVersion
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of the type version.
     */
    TypeVersionArn?: string;
  };
}
