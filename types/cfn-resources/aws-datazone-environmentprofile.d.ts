/**
 * TypeScript definitions for AWS::DataZone::EnvironmentProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS Datazone Environment Profile is pre-configured set of resources and blueprints that provide reusable templates for creating environments.
 */
export namespace AWS_DataZone_EnvironmentProfile {
  /**
   * The parameter details of an environment profile.
   */
  export type EnvironmentParameterType = {
    /**
     * The name of an environment profile parameter.
     */
    Name?: string;

    /**
     * The value of an environment profile parameter.
     */
    Value?: string;
  };

  /**
   * AWS Datazone Environment Profile is pre-configured set of resources and blueprints that provide reusable templates for creating environments.
   */
  export type EnvironmentProfileResourceType = {
    /**
     * The AWS account in which the Amazon DataZone environment is created.
     */
    AwsAccountId: string;

    /**
     * The AWS region in which this environment profile is created.
     */
    AwsAccountRegion: string;

    /**
     * The timestamp of when this environment profile was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The Amazon DataZone user who created this environment profile.
     * Read-only property
     */
    CreatedBy?: string;

    /**
     * The description of this Amazon DataZone environment profile.
     */
    Description?: string;

    /**
     * The ID of the Amazon DataZone domain in which this environment profile is created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The ID of the Amazon DataZone domain in which this environment profile is created.
     * Create-only property
     */
    DomainIdentifier: string;

    /**
     * The ID of the blueprint with which this environment profile is created.
     * Read-only property
     */
    EnvironmentBlueprintId?: string;

    /**
     * The ID of the blueprint with which this environment profile is created.
     * Create-only property
     */
    EnvironmentBlueprintIdentifier: string;

    /**
     * The ID of this Amazon DataZone environment profile.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of this Amazon DataZone environment profile.
     */
    Name: string;

    /**
     * The identifier of the project in which to create the environment profile.
     * Read-only property
     */
    ProjectId?: string;

    /**
     * The identifier of the project in which to create the environment profile.
     * Create-only property
     */
    ProjectIdentifier: string;

    /**
     * The timestamp of when this environment profile was updated.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * The user parameters of this Amazon DataZone environment profile.
     */
    UserParameters?: EnvironmentParameterType[];
  };
}
