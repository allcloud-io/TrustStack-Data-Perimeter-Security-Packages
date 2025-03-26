/**
 * TypeScript definitions for AWS::RolesAnywhere::Profile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RolesAnywhere::Profile Resource Type
 */
export namespace AWS_RolesAnywhere_Profile {
  export type AttributeMappingType = {
    MappingRules: MappingRuleType[];

    CertificateField: CertificateFieldType;
  };

  export type MappingRuleType = {
    Specifier: string;
  };

  export type CertificateFieldType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::RolesAnywhere::Profile Resource Type
   */
  export type ProfileResourceType = {
    DurationSeconds?: number;

    Enabled?: boolean;

    ManagedPolicyArns?: string[];

    Name: string;

    /**
     * Read-only property
     */
    ProfileArn?: string;

    /**
     * Read-only property
     */
    ProfileId?: string;

    /**
     * Create-only property
     */
    RequireInstanceProperties?: boolean;

    RoleArns: string[];

    SessionPolicy?: string;

    Tags?: TagType[];

    AttributeMappings?: AttributeMappingType[];

    AcceptRoleSessionName?: boolean;
  };
}
