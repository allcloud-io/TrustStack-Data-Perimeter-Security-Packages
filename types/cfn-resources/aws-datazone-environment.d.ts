/**
 * TypeScript definitions for AWS::DataZone::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::DataZone::Environment Resource Type
 */
export namespace AWS_DataZone_Environment {
  /**
   * The parameter details of an environment.
   */
  export type EnvironmentParameterType = {
    /**
     * The name of an environment parameter.
     */
    Name?: string;

    /**
     * The value of an environment parameter.
     */
    Value?: string;
  };

  /**
   * The status of the Amazon DataZone environment.
   */
  export type EnvironmentStatusType = {};

  /**
   * Definition of AWS::DataZone::Environment Resource Type
   */
  export type EnvironmentResourceType = {
    /**
     * The AWS account in which the Amazon DataZone environment is created.
     * Read-only property
     */
    AwsAccountId?: string;

    /**
     * The AWS region in which the Amazon DataZone environment is created.
     * Read-only property
     */
    AwsAccountRegion?: string;

    /**
     * The AWS account in which the Amazon DataZone environment is created.
     * Create-only property
     */
    EnvironmentAccountIdentifier?: string;

    /**
     * The AWS region in which the Amazon DataZone environment is created.
     * Create-only property
     */
    EnvironmentAccountRegion?: string;

    /**
     * The timestamp of when the environment was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The Amazon DataZone user who created the environment.
     * Read-only property
     */
    CreatedBy?: string;

    /**
     * The description of the Amazon DataZone environment.
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
    DomainIdentifier: string;

    /**
     * The ID of the blueprint with which the Amazon DataZone environment was created.
     * Read-only property
     */
    EnvironmentBlueprintId?: string;

    /**
     * The ID of the environment profile with which the Amazon DataZone environment was created.
     * Read-only property
     */
    EnvironmentProfileId?: string;

    /**
     * The ID of the environment profile with which the Amazon DataZone environment would be created.
     * Create-only property
     */
    EnvironmentProfileIdentifier?: string;

    /**
     * The glossary terms that can be used in the Amazon DataZone environment.
     */
    GlossaryTerms?: string[];

    /**
     * Environment role arn for custom aws environment permissions
     */
    EnvironmentRoleArn?: string;

    /**
     * The ID of the Amazon DataZone environment.
     * Read-only property
     */
    Id?: string;

    /**
     * The name of the environment.
     */
    Name: string;

    /**
     * The ID of the Amazon DataZone project in which the environment is created.
     * Read-only property
     */
    ProjectId?: string;

    /**
     * The ID of the Amazon DataZone project in which the environment would be created.
     * Create-only property
     */
    ProjectIdentifier: string;

    /**
     * The provider of the Amazon DataZone environment.
     * Read-only property
     */
    Provider?: string;

    /**
     * The status of the Amazon DataZone environment.
     * Read-only property
     */
    Status?: EnvironmentStatusType;

    /**
     * The timestamp of when the environment was updated.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * The user parameters of the Amazon DataZone environment.
     * Create-only property
     */
    UserParameters?: EnvironmentParameterType[];
  };
}
