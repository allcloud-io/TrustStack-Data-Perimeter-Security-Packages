/**
 * TypeScript definitions for AWS::KMS::Key
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::KMS::Key` resource specifies an KMS key in KMSlong. You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use `AWS::KMS::Key` to create multi-Region primary keys of all supported types. To replicate a multi-Region key, use the `AWS::KMS::ReplicaKey` resource.
 * If you change the value of the `KeySpec`, `KeyUsage`, `Origin`, or `MultiRegion` properties of an existing KMS key, the update request fails, regardless of the value of the UpdateReplacePolicy attribute. This prevents you from accidentally deleting a KMS key by changing any of its immutable property values.
 * KMS replaced the term *customer master key (CMK)* with ** and *KMS key*. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.
 * You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are integrated with. For more information, see Symmetric encryption KMS keys in the *Developer Guide*.
 * You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric `KeySpec` value and a `KeyUsage` value. For details, see Asymmetric keys in in the *Developer Guide*.
 * You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC `KeySpec` value and a `KeyUsage` value of `GENERATE_VERIFY_MAC`. For details, see HMAC keys in in the *Developer Guide*.
 * You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the `MultiRegion` property to `true`. For information about multi-Region keys, see Multi-Region keys in in the *Developer Guide*.
 * You cannot use the `AWS::KMS::Key` resource to specify a KMS key with imported key material or a KMS key in a custom key store.
 * *Regions*
 * KMS CloudFormation resources are available in all Regions in which KMS and CFN are supported. You can use the `AWS::KMS::Key` resource to create and manage all KMS key types that are supported in a Region.
 */
export namespace AWS_KMS_Key {
  /**
   * A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.
   * Do not include confidential or sensitive information in this field. This field may be displayed in plaintext in CloudTrail logs and other output.
   * For information about the rules that apply to tag keys and tag values, see User-Defined Tag Restrictions in the *Billing and Cost Management User Guide*.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
     * For more information, see Tag.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
     * For more information, see Tag.
     */
    Value: string;
  };

  /**
   * The `AWS::KMS::Key` resource specifies an KMS key in KMSlong. You can use this resource to create symmetric encryption KMS keys, asymmetric KMS keys for encryption or signing, and symmetric HMAC KMS keys. You can use `AWS::KMS::Key` to create multi-Region primary keys of all supported types. To replicate a multi-Region key, use the `AWS::KMS::ReplicaKey` resource.
   * If you change the value of the `KeySpec`, `KeyUsage`, `Origin`, or `MultiRegion` properties of an existing KMS key, the update request fails, regardless of the value of the UpdateReplacePolicy attribute. This prevents you from accidentally deleting a KMS key by changing any of its immutable property values.
   * KMS replaced the term *customer master key (CMK)* with ** and *KMS key*. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.
   * You can use symmetric encryption KMS keys to encrypt and decrypt small amounts of data, but they are more commonly used to generate data keys and data key pairs. You can also use a symmetric encryption KMS key to encrypt data stored in AWS services that are integrated with. For more information, see Symmetric encryption KMS keys in the *Developer Guide*.
   * You can use asymmetric KMS keys to encrypt and decrypt data or sign messages and verify signatures. To create an asymmetric key, you must specify an asymmetric `KeySpec` value and a `KeyUsage` value. For details, see Asymmetric keys in in the *Developer Guide*.
   * You can use HMAC KMS keys (which are also symmetric keys) to generate and verify hash-based message authentication codes. To create an HMAC key, you must specify an HMAC `KeySpec` value and a `KeyUsage` value of `GENERATE_VERIFY_MAC`. For details, see HMAC keys in in the *Developer Guide*.
   * You can also create symmetric encryption, asymmetric, and HMAC multi-Region primary keys. To create a multi-Region primary key, set the `MultiRegion` property to `true`. For information about multi-Region keys, see Multi-Region keys in in the *Developer Guide*.
   * You cannot use the `AWS::KMS::Key` resource to specify a KMS key with imported key material or a KMS key in a custom key store.
   * *Regions*
   * KMS CloudFormation resources are available in all Regions in which KMS and CFN are supported. You can use the `AWS::KMS::Key` resource to create and manage all KMS key types that are supported in a Region.
   */
  export type KeyResourceType = {
    /**
     * A description of the KMS key. Use a description that helps you to distinguish this KMS key from others in the account, such as its intended use.
     */
    Description?: string;

    /**
     * Specifies whether the KMS key is enabled. Disabled KMS keys cannot be used in cryptographic operations.
     * When `Enabled` is `true`, the *key state* of the KMS key is `Enabled`. When `Enabled` is `false`, the key state of the KMS key is `Disabled`. The default value is `true`.
     * The actual key state of the KMS key might be affected by actions taken outside of CloudFormation, such as running the EnableKey, DisableKey, or ScheduleKeyDeletion operations.
     * For information about the key states of a KMS key, see Key state: Effect on your KMS key in the *Developer Guide*.
     */
    Enabled?: boolean;

    /**
     * Enables automatic rotation of the key material for the specified KMS key. By default, automatic key rotation is not enabled.
     * KMS supports automatic rotation only for symmetric encryption KMS keys (`KeySpec` = `SYMMETRIC_DEFAULT`). For asymmetric KMS keys, HMAC KMS keys, and KMS keys with Origin `EXTERNAL`, omit the `EnableKeyRotation` property or set it to `false`.
     * To enable automatic key rotation of the key material for a multi-Region KMS key, set `EnableKeyRotation` to `true` on the primary key (created by using `AWS::KMS::Key`). KMS copies the rotation status to all replica keys. For details, see Rotating multi-Region keys in the *Developer Guide*.
     * When you enable automatic rotation, KMS automatically creates new key material for the KMS key one year after the enable date and every year thereafter. KMS retains all key material until you delete the KMS key. For detailed information about automatic key rotation, see Rotating KMS keys in the *Developer Guide*.
     */
    EnableKeyRotation?: boolean;

    /**
     * The key policy to attach to the KMS key.
     * If you provide a key policy, it must meet the following criteria:
     * +  The key policy must allow the caller to make a subsequent PutKeyPolicy request on the KMS key. This reduces the risk that the KMS key becomes unmanageable. For more information, see Default key policy in the *Developer Guide*. (To omit this condition, set `BypassPolicyLockoutSafetyCheck` to true.)
     * +  Each statement in the key policy must contain one or more principals. The principals in the key policy must exist and be visible to KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before including the new principal in a key policy because the new principal might not be immediately visible to KMS. For more information, see Changes that I make are not always immediately visible in the *User Guide*.
     * If you do not provide a key policy, KMS attaches a default key policy to the KMS key. For more information, see Default key policy in the *Developer Guide*.
     * A key policy document can include only the following characters:
     * +  Printable ASCII characters
     * +  Printable characters in the Basic Latin and Latin-1 Supplement character set
     * +  The tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`) special characters
     * *Minimum*: `1`
     * *Maximum*: `32768`
     * Default: "{\n    \"Version\": \"2012-10-17\",\n    \"Id\": \"key-default\",\n    \"Statement\": [\n        {\n            \"Sid\": \"Enable IAM User Permissions\",\n            \"Effect\": \"Allow\",\n            \"Principal\": {\n                \"AWS\": \"arn:<partition>:iam::<account-id>:root\"\n            },\n            \"Action\": \"kms:*\",\n            \"Resource\": \"*\"\n        }\n    ]\n}"
     */
    KeyPolicy?: Record<string, any> | string;

    /**
     * Determines the cryptographic operations for which you can use the KMS key. The default value is `ENCRYPT_DECRYPT`. This property is required for asymmetric KMS keys and HMAC KMS keys. You can't change the `KeyUsage` value after the KMS key is created.
     * If you change the value of the `KeyUsage` property on an existing KMS key, the update request fails, regardless of the value of the UpdateReplacePolicy attribute. This prevents you from accidentally deleting a KMS key by changing an immutable property value.
     * Select only one valid value.
     * +  For symmetric encryption KMS keys, omit the parameter or specify `ENCRYPT_DECRYPT`.
     * +  For HMAC KMS keys (symmetric), specify `GENERATE_VERIFY_MAC`.
     * +  For asymmetric KMS keys with RSA key pairs, specify `ENCRYPT_DECRYPT` or `SIGN_VERIFY`.
     * +  For asymmetric KMS keys with NIST-recommended elliptic curve key pairs, specify `SIGN_VERIFY` or `KEY_AGREEMENT`.
     * +  For asymmetric KMS keys with `ECC_SECG_P256K1` key pairs specify `SIGN_VERIFY`.
     * +  For asymmetric KMS keys with SM2 key pairs (China Regions only), specify `ENCRYPT_DECRYPT`, `SIGN_VERIFY`, or `KEY_AGREEMENT`.
     * Default: "ENCRYPT_DECRYPT"
     */
    KeyUsage?: string;

    /**
     * The source of the key material for the KMS key. You cannot change the origin after you create the KMS key. The default is `AWS_KMS`, which means that KMS creates the key material.
     * To create a KMS key with no key material (for imported key material), set this value to `EXTERNAL`. For more information about importing key material into KMS, see Importing Key Material in the *Developer Guide*.
     * You can ignore `ENABLED` when Origin is `EXTERNAL`. When a KMS key with Origin `EXTERNAL` is created, the key state is `PENDING_IMPORT` and `ENABLED` is `false`. After you import the key material, `ENABLED` updated to `true`. The KMS key can then be used for Cryptographic Operations.
     * CFN doesn't support creating an `Origin` parameter of the `AWS_CLOUDHSM` or `EXTERNAL_KEY_STORE` values.
     * Default: "AWS_KMS"
     */
    Origin?: string;

    /**
     * Specifies the type of KMS key to create. The default value, `SYMMETRIC_DEFAULT`, creates a KMS key with a 256-bit symmetric key for encryption and decryption. In China Regions, `SYMMETRIC_DEFAULT` creates a 128-bit symmetric key that uses SM4 encryption. You can't change the `KeySpec` value after the KMS key is created. For help choosing a key spec for your KMS key, see Choosing a KMS key type in the *Developer Guide*.
     * The `KeySpec` property determines the type of key material in the KMS key and the algorithms that the KMS key supports. To further restrict the algorithms that can be used with the KMS key, use a condition key in its key policy or IAM policy. For more information, see condition keys in the *Developer Guide*.
     * If you change the value of the `KeySpec` property on an existing KMS key, the update request fails, regardless of the value of the UpdateReplacePolicy attribute. This prevents you from accidentally deleting a KMS key by changing an immutable property value.
     * services that are integrated with use symmetric encryption KMS keys to protect your data. These services do not support encryption with asymmetric KMS keys. For help determining whether a KMS key is asymmetric, see Identifying asymmetric KMS keys in the *Developer Guide*.
     * KMS supports the following key specs for KMS keys:
     * +  Symmetric encryption key (default)
     * +   `SYMMETRIC_DEFAULT` (AES-256-GCM)
     * +  HMAC keys (symmetric)
     * +   `HMAC_224`
     * +   `HMAC_256`
     * +   `HMAC_384`
     * +   `HMAC_512`
     * +  Asymmetric RSA key pairs (encryption and decryption *or* signing and verification)
     * +   `RSA_2048`
     * +   `RSA_3072`
     * +   `RSA_4096`
     * +  Asymmetric NIST-recommended elliptic curve key pairs (signing and verification *or* deriving shared secrets)
     * +   `ECC_NIST_P256` (secp256r1)
     * +   `ECC_NIST_P384` (secp384r1)
     * +   `ECC_NIST_P521` (secp521r1)
     * +  Other asymmetric elliptic curve key pairs (signing and verification)
     * +   `ECC_SECG_P256K1` (secp256k1), commonly used for cryptocurrencies.
     * +  SM2 key pairs (encryption and decryption *or* signing and verification *or* deriving shared secrets)
     * +   `SM2` (China Regions only)
     * Default: "SYMMETRIC_DEFAULT"
     */
    KeySpec?: string;

    /**
     * Creates a multi-Region primary key that you can replicate in other AWS-Regions. You can't change the `MultiRegion` value after the KMS key is created.
     * For a list of AWS-Regions in which multi-Region keys are supported, see Multi-Region keys in in the **.
     * If you change the value of the `MultiRegion` property on an existing KMS key, the update request fails, regardless of the value of the UpdateReplacePolicy attribute. This prevents you from accidentally deleting a KMS key by changing an immutable property value.
     * For a multi-Region key, set to this property to `true`. For a single-Region key, omit this property or set it to `false`. The default value is `false`.
     * *Multi-Region keys* are an KMS feature that lets you create multiple interoperable KMS keys in different AWS-Regions. Because these KMS keys have the same key ID, key material, and other metadata, you can use them to encrypt data in one AWS-Region and decrypt it in a different AWS-Region without making a cross-Region call or exposing the plaintext data. For more information, see Multi-Region keys in the *Developer Guide*.
     * You can create a symmetric encryption, HMAC, or asymmetric multi-Region KMS key, and you can create a multi-Region key with imported key material. However, you cannot create a multi-Region key in a custom key store.
     * To create a replica of this primary key in a different AWS-Region , create an AWS::KMS::ReplicaKey resource in a CloudFormation stack in the replica Region. Specify the key ARN of this primary key.
     * Default: false
     */
    MultiRegion?: boolean;

    /**
     * Specifies the number of days in the waiting period before KMS deletes a KMS key that has been removed from a CloudFormation stack. Enter a value between 7 and 30 days. The default value is 30 days.
     * When you remove a KMS key from a CloudFormation stack, KMS schedules the KMS key for deletion and starts the mandatory waiting period. The `PendingWindowInDays` property determines the length of waiting period. During the waiting period, the key state of KMS key is `Pending Deletion` or `Pending Replica Deletion`, which prevents the KMS key from being used in cryptographic operations. When the waiting period expires, KMS permanently deletes the KMS key.
     * KMS will not delete a multi-Region primary key that has replica keys. If you remove a multi-Region primary key from a CloudFormation stack, its key state changes to `PendingReplicaDeletion` so it cannot be replicated or used in cryptographic operations. This state can persist indefinitely. When the last of its replica keys is deleted, the key state of the primary key changes to `PendingDeletion` and the waiting period specified by `PendingWindowInDays` begins. When this waiting period expires, KMS deletes the primary key. For details, see Deleting multi-Region keys in the *Developer Guide*.
     * You cannot use a CloudFormation template to cancel deletion of the KMS key after you remove it from the stack, regardless of the waiting period. If you specify a KMS key in your template, even one with the same name, CloudFormation creates a new KMS key. To cancel deletion of a KMS key, use the KMS console or the CancelKeyDeletion operation.
     * For information about the `Pending Deletion` and `Pending Replica Deletion` key states, see Key state: Effect on your KMS key in the *Developer Guide*. For more information about deleting KMS keys, see the ScheduleKeyDeletion operation in the *API Reference* and Deleting KMS keys in the *Developer Guide*.
     */
    PendingWindowInDays?: number;

    /**
     * Assigns one or more tags to the replica key.
     * Tagging or untagging a KMS key can allow or deny permission to the KMS key. For details, see ABAC for in the *Developer Guide*.
     * For information about tags in KMS, see Tagging keys in the *Developer Guide*. For information about tags in CloudFormation, see Tag.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    KeyId?: string;

    /**
     * Skips ("bypasses") the key policy lockout safety check. The default value is false.
     * Setting this value to true increases the risk that the KMS key becomes unmanageable. Do not set this value to true indiscriminately.
     * For more information, see Default key policy in the *Developer Guide*.
     * Use this parameter only when you intend to prevent the principal that is making the request from making a subsequent PutKeyPolicy request on the KMS key.
     * Default: false
     */
    BypassPolicyLockoutSafetyCheck?: boolean;

    /**
     * Specifies a custom period of time between each rotation date. If no value is specified, the default value is 365 days.
     * The rotation period defines the number of days after you enable automatic key rotation that KMS will rotate your key material, and the number of days between each automatic rotation thereafter.
     * You can use the kms:RotationPeriodInDays condition key to further constrain the values that principals can specify in the `RotationPeriodInDays` parameter.
     * For more information about rotating KMS keys and automatic rotation, see Rotating keys in the *Developer Guide*.
     * Default: 365
     */
    RotationPeriodInDays?: number;
  };
}
