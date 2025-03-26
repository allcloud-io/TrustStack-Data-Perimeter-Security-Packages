/**
 * TypeScript definitions for AWS::CodeArtifact::Domain
 * Generated from CloudFormation Resource Schema
 */

/**
 * The resource schema to create a CodeArtifact domain.
 */
export namespace AWS_CodeArtifact_Domain {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * The resource schema to create a CodeArtifact domain.
   */
  export type DomainResourceType = {
    /**
     * The name of the domain.
     * Create-only property
     */
    DomainName: string;

    /**
     * The name of the domain. This field is used for GetAtt
     * Read-only property
     */
    Name?: string;

    /**
     * The 12-digit account ID of the AWS account that owns the domain. This field is used for GetAtt
     * Read-only property
     */
    Owner?: string;

    /**
     * The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain.
     * Read-only property
     * Create-only property
     */
    EncryptionKey?: string;

    /**
     * The access control resource policy on the provided domain.
     */
    PermissionsPolicyDocument?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The ARN of the domain.
     * Read-only property
     */
    Arn?: string;
  };
}
