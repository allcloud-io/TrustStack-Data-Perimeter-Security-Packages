/**
 * TypeScript definitions for AWS::AuditManager::Assessment
 * Generated from CloudFormation Resource Schema
 */

/**
 * An entity that defines the scope of audit evidence collected by AWS Audit Manager.
 */
export namespace AWS_AuditManager_Assessment {
  /**
   * The identifier for the specified framework.
   */
  export type FrameworkIdType = {};

  export type UUIDType = {};

  /**
   * The identifier for the specified AWS account.
   */
  export type AccountIdType = {};

  /**
   * The unique identifier for the email account.
   */
  export type EmailAddressType = {};

  /**
   * The name of the specified AWS account.
   */
  export type AccountNameType = {};

  /**
   * The AWS account associated with the assessment.
   */
  export type AWSAccountType = {
    Id?: AccountIdType;

    EmailAddress?: EmailAddressType;

    Name?: AccountNameType;
  };

  /**
   * The Amazon Resource Name (ARN) of the assessment.
   */
  export type AssessmentArnType = {};

  /**
   * The sequence of characters that identifies when the event occurred.
   */
  export type TimestampType = {};

  /**
   * The identifier for the specified control set.
   */
  export type ControlSetIdType = {};

  /**
   * The IAM user or role that performed the action.
   */
  export type CreatedByType = {};

  /**
   * The Amazon Resource Name (ARN) of the IAM user or role.
   */
  export type IamArnType = {};

  /**
   * The name of the related assessment.
   */
  export type AssessmentNameType = {};

  /**
   * The comment related to the delegation.
   */
  export type DelegationCommentType = {};

  /**
   *  The IAM role type.
   */
  export type RoleTypeType = {};

  /**
   * The status of the delegation.
   */
  export type DelegationStatusType = {};

  /**
   * The assignment of a control set to a delegate for review.
   */
  export type DelegationType = {
    LastUpdated?: TimestampType;

    ControlSetId?: ControlSetIdType;

    CreationTime?: TimestampType;

    CreatedBy?: CreatedByType;

    RoleArn?: IamArnType;

    AssessmentName?: AssessmentNameType;

    Comment?: DelegationCommentType;

    Id?: UUIDType;

    RoleType?: RoleTypeType;

    AssessmentId?: UUIDType;

    Status?: DelegationStatusType;
  };

  /**
   * The wrapper that contains AWS Audit Manager role information, such as the role type and IAM ARN.
   */
  export type RoleType = {
    RoleArn?: IamArnType;

    RoleType?: RoleTypeType;
  };

  /**
   * The name of the AWS service.
   */
  export type AWSServiceNameType = {};

  /**
   * An AWS service such as Amazon S3, AWS CloudTrail, and so on.
   */
  export type AWSServiceType = {
    ServiceName?: AWSServiceNameType;
  };

  /**
   * The wrapper that contains the AWS accounts and AWS services in scope for the assessment.
   */
  export type ScopeType = {
    /**
     * The AWS accounts included in scope.
     */
    AwsAccounts?: AWSAccountType[];

    /**
     * The AWS services included in scope.
     */
    AwsServices?: AWSServiceType[];
  };

  /**
   * The URL of the specified Amazon S3 bucket.
   */
  export type S3UrlType = {};

  /**
   * The destination type, such as Amazon S3.
   */
  export type AssessmentReportDestinationTypeType = {};

  /**
   * The destination in which evidence reports are stored for the specified assessment.
   */
  export type AssessmentReportsDestinationType = {
    Destination?: S3UrlType;

    DestinationType?: AssessmentReportDestinationTypeType;
  };

  /**
   * The status of the specified assessment.
   */
  export type AssessmentStatusType = {};

  /**
   * The description of the specified assessment.
   */
  export type AssessmentDescriptionType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * An entity that defines the scope of audit evidence collected by AWS Audit Manager.
   */
  export type AssessmentResourceType = {
    /**
     * Create-only property
     */
    FrameworkId?: FrameworkIdType;

    /**
     * Read-only property
     */
    AssessmentId?: UUIDType;

    /**
     * Create-only property
     */
    AwsAccount?: AWSAccountType;

    /**
     * Read-only property
     */
    Arn?: AssessmentArnType;

    /**
     * The tags associated with the assessment.
     */
    Tags?: TagType[];

    /**
     * The list of delegations.
     */
    Delegations?: DelegationType[];

    /**
     * The list of roles for the specified assessment.
     */
    Roles?: RoleType[];

    Scope?: ScopeType;

    AssessmentReportsDestination?: AssessmentReportsDestinationType;

    Status?: AssessmentStatusType;

    /**
     * Read-only property
     */
    CreationTime?: TimestampType;

    Name?: AssessmentNameType;

    Description?: AssessmentDescriptionType;
  };
}
