/**
 * TypeScript definitions for AWS::RedshiftServerless::Namespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RedshiftServerless::Namespace Resource Type
 */
export namespace AWS_RedshiftServerless_Namespace {
  export type LogExportType = {};

  export type NamespaceType = {
    NamespaceArn?: string;

    NamespaceId?: string;

    NamespaceName?: string;

    AdminUsername?: string;

    DbName?: string;

    KmsKeyId?: string;

    DefaultIamRoleArn?: string;

    IamRoles?: string[];

    LogExports?: LogExportType[];

    Status?: NamespaceStatusType;

    CreationDate?: string;

    AdminPasswordSecretArn?: string;

    AdminPasswordSecretKmsKeyId?: string;
  };

  export type NamespaceStatusType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type SnapshotCopyConfigurationType = {
    DestinationRegion: string;

    DestinationKmsKeyId?: string;

    SnapshotRetentionPeriod?: number;
  };

  /**
   * Definition of AWS::RedshiftServerless::Namespace Resource Type
   */
  export type NamespaceResourceType = {
    /**
     * The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if manageAdminPassword is true.
     */
    AdminPasswordSecretKmsKeyId?: string;

    /**
     * The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.
     */
    AdminUserPassword?: string;

    /**
     * The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
     */
    AdminUsername?: string;

    /**
     * The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
     */
    DbName?: string;

    /**
     * The default IAM role ARN for the namespace that is being created.
     */
    DefaultIamRoleArn?: string;

    /**
     * A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.
     */
    IamRoles?: string[];

    /**
     * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.
     */
    KmsKeyId?: string;

    /**
     * The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog
     */
    LogExports?: LogExportType[];

    /**
     * If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.
     */
    ManageAdminPassword?: boolean;

    /**
     * Definition of Namespace resource.
     * Read-only property
     */
    Namespace?: NamespaceType;

    /**
     * A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.
     * Create-only property
     */
    NamespaceName: string;

    /**
     * The list of tags for the namespace.
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace
     */
    FinalSnapshotName?: string;

    /**
     * The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.
     */
    FinalSnapshotRetentionPeriod?: number;

    /**
     * The resource policy document that will be attached to the namespace.
     */
    NamespaceResourcePolicy?: Record<string, any>;

    /**
     * The ARN for the Redshift application that integrates with IAM Identity Center.
     */
    RedshiftIdcApplicationArn?: string;

    /**
     * The snapshot copy configurations for the namespace.
     */
    SnapshotCopyConfigurations?: SnapshotCopyConfigurationType[];
  };
}
