/**
 * TypeScript definitions for AWS::CodeArtifact::Repository
 * Generated from CloudFormation Resource Schema
 */

/**
 * The resource schema to create a CodeArtifact repository.
 */
export namespace AWS_CodeArtifact_Repository {
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
   * The resource schema to create a CodeArtifact repository.
   */
  export type RepositoryResourceType = {
    /**
     * The name of the repository.
     * Create-only property
     */
    RepositoryName: string;

    /**
     * The name of the repository. This is used for GetAtt
     * Read-only property
     */
    Name?: string;

    /**
     * The name of the domain that contains the repository.
     * Create-only property
     */
    DomainName: string;

    /**
     * The 12-digit account ID of the AWS account that owns the domain.
     * Read-only property
     * Create-only property
     */
    DomainOwner?: string;

    /**
     * A text description of the repository.
     */
    Description?: string;

    /**
     * The ARN of the repository.
     * Read-only property
     */
    Arn?: string;

    /**
     * A list of external connections associated with the repository.
     */
    ExternalConnections?: string[];

    /**
     * A list of upstream repositories associated with the repository.
     */
    Upstreams?: string[];

    /**
     * The access control resource policy on the provided repository.
     */
    PermissionsPolicyDocument?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
