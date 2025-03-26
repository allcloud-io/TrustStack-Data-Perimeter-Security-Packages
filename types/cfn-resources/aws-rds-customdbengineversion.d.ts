/**
 * TypeScript definitions for AWS::RDS::CustomDBEngineVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a custom DB engine version (CEV).
 */
export namespace AWS_RDS_CustomDBEngineVersion {
  /**
   * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
   * For more information, see Tagging Amazon RDS resources in the *Amazon RDS User Guide* or Tagging Amazon Aurora and Amazon RDS resources in the *Amazon Aurora User Guide*.
   */
  export type TagType = {
    /**
     * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Key: string;

    /**
     * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Value?: string;
  };

  /**
   * Creates a custom DB engine version (CEV).
   */
  export type CustomDBEngineVersionResourceType = {
    /**
     * The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is `my-custom-installation-files`.
     * Create-only property
     */
    DatabaseInstallationFilesS3BucketName?: string;

    /**
     * The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.
     * Create-only property
     */
    DatabaseInstallationFilesS3Prefix?: string;

    /**
     * An optional description of your CEV.
     */
    Description?: string;

    /**
     * The database engine to use for your custom engine version (CEV).
     * Valid values:
     * +   `custom-oracle-ee`
     * +   `custom-oracle-ee-cdb`
     * Create-only property
     */
    Engine: string;

    /**
     * The name of your CEV. The name format is `major version.customized_string`. For example, a valid CEV name is `19.my_cev1`. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
     * *Constraints:* Minimum length is 1. Maximum length is 60.
     * *Pattern:* `^[a-z0-9_.-]{1,60$`}
     * Create-only property
     */
    EngineVersion: string;

    /**
     * The AWS KMS key identifier for an encrypted CEV. A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
     * If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in Creating a symmetric encryption KMS key in the *Key Management Service Developer Guide*.
     * You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.
     * Create-only property
     */
    KMSKeyId?: string;

    /**
     * The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
     * The following JSON fields are valid:
     * + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.
     * For more information, see Creating the CEV manifest in the *Amazon RDS User Guide*.
     * Create-only property
     */
    Manifest?: string;

    /**
     * Read-only property
     */
    DBEngineVersionArn?: string;

    /**
     * The ARN of a CEV to use as a source for creating a new CEV. You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.
     * Create-only property
     */
    SourceCustomDbEngineVersionIdentifier?: string;

    /**
     * Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.
     * Create-only property
     */
    UseAwsProvidedLatestImage?: boolean;

    /**
     * A value that indicates the ID of the AMI.
     * Create-only property
     */
    ImageId?: string;

    /**
     * A value that indicates the status of a custom engine version (CEV).
     * Default: "available"
     */
    Status?: string;

    /**
     * A list of tags. For more information, see Tagging Amazon RDS Resources in the *Amazon RDS User Guide.*
     */
    Tags?: TagType[];
  };
}
