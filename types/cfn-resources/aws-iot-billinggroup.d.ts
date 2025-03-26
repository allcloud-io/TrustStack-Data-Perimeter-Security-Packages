/**
 * TypeScript definitions for AWS::IoT::BillingGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::BillingGroup
 */
export namespace AWS_IoT_BillingGroup {
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
   * Resource Type definition for AWS::IoT::BillingGroup
   */
  export type BillingGroupResourceType = {
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
    BillingGroupName?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    BillingGroupProperties?: Record<string, any>;
  };
}
