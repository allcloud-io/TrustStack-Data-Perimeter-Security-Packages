/**
 * TypeScript definitions for AWS::RefactorSpaces::Service
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RefactorSpaces::Service Resource Type
 */
export namespace AWS_RefactorSpaces_Service {
  export type LambdaEndpointInputType = {
    Arn: string;
  };

  export type ServiceEndpointTypeType = {};

  export type UrlEndpointInputType = {
    HealthUrl?: string;

    Url: string;
  };

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
   * Definition of AWS::RefactorSpaces::Service Resource Type
   */
  export type ServiceResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ApplicationIdentifier: string;

    /**
     * Create-only property
     */
    Description?: string;

    /**
     * Create-only property
     */
    EndpointType: ServiceEndpointTypeType;

    /**
     * Create-only property
     */
    EnvironmentIdentifier: string;

    /**
     * Create-only property
     */
    LambdaEndpoint?: LambdaEndpointInputType;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    ServiceIdentifier?: string;

    /**
     * Create-only property
     */
    UrlEndpoint?: UrlEndpointInputType;

    /**
     * Create-only property
     */
    VpcId?: string;

    /**
     * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
     */
    Tags?: TagType[];
  };
}
