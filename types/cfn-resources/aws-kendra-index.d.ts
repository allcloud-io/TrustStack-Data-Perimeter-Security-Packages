/**
 * TypeScript definitions for AWS::Kendra::Index
 * Generated from CloudFormation Resource Schema
 */

/**
 * A Kendra index
 */
export namespace AWS_Kendra_Index {
  export type ServerSideEncryptionConfigurationType = {
    KmsKeyId?: KmsKeyIdType;
  };

  export type DescriptionType = {};

  export type KmsKeyIdType = {};

  /**
   * A label for tagging Kendra resources
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * List of tags
   */
  export type TagListType = {};

  export type ImportanceType = {};

  export type FreshnessType = {};

  export type DurationType = {};

  export type OrderType = {};

  export type RelevanceType = {
    Freshness?: FreshnessType;

    Importance?: ImportanceType;

    Duration?: DurationType;

    RankOrder?: OrderType;

    ValueImportanceItems?: ValueImportanceItemsType;
  };

  export type ValueImportanceItemsType = {};

  export type ValueImportanceItemType = {
    Key?: ValueImportanceItemKeyType;

    Value?: ImportanceType;
  };

  export type ValueImportanceItemKeyType = {};

  export type SearchType = {
    Facetable?: boolean;

    Searchable?: boolean;

    Displayable?: boolean;

    Sortable?: boolean;
  };

  export type DocumentMetadataConfigurationNameType = {};

  export type DocumentAttributeValueTypeType = {};

  export type DocumentMetadataConfigurationType = {
    Name: DocumentMetadataConfigurationNameType;

    Type: DocumentAttributeValueTypeType;

    Relevance?: RelevanceType;

    Search?: SearchType;
  };

  export type DocumentMetadataConfigurationListType = {};

  export type StorageCapacityUnitsType = {};

  export type QueryCapacityUnitsType = {};

  export type CapacityUnitsConfigurationType = {
    StorageCapacityUnits: StorageCapacityUnitsType;

    QueryCapacityUnits: QueryCapacityUnitsType;
  };

  /**
   * Edition of index
   */
  export type EditionType = {};

  /**
   * Name of index
   */
  export type NameType = {};

  /**
   * Role Arn
   */
  export type RoleArnType = {};

  /**
   * Unique ID of index
   */
  export type IdType = {};

  export type ArnType = {};

  export type UserContextPolicyType = {};

  export type UserNameAttributeFieldType = {};

  export type GroupAttributeFieldType = {};

  export type KeyLocationType = {};

  export type IssuerType = {};

  export type ClaimRegexType = {};

  export type UrlType = {};

  export type JsonTokenTypeConfigurationType = {
    UserNameAttributeField: UserNameAttributeFieldType;

    GroupAttributeField: GroupAttributeFieldType;
  };

  export type JwtTokenTypeConfigurationType = {
    KeyLocation: KeyLocationType;

    URL?: UrlType;

    SecretManagerArn?: RoleArnType;

    UserNameAttributeField?: UserNameAttributeFieldType;

    GroupAttributeField?: GroupAttributeFieldType;

    Issuer?: IssuerType;

    ClaimRegex?: ClaimRegexType;
  };

  export type UserTokenConfigurationType = {
    JwtTokenTypeConfiguration?: JwtTokenTypeConfigurationType;

    JsonTokenTypeConfiguration?: JsonTokenTypeConfigurationType;
  };

  export type UserTokenConfigurationListType = {};

  /**
   * A Kendra index
   */
  export type IndexResourceType = {
    /**
     * Read-only property
     */
    Id?: IdType;

    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * A description for the index
     */
    Description?: DescriptionType;

    /**
     * Server side encryption configuration
     * Create-only property
     */
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfigurationType;

    /**
     * Tags for labeling the index
     */
    Tags?: TagListType;

    Name: NameType;

    RoleArn: RoleArnType;

    /**
     * Create-only property
     */
    Edition: EditionType;

    /**
     * Document metadata configurations
     */
    DocumentMetadataConfigurations?: DocumentMetadataConfigurationListType;

    /**
     * Capacity units
     */
    CapacityUnits?: CapacityUnitsConfigurationType;

    UserContextPolicy?: UserContextPolicyType;

    UserTokenConfigurations?: UserTokenConfigurationListType;
  };
}
