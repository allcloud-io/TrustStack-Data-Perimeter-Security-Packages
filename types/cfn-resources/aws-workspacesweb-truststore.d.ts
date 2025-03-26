/**
 * TypeScript definitions for AWS::WorkSpacesWeb::TrustStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::WorkSpacesWeb::TrustStore Resource Type
 */
export namespace AWS_WorkSpacesWeb_TrustStore {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::WorkSpacesWeb::TrustStore Resource Type
   */
  export type TrustStoreResourceType = {
    /**
     * Read-only property
     */
    AssociatedPortalArns?: string[];

    CertificateList: string[];

    Tags?: TagType[];

    /**
     * Read-only property
     */
    TrustStoreArn?: string;
  };
}
