/**
 * TypeScript definitions for AWS::EventSchemas::Registry
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EventSchemas::Registry
 */
export namespace AWS_EventSchemas_Registry {
  export type TagsEntryType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EventSchemas::Registry
   */
  export type RegistryResourceType = {
    /**
     * The name of the schema registry.
     * Create-only property
     */
    RegistryName?: string;

    /**
     * A description of the registry to be created.
     */
    Description?: string;

    /**
     * The ARN of the registry.
     * Read-only property
     */
    RegistryArn?: string;

    /**
     * Tags associated with the resource.
     */
    Tags?: TagsEntryType[];
  };
}
