/**
 * TypeScript definitions for AWS::Route53Resolver::ResolverRuleAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * In the response to an AssociateResolverRule, DisassociateResolverRule, or ListResolverRuleAssociations request, provides information about an association between a resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
 */
export namespace AWS_Route53Resolver_ResolverRuleAssociation {
  /**
   * In the response to an AssociateResolverRule, DisassociateResolverRule, or ListResolverRuleAssociations request, provides information about an association between a resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
   */
  export type ResolverRuleAssociationResourceType = {
    /**
     * The ID of the VPC that you associated the Resolver rule with.
     * Create-only property
     */
    VPCId: string;

    /**
     * The ID of the Resolver rule that you associated with the VPC that is specified by `VPCId`.
     * Create-only property
     */
    ResolverRuleId: string;

    /**
     * Read-only property
     */
    ResolverRuleAssociationId?: string;

    /**
     * The name of an association between a Resolver rule and a VPC.
     * Create-only property
     */
    Name?: string;
  };
}
