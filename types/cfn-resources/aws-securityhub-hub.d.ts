/**
 * TypeScript definitions for AWS::SecurityHub::Hub
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SecurityHub::Hub resource represents the implementation of the AWS Security Hub service in your account. One hub resource is created for each Region in which you enable Security Hub.
 *
 */
export namespace AWS_SecurityHub_Hub {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {};

  /**
   * The AWS::SecurityHub::Hub resource represents the implementation of the AWS Security Hub service in your account. One hub resource is created for each Region in which you enable Security Hub.
   *
   */
  export type HubResourceType = {
    /**
     * An ARN is automatically created for the customer.
     * Read-only property
     */
    ARN?: string;

    /**
     * Whether to enable the security standards that Security Hub has designated as automatically enabled.
     */
    EnableDefaultStandards?: boolean;

    /**
     * This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
     */
    ControlFindingGenerator?: string;

    /**
     * Whether to automatically enable new controls when they are added to standards that are enabled
     */
    AutoEnableControls?: boolean;

    Tags?: TagsType;

    /**
     * The date and time when Security Hub was enabled in the account.
     * Read-only property
     */
    SubscribedAt?: string;
  };
}
