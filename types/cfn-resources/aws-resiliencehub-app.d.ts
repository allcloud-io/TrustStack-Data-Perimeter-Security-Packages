/**
 * TypeScript definitions for AWS::ResilienceHub::App
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::ResilienceHub::App.
 */
export namespace AWS_ResilienceHub_App {
  export type TagValueType = {};

  export type TagMapType = {};

  export type PhysicalResourceIdType = {
    AwsAccountId?: string;

    AwsRegion?: string;

    Identifier: string;

    Type: string;
  };

  /**
   * Resource mapping is used to map logical resources from template to physical resource
   */
  export type ResourceMappingType = {
    LogicalStackName?: string;

    MappingType: string;

    ResourceName?: string;

    TerraformSourceName?: string;

    EksSourceName?: string;

    PhysicalResourceId: PhysicalResourceIdType;
  };

  export type IamRoleArnType = {};

  /**
   * Defines the roles and credentials that AWS Resilience Hub would use while creating the application, importing its resources, and running an assessment.
   */
  export type PermissionModelType = {
    /**
     * Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.
     */
    Type: string;

    /**
     * Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
     */
    InvokerRoleName?: string;

    /**
     * Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
     */
    CrossAccountRoleArns?: IamRoleArnType[];
  };

  /**
   * Indicates an event you would like to subscribe and get notification for.
   */
  export type EventSubscriptionType = {
    /**
     * Unique name to identify an event subscription.
     */
    Name: string;

    /**
     * The type of event you would like to subscribe and get notification for.
     */
    EventType: string;

    /**
     * Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.
     */
    SnsTopicArn?: string;
  };

  /**
   * Resource Type Definition for AWS::ResilienceHub::App.
   */
  export type AppResourceType = {
    /**
     * Name of the app.
     * Create-only property
     */
    Name: string;

    /**
     * App description.
     */
    Description?: string;

    /**
     * Amazon Resource Name (ARN) of the App.
     * Read-only property
     */
    AppArn?: string;

    /**
     * Amazon Resource Name (ARN) of the Resiliency Policy.
     */
    ResiliencyPolicyArn?: string;

    Tags?: TagMapType;

    /**
     * A string containing full ResilienceHub app template body.
     */
    AppTemplateBody: string;

    /**
     * An array of ResourceMapping objects.
     */
    ResourceMappings: ResourceMappingType[];

    /**
     * Assessment execution schedule.
     */
    AppAssessmentSchedule?: string;

    PermissionModel?: PermissionModelType;

    /**
     * The list of events you would like to subscribe and get notification for.
     */
    EventSubscriptions?: EventSubscriptionType[];

    /**
     * Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
     * Read-only property
     */
    DriftStatus?: string;
  };
}
