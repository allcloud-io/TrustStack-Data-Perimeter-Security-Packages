/**
 * TypeScript definitions for AWS::ControlTower::EnabledBaseline
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ControlTower::EnabledBaseline Resource Type
 */
export namespace AWS_ControlTower_EnabledBaseline {
  export type ParameterType = {
    Key?: string;

    Value?: AnyTypeType;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  export type AnyTypeType = {};

  /**
   * Definition of AWS::ControlTower::EnabledBaseline Resource Type
   */
  export type EnabledBaselineResourceType = {
    /**
     * Create-only property
     */
    BaselineIdentifier: string;

    BaselineVersion: string;

    /**
     * Read-only property
     */
    EnabledBaselineIdentifier?: string;

    /**
     * Create-only property
     */
    TargetIdentifier: string;

    Parameters?: ParameterType[];

    Tags?: TagType[];
  };
}
