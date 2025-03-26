/**
 * TypeScript definitions for AWS::OpenSearchServerless::SecurityConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon OpenSearchServerless security config resource
 */
export namespace AWS_OpenSearchServerless_SecurityConfig {
  /**
   * Describes saml options in form of key value map
   */
  export type SamlConfigOptionsType = {
    /**
     * The XML saml provider metadata document that you want to use
     */
    Metadata: string;

    /**
     * Custom attribute for this saml integration
     */
    UserAttribute?: string;

    /**
     * Group attribute for this saml integration
     */
    GroupAttribute?: string;

    /**
     * Custom entity id attribute to override default entity id for this saml integration
     */
    OpenSearchServerlessEntityId?: string;

    /**
     * Defines the session timeout in minutes
     */
    SessionTimeout?: number;
  };

  /**
   * Config type for security config
   */
  export type SecurityConfigTypeType = {};

  /**
   * The ARN of the IAM Identity Center instance used to integrate with OpenSearch Serverless
   */
  export type IamIdentityCenterInstanceArnType = {};

  /**
   * The ARN of the IAM Identity Center application used to integrate with OpenSearch Serverless
   */
  export type IamIdentityCenterApplicationArnType = {};

  /**
   * User attribute for this IAM Identity Center integration
   */
  export type IamIdentityCenterUserAttributeType = {};

  /**
   * Group attribute for this IAM Identity Center integration
   */
  export type IamIdentityCenterGroupAttributeType = {};

  /**
   * Describes IAM Identity Center options for an OpenSearch Serverless security configuration in the form of a key-value map
   */
  export type IamIdentityCenterConfigOptionsType = {
    InstanceArn: IamIdentityCenterInstanceArnType;

    ApplicationArn?: IamIdentityCenterApplicationArnType;

    /**
     * The name of the IAM Identity Center application used to integrate with OpenSearch Serverless
     */
    ApplicationName?: string;

    /**
     * The description of the IAM Identity Center application used to integrate with OpenSearch Serverless
     */
    ApplicationDescription?: string;

    UserAttribute?: IamIdentityCenterUserAttributeType;

    GroupAttribute?: IamIdentityCenterGroupAttributeType;
  };

  /**
   * Amazon OpenSearchServerless security config resource
   */
  export type SecurityConfigResourceType = {
    /**
     * Security config description
     */
    Description?: string;

    /**
     * The identifier of the security config
     * Read-only property
     */
    Id?: string;

    /**
     * The friendly name of the security config
     * Create-only property
     */
    Name?: string;

    SamlOptions?: SamlConfigOptionsType;

    IamIdentityCenterOptions?: IamIdentityCenterConfigOptionsType;

    /**
     * Create-only property
     */
    Type?: SecurityConfigTypeType;
  };
}
