/**
 * TypeScript definitions for AWS::LaunchWizard::Deployment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::LaunchWizard::Deployment Resource Type
 */
export namespace AWS_LaunchWizard_Deployment {
  export type DeploymentSpecificationsType = {};

  export type DeploymentStatusType = {};

  export type TagsType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * Definition of AWS::LaunchWizard::Deployment Resource Type
   */
  export type DeploymentResourceType = {
    /**
     * ARN of the LaunchWizard deployment
     * Read-only property
     */
    Arn?: string;

    /**
     * Timestamp of LaunchWizard deployment creation
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Timestamp of LaunchWizard deployment deletion
     * Read-only property
     */
    DeletedAt?: string;

    /**
     * Deployment ID of the LaunchWizard deployment
     * Read-only property
     */
    DeploymentId?: string;

    /**
     * Workload deployment pattern name
     * Create-only property
     */
    DeploymentPatternName: string;

    /**
     * Name of LaunchWizard deployment
     * Create-only property
     */
    Name: string;

    /**
     * Resource Group Name created for LaunchWizard deployment
     * Read-only property
     */
    ResourceGroup?: string;

    /**
     * LaunchWizard deployment specifications
     */
    Specifications: DeploymentSpecificationsType;

    /**
     * Status of LaunchWizard deployment
     * Read-only property
     */
    Status?: DeploymentStatusType;

    /**
     * Tags for LaunchWizard deployment
     */
    Tags?: TagsType[];

    /**
     * Workload Name for LaunchWizard deployment
     * Create-only property
     */
    WorkloadName: string;
  };
}
