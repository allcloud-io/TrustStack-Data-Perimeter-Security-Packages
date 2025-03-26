/**
 * TypeScript definitions for AWS::IoT::ThingGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::ThingGroup
 */
export namespace AWS_IoT_ThingGroup {
  export type AttributePayloadType = {
    Attributes?: Record<string, any>;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
     */
    Key: string;

    /**
     * Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::IoT::ThingGroup
   */
  export type ThingGroupResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ThingGroupName?: string;

    /**
     * Create-only property
     */
    ParentGroupName?: string;

    QueryString?: string;

    ThingGroupProperties?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
