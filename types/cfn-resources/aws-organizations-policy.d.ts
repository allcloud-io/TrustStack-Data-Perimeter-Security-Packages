/**
 * TypeScript definitions for AWS::Organizations::Policy
 * Generated from CloudFormation Resource Schema
 */

/**
 * Policies in AWS Organizations enable you to manage different features of the AWS accounts in your organization.  You can use policies when all features are enabled in your organization.
 */
export namespace AWS_Organizations_Policy {
  /**
   * A custom key-value pair associated with a resource within your organization.
   */
  export type TagType = {
    /**
     * The key identifier, or name, of the tag.
     */
    Key: string;

    /**
     * The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.
     */
    Value: string;
  };

  /**
   * Policies in AWS Organizations enable you to manage different features of the AWS accounts in your organization.  You can use policies when all features are enabled in your organization.
   */
  export type PolicyResourceType = {
    /**
     * Name of the Policy
     */
    Name: string;

    /**
     * The type of policy to create. You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY, CHATBOT_POLICY, RESOURCE_CONTROL_POLICY,DECLARATIVE_POLICY_EC2
     * Create-only property
     */
    Type: string;

    /**
     * The Policy text content. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.
     */
    Content: Record<string, any> | string;

    /**
     * Human readable description of the policy
     */
    Description?: string;

    /**
     * List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to
     */
    TargetIds?: string[];

    /**
     * A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.
     */
    Tags?: TagType[];

    /**
     * Id of the Policy
     * Read-only property
     */
    Id?: string;

    /**
     * ARN of the Policy
     * Read-only property
     */
    Arn?: string;

    /**
     * A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.
     * Read-only property
     */
    AwsManaged?: boolean;
  };
}
