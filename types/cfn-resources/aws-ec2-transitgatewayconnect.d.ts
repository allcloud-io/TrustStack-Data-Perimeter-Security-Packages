/**
 * TypeScript definitions for AWS::EC2::TransitGatewayConnect
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::TransitGatewayConnect type
 */
export namespace AWS_EC2_TransitGatewayConnect {
  export type TransitGatewayConnectOptionsType = {
    /**
     * The tunnel protocol.
     */
    Protocol?: string;
  };

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
   * The AWS::EC2::TransitGatewayConnect type
   */
  export type TransitGatewayConnectResourceType = {
    /**
     * The ID of the Connect attachment.
     * Read-only property
     */
    TransitGatewayAttachmentId?: string;

    /**
     * The ID of the attachment from which the Connect attachment was created.
     * Create-only property
     */
    TransportTransitGatewayAttachmentId: string;

    /**
     * The ID of the transit gateway.
     * Read-only property
     */
    TransitGatewayId?: string;

    /**
     * The state of the attachment.
     * Read-only property
     */
    State?: string;

    /**
     * The creation time.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * The tags for the attachment.
     */
    Tags?: TagType[];

    /**
     * The Connect attachment options.
     * Create-only property
     */
    Options: TransitGatewayConnectOptionsType;
  };
}
