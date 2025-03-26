/**
 * TypeScript definitions for AWS::Cognito::IdentityPoolRoleAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
 */
export namespace AWS_Cognito_IdentityPoolRoleAttachment {
  export type MappingRuleType = {
    Claim: string;

    MatchType: string;

    RoleARN: string;

    Value: string;
  };

  export type RulesConfigurationTypeType = {
    Rules: MappingRuleType[];
  };

  export type RoleMappingType = {
    Type: string;

    AmbiguousRoleResolution?: string;

    RulesConfiguration?: RulesConfigurationTypeType;

    IdentityProvider?: string;
  };

  /**
   * Resource Type definition for AWS::Cognito::IdentityPoolRoleAttachment
   */
  export type IdentityPoolRoleAttachmentResourceType = {
    /**
     * Create-only property
     */
    IdentityPoolId: string;

    Roles?: any;

    /**
     * Read-only property
     */
    Id?: string;

    RoleMappings?: any;
  };
}
