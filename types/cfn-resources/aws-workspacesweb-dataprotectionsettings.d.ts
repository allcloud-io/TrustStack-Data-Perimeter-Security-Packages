/**
 * TypeScript definitions for AWS::WorkSpacesWeb::DataProtectionSettings
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::DataProtectionSettings Resource Type
 */
export namespace AWS_WorkSpacesWeb_DataProtectionSettings {
  export type CustomPatternType = {
    PatternName: string;

    PatternRegex: string;

    PatternDescription?: string;

    KeywordRegex?: string;
  };

  export type EncryptionContextMapType = {};

  export type InlineRedactionConfigurationType = {
    InlineRedactionPatterns: InlineRedactionPatternType[];

    GlobalEnforcedUrls?: string[];

    GlobalExemptUrls?: string[];

    GlobalConfidenceLevel?: number;
  };

  export type InlineRedactionPatternType = {
    BuiltInPatternId?: string;

    CustomPattern?: CustomPatternType;

    RedactionPlaceHolder: RedactionPlaceHolderType;

    EnforcedUrls?: string[];

    ExemptUrls?: string[];

    ConfidenceLevel?: number;
  };

  export type RedactionPlaceHolderType = {
    RedactionPlaceHolderType: RedactionPlaceHolderTypeType;

    RedactionPlaceHolderText?: string;
  };

  export type RedactionPlaceHolderTypeType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::DataProtectionSettings Resource Type
   */
  export type DataProtectionSettingsResourceType = {
    /**
     * Create-only property
     */
    AdditionalEncryptionContext?: EncryptionContextMapType;

    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    /**
     * Read-only property
     */
    CreationDate?: string;

    /**
     * Create-only property
     */
    CustomerManagedKey?: string;

    /**
     * Read-only property
     */
    DataProtectionSettingsArn?: string;

    Description?: string;

    DisplayName?: string;

    InlineRedactionConfiguration?: InlineRedactionConfigurationType;

    Tags?: TagType[];
  };
}
