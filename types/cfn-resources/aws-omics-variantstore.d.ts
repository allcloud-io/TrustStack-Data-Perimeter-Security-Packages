/**
 * TypeScript definitions for AWS::Omics::VariantStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Omics::VariantStore Resource Type
 */
export namespace AWS_Omics_VariantStore {
  export type EncryptionTypeType = {};

  export type ReferenceItemType = {
    ReferenceArn: string;
  };

  export type SseConfigType = {
    Type: EncryptionTypeType;

    KeyArn?: string;
  };

  export type StoreStatusType = {};

  export type TagMapType = {};

  /**
   * Definition of AWS::Omics::VariantStore Resource Type
   */
  export type VariantStoreResourceType = {
    /**
     * Read-only property
     */
    CreationTime?: string;

    Description?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    Reference: ReferenceItemType;

    /**
     * Create-only property
     */
    SseConfig?: SseConfigType;

    /**
     * Read-only property
     */
    Status?: StoreStatusType;

    /**
     * Read-only property
     */
    StatusMessage?: string;

    /**
     * Read-only property
     */
    StoreArn?: string;

    /**
     * Read-only property
     */
    StoreSizeBytes?: number;

    /**
     * Create-only property
     */
    Tags?: TagMapType;

    /**
     * Read-only property
     */
    UpdateTime?: string;
  };
}
