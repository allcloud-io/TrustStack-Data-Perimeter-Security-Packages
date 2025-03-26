/**
 * TypeScript definitions for AWS::EC2::TransitGatewayMulticastDomain
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::TransitGatewayMulticastDomain type
 */
export namespace AWS_EC2_TransitGatewayMulticastDomain {
  export type TagType = {
    /**
     * The key of the tag. Constraints: Tag keys are case-sensitive and accept a maximum of 127 Unicode characters. May not begin with aws:.
     */
    Key?: string;

    /**
     * The value of the tag. Constraints: Tag values are case-sensitive and accept a maximum of 255 Unicode characters.
     */
    Value?: string;
  };

  /**
   * The AWS::EC2::TransitGatewayMulticastDomain type
   */
  export type TransitGatewayMulticastDomainResourceType = {
    /**
     * The ID of the transit gateway multicast domain.
     * Read-only property
     */
    TransitGatewayMulticastDomainId?: string;

    /**
     * The Amazon Resource Name (ARN) of the transit gateway multicast domain.
     * Read-only property
     */
    TransitGatewayMulticastDomainArn?: string;

    /**
     * The ID of the transit gateway.
     * Create-only property
     */
    TransitGatewayId: string;

    /**
     * The state of the transit gateway multicast domain.
     * Read-only property
     */
    State?: string;

    /**
     * The time the transit gateway multicast domain was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The tags for the transit gateway multicast domain.
     */
    Tags?: TagType[];

    /**
     * The options for the transit gateway multicast domain.
     */
    Options?: Record<string, any>;
  };
}
