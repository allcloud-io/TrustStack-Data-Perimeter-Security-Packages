/**
 * TypeScript definitions for AWS::ECR::Repository
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ECR::Repository` resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see Amazon ECR private repositories in the *Amazon ECR User Guide*.
 */
export namespace AWS_ECR_Repository {
  /**
   * The `LifecyclePolicy` property type specifies a lifecycle policy. For information about lifecycle policy syntax, see Lifecycle policy template in the *Amazon ECR User Guide*.
   */
  export type LifecyclePolicyType = {
    /**
     * The JSON repository policy text to apply to the repository.
     */
    LifecyclePolicyText?: LifecyclePolicyTextType;

    /**
     * The AWS account ID associated with the registry that contains the repository. If you do  not specify a registry, the default registry is assumed.
     */
    RegistryId?: RegistryIdType;
  };

  /**
   * The JSON repository policy text to apply to the repository.
   */
  export type LifecyclePolicyTextType = {};

  /**
   * The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.
   */
  export type RegistryIdType = {};

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
   * The image scanning configuration for a repository.
   */
  export type ImageScanningConfigurationType = {
    /**
     * The setting that determines whether images are scanned after being pushed to a repository. If set to `true`, images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started.
     */
    ScanOnPush?: ScanOnPushType;
  };

  /**
   * The setting that determines whether images are scanned after being pushed to a repository.
   */
  export type ScanOnPushType = {};

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
   * If true, deleting the repository force deletes the contents of the repository. Without a force delete, you can only delete empty repositories.
   */
  export type EmptyOnDeleteType = {};

  /**
   * The `AWS::ECR::Repository` resource specifies an Amazon Elastic Container Registry (Amazon ECR) repository, where users can push and pull Docker images, Open Container Initiative (OCI) images, and OCI compatible artifacts. For more information, see Amazon ECR private repositories in the *Amazon ECR User Guide*.
   */
  export type RepositoryResourceType = {
    /**
     * If true, deleting the repository force deletes the contents of the repository. If false, the repository must be empty before attempting to delete it.
     */
    EmptyOnDelete?: EmptyOnDeleteType;

    /**
     * Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see Lifecycle policy template.
     */
    LifecyclePolicy?: LifecyclePolicyType;

    /**
     * The name to use for the repository. The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see Name type.
     * The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * Create-only property
     */
    RepositoryName?: string;

    /**
     * The JSON repository policy text to apply to the repository. For more information, see Amazon ECR repository policies in the *Amazon Elastic Container Registry User Guide*.
     */
    RepositoryPolicyText?: Record<string, any> | string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    RepositoryUri?: string;

    /**
     * The tag mutability setting for the repository. If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
     */
    ImageTagMutability?: string;

    /**
     * The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.
     */
    ImageScanningConfiguration?: ImageScanningConfigurationType;

    /**
     * The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.
     * Create-only property
     */
    EncryptionConfiguration?: EncryptionConfigurationType;
  };
}
