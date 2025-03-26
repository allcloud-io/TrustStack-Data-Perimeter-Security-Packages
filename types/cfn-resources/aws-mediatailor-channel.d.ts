/**
 * TypeScript definitions for AWS::MediaTailor::Channel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaTailor::Channel Resource Type
 */
export namespace AWS_MediaTailor_Channel {
  /**
   * <p>Dash manifest configuration parameters.</p>
   */
  export type DashPlaylistSettingsType = {
    /**
     * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
     */
    ManifestWindowSeconds?: number;

    /**
     * <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
     */
    MinBufferTimeSeconds?: number;

    /**
     * <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
     */
    MinUpdatePeriodSeconds?: number;

    /**
     * <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
     */
    SuggestedPresentationDelaySeconds?: number;
  };

  /**
   * <p>HLS playlist configuration parameters.</p>
   */
  export type HlsPlaylistSettingsType = {
    /**
     * <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
     */
    ManifestWindowSeconds?: number;

    /**
     * <p>Determines the type of SCTE 35 tags to use in ad markup. Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>
     */
    AdMarkupType?: AdMarkupTypeType[];
  };

  /**
   * <p>The log configuration for the channel.</p>
   */
  export type LogConfigurationForChannelType = {
    /**
     * <p>The log types.</p>
     */
    LogTypes?: LogTypeType[];
  };

  export type LogTypeType = {};

  export type PlaybackModeType = {};

  export type AdMarkupTypeType = {};

  /**
   * <p>The output configuration for this channel.</p>
   */
  export type RequestOutputItemType = {
    DashPlaylistSettings?: DashPlaylistSettingsType;

    HlsPlaylistSettings?: HlsPlaylistSettingsType;

    /**
     * <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
     */
    ManifestName: string;

    /**
     * <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>
     */
    SourceGroup: string;
  };

  /**
   * <p>Slate VOD source configuration.</p>
   */
  export type SlateSourceType = {
    /**
     * <p>The name of the source location where the slate VOD source is stored.</p>
     */
    SourceLocationName?: string;

    /**
     * <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>
     */
    VodSourceName?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type TierType = {};

  /**
   * <p>The configuration for time-shifted viewing.</p>
   */
  export type TimeShiftConfigurationType = {
    /**
     * <p>The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>
     */
    MaxTimeDelaySeconds: number;
  };

  /**
   * Definition of AWS::MediaTailor::Channel Resource Type
   */
  export type ChannelResourceType = {
    /**
     * <p>The ARN of the channel.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * <p>The list of audiences defined in channel.</p>
     */
    Audiences?: string[];

    /**
     * Create-only property
     */
    ChannelName: string;

    FillerSlate?: SlateSourceType;

    LogConfiguration?: LogConfigurationForChannelType;

    /**
     * <p>The channel's output properties.</p>
     */
    Outputs: RequestOutputItemType[];

    PlaybackMode: PlaybackModeType;

    /**
     * The tags to assign to the channel.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    Tier?: TierType;

    TimeShiftConfiguration?: TimeShiftConfigurationType;
  };
}
