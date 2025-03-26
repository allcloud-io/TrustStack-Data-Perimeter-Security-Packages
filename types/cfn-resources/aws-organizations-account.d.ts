/**
 * TypeScript definitions for AWS::Organizations::Account
 * Generated from CloudFormation Resource Schema
 */

/**
 * You can use AWS::Organizations::Account to manage accounts in organization.
 */
export namespace AWS_Organizations_Account {
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
   * You can use AWS::Organizations::Account to manage accounts in organization.
   */
  export type AccountResourceType = {
    /**
     * The friendly name of the member account.
     */
    AccountName: string;

    /**
     * The email address of the owner to assign to the new member account.
     */
    Email: string;

    /**
     * The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is OrganizationAccountAccessRole if not specified.
     * Default: "OrganizationAccountAccessRole"
     */
    RoleName?: string;

    /**
     * List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.
     */
    ParentIds?: string[];

    /**
     * A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value.
     */
    Tags?: TagType[];

    /**
     * If the account was created successfully, the unique identifier (ID) of the new account.
     * Read-only property
     */
    AccountId?: string;

    /**
     * The Amazon Resource Name (ARN) of the account.
     * Read-only property
     */
    Arn?: string;

    /**
     * The method by which the account joined the organization.
     * Read-only property
     */
    JoinedMethod?: string;

    /**
     * The date the account became a part of the organization.
     * Read-only property
     */
    JoinedTimestamp?: string;

    /**
     * The status of the account in the organization.
     * Read-only property
     */
    Status?: string;
  };
}
