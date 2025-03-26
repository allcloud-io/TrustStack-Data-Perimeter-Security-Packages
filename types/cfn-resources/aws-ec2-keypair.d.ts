/**
 * TypeScript definitions for AWS::EC2::KeyPair
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a key pair for use with an EC2long instance as follows:
 * +  To import an existing key pair, include the `PublicKeyMaterial` property.
 * +  To create a new key pair, omit the `PublicKeyMaterial` property.
 * When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. CFNlong does not create or return the private key material when you import a key pair.
 * When you create a new key pair, the private key is saved to SYSlong Parameter Store, using a parameter with the following name: `/ec2/keypair/{key_pair_id}`. For more information about retrieving private key, and the required permissions, see Create a key pair using in the *User Guide*.
 * When CFN deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.
 */
export namespace AWS_EC2_KeyPair {
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
   * Specifies a key pair for use with an EC2long instance as follows:
   * +  To import an existing key pair, include the `PublicKeyMaterial` property.
   * +  To create a new key pair, omit the `PublicKeyMaterial` property.
   * When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. CFNlong does not create or return the private key material when you import a key pair.
   * When you create a new key pair, the private key is saved to SYSlong Parameter Store, using a parameter with the following name: `/ec2/keypair/{key_pair_id}`. For more information about retrieving private key, and the required permissions, see Create a key pair using in the *User Guide*.
   * When CFN deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.
   */
  export type KeyPairResourceType = {
    /**
     * A unique name for the key pair.
     * Constraints: Up to 255 ASCII characters
     * Create-only property
     */
    KeyName: string;

    /**
     * The type of key pair. Note that ED25519 keys are not supported for Windows instances.
     * If the `PublicKeyMaterial` property is specified, the `KeyType` property is ignored, and the key type is inferred from the `PublicKeyMaterial` value.
     * Default: `rsa`
     * Default: "rsa"
     * Create-only property
     */
    KeyType?: string;

    /**
     * The format of the key pair.
     * Default: `pem`
     * Default: "pem"
     * Create-only property
     */
    KeyFormat?: string;

    /**
     * The public key material. The `PublicKeyMaterial` property is used to import a key pair. If this property is not specified, then a new key pair will be created.
     * Create-only property
     */
    PublicKeyMaterial?: string;

    /**
     * Read-only property
     */
    KeyFingerprint?: string;

    /**
     * Read-only property
     */
    KeyPairId?: string;

    /**
     * The tags to apply to the key pair.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
