/**
 * TypeScript definitions for AWS::Pinpoint::EventStream
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::EventStream
 */
export namespace AWS_Pinpoint_EventStream {
  /**
   * Resource Type definition for AWS::Pinpoint::EventStream
   */
  export type EventStreamResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    ApplicationId: string;

    DestinationStreamArn: string;

    RoleArn: string;
  };
}
