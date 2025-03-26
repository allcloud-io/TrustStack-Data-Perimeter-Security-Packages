/**
 * TypeScript definitions for AWS::Omics::AnnotationStore
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Omics::AnnotationStore Resource Type
 */
export namespace AWS_Omics_AnnotationStore {
  export type AnnotationTypeType = {};

  export type EncryptionTypeType = {};

  export type FormatToHeaderType = {};

  export type FormatToHeaderKeyType = {};

  export type ReferenceItemType = {
    ReferenceArn: string;
  };

  export type SchemaItemType = {};

  export type SchemaValueTypeType = {};

  export type SseConfigType = {
    Type: EncryptionTypeType;

    KeyArn?: string;
  };

  export type StoreFormatType = {};

  export type StoreOptionsType = {};

  export type StoreStatusType = {};

  export type TagMapType = {};

  export type TsvStoreOptionsType = {
    AnnotationType?: AnnotationTypeType;

    FormatToHeader?: FormatToHeaderType;

    Schema?: SchemaItemType[];
  };

  /**
   * Definition of AWS::Omics::AnnotationStore Resource Type
   */
  export type AnnotationStoreResourceType = {
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
    Reference?: ReferenceItemType;

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
     * Create-only property
     */
    StoreFormat: StoreFormatType;

    /**
     * Create-only property
     */
    StoreOptions?: StoreOptionsType;

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
