/**
 * TypeScript definitions for AWS::VpcLattice::ServiceNetworkResourceAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * VpcLattice ServiceNetworkResourceAssociation CFN resource
 */
export namespace AWS_VpcLattice_ServiceNetworkResourceAssociation {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * VpcLattice ServiceNetworkResourceAssociation CFN resource
   */
  export type ServiceNetworkResourceAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ResourceConfigurationId?: string;

    /**
     * Create-only property
     */
    ServiceNetworkId?: string;

    Tags?: TagType[];
  };
}
