/**
 * TypeScript definitions for AWS::Omics::ReferenceStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Omics::ReferenceStore Resource Type
 */
export namespace AWS_Omics_ReferenceStore {
  export type EncryptionTypeType = {};

  /**
   * Server-side encryption (SSE) settings for a store.
   */
  export type SseConfigType = {
    Type: EncryptionTypeType;

    /**
     * An encryption key ARN.
     */
    KeyArn?: string;
  };

  export type TagMapType = {};

  /**
   * Definition of AWS::Omics::ReferenceStore Resource Type
   */
  export type ReferenceStoreResourceType = {
    /**
     * The store's ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * When the store was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * A description for the store.
     * Create-only property
     */
    Description?: string;

    /**
     * A name for the store.
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    ReferenceStoreId?: string;

    /**
     * Create-only property
     */
    SseConfig?: SseConfigType;

    /**
     * Create-only property
     */
    Tags?: TagMapType;
  };
}
