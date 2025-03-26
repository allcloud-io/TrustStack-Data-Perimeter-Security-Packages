/**
 * TypeScript definitions for AWS::SecurityHub::PolicyAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SecurityHub::PolicyAssociation resource represents the AWS Security Hub Central Configuration Policy associations in your Target. Only the AWS Security Hub delegated administrator can create the resouce from the home region.
 */
export namespace AWS_SecurityHub_PolicyAssociation {
  /**
   * The AWS::SecurityHub::PolicyAssociation resource represents the AWS Security Hub Central Configuration Policy associations in your Target. Only the AWS Security Hub delegated administrator can create the resouce from the home region.
   */
  export type PolicyAssociationResourceType = {
    /**
     * The universally unique identifier (UUID) of the configuration policy or a value of SELF_MANAGED_SECURITY_HUB for a self-managed configuration
     */
    ConfigurationPolicyId: string;

    /**
     * The current status of the association between the specified target and the configuration
     * Read-only property
     */
    AssociationStatus?: string;

    /**
     * Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub delegated administrator or inherited from a parent
     * Read-only property
     */
    AssociationType?: string;

    /**
     * An explanation for a FAILED value for AssociationStatus
     * Read-only property
     */
    AssociationStatusMessage?: string;

    /**
     * The identifier of the target account, organizational unit, or the root
     * Create-only property
     */
    TargetId: string;

    /**
     * Indicates whether the target is an AWS account, organizational unit, or the organization root
     * Create-only property
     */
    TargetType: string;

    /**
     * The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * A unique identifier to indicates if the target has an association
     * Read-only property
     */
    AssociationIdentifier?: string;
  };
}
