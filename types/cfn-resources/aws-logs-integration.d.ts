/**
 * TypeScript definitions for AWS::Logs::Integration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for Logs Integration Resource
 */
export namespace AWS_Logs_Integration {
  export type ArnType = {};

  export type OpenSearchResourceConfigType = {
    KmsKeyArn?: ArnType;

    DataSourceRoleArn: ArnType;

    DashboardViewerPrincipals: ArnType[];

    ApplicationARN?: ArnType;

    RetentionDays?: number;
  };

  /**
   * Resource Schema for Logs Integration Resource
   */
  export type IntegrationResourceType = {
    /**
     * User provided identifier for integration, unique to the user account.
     * Create-only property
     */
    IntegrationName: string;

    /**
     * The type of the Integration.
     * Create-only property
     */
    IntegrationType: string;

    /**
     * OpenSearchResourceConfig for the given Integration
     * Create-only property
     */
    ResourceConfig: Record<string, any>;

    /**
     * Status of creation for the Integration and its resources
     * Read-only property
     */
    IntegrationStatus?: string;
  };
}
