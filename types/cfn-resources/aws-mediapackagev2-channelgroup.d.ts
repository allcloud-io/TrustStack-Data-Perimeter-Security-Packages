/**
 * TypeScript definitions for AWS::MediaPackageV2::ChannelGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * <p>Represents a channel group that facilitates the grouping of multiple channels.</p>
 */
export namespace AWS_MediaPackageV2_ChannelGroup {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * <p>Represents a channel group that facilitates the grouping of multiple channels.</p>
   */
  export type ChannelGroupResourceType = {
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
     * <p>The date and time the channel group was created.</p>
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * <p>Enter any descriptive text that helps you to identify the channel group.</p>
     */
    Description?: string;

    /**
     * <p>The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
     * Read-only property
     */
    EgressDomain?: string;

    /**
     * <p>The date and time the channel group was modified.</p>
     * Read-only property
     */
    ModifiedAt?: string;

    Tags?: TagType[];
  };
}
