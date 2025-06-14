/**
 * TypeScript definitions for AWS::RAM::ResourceShare
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource type definition for AWS::RAM::ResourceShare
 */
export namespace AWS_RAM_ResourceShare {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource type definition for AWS::RAM::ResourceShare
   */
  export type ResourceShareResourceType = {
    /**
     * Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.
     */
    AllowExternalPrincipals?: boolean;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Specifies the name of the resource share.
     */
    Name: string;

    /**
     * Specifies the Amazon Resource Names (ARNs) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
     */
    PermissionArns?: string[];

    /**
     * Specifies the principals to associate with the resource share. The possible values are:
     * - An AWS account ID
     * - An Amazon Resource Name (ARN) of an organization in AWS Organizations
     * - An ARN of an organizational unit (OU) in AWS Organizations
     * - An ARN of an IAM role
     * - An ARN of an IAM user
     */
    Principals?: string[];

    /**
     * Specifies a list of one or more ARNs of the resources to associate with the resource share.
     */
    ResourceArns?: string[];

    /**
     * Specifies from which source accounts the service principal has access to the resources in this resource share.
     */
    Sources?: string[];

    /**
     * Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.
     */
    Tags?: TagType[];
  };
}
