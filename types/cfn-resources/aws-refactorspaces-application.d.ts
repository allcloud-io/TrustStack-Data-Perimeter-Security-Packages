/**
 * TypeScript definitions for AWS::RefactorSpaces::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RefactorSpaces::Application Resource Type
 */
export namespace AWS_RefactorSpaces_Application {
  export type ApiGatewayEndpointTypeType = {};

  export type ApiGatewayProxyInputType = {
    StageName?: string;

    EndpointType?: ApiGatewayEndpointTypeType;
  };

  export type ProxyTypeType = {};

  /**
   * A label for tagging Environment resource
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * Definition of AWS::RefactorSpaces::Application Resource Type
   */
  export type ApplicationResourceType = {
    /**
     * Create-only property
     */
    ApiGatewayProxy?: ApiGatewayProxyInputType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    ApiGatewayId?: string;

    /**
     * Read-only property
     */
    VpcLinkId?: string;

    /**
     * Read-only property
     */
    NlbArn?: string;

    /**
     * Read-only property
     */
    NlbName?: string;

    /**
     * Read-only property
     */
    ApplicationIdentifier?: string;

    /**
     * Create-only property
     */
    EnvironmentIdentifier: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    ProxyType: ProxyTypeType;

    /**
     * Create-only property
     */
    VpcId: string;

    /**
     * Read-only property
     */
    StageName?: string;

    /**
     * Read-only property
     */
    ProxyUrl?: string;

    /**
     * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
     */
    Tags?: TagType[];
  };
}
