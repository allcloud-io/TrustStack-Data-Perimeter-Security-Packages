/**
 * TypeScript definitions for AWS::FIS::TargetAccountConfiguration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::FIS::TargetAccountConfiguration
 */
export namespace AWS_FIS_TargetAccountConfiguration {
  /**
   * The ID of the experiment template.
   */
  export type TargetExperimentTemplateIdType = {};

  /**
   * The AWS account ID of the target account.
   */
  export type TargetAccountIdType = {};

  /**
   * The Amazon Resource Name (ARN) of an IAM role for the target account.
   */
  export type TargetAccountRoleArnType = {};

  /**
   * The description of the target account.
   */
  export type TargetAccountConfigurationDescriptionType = {};

  /**
   * Resource schema for AWS::FIS::TargetAccountConfiguration
   */
  export type TargetAccountConfigurationResourceType = {
    /**
     * Create-only property
     */
    ExperimentTemplateId: TargetExperimentTemplateIdType;

    /**
     * Create-only property
     */
    AccountId: TargetAccountIdType;

    RoleArn: TargetAccountRoleArnType;

    Description?: TargetAccountConfigurationDescriptionType;
  };
}
