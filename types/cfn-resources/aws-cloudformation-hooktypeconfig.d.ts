/**
 * TypeScript definitions for AWS::CloudFormation::HookTypeConfig
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies the configuration data for a registered hook in CloudFormation Registry.
 */
export namespace AWS_CloudFormation_HookTypeConfig {
  /**
   * Specifies the configuration data for a registered hook in CloudFormation Registry.
   */
  export type HookTypeConfigResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the type without version number.
     */
    TypeArn?: string;

    /**
     * The name of the type being registered.
     * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     */
    TypeName?: string;

    /**
     * The Amazon Resource Name (ARN) for the configuration data, in this account and region.
     * Read-only property
     */
    ConfigurationArn?: string;

    /**
     * The configuration data for the extension, in this account and region.
     */
    Configuration?: string;

    /**
     * An alias by which to refer to this extension configuration data.
     * Default: "default"
     * Create-only property
     */
    ConfigurationAlias?: string;
  };
}
