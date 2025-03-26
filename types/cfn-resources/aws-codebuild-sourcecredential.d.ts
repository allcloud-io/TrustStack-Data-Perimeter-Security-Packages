/**
 * TypeScript definitions for AWS::CodeBuild::SourceCredential
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeBuild::SourceCredential
 */
export namespace AWS_CodeBuild_SourceCredential {
  /**
   * Resource Type definition for AWS::CodeBuild::SourceCredential
   */
  export type SourceCredentialResourceType = {
    /**
     * Create-only property
     */
    ServerType: string;

    Token: string;

    AuthType: string;

    /**
     * Read-only property
     */
    Id?: string;

    Username?: string;
  };
}
