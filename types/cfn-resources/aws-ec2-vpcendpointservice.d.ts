/**
 * TypeScript definitions for AWS::EC2::VPCEndpointService
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPCEndpointService
 */
export namespace AWS_EC2_VPCEndpointService {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EC2::VPCEndpointService
   */
  export type VPCEndpointServiceResourceType = {
    NetworkLoadBalancerArns?: string[];

    ContributorInsightsEnabled?: boolean;

    PayerResponsibility?: string;

    /**
     * Read-only property
     */
    ServiceId?: string;

    AcceptanceRequired?: boolean;

    GatewayLoadBalancerArns?: string[];

    /**
     * The tags to add to the VPC endpoint service.
     */
    Tags?: TagType[];
  };
}
