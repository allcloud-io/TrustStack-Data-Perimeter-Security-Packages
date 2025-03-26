/**
 * TypeScript definitions for AWS::CodeCommit::Repository
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeCommit::Repository
 */
export namespace AWS_CodeCommit_Repository {
  export type S3Type = {
    ObjectVersion?: string;

    Bucket: string;

    Key: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type RepositoryTriggerType = {
    CustomData?: string;

    Events: string[];

    Branches?: string[];

    DestinationArn: string;

    Name: string;
  };

  export type CodeType = {
    S3: S3Type;

    BranchName?: string;
  };

  /**
   * Resource Type definition for AWS::CodeCommit::Repository
   */
  export type RepositoryResourceType = {
    /**
     * Read-only property
     */
    CloneUrlHttp?: string;

    KmsKeyId?: string;

    /**
     * Read-only property
     */
    CloneUrlSsh?: string;

    RepositoryName: string;

    Triggers?: RepositoryTriggerType[];

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Code?: CodeType;

    RepositoryDescription?: string;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    Name?: string;
  };
}
