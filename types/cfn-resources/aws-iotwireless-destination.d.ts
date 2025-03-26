/**
 * TypeScript definitions for AWS::IoTWireless::Destination
 * Generated from CloudFormation Resource Schema
 */

/**
 * Destination's resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_IoTWireless_Destination {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Destination's resource schema demonstrating some basic constructs and validation rules.
   */
  export type DestinationResourceType = {
    /**
     * Unique name of destination
     * Create-only property
     */
    Name: string;

    /**
     * Destination expression
     */
    Expression: string;

    /**
     * Must be RuleName
     */
    ExpressionType: string;

    /**
     * Destination description
     */
    Description?: string;

    /**
     * A list of key-value pairs that contain metadata for the destination.
     */
    Tags?: TagType[];

    /**
     * AWS role ARN that grants access
     */
    RoleArn?: string;

    /**
     * Destination arn. Returned after successful create.
     * Read-only property
     */
    Arn?: string;
  };
}
