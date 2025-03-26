/**
 * TypeScript definitions for AWS::MediaLive::Multiplexprogram
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::MediaLive::Multiplexprogram
 */
export namespace AWS_MediaLive_Multiplexprogram {
  /**
   * Multiplex Program settings configuration.
   */
  export type MultiplexProgramSettingsType = {
    PreferredChannelPipeline?: PreferredChannelPipelineType;

    /**
     * Unique program number.
     */
    ProgramNumber: number;

    /**
     * Transport stream service descriptor configuration for the Multiplex program.
     */
    ServiceDescriptor?: MultiplexProgramServiceDescriptorType;

    /**
     * Program video settings configuration.
     */
    VideoSettings?: MultiplexVideoSettingsType;
  };

  /**
   * Indicates which pipeline is preferred by the multiplex for program ingest.
   * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
   * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
   * it will not switch back to the other pipeline based on it recovering to a healthy state,
   * it will only switch if the active pipeline becomes unhealthy.
   *
   */
  export type PreferredChannelPipelineType = {};

  /**
   * Transport stream service descriptor configuration for the Multiplex program.
   */
  export type MultiplexProgramServiceDescriptorType = {
    /**
     * Name of the provider.
     */
    ProviderName: string;

    /**
     * Name of the service.
     */
    ServiceName: string;
  };

  /**
   * The video configuration for each program in a multiplex.
   */
  export type MultiplexVideoSettingsType = {};

  /**
   * Statmux rate control settings
   */
  export type MultiplexStatmuxVideoSettingsType = {
    /**
     * Maximum statmux bitrate.
     */
    MaximumBitrate?: number;

    /**
     * Minimum statmux bitrate.
     */
    MinimumBitrate?: number;

    /**
     * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.  Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
     */
    Priority?: number;
  };

  /**
   * Packet identifiers map for a given Multiplex program.
   */
  export type MultiplexProgramPacketIdentifiersMapType = {
    AudioPids?: number[];

    DvbSubPids?: number[];

    DvbTeletextPid?: number;

    EtvPlatformPid?: number;

    EtvSignalPid?: number;

    KlvDataPids?: number[];

    PcrPid?: number;

    PmtPid?: number;

    PrivateMetadataPid?: number;

    Scte27Pids?: number[];

    Scte35Pid?: number;

    TimedMetadataPid?: number;

    VideoPid?: number;
  };

  /**
   * The current source for one of the pipelines in the multiplex.
   */
  export type MultiplexProgramPipelineDetailType = {
    /**
     * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
     */
    ActiveChannelPipeline?: string;

    /**
     * Identifies a specific pipeline in the multiplex.
     */
    PipelineId?: string;
  };

  /**
   * Resource schema for AWS::MediaLive::Multiplexprogram
   */
  export type MultiplexprogramResourceType = {
    /**
     * The MediaLive channel associated with the program.
     * Read-only property
     */
    ChannelId?: string;

    /**
     * The ID of the multiplex that the program belongs to.
     * Create-only property
     */
    MultiplexId?: string;

    /**
     * The settings for this multiplex program.
     */
    MultiplexProgramSettings?: MultiplexProgramSettingsType;

    /**
     * The settings for this multiplex program.
     */
    PreferredChannelPipeline?: PreferredChannelPipelineType;

    /**
     * The packet identifier map for this multiplex program.
     */
    PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMapType;

    /**
     * Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
     */
    PipelineDetails?: MultiplexProgramPipelineDetailType[];

    /**
     * The name of the multiplex program.
     * Create-only property
     */
    ProgramName?: string;
  };
}
