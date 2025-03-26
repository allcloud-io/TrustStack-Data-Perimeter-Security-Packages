/**
 * TypeScript definitions for AWS::Omics::SequenceStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Omics::SequenceStore Resource Type
 */
export namespace AWS_Omics_SequenceStore {
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
   * Definition of AWS::Omics::SequenceStore Resource Type
   */
  export type SequenceStoreResourceType = {
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
     * An S3 URI representing the bucket and folder to store failed read set uploads.
     * Create-only property
     */
    FallbackLocation?: string;

    /**
     * Read-only property
     */
    SequenceStoreId?: string;

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
