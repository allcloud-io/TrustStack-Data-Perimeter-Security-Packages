/**
 * TypeScript definitions for AWS::IoT::ThingType
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::ThingType
 */
export namespace AWS_IoT_ThingType {
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

  export type PropagatingAttributeType = {
    UserPropertyKey: string;

    ThingAttribute?: string;

    ConnectionAttribute?: string;
  };

  /**
   * Resource Type definition for AWS::IoT::ThingType
   */
  export type ThingTypeResourceType = {
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
    ThingTypeName?: string;

    DeprecateThingType?: boolean;

    ThingTypeProperties?: Record<string, any>;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
