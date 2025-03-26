/**
 * TypeScript definitions for AWS::DMS::InstanceProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DMS::InstanceProfile.
 */
export namespace AWS_DMS_InstanceProfile {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::DMS::InstanceProfile.
   */
  export type InstanceProfileResourceType = {
    /**
     * The property describes an ARN of the instance profile.
     * Read-only property
     */
    InstanceProfileArn?: string;

    /**
     * The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be name/arn
     */
    InstanceProfileIdentifier?: string;

    /**
     * The property describes an availability zone of the instance profile.
     */
    AvailabilityZone?: string;

    /**
     * The optional description of the instance profile.
     */
    Description?: string;

    /**
     * The property describes kms key arn for the instance profile.
     */
    KmsKeyArn?: string;

    /**
     * The property describes the publicly accessible of the instance profile
     * Default: false
     */
    PubliclyAccessible?: boolean;

    /**
     * The property describes a network type for the instance profile.
     */
    NetworkType?: string;

    /**
     * The property describes a name for the instance profile.
     */
    InstanceProfileName?: string;

    /**
     * The property describes a creating time of the instance profile.
     * Read-only property
     */
    InstanceProfileCreationTime?: string;

    /**
     * The property describes a subnet group identifier for the instance profile.
     */
    SubnetGroupIdentifier?: string;

    /**
     * The property describes vps security groups for the instance profile.
     */
    VpcSecurityGroups?: string[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
