/**
 * TypeScript definitions for AWS::Cognito::ManagedLoginBranding
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cognito::ManagedLoginBranding
 */
export namespace AWS_Cognito_ManagedLoginBranding {
  export type ManagedLoginBrandingIdTypeType = {};

  export type CategoryTypeType = {};

  export type ColorModeTypeType = {};

  export type ExtensionTypeType = {};

  export type BytesTypeType = {};

  export type ResourceIdTypeType = {};

  export type AssetTypeType = {
    Category: CategoryTypeType;

    ColorMode: ColorModeTypeType;

    Extension: ExtensionTypeType;

    Bytes?: BytesTypeType;

    ResourceId?: ResourceIdTypeType;
  };

  export type AssetListType = {};

  /**
   * Resource Type definition for AWS::Cognito::ManagedLoginBranding
   */
  export type ManagedLoginBrandingResourceType = {
    /**
     * Create-only property
     */
    UserPoolId: string;

    /**
     * Create-only property
     */
    ClientId?: string;

    UseCognitoProvidedValues?: boolean;

    Settings?: Record<string, any>;

    Assets?: AssetListType;

    /**
     * Read-only property
     */
    ManagedLoginBrandingId?: ManagedLoginBrandingIdTypeType;

    ReturnMergedResources?: boolean;
  };
}
