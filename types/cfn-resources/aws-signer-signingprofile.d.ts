/**
 * TypeScript definitions for AWS::Signer::SigningProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * A signing profile is a signing template that can be used to carry out a pre-defined signing job.
 */
export namespace AWS_Signer_SigningProfile {
  export type PlatformIdType = {};

  export type ArnType = {};

  export type ProfileNameType = {};

  export type ProfileVersionType = {};

  export type SignatureValidityPeriodType = {
    Value?: number;

    Type?: string;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * A signing profile is a signing template that can be used to carry out a pre-defined signing job.
   */
  export type SigningProfileResourceType = {
    /**
     * A name for the signing profile. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the signing profile name.
     * Read-only property
     * Create-only property
     */
    ProfileName?: ProfileNameType;

    /**
     * A version for the signing profile. AWS Signer generates a unique version for each profile of the same profile name.
     * Read-only property
     */
    ProfileVersion?: ProfileVersionType;

    /**
     * The Amazon Resource Name (ARN) of the specified signing profile.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * The Amazon Resource Name (ARN) of the specified signing profile version.
     * Read-only property
     */
    ProfileVersionArn?: ArnType;

    /**
     * Signature validity period of the profile.
     * Create-only property
     */
    SignatureValidityPeriod?: SignatureValidityPeriodType;

    /**
     * The ID of the target signing platform.
     * Create-only property
     */
    PlatformId: PlatformIdType;

    /**
     * A list of tags associated with the signing profile.
     */
    Tags?: TagType[];
  };
}
