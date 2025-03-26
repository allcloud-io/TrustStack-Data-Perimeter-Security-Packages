/**
 * TypeScript definitions for AWS::ApiGatewayV2::Deployment
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGatewayV2::Deployment` resource creates a deployment for an API.
 */
export namespace AWS_ApiGatewayV2_Deployment {
  /**
   * The `AWS::ApiGatewayV2::Deployment` resource creates a deployment for an API.
   */
  export type DeploymentResourceType = {
    /**
     * Read-only property
     */
    DeploymentId?: string;

    /**
     * The description for the deployment resource.
     */
    Description?: string;

    /**
     * The name of an existing stage to associate with the deployment.
     */
    StageName?: string;

    /**
     * The API identifier.
     * Create-only property
     */
    ApiId: string;
  };
}
