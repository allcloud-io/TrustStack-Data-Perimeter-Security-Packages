/**
 * TypeScript definitions for AWS::IoT::Thing
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::Thing
 */
export namespace AWS_IoT_Thing {
  export type AttributePayloadType = {
    Attributes?: Record<string, any>;
  };

  /**
   * Resource Type definition for AWS::IoT::Thing
   */
  export type ThingResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    AttributePayload?: AttributePayloadType;

    /**
     * Create-only property
     */
    ThingName?: string;
  };
}
