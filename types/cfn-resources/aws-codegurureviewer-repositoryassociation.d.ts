/**
 * TypeScript definitions for AWS::CodeGuruReviewer::RepositoryAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.
 */
export namespace AWS_CodeGuruReviewer_RepositoryAssociation {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     */
    Value: string;
  };

  /**
   * This resource schema represents the RepositoryAssociation resource in the Amazon CodeGuru Reviewer service.
   */
  export type RepositoryAssociationResourceType = {
    /**
     * Name of the repository to be associated.
     * Create-only property
     */
    Name: string;

    /**
     * The type of repository to be associated.
     * Create-only property
     */
    Type: string;

    /**
     * The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.
     * Create-only property
     */
    Owner?: string;

    /**
     * The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.
     * Create-only property
     */
    BucketName?: string;

    /**
     * The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
     * Create-only property
     */
    ConnectionArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the repository association.
     * Read-only property
     */
    AssociationArn?: string;

    /**
     * The tags associated with a repository association.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
