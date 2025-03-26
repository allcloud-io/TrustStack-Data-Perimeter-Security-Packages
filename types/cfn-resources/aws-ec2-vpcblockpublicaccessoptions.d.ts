/**
 * TypeScript definitions for AWS::EC2::VPCBlockPublicAccessOptions
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::VPCBlockPublicAccessOptions
 */
export namespace AWS_EC2_VPCBlockPublicAccessOptions {
  /**
   * Resource Type definition for AWS::EC2::VPCBlockPublicAccessOptions
   */
  export type VPCBlockPublicAccessOptionsResourceType = {
    /**
     * The desired Block Public Access mode for Internet Gateways in your account. We do not allow to create in a off mode as this is the default value
     */
    InternetGatewayBlockMode: string;

    /**
     * The identifier for the specified AWS account.
     * Read-only property
     */
    AccountId?: string;
  };
}
