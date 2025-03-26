/**
 * TypeScript definitions for AWS::ServiceDiscovery::Instance
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceDiscovery::Instance
 */
export namespace AWS_ServiceDiscovery_Instance {
  /**
   * Resource Type definition for AWS::ServiceDiscovery::Instance
   */
  export type InstanceResourceType = {
    InstanceAttributes: Record<string, any>;

    /**
     * Read-only property
     * Create-only property
     */
    InstanceId?: string;

    /**
     * Create-only property
     */
    ServiceId: string;
  };
}
