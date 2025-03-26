/**
 * TypeScript definitions for AWS::EC2::ClientVpnAuthorizationRule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
 */
export namespace AWS_EC2_ClientVpnAuthorizationRule {
  /**
   * Resource Type definition for AWS::EC2::ClientVpnAuthorizationRule
   */
  export type ClientVpnAuthorizationRuleResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ClientVpnEndpointId: string;

    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Create-only property
     */
    AccessGroupId?: string;

    /**
     * Create-only property
     */
    TargetNetworkCidr: string;

    /**
     * Create-only property
     */
    AuthorizeAllGroups?: boolean;
  };
}
