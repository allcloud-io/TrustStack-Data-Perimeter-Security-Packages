/**
 * TypeScript definitions for AWS::EMR::Studio
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::EMR::Studio
 */
export namespace AWS_EMR_Studio {
  /**
   * Identifier of a subnet
   */
  export type SubnetIdType = {};

  export type ArnType = {};

  export type TagsType = {};

  /**
   * An arbitrary set of tags (key-value pairs) for this EMR Studio.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::EMR::Studio
   */
  export type StudioResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the EMR Studio.
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
     * Create-only property
     */
    AuthMode: string;

    /**
     * The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
     */
    DefaultS3Location: string;

    /**
     * A detailed description of the Studio.
     */
    Description?: string;

    /**
     * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
     * Create-only property
     */
    EngineSecurityGroupId: string;

    /**
     * A descriptive name for the Amazon EMR Studio.
     */
    Name: string;

    /**
     * The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
     * Create-only property
     */
    ServiceRole: ArnType;

    /**
     * The ID of the EMR Studio.
     * Read-only property
     */
    StudioId?: string;

    /**
     * A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
     */
    SubnetIds: SubnetIdType[];

    /**
     * A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
     */
    Tags?: TagsType;

    /**
     * The unique Studio access URL.
     * Read-only property
     */
    Url?: string;

    /**
     * The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.
     * Create-only property
     */
    UserRole?: ArnType;

    /**
     * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
     * Create-only property
     */
    VpcId: string;

    /**
     * The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.
     * Create-only property
     */
    WorkspaceSecurityGroupId: string;

    /**
     * Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
     */
    IdpAuthUrl?: string;

    /**
     * The name of relay state parameter for external Identity Provider.
     */
    IdpRelayStateParameterName?: string;

    /**
     * A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.
     * Create-only property
     */
    TrustedIdentityPropagationEnabled?: boolean;

    /**
     * Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.
     * Create-only property
     */
    IdcUserAssignment?: string;

    /**
     * The ARN of the IAM Identity Center instance to create the Studio application.
     * Create-only property
     */
    IdcInstanceArn?: string;

    /**
     * The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.
     * Create-only property
     */
    EncryptionKeyArn?: ArnType;
  };
}
