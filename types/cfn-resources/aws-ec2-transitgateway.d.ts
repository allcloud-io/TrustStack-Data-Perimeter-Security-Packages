/**
 * TypeScript definitions for AWS::EC2::TransitGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TransitGateway
 */
export namespace AWS_EC2_TransitGateway {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TransitGateway
   */
  export type TransitGatewayResourceType = {
    DefaultRouteTablePropagation?: string;

    /**
     * Read-only property
     */
    TransitGatewayArn?: string;

    Description?: string;

    AutoAcceptSharedAttachments?: string;

    DefaultRouteTableAssociation?: string;

    /**
     * Read-only property
     */
    Id?: string;

    VpnEcmpSupport?: string;

    DnsSupport?: string;

    SecurityGroupReferencingSupport?: string;

    /**
     * Create-only property
     */
    MulticastSupport?: string;

    /**
     * Create-only property
     */
    AmazonSideAsn?: number;

    TransitGatewayCidrBlocks?: string[];

    Tags?: TagType[];

    AssociationDefaultRouteTableId?: string;

    PropagationDefaultRouteTableId?: string;
  };
}
