/**
 * TypeScript definitions for AWS::AmplifyUIBuilder::Theme
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::AmplifyUIBuilder::Theme Resource Type
 */
export namespace AWS_AmplifyUIBuilder_Theme {
  export type TagsType = {};

  export type ThemeValueType = {
    Value?: string;

    Children?: ThemeValuesType[];
  };

  export type ThemeValuesType = {
    Key?: string;

    Value?: ThemeValueType;
  };

  /**
   * Definition of AWS::AmplifyUIBuilder::Theme Resource Type
   */
  export type ThemeResourceType = {
    /**
     * Create-only property
     */
    AppId?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Create-only property
     */
    EnvironmentName?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    ModifiedAt?: string;

    Name?: string;

    Overrides?: ThemeValuesType[];

    Tags?: TagsType;

    Values?: ThemeValuesType[];
  };
}
