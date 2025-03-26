/**
 * TypeScript definitions for AWS::Cognito::UserPoolUser
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolUser
 */
export namespace AWS_Cognito_UserPoolUser {
  export type AttributeTypeType = {
    Name?: string;

    Value?: string;
  };

  /**
   * Resource Type definition for AWS::Cognito::UserPoolUser
   */
  export type UserPoolUserResourceType = {
    /**
     * Create-only property
     */
    DesiredDeliveryMediums?: string[];

    /**
     * Create-only property
     */
    ForceAliasCreation?: boolean;

    /**
     * Create-only property
     */
    UserAttributes?: AttributeTypeType[];

    /**
     * Create-only property
     */
    MessageAction?: string;

    /**
     * Create-only property
     */
    Username?: string;

    /**
     * Create-only property
     */
    UserPoolId: string;

    /**
     * Create-only property
     */
    ValidationData?: AttributeTypeType[];

    /**
     * Create-only property
     */
    ClientMetadata?: Record<string, any>;
  };
}
