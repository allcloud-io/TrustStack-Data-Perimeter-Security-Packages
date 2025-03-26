/**
 * TypeScript definitions for AWS::WorkSpacesWeb::IdentityProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::IdentityProvider Resource Type
 */
export namespace AWS_WorkSpacesWeb_IdentityProvider {
  export type IdentityProviderDetailsType = {};

  export type IdentityProviderTypeType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::IdentityProvider Resource Type
   */
  export type IdentityProviderResourceType = {
    /**
     * Read-only property
     */
    IdentityProviderArn?: string;

    IdentityProviderDetails: IdentityProviderDetailsType;

    IdentityProviderName: string;

    IdentityProviderType: IdentityProviderTypeType;

    /**
     * Create-only property
     */
    PortalArn?: string;

    Tags?: TagType[];
  };
}
