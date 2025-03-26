/**
 * TypeScript definitions for AWS::NetworkManager::Site
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::NetworkManager::Site type describes a site.
 */
export namespace AWS_NetworkManager_Site {
  /**
   * A key-value pair to associate with a site resource.
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
   * The location of the site
   */
  export type LocationType = {
    /**
     * The physical address.
     */
    Address?: string;

    /**
     * The latitude.
     */
    Latitude?: string;

    /**
     * The longitude.
     */
    Longitude?: string;
  };

  /**
   * The AWS::NetworkManager::Site type describes a site.
   */
  export type SiteResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the site.
     * Read-only property
     */
    SiteArn?: string;

    /**
     * The ID of the site.
     * Read-only property
     */
    SiteId?: string;

    /**
     * The description of the site.
     */
    Description?: string;

    /**
     * The tags for the site.
     */
    Tags?: TagType[];

    /**
     * The ID of the global network.
     * Create-only property
     */
    GlobalNetworkId: string;

    /**
     * The location of the site.
     */
    Location?: LocationType;

    /**
     * The date and time that the device was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The state of the site.
     * Read-only property
     */
    State?: string;
  };
}
