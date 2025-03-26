/**
 * TypeScript definitions for AWS::EC2::InternetGateway
 * Generated from CloudFormation Resource Schema
 */

/**
 * Allocates an internet gateway for use with a VPC. After creating the Internet gateway, you then attach it to a VPC.
 */
export namespace AWS_EC2_InternetGateway {
  /**
   * Specifies a tag. For more information, see Resource tags.
   */
  export type TagType = {
    /**
     * The tag key.
     */
    Key: string;

    /**
     * The tag value.
     */
    Value: string;
  };

  /**
   * Allocates an internet gateway for use with a VPC. After creating the Internet gateway, you then attach it to a VPC.
   */
  export type InternetGatewayResourceType = {
    /**
     * Read-only property
     */
    InternetGatewayId?: string;

    /**
     * Any tags to assign to the internet gateway.
     */
    Tags?: TagType[];
  };
}
