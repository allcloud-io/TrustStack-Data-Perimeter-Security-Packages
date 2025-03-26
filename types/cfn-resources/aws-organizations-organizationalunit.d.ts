/**
 * TypeScript definitions for AWS::Organizations::OrganizationalUnit
 * Generated from CloudFormation Resource Schema
 */

/**
 * You can use organizational units (OUs) to group accounts together to administer as a single unit. This greatly simplifies the management of your accounts. For example, you can attach a policy-based control to an OU, and all accounts within the OU automatically inherit the policy. You can create multiple OUs within a single organization, and you can create OUs within other OUs. Each OU can contain multiple accounts, and you can move accounts from one OU to another. However, OU names must be unique within a parent OU or root.
 */
export namespace AWS_Organizations_OrganizationalUnit {
  /**
   * A custom key-value pair associated with a resource within your organization.
   */
  export type TagType = {
    /**
     * The key identifier, or name, of the tag.
     */
    Key: string;

    /**
     * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
     */
    Value: string;
  };

  /**
   * You can use organizational units (OUs) to group accounts together to administer as a single unit. This greatly simplifies the management of your accounts. For example, you can attach a policy-based control to an OU, and all accounts within the OU automatically inherit the policy. You can create multiple OUs within a single organization, and you can create OUs within other OUs. Each OU can contain multiple accounts, and you can move accounts from one OU to another. However, OU names must be unique within a parent OU or root.
   */
  export type OrganizationalUnitResourceType = {
    /**
     * The Amazon Resource Name (ARN) of this OU.
     * Read-only property
     */
    Arn?: string;

    /**
     * The unique identifier (ID) associated with this OU.
     * Read-only property
     */
    Id?: string;

    /**
     * The friendly name of this OU.
     */
    Name: string;

    /**
     * The unique identifier (ID) of the parent root or OU that you want to create the new OU in.
     * Create-only property
     */
    ParentId: string;

    /**
     * A list of tags that you want to attach to the newly created OU.
     */
    Tags?: TagType[];
  };
}
