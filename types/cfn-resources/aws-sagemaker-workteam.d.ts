/**
 * TypeScript definitions for AWS::SageMaker::Workteam
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Workteam
 */
export namespace AWS_SageMaker_Workteam {
  export type OidcMemberDefinitionType = {
    OidcGroups: string[];
  };

  export type NotificationConfigurationType = {
    NotificationTopicArn: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type MemberDefinitionType = {
    CognitoMemberDefinition?: CognitoMemberDefinitionType;

    OidcMemberDefinition?: OidcMemberDefinitionType;
  };

  export type CognitoMemberDefinitionType = {
    CognitoUserGroup: string;

    CognitoUserPool: string;

    CognitoClientId: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::Workteam
   */
  export type WorkteamResourceType = {
    Description?: string;

    NotificationConfiguration?: NotificationConfigurationType;

    /**
     * Create-only property
     */
    WorkteamName?: string;

    MemberDefinitions?: MemberDefinitionType[];

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    WorkforceName?: string;

    Tags?: TagType[];
  };
}
