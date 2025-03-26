/**
 * TypeScript definitions for AWS::Route53Profiles::ProfileAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53Profiles::ProfileAssociation
 */
export namespace AWS_Route53Profiles_ProfileAssociation {
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
   * Resource Type definition for AWS::Route53Profiles::ProfileAssociation
   */
  export type ProfileAssociationResourceType = {
    /**
     * The resource that you associated the  profile with.
     * Create-only property
     */
    ResourceId: string;

    /**
     * The ID of the  profile that you associated with the resource that is specified by ResourceId.
     * Create-only property
     */
    ProfileId: string;

    /**
     * Primary Identifier for  Profile Association
     * Read-only property
     */
    Id?: string;

    /**
     * The name of an association between a  Profile and a VPC.
     * Create-only property
     */
    Name: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the profile association.
     */
    Arn?: string;
  };
}
