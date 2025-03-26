/**
 * TypeScript definitions for AWS::VpcLattice::AccessLogSubscription
 * Generated from CloudFormation Resource Schema
 */

/**
 * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network.
 */
export namespace AWS_VpcLattice_AccessLogSubscription {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner can use the access logs to audit the services in the network. The service network owner will only see access logs from clients and services that are associated with their service network. Access log entries represent traffic originated from VPCs associated with that network.
   */
  export type AccessLogSubscriptionResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    DestinationArn: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    ResourceArn?: string;

    /**
     * Read-only property
     */
    ResourceId?: string;

    /**
     * Create-only property
     */
    ResourceIdentifier?: string;

    ServiceNetworkLogType?: string;

    Tags?: TagType[];
  };
}
