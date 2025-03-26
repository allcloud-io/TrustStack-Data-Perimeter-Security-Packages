/**
 * TypeScript definitions for AWS::DataZone::EnvironmentBlueprintConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::DataZone::EnvironmentBlueprintConfiguration Resource Type
 */
export namespace AWS_DataZone_EnvironmentBlueprintConfiguration {
  export type RegionalParameterType = {
    Parameters?: ParameterType;

    Region?: string;
  };

  export type ParameterType = {};

  /**
   * Definition of AWS::DataZone::EnvironmentBlueprintConfiguration Resource Type
   */
  export type EnvironmentBlueprintConfigurationResourceType = {
    RegionalParameters?: RegionalParameterType[];

    ProvisioningRoleArn?: string;

    /**
     * Read-only property
     */
    DomainId?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    EnabledRegions: string[];

    /**
     * Create-only property
     */
    EnvironmentBlueprintIdentifier: string;

    /**
     * Read-only property
     */
    EnvironmentBlueprintId?: string;

    /**
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * Create-only property
     */
    DomainIdentifier: string;

    ManageAccessRoleArn?: string;
  };
}
