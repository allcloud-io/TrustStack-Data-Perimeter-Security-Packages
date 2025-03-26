/**
 * TypeScript definitions for AWS::MediaConnect::FlowEntitlement
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaConnect::FlowEntitlement
 */
export namespace AWS_MediaConnect_FlowEntitlement {
  /**
   * Information about the encryption of the flow.
   */
  export type EncryptionType = {
    /**
     * The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
     */
    Algorithm: string;

    /**
     * A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     */
    ConstantInitializationVector?: string;

    /**
     * The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    DeviceId?: string;

    /**
     * The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
     */
    KeyType?: string;

    /**
     * The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Region?: string;

    /**
     * An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    ResourceId?: string;

    /**
     * The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
     */
    RoleArn: string;

    /**
     *  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     */
    SecretArn?: string;

    /**
     * The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     */
    Url?: string;
  };

  /**
   * Resource schema for AWS::MediaConnect::FlowEntitlement
   */
  export type FlowEntitlementResourceType = {
    /**
     * The ARN of the flow.
     */
    FlowArn: string;

    /**
     * The ARN of the entitlement.
     * Read-only property
     */
    EntitlementArn?: string;

    /**
     * Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
     * Default: 0
     * Create-only property
     */
    DataTransferSubscriberFeePercent?: number;

    /**
     * A description of the entitlement.
     */
    Description: string;

    /**
     * The type of encryption that will be used on the output that is associated with this entitlement.
     */
    Encryption?: EncryptionType;

    /**
     *  An indication of whether the entitlement is enabled.
     */
    EntitlementStatus?: string;

    /**
     * The name of the entitlement.
     * Create-only property
     */
    Name: string;

    /**
     * The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.
     */
    Subscribers: string[];
  };
}
