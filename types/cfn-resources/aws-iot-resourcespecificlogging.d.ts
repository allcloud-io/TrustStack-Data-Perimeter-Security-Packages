/**
 * TypeScript definitions for AWS::IoT::ResourceSpecificLogging
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource-specific logging allows you to specify a logging level for a specific thing group.
 */
export namespace AWS_IoT_ResourceSpecificLogging {
  /**
   * Resource-specific logging allows you to specify a logging level for a specific thing group.
   */
  export type ResourceSpecificLoggingResourceType = {
    /**
     * The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID, or EVENT_TYPE.
     * Create-only property
     */
    TargetType: string;

    /**
     * The target name.
     * Create-only property
     */
    TargetName: string;

    /**
     * The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
     */
    LogLevel: string;

    /**
     * Unique Id for a Target (TargetType:TargetName), this will be internally built to serve as primary identifier for a log target.
     * Read-only property
     */
    TargetId?: string;
  };
}
