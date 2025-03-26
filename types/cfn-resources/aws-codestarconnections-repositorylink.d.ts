/**
 * TypeScript definitions for AWS::CodeStarConnections::RepositoryLink
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for AWS::CodeStarConnections::RepositoryLink resource which is used to aggregate repository metadata relevant to synchronizing source provider content to AWS Resources.
 */
export namespace AWS_CodeStarConnections_RepositoryLink {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Schema for AWS::CodeStarConnections::RepositoryLink resource which is used to aggregate repository metadata relevant to synchronizing source provider content to AWS Resources.
   */
  export type RepositoryLinkResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the CodeStarConnection. The ARN is used as the connection reference when the connection is shared between AWS services.
     */
    ConnectionArn: string;

    /**
     * The name of the external provider where your third-party code repository is configured.
     * Read-only property
     */
    ProviderType?: string;

    /**
     * the ID of the entity that owns the repository.
     * Create-only property
     */
    OwnerId: string;

    /**
     * The repository for which the link is being created.
     * Create-only property
     */
    RepositoryName: string;

    /**
     * The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. If not specified, a default key will be used.
     */
    EncryptionKeyArn?: string;

    /**
     * A UUID that uniquely identifies the RepositoryLink.
     * Read-only property
     */
    RepositoryLinkId?: string;

    /**
     * A unique Amazon Resource Name (ARN) to designate the repository link.
     * Read-only property
     */
    RepositoryLinkArn?: string;

    /**
     * Specifies the tags applied to a RepositoryLink.
     */
    Tags?: TagType[];
  };
}
