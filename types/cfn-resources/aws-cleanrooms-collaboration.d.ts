/**
 * TypeScript definitions for AWS::CleanRooms::Collaboration
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a collaboration between AWS accounts that allows for secure data collaboration
 */
export namespace AWS_CleanRooms_Collaboration {
  export type AnalyticsEngineType = {};

  export type CollaborationQueryLogStatusType = {};

  export type DataEncryptionMetadataType = {
    AllowCleartext: boolean;

    AllowDuplicates: boolean;

    AllowJoinsOnColumnsWithDifferentNames: boolean;

    PreserveNulls: boolean;
  };

  export type MemberAbilityType = {};

  export type MemberAbilitiesType = {};

  export type MLMemberAbilitiesType = {
    CustomMLMemberAbilities: CustomMLMemberAbilitiesType;
  };

  export type CustomMLMemberAbilityType = {};

  export type CustomMLMemberAbilitiesType = {};

  export type MemberSpecificationType = {
    AccountId: string;

    MemberAbilities: MemberAbilitiesType;

    MLMemberAbilities?: MLMemberAbilitiesType;

    DisplayName: NameType;

    PaymentConfiguration?: PaymentConfigurationType;
  };

  export type MemberStatusType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type NameType = {};

  export type PaymentConfigurationType = {
    QueryCompute: QueryComputePaymentConfigType;

    MachineLearning?: MLPaymentConfigType;
  };

  export type QueryComputePaymentConfigType = {
    IsResponsible: boolean;
  };

  export type MLPaymentConfigType = {
    ModelTraining?: ModelTrainingPaymentConfigType;

    ModelInference?: ModelInferencePaymentConfigType;
  };

  export type ModelTrainingPaymentConfigType = {
    IsResponsible: boolean;
  };

  export type ModelInferencePaymentConfigType = {
    IsResponsible: boolean;
  };

  /**
   * Represents a collaboration between AWS accounts that allows for secure data collaboration
   */
  export type CollaborationResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    CollaborationIdentifier?: string;

    /**
     * Create-only property
     */
    CreatorDisplayName: NameType;

    /**
     * Create-only property
     */
    CreatorMemberAbilities: MemberAbilitiesType;

    /**
     * Create-only property
     */
    CreatorMLMemberAbilities?: MLMemberAbilitiesType;

    /**
     * Create-only property
     */
    DataEncryptionMetadata?: DataEncryptionMetadataType;

    Description: string;

    /**
     * Create-only property
     */
    Members: MemberSpecificationType[];

    Name: string;

    /**
     * Create-only property
     */
    QueryLogStatus: CollaborationQueryLogStatusType;

    /**
     * Create-only property
     */
    AnalyticsEngine?: AnalyticsEngineType;

    /**
     * Create-only property
     */
    CreatorPaymentConfiguration?: PaymentConfigurationType;
  };
}
