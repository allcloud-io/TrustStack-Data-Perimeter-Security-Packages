/**
 * TypeScript definitions for AWS::NetworkManager::Link
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::NetworkManager::Link type describes a link.
 */
export namespace AWS_NetworkManager_Link {
  /**
   * A key-value pair to associate with a link resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * The bandwidth for the link.
   */
  export type BandwidthType = {
    /**
     * Download speed in Mbps.
     */
    DownloadSpeed?: number;

    /**
     * Upload speed in Mbps.
     */
    UploadSpeed?: number;
  };

  /**
   * The AWS::NetworkManager::Link type describes a link.
   */
  export type LinkResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the link.
     * Read-only property
     */
    LinkArn?: string;

    /**
     * The ID of the link.
     * Read-only property
     */
    LinkId?: string;

    /**
     * The ID of the global network.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The ID of the site
     * Create-only property
     */
    SiteId: string;

    /**
     * The Bandwidth for the link.
     */
    Bandwidth: BandwidthType;

    /**
     * The provider of the link.
     */
    Provider?: string;

    /**
     * The description of the link.
     */
    Description?: string;

    /**
     * The tags for the link.
     */
    Tags?: TagType[];

    /**
     * The type of the link.
     */
    Type?: string;

    /**
     * The date and time that the device was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The state of the link.
     * Read-only property
     */
    State?: string;
  };
}
