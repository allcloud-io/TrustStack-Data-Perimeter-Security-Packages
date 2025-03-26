/**
 * TypeScript definitions for AWS::MediaPackageV2::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * <p>Represents an entry point into AWS Elemental MediaPackage for an ABR video content stream sent from an upstream encoder such as AWS Elemental MediaLive. The channel continuously analyzes the content that it receives and prepares it to be distributed to consumers via one or more origin endpoints.</p>
 */
export namespace AWS_MediaPackageV2_Channel {
  /**
   * <p>The ingest domain URL where the source stream should be sent.</p>
   */
  export type IngestEndpointType = {
    /**
     * <p>The system-generated unique identifier for the IngestEndpoint.</p>
     */
    Id?: string;

    /**
     * <p>The ingest domain URL where the source stream should be sent.</p>
     */
    Url?: string;
  };

  /**
   * <p>The configuration for input switching based on the media quality confidence score (MQCS) as provided from AWS Elemental MediaLive.</p>
   */
  export type InputSwitchConfigurationType = {
    /**
     * <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is true. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
     */
    MQCSInputSwitching?: boolean;
  };

  export type InputTypeType = {};

  /**
   * <p>The settings for what common media server data (CMSD) headers AWS Elemental MediaPackage includes in responses to the CDN.</p>
   */
  export type OutputHeaderConfigurationType = {
    /**
     * <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
     */
    PublishMQCS?: boolean;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * <p>Represents an entry point into AWS Elemental MediaPackage for an ABR video content stream sent from an upstream encoder such as AWS Elemental MediaLive. The channel continuously analyzes the content that it receives and prepares it to be distributed to consumers via one or more origin endpoints.</p>
   */
  export type ChannelResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) associated with the resource.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ChannelGroupName: string;

    /**
     * Create-only property
     */
    ChannelName: string;

    /**
     * <p>The date and time the channel was created.</p>
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * <p>Enter any descriptive text that helps you to identify the channel.</p>
     */
    Description?: string;

    /**
     * <p>The list of ingest endpoints.</p>
     * Read-only property
     */
    IngestEndpoints?: IngestEndpointType[];

    InputSwitchConfiguration?: InputSwitchConfigurationType;

    /**
     * Create-only property
     */
    InputType?: InputTypeType;

    /**
     * <p>The date and time the channel was modified.</p>
     * Read-only property
     */
    ModifiedAt?: string;

    /**
     * Read-only property
     */
    IngestEndpointUrls?: string[];

    OutputHeaderConfiguration?: OutputHeaderConfigurationType;

    Tags?: TagType[];
  };
}
