/**
 * TypeScript definitions for AWS::Route53Profiles::ProfileResourceAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53Profiles::ProfileResourceAssociation
 */
export namespace AWS_Route53Profiles_ProfileResourceAssociation {
  /**
   * Resource Type definition for AWS::Route53Profiles::ProfileResourceAssociation
   */
  export type ProfileResourceAssociationResourceType = {
    /**
     * The ID of the  profile that you associated the resource to that is specified by ResourceArn.
     * Create-only property
     */
    ProfileId: string;

    /**
     * Primary Identifier for  Profile Resource Association
     * Read-only property
     */
    Id?: string;

    /**
     * The name of an association between the  Profile and resource.
     * Create-only property
     */
    Name: string;

    /**
     * The arn of the resource that you associated to the  Profile.
     * Create-only property
     */
    ResourceArn: string;

    /**
     * A JSON-formatted string with key-value pairs specifying the properties of the associated resource.
     */
    ResourceProperties?: string;

    /**
     * The type of the resource associated to the  Profile.
     * Read-only property
     */
    ResourceType?: string;
  };
}
