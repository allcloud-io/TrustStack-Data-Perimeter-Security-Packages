/**
 * TypeScript definitions for AWS::AppRunner::VpcIngressConnection
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AppRunner::VpcIngressConnection resource is an App Runner resource that specifies an App Runner VpcIngressConnection.
 */
export namespace AWS_AppRunner_VpcIngressConnection {
  /**
   * The configuration of customer’s VPC and related VPC endpoint
   */
  export type IngressVpcConfigurationType = {
    /**
     * The ID of the VPC that the VPC endpoint is used in.
     */
    VpcId: string;

    /**
     * The ID of the VPC endpoint that your App Runner service connects to.
     */
    VpcEndpointId: string;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * The AWS::AppRunner::VpcIngressConnection resource is an App Runner resource that specifies an App Runner VpcIngressConnection.
   */
  export type VpcIngressConnectionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the VpcIngressConnection.
     * Read-only property
     */
    VpcIngressConnectionArn?: string;

    /**
     * The customer-provided Vpc Ingress Connection name.
     * Create-only property
     */
    VpcIngressConnectionName?: string;

    /**
     * The Amazon Resource Name (ARN) of the service.
     * Create-only property
     */
    ServiceArn: string;

    /**
     * The current status of the VpcIngressConnection.
     * Read-only property
     */
    Status?: string;

    /**
     * The Domain name associated with the VPC Ingress Connection.
     * Read-only property
     */
    DomainName?: string;

    IngressVpcConfiguration: IngressVpcConfigurationType;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
