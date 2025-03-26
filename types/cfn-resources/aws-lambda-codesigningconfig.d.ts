/**
 * TypeScript definitions for AWS::Lambda::CodeSigningConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lambda::CodeSigningConfig.
 */
export namespace AWS_Lambda_CodeSigningConfig {
  /**
   * When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
   */
  export type AllowedPublishersType = {
    /**
     * List of Signing profile version Arns
     */
    SigningProfileVersionArns: string[];
  };

  /**
   * Policies to control how to act if a signature is invalid
   */
  export type CodeSigningPoliciesType = {
    /**
     * Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided
     */
    UntrustedArtifactOnDeployment: string;
  };

  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * Resource Type definition for AWS::Lambda::CodeSigningConfig.
   */
  export type CodeSigningConfigResourceType = {
    /**
     * A description of the CodeSigningConfig
     */
    Description?: string;

    /**
     * When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
     */
    AllowedPublishers: AllowedPublishersType;

    /**
     * Policies to control how to act if a signature is invalid
     */
    CodeSigningPolicies?: CodeSigningPoliciesType;

    /**
     * A unique identifier for CodeSigningConfig resource
     * Read-only property
     */
    CodeSigningConfigId?: string;

    /**
     * A unique Arn for CodeSigningConfig resource
     * Read-only property
     */
    CodeSigningConfigArn?: string;

    /**
     * A list of tags to apply to CodeSigningConfig resource
     */
    Tags?: TagType[];
  };
}
