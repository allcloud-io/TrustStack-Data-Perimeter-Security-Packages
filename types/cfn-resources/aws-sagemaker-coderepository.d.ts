/**
 * TypeScript definitions for AWS::SageMaker::CodeRepository
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::CodeRepository
 */
export namespace AWS_SageMaker_CodeRepository {
  export type GitConfigType = {
    SecretArn?: string;

    RepositoryUrl: string;

    Branch?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::CodeRepository
   */
  export type CodeRepositoryResourceType = {
    GitConfig: GitConfigType;

    /**
     * Create-only property
     */
    CodeRepositoryName?: string;

    /**
     * Read-only property
     */
    Id?: string;

    Tags?: TagType[];
  };
}
