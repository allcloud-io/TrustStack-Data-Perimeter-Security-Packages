/**
 * TypeScript definitions for AWS::Transfer::Profile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Transfer::Profile
 */
export namespace AWS_Transfer_Profile {
  /**
   * Creates a key-value pair for a specific resource.
   */
  export type TagType = {
    /**
     * The name assigned to the tag that you create.
     */
    Key: string;

    /**
     * Contains one or more values that you assigned to the key name you create.
     */
    Value: string;
  };

  /**
   * A unique identifier for the certificate.
   */
  export type CertificateIdType = {};

  /**
   * Resource Type definition for AWS::Transfer::Profile
   */
  export type ProfileResourceType = {
    /**
     * AS2 identifier agreed with a trading partner.
     */
    As2Id: string;

    /**
     * Enum specifying whether the profile is local or associated with a trading partner.
     * Create-only property
     */
    ProfileType: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * List of the certificate IDs associated with this profile to be used for encryption and signing of AS2 messages.
     */
    CertificateIds?: CertificateIdType[];

    /**
     * Specifies the unique Amazon Resource Name (ARN) for the profile.
     * Read-only property
     */
    Arn?: string;

    /**
     * A unique identifier for the profile
     * Read-only property
     */
    ProfileId?: string;
  };
}
