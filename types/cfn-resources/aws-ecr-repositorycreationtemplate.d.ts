/**
 * TypeScript definitions for AWS::ECR::RepositoryCreationTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * The details of the repository creation template associated with the request.
 */
export namespace AWS_ECR_RepositoryCreationTemplate {
  /**
   * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
   * By default, when no encryption configuration is set or the `AES256` encryption type is used, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts your data at rest using an AES256 encryption algorithm. This does not require any action on your part.
   * For more control over the encryption of the contents of your repository, you can use server-side encryption with KMSlong key stored in KMSlong (KMS) to encrypt your images. For more information, see Amazon ECR encryption at rest in the *Amazon Elastic Container Registry User Guide*.
   */
  export type EncryptionConfigurationType = {
    /**
     * The encryption type to use.
     * If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
     * If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
     * If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
     * For more information, see Amazon ECR encryption at rest in the *Amazon Elastic Container Registry User Guide*.
     */
    EncryptionType: EncryptionTypeType;

    /**
     * If you use the `KMS` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.
     */
    KmsKey?: KmsKeyType;
  };

  /**
   * The encryption type to use.
   */
  export type EncryptionTypeType = {};

  /**
   * If you use the KMS or KMS_DSSE encryption type, specify the CMK to use for encryption. The alias, key ID, or full ARN of the CMK can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed CMK for Amazon ECR will be used.
   */
  export type KmsKeyType = {};

  /**
   * The metadata to apply to a resource to help you categorize and organize them. Each tag consists of a key and a value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
   */
  export type TagType = {
    /**
     * One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
     */
    Key: string;

    /**
     * A `value` acts as a descriptor within a tag category (key).
     */
    Value: string;
  };

  /**
   * Enumerable Strings representing the repository creation scenarios that the template will apply towards.
   */
  export type AppliedForItemType = {};

  /**
   * The details of the repository creation template associated with the request.
   */
  export type RepositoryCreationTemplateResourceType = {
    /**
     * The repository namespace prefix associated with the repository creation template.
     * Create-only property
     */
    Prefix: string;

    /**
     * The description associated with the repository creation template.
     */
    Description?: string;

    /**
     * The tag mutability setting for the repository. If this parameter is omitted, the default setting of MUTABLE will be used which will allow image tags to be overwritten. If IMMUTABLE is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
     */
    ImageTagMutability?: string;

    /**
     * he repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
     */
    RepositoryPolicy?: string;

    /**
     * The lifecycle policy to use for repositories created using the template.
     */
    LifecyclePolicy?: string;

    /**
     * The encryption configuration associated with the repository creation template.
     */
    EncryptionConfiguration?: EncryptionConfigurationType;

    /**
     * The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     */
    ResourceTags?: TagType[];

    /**
     * A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The two supported scenarios are PULL_THROUGH_CACHE and REPLICATION
     */
    AppliedFor: AppliedForItemType[];

    /**
     * The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
     */
    CustomRoleArn?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Read-only property
     */
    UpdatedAt?: string;
  };
}
