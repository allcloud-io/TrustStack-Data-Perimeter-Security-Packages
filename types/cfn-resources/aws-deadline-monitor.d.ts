/**
 * TypeScript definitions for AWS::Deadline::Monitor
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::Monitor Resource Type
 */
export namespace AWS_Deadline_Monitor {
  /**
   * Definition of AWS::Deadline::Monitor Resource Type
   */
  export type MonitorResourceType = {
    DisplayName: string;

    /**
     * Read-only property
     */
    IdentityCenterApplicationArn?: string;

    /**
     * Create-only property
     */
    IdentityCenterInstanceArn: string;

    /**
     * Read-only property
     */
    MonitorId?: string;

    RoleArn: string;

    Subdomain: string;

    /**
     * Read-only property
     */
    Url?: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
