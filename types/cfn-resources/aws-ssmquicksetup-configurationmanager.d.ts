/**
 * TypeScript definitions for AWS::SSMQuickSetup::ConfigurationManager
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SSMQuickSetup::ConfigurationManager Resource Type
 */
export namespace AWS_SSMQuickSetup_ConfigurationManager {
  export type ConfigurationDefinitionType = {
    Type: string;

    Parameters: ConfigurationParametersMapType;

    TypeVersion?: string;

    LocalDeploymentExecutionRoleName?: string;

    LocalDeploymentAdministrationRoleArn?: string;

    id?: string;
  };

  export type ConfigurationParametersMapType = {};

  export type StatusType = {};

  export type StatusDetailsType = {};

  export type StatusSummaryType = {
    StatusType: StatusTypeType;

    Status?: StatusType;

    StatusMessage?: string;

    LastUpdatedAt: string;

    StatusDetails?: StatusDetailsType;
  };

  export type StatusTypeType = {};

  export type TagsMapType = {};

  /**
   * Definition of AWS::SSMQuickSetup::ConfigurationManager Resource Type
   */
  export type ConfigurationManagerResourceType = {
    ConfigurationDefinitions: ConfigurationDefinitionType[];

    /**
     * Read-only property
     */
    CreatedAt?: string;

    Description?: string;

    /**
     * Read-only property
     */
    LastModifiedAt?: string;

    /**
     * Read-only property
     */
    ManagerArn?: string;

    Name?: string;

    /**
     * Read-only property
     */
    StatusSummaries?: StatusSummaryType[];

    Tags?: TagsMapType;
  };
}
