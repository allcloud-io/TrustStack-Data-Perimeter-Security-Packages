/**
 * TypeScript definitions for AWS::StepFunctions::StateMachineAlias
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for StateMachineAlias
 */
export namespace AWS_StepFunctions_StateMachineAlias {
  export type RoutingConfigurationVersionType = {
    /**
     * The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.
     */
    StateMachineVersionArn: string;

    /**
     * The percentage of traffic you want to route to the state machine version. The sum of the weights in the routing configuration must be equal to 100.
     */
    Weight: number;
  };

  /**
   * The routing configuration of the alias. One or two versions can be mapped to an alias to split StartExecution requests of the same state machine.
   */
  export type RoutingConfigurationType = {};

  /**
   * The settings to enable gradual state machine deployments.
   */
  export type DeploymentPreferenceType = {
    StateMachineVersionArn: string;

    /**
     * The type of deployment to perform.
     */
    Type: string;

    /**
     * The percentage of traffic to shift to the new version in each increment.
     */
    Percentage?: number;

    /**
     * The time in minutes between each traffic shifting increment.
     */
    Interval?: number;

    /**
     * A list of CloudWatch alarm names that will be monitored during the deployment. The deployment will fail and rollback if any alarms go into ALARM state.
     */
    Alarms?: string[];
  };

  /**
   * Resource schema for StateMachineAlias
   */
  export type StateMachineAliasResourceType = {
    /**
     * The ARN of the alias.
     * Read-only property
     */
    Arn?: string;

    /**
     * The alias name.
     * Create-only property
     */
    Name?: string;

    /**
     * An optional description of the alias.
     */
    Description?: string;

    RoutingConfiguration?: RoutingConfigurationType;

    DeploymentPreference?: DeploymentPreferenceType;
  };
}
