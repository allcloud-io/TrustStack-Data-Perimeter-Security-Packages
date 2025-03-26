/**
 * TypeScript definitions for AWS::SupportApp::AccountAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * An AWS Support App resource that creates, updates, reads, and deletes a customer's account alias.
 */
export namespace AWS_SupportApp_AccountAlias {
  /**
   * An AWS Support App resource that creates, updates, reads, and deletes a customer's account alias.
   */
  export type AccountAliasResourceType = {
    /**
     * An account alias associated with a customer's account.
     */
    AccountAlias: string;

    /**
     * Unique identifier representing an alias tied to an account
     * Read-only property
     */
    AccountAliasResourceId?: string;
  };
}
