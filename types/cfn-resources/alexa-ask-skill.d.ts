/**
 * TypeScript definitions for Alexa::ASK::Skill
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for Alexa::ASK::Skill
 */
export namespace Alexa_ASK_Skill {
  export type AuthenticationConfigurationType = {
    ClientId: string;

    RefreshToken: string;

    ClientSecret: string;
  };

  export type OverridesType = {
    Manifest?: Record<string, any>;
  };

  export type SkillPackageType = {
    S3BucketRole?: string;

    Overrides?: OverridesType;

    S3ObjectVersion?: string;

    S3Bucket: string;

    S3Key: string;
  };

  /**
   * Resource Type definition for Alexa::ASK::Skill
   */
  export type SkillResourceType = {
    AuthenticationConfiguration: AuthenticationConfigurationType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    VendorId: string;

    SkillPackage: SkillPackageType;
  };
}
