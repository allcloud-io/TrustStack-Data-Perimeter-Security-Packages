/**
 * TypeScript definitions for AWS::M2::Deployment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a deployment resource of an AWS Mainframe Modernization (M2) application to a specified environment
 */
export namespace AWS_M2_Deployment {
  /**
   * Represents a deployment resource of an AWS Mainframe Modernization (M2) application to a specified environment
   */
  export type DeploymentResourceType = {
    /**
     * The environment ID.
     * Create-only property
     */
    EnvironmentId: string;

    /**
     * The application ID.
     * Create-only property
     */
    ApplicationId: string;

    /**
     * The version number of the application to deploy
     */
    ApplicationVersion: number;

    /**
     * The deployment ID.
     * Read-only property
     */
    DeploymentId?: string;

    /**
     * The status of the deployment.
     * Read-only property
     */
    Status?: string;
  };
}
