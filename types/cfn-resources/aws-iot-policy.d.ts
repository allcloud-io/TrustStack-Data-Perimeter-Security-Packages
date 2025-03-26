/**
 * TypeScript definitions for AWS::IoT::Policy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoT::Policy
 */
export namespace AWS_IoT_Policy {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::IoT::Policy
   */
  export type PolicyResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    PolicyDocument: Record<string, any> | string;

    /**
     * Create-only property
     */
    PolicyName?: string;

    Tags?: TagType[];
  };
}
