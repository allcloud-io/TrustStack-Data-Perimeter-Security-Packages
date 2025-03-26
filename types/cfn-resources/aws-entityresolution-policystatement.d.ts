/**
 * TypeScript definitions for AWS::EntityResolution::PolicyStatement
 * Generated from CloudFormation Resource Schema
 */

/**
 * Policy Statement defined in AWS Entity Resolution Service
 */
export namespace AWS_EntityResolution_PolicyStatement {
  /**
   * Arn of the resource to which the policy statement is being attached.
   */
  export type VeniceGlobalArnType = {};

  /**
   * The Statement Id of the policy statement that is being attached.
   */
  export type StatementIdType = {};

  export type StatementEffectType = {};

  export type StatementActionType = {};

  export type StatementActionListType = {};

  export type StatementPrincipalType = {};

  export type StatementPrincipalListType = {};

  export type StatementConditionType = {};

  /**
   * Policy Statement defined in AWS Entity Resolution Service
   */
  export type PolicyStatementResourceType = {
    /**
     * Create-only property
     */
    Arn: VeniceGlobalArnType;

    /**
     * Create-only property
     */
    StatementId: StatementIdType;

    Effect?: StatementEffectType;

    Action?: StatementActionListType;

    Principal?: StatementPrincipalListType;

    Condition?: StatementConditionType;
  };
}
