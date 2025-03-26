/**
 * TypeScript definitions for AWS::EventSchemas::Discoverer
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EventSchemas::Discoverer
 */
export namespace AWS_EventSchemas_Discoverer {
  export type TagsEntryType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::EventSchemas::Discoverer
   */
  export type DiscovererResourceType = {
    /**
     * The ARN of the discoverer.
     * Read-only property
     */
    DiscovererArn?: string;

    /**
     * The Id of the discoverer.
     * Read-only property
     */
    DiscovererId?: string;

    /**
     * A description for the discoverer.
     */
    Description?: string;

    /**
     * The ARN of the event bus.
     * Create-only property
     */
    SourceArn: string;

    /**
     * Defines whether event schemas from other accounts are discovered. Default is True.
     * Default: true
     */
    CrossAccount?: boolean;

    /**
     * Defines the current state of the discoverer.
     * Read-only property
     */
    State?: string;

    /**
     * Tags associated with the resource.
     */
    Tags?: TagsEntryType[];
  };
}
