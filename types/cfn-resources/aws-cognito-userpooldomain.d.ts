/**
 * TypeScript definitions for AWS::Cognito::UserPoolDomain
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::UserPoolDomain
 */
export namespace AWS_Cognito_UserPoolDomain {
  export type CustomDomainConfigTypeType = {
    CertificateArn?: string;
  };

  /**
   * Resource Type definition for AWS::Cognito::UserPoolDomain
   */
  export type UserPoolDomainResourceType = {
    /**
     * Create-only property
     */
    UserPoolId: string;

    /**
     * Create-only property
     */
    Domain: string;

    CustomDomainConfig?: CustomDomainConfigTypeType;

    /**
     * Read-only property
     */
    CloudFrontDistribution?: string;

    ManagedLoginVersion?: number;
  };
}
