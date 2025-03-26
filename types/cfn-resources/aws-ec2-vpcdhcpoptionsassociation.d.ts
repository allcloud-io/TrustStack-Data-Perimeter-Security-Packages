/**
 * TypeScript definitions for AWS::EC2::VPCDHCPOptionsAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Associates a set of DHCP options with a VPC, or associates no DHCP options with the VPC.
 */
export namespace AWS_EC2_VPCDHCPOptionsAssociation {
  /**
   * Associates a set of DHCP options with a VPC, or associates no DHCP options with the VPC.
   */
  export type VPCDHCPOptionsAssociationResourceType = {
    /**
     * The ID of the DHCP options set, or default to associate no DHCP options with the VPC.
     * Create-only property
     */
    DhcpOptionsId: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;
  };
}
