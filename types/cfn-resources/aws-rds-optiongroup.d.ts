/**
 * TypeScript definitions for AWS::RDS::OptionGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::RDS::OptionGroup` resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.
 */
export namespace AWS_RDS_OptionGroup {
  /**
   * The `OptionConfiguration` property type specifies an individual option, and its settings, within an `AWS::RDS::OptionGroup` resource.
   */
  export type OptionConfigurationType = {
    /**
     * A list of DB security groups used for this option.
     */
    DBSecurityGroupMemberships?: string[];

    /**
     * The configuration of options to include in a group.
     */
    OptionName: string;

    /**
     * The option settings to include in an option group.
     */
    OptionSettings?: OptionSettingType[];

    /**
     * The version for the option.
     */
    OptionVersion?: string;

    /**
     * The optional port for the option.
     */
    Port?: number;

    /**
     * A list of VPC security group names used for this option.
     */
    VpcSecurityGroupMemberships?: string[];
  };

  /**
   * The `OptionSetting` property type specifies the value for an option within an `OptionSetting` property.
   */
  export type OptionSettingType = {
    /**
     * The name of the option that has settings that you can set.
     */
    Name?: string;

    /**
     * The current value of the option setting.
     */
    Value?: string;
  };

  /**
   * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
   * For more information, see Tagging Amazon RDS resources in the *Amazon RDS User Guide* or Tagging Amazon Aurora and Amazon RDS resources in the *Amazon Aurora User Guide*.
   */
  export type TagType = {
    /**
     * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Key: string;

    /**
     * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
     */
    Value?: string;
  };

  /**
   * The `AWS::RDS::OptionGroup` resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.
   */
  export type OptionGroupResourceType = {
    /**
     * The name of the option group to be created.
     * Constraints:
     * +  Must be 1 to 255 letters, numbers, or hyphens
     * +  First character must be a letter
     * +  Can't end with a hyphen or contain two consecutive hyphens
     * Example: `myoptiongroup`
     * If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
     * This value is stored as a lowercase string.
     * Create-only property
     */
    OptionGroupName?: string;

    /**
     * The description of the option group.
     * Create-only property
     */
    OptionGroupDescription: string;

    /**
     * Specifies the name of the engine that this option group should be associated with.
     * Valid Values:
     * +   `mariadb`
     * +   `mysql`
     * +   `oracle-ee`
     * +   `oracle-ee-cdb`
     * +   `oracle-se2`
     * +   `oracle-se2-cdb`
     * +   `postgres`
     * +   `sqlserver-ee`
     * +   `sqlserver-se`
     * +   `sqlserver-ex`
     * +   `sqlserver-web`
     * Create-only property
     */
    EngineName: string;

    /**
     * Specifies the major version of the engine that this option group should be associated with.
     * Create-only property
     */
    MajorEngineVersion: string;

    /**
     * A list of all available options for an option group.
     */
    OptionConfigurations?: OptionConfigurationType[];

    /**
     * Tags to assign to the option group.
     */
    Tags?: TagType[];
  };
}
