/**
 * TypeScript definitions for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::ServiceCatalog::CloudFormationProvisionedProduct
 */
export namespace AWS_ServiceCatalog_CloudFormationProvisionedProduct {
  export type ProvisioningPreferencesType = {
    StackSetAccounts?: string[];

    StackSetFailureToleranceCount?: number;

    StackSetFailureTolerancePercentage?: number;

    StackSetMaxConcurrencyCount?: number;

    StackSetMaxConcurrencyPercentage?: number;

    StackSetOperationType?: string;

    StackSetRegions?: string[];
  };

  export type ProvisioningParameterType = {
    Key: string;

    Value: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type OutputTypeType = {};

  /**
   * Resource Schema for AWS::ServiceCatalog::CloudFormationProvisionedProduct
   */
  export type CloudFormationProvisionedProductResourceType = {
    AcceptLanguage?: string;

    /**
     * Create-only property
     */
    NotificationArns?: string[];

    PathId?: string;

    PathName?: string;

    ProductId?: string;

    ProductName?: string;

    /**
     * Create-only property
     */
    ProvisionedProductName?: string;

    ProvisioningArtifactId?: string;

    ProvisioningArtifactName?: string;

    ProvisioningParameters?: ProvisioningParameterType[];

    ProvisioningPreferences?: ProvisioningPreferencesType;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    ProvisionedProductId?: string;

    /**
     * Read-only property
     */
    RecordId?: string;

    /**
     * Read-only property
     */
    CloudformationStackArn?: string;

    /**
     * List of key-value pair outputs.
     * Read-only property
     */
    Outputs?: Record<string, any>;
  };
}
