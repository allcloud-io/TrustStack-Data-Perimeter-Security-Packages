/**
 * TypeScript definitions for AWS::MediaPackage::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaPackage::Channel
 */
export namespace AWS_MediaPackage_Channel {
  /**
   * An HTTP Live Streaming (HLS) ingest resource configuration.
   */
  export type HlsIngestType = {
    /**
     * A list of endpoints to which the source stream should be sent.
     */
    ingestEndpoints?: IngestEndpointType[];
  };

  /**
   * An endpoint for ingesting source content for a Channel.
   */
  export type IngestEndpointType = {
    /**
     * The system generated unique identifier for the IngestEndpoint
     */
    Id: string;

    /**
     * The system generated username for ingest authentication.
     */
    Username: string;

    /**
     * The system generated password for ingest authentication.
     */
    Password: string;

    /**
     * The ingest URL to which the source stream should be sent.
     */
    Url: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type LogConfigurationType = {
    /**
     * Sets a custom AWS CloudWatch log group name for access logs. If a log group name isn't specified, the defaults are used: /aws/MediaPackage/EgressAccessLogs for egress access logs and /aws/MediaPackage/IngressAccessLogs for ingress access logs.
     */
    LogGroupName?: string;
  };

  /**
   * Resource schema for AWS::MediaPackage::Channel
   */
  export type ChannelResourceType = {
    /**
     * The Amazon Resource Name (ARN) assigned to the Channel.
     * Read-only property
     */
    Arn?: string;

    /**
     * The ID of the Channel.
     * Create-only property
     */
    Id: string;

    /**
     * A short text description of the Channel.
     */
    Description?: string;

    /**
     * An HTTP Live Streaming (HLS) ingest resource configuration.
     */
    HlsIngest?: HlsIngestType;

    /**
     * A collection of tags associated with a resource
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The configuration parameters for egress access logging.
     */
    EgressAccessLogs?: LogConfigurationType;

    /**
     * The configuration parameters for egress access logging.
     */
    IngressAccessLogs?: LogConfigurationType;
  };
}
