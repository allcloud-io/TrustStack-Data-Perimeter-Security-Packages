/**
 * TypeScript definitions for AWS::SecurityHub::DelegatedAdmin
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SecurityHub::DelegatedAdmin` resource designates the delegated ASHlong administrator account for an organization. You must enable the integration between ASH and AOlong before you can designate a delegated ASH administrator. Only the management account for an organization can designate the delegated ASH administrator account. For more information, see Designating the delegated administrator in the *User Guide*.
 * To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.
 * To designate multiple delegated administrators in different organizations and AWS-Regions, we recommend using mappings.
 * Tags aren't supported for this resource.
 */
export namespace AWS_SecurityHub_DelegatedAdmin {
  /**
   * The `AWS::SecurityHub::DelegatedAdmin` resource designates the delegated ASHlong administrator account for an organization. You must enable the integration between ASH and AOlong before you can designate a delegated ASH administrator. Only the management account for an organization can designate the delegated ASH administrator account. For more information, see Designating the delegated administrator in the *User Guide*.
   * To change the delegated administrator account, remove the current delegated administrator account, and then designate the new account.
   * To designate multiple delegated administrators in different organizations and AWS-Regions, we recommend using mappings.
   * Tags aren't supported for this resource.
   */
  export type DelegatedAdminResourceType = {
    /**
     * Read-only property
     */
    DelegatedAdminIdentifier?: string;

    /**
     * The AWS-account identifier of the account to designate as the Security Hub administrator account.
     * Create-only property
     */
    AdminAccountId: string;

    /**
     * Read-only property
     */
    Status?: string;
  };
}
