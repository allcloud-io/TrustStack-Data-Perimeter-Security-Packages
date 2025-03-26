/**
 * TypeScript definitions for AWS::Pinpoint::App
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::App
 */
export namespace AWS_Pinpoint_App {
  /**
   * Resource Type definition for AWS::Pinpoint::App
   */
  export type AppResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: Record<string, any>;

    /**
     * Create-only property
     */
    Name: string;
  };
}
