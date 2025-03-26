/**
 * TypeScript definitions for AWS::Glue::UsageProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * This creates a Resource of UsageProfile type.
 */
export namespace AWS_Glue_UsageProfile {
  export type TagType = {
    /**
     * A key to identify the tag.
     */
    Key: string;

    /**
     * Corresponding tag value for the key.
     */
    Value: string;
  };

  export type ProfileConfigurationType = {
    JobConfiguration?: any;

    SessionConfiguration?: any;
  };

  export type ConfigurationObjectType = {
    DefaultValue?: string;

    AllowedValues?: string[];

    MinValue?: string;

    MaxValue?: string;
  };

  /**
   * This creates a Resource of UsageProfile type.
   */
  export type UsageProfileResourceType = {
    /**
     * The name of the UsageProfile.
     * Create-only property
     */
    Name: string;

    /**
     * The description of the UsageProfile.
     */
    Description?: string;

    /**
     * UsageProfile configuration for supported service ex: (Jobs, Sessions).
     */
    Configuration?: ProfileConfigurationType;

    /**
     * The tags to be applied to this UsageProfiles.
     */
    Tags?: TagType[];

    /**
     * Creation time.
     * Read-only property
     */
    CreatedOn?: string;
  };
}
