/**
 * TypeScript definitions for AWS::DataZone::EnvironmentActions
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::DataZone::EnvironmentActions Resource Type
 */
export namespace AWS_DataZone_EnvironmentActions {
  /**
   * The URI of the console link specified as part of the environment action.
   */
  export type EnvironmentActionURIType = {};

  /**
   * The parameters of the console link specified as part of the environment action
   */
  export type AwsConsoleLinkParametersType = {
    Uri?: EnvironmentActionURIType;
  };

  /**
   * Definition of AWS::DataZone::EnvironmentActions Resource Type
   */
  export type EnvironmentActionsResourceType = {
    /**
     * The description of the Amazon DataZone environment action.
     */
    Description?: string;

    /**
     * The identifier of the Amazon DataZone domain in which the environment is created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The identifier of the Amazon DataZone domain in which the environment would be created.
     * Create-only property
     */
    DomainIdentifier?: string;

    /**
     * The identifier of the Amazon DataZone environment in which the action is taking place
     * Read-only property
     */
    EnvironmentId?: string;

    /**
     * The identifier of the Amazon DataZone environment in which the action is taking place
     * Create-only property
     */
    EnvironmentIdentifier?: string;

    /**
     * The ID of the Amazon DataZone environment action.
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the Amazon DataZone environment action.
     */
    Identifier?: string;

    /**
     * The name of the environment action.
     */
    Name: string;

    /**
     * The parameters of the environment action.
     */
    Parameters?: AwsConsoleLinkParametersType;
  };
}
