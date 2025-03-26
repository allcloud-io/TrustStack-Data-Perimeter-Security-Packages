/**
 * TypeScript definitions for AWS::EMR::StudioSessionMapping
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_EMR_StudioSessionMapping {
  export type IamPolicyArnType = {};

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type StudioSessionMappingResourceType = {
    /**
     * The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
     * Create-only property
     */
    IdentityName: string;

    /**
     * Specifies whether the identity to map to the Studio is a user or a group.
     * Create-only property
     */
    IdentityType: string;

    /**
     * The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.
     */
    SessionPolicyArn: IamPolicyArnType;

    /**
     * The ID of the Amazon EMR Studio to which the user or group will be mapped.
     * Create-only property
     */
    StudioId: string;
  };
}
