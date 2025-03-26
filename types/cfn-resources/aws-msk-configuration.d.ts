/**
 * TypeScript definitions for AWS::MSK::Configuration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::MSK::Configuration
 */
export namespace AWS_MSK_Configuration {
  export type KafkaVersionsListType = {};

  export type LatestRevisionType = {
    CreationTime?: string;

    Description?: string;

    Revision?: number;
  };

  /**
   * Resource Type definition for AWS::MSK::Configuration
   */
  export type ConfigurationResourceType = {
    /**
     * Create-only property
     */
    Name: string;

    Description?: string;

    ServerProperties: string;

    /**
     * Create-only property
     */
    KafkaVersionsList?: KafkaVersionsListType;

    /**
     * Read-only property
     */
    Arn?: string;

    LatestRevision?: LatestRevisionType;
  };
}
