/**
 * TypeScript definitions for AWS::CleanRooms::Membership
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents an AWS account that is a part of a collaboration
 */
export namespace AWS_CleanRooms_Membership {
  export type MembershipQueryLogStatusType = {};

  export type MembershipStatusType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type ResultFormatType = {};

  export type ProtectedQueryS3OutputConfigurationType = {
    ResultFormat: ResultFormatType;

    Bucket: string;

    KeyPrefix?: string;

    SingleFileOutput?: boolean;
  };

  export type MembershipProtectedQueryOutputConfigurationType = {
    S3: ProtectedQueryS3OutputConfigurationType;
  };

  export type MembershipProtectedQueryResultConfigurationType = {
    OutputConfiguration: MembershipProtectedQueryOutputConfigurationType;

    RoleArn?: string;
  };

  export type MembershipPaymentConfigurationType = {
    QueryCompute: MembershipQueryComputePaymentConfigType;

    MachineLearning?: MembershipMLPaymentConfigType;
  };

  export type MembershipQueryComputePaymentConfigType = {
    IsResponsible: boolean;
  };

  export type MembershipMLPaymentConfigType = {
    ModelTraining?: MembershipModelTrainingPaymentConfigType;

    ModelInference?: MembershipModelInferencePaymentConfigType;
  };

  export type MembershipModelTrainingPaymentConfigType = {
    IsResponsible: boolean;
  };

  export type MembershipModelInferencePaymentConfigType = {
    IsResponsible: boolean;
  };

  /**
   * Represents an AWS account that is a part of a collaboration
   */
  export type MembershipResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this cleanrooms membership.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    CollaborationArn?: string;

    /**
     * Read-only property
     */
    CollaborationCreatorAccountId?: string;

    /**
     * Create-only property
     */
    CollaborationIdentifier: string;

    /**
     * Read-only property
     */
    MembershipIdentifier?: string;

    QueryLogStatus: MembershipQueryLogStatusType;

    DefaultResultConfiguration?: MembershipProtectedQueryResultConfigurationType;

    PaymentConfiguration?: MembershipPaymentConfigurationType;
  };
}
