/**
 * TypeScript definitions for AWS::CloudFormation::Stack
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::CloudFormation::Stack resource nests a stack as a resource in a top-level template.
 */
export namespace AWS_CloudFormation_Stack {
  export type TagType = {
    Key: string;

    Value: string;
  };

  export type OutputType = {
    Description?: string;

    ExportName?: string;

    OutputKey?: string;

    OutputValue?: string;
  };

  /**
   * The AWS::CloudFormation::Stack resource nests a stack as a resource in a top-level template.
   */
  export type StackResourceType = {
    Capabilities?: string[];

    RoleARN?: string;

    /**
     * Read-only property
     */
    Outputs?: OutputType[];

    Description?: string;

    DisableRollback?: boolean;

    EnableTerminationProtection?: boolean;

    NotificationARNs?: string[];

    Parameters?: Record<string, any>;

    /**
     * Read-only property
     */
    ParentId?: string;

    /**
     * Read-only property
     */
    RootId?: string;

    /**
     * Read-only property
     */
    ChangeSetId?: string;

    /**
     * Create-only property
     */
    StackName: string;

    /**
     * Read-only property
     */
    StackId?: string;

    StackPolicyBody?: Record<string, any>;

    StackPolicyURL?: string;

    /**
     * Read-only property
     */
    StackStatus?: string;

    StackStatusReason?: string;

    Tags?: TagType[];

    TemplateBody?: Record<string, any>;

    TemplateURL?: string;

    TimeoutInMinutes?: number;

    /**
     * Read-only property
     */
    LastUpdateTime?: string;

    /**
     * Read-only property
     */
    CreationTime?: string;
  };
}
