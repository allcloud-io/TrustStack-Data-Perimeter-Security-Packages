/**
 * TypeScript definitions for AWS::AmazonMQ::ConfigurationAssociation
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
 */
export namespace AWS_AmazonMQ_ConfigurationAssociation {
  export type ConfigurationIdType = {
    Revision: number;

    Id: string;
  };

  /**
   * Resource Type definition for AWS::AmazonMQ::ConfigurationAssociation
   */
  export type ConfigurationAssociationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Broker: string;

    Configuration: ConfigurationIdType;
  };
}
