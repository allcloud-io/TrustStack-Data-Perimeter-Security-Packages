/**
 * TypeScript definitions for AWS::Glue::Registry
 * Generated from CloudFormation Resource Schema
 */

/**
 * This resource creates a Registry for authoring schemas as part of Glue Schema Registry.
 */
export namespace AWS_Glue_Registry {
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

  /**
   * This resource creates a Registry for authoring schemas as part of Glue Schema Registry.
   */
  export type RegistryResourceType = {
    /**
     * Amazon Resource Name for the created Registry.
     * Read-only property
     */
    Arn?: string;

    /**
     * Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
     * Create-only property
     */
    Name: string;

    /**
     * A description of the registry. If description is not provided, there will not be any default value for this.
     */
    Description?: string;

    /**
     * List of tags to tag the Registry
     */
    Tags?: TagType[];
  };
}
