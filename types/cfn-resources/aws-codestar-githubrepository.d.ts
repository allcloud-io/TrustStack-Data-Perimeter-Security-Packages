/**
 * TypeScript definitions for AWS::CodeStar::GitHubRepository
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeStar::GitHubRepository
 */
export namespace AWS_CodeStar_GitHubRepository {
  export type S3Type = {
    ObjectVersion?: string;

    Bucket: string;

    Key: string;
  };

  export type CodeType = {
    S3: S3Type;
  };

  /**
   * Resource Type definition for AWS::CodeStar::GitHubRepository
   */
  export type GitHubRepositoryResourceType = {
    EnableIssues?: boolean;

    ConnectionArn?: string;

    RepositoryName: string;

    RepositoryAccessToken?: string;

    /**
     * Read-only property
     */
    Id?: string;

    RepositoryOwner: string;

    IsPrivate?: boolean;

    Code?: CodeType;

    RepositoryDescription?: string;
  };
}
