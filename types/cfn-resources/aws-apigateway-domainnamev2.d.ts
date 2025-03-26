/**
 * TypeScript definitions for AWS::ApiGateway::DomainNameV2
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ApiGateway::DomainNameV2.
 */
export namespace AWS_ApiGateway_DomainNameV2 {
  export type EndpointConfigurationType = {
    Types?: string[];
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Resource Type definition for AWS::ApiGateway::DomainNameV2.
   */
  export type DomainNameV2ResourceType = {
    CertificateArn?: string;

    /**
     * Create-only property
     */
    DomainName?: string;

    /**
     * Create-only property
     */
    EndpointConfiguration?: EndpointConfigurationType;

    /**
     * Create-only property
     */
    SecurityPolicy?: string;

    Policy?: Record<string, any> | string;

    /**
     * Read-only property
     */
    DomainNameId?: string;

    /**
     * The amazon resource name (ARN) of the domain name resource.
     * Read-only property
     */
    DomainNameArn?: string;

    Tags?: TagType[];
  };
}
