/**
 * TypeScript definitions for AWS::IVS::PlaybackRestrictionPolicy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IVS::PlaybackRestrictionPolicy.
 */
export namespace AWS_IVS_PlaybackRestrictionPolicy {
  /**
   * A key-value pair to associate with a resource.
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
   * Resource Type definition for AWS::IVS::PlaybackRestrictionPolicy.
   */
  export type PlaybackRestrictionPolicyResourceType = {
    /**
     * Playback-restriction-policy identifier.
     * Read-only property
     */
    Arn?: string;

    /**
     * A list of country codes that control geoblocking restriction. Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).
     * Default: []
     */
    AllowedCountries: string[];

    /**
     * A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin
     * Default: []
     */
    AllowedOrigins: string[];

    /**
     * Whether channel playback is constrained by origin site.
     * Default: false
     */
    EnableStrictOriginEnforcement?: boolean;

    /**
     * Playback-restriction-policy name.
     */
    Name?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
