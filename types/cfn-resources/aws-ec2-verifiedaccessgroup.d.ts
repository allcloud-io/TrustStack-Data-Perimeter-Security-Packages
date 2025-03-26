/**
 * TypeScript definitions for AWS::EC2::VerifiedAccessGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::EC2::VerifiedAccessGroup resource creates an AWS EC2 Verified Access Group.
 */
export namespace AWS_EC2_VerifiedAccessGroup {
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
   * The configuration options for customer provided KMS encryption.
   */
  export type SseSpecificationType = {
    /**
     * KMS Key Arn used to encrypt the group policy
     */
    KmsKeyArn?: string;

    /**
     * Whether to encrypt the policy with the provided key or disable encryption
     */
    CustomerManagedKeyEnabled?: boolean;
  };

  /**
   * The AWS::EC2::VerifiedAccessGroup resource creates an AWS EC2 Verified Access Group.
   */
  export type VerifiedAccessGroupResourceType = {
    /**
     * The ID of the AWS Verified Access group.
     * Read-only property
     */
    VerifiedAccessGroupId?: string;

    /**
     * The ID of the AWS Verified Access instance.
     */
    VerifiedAccessInstanceId: string;

    /**
     * The ARN of the Verified Access group.
     * Read-only property
     */
    VerifiedAccessGroupArn?: string;

    /**
     * The AWS account number that owns the group.
     * Read-only property
     */
    Owner?: string;

    /**
     * Time this Verified Access Group was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Time this Verified Access Group was last updated.
     * Read-only property
     */
    LastUpdatedTime?: string;

    /**
     * A description for the AWS Verified Access group.
     */
    Description?: string;

    /**
     * The AWS Verified Access policy document.
     */
    PolicyDocument?: string;

    /**
     * The status of the Verified Access policy.
     */
    PolicyEnabled?: boolean;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The configuration options for customer provided KMS encryption.
     */
    SseSpecification?: SseSpecificationType;
  };
}
