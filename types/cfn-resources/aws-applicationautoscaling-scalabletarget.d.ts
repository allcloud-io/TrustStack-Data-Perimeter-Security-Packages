/**
 * TypeScript definitions for AWS::ApplicationAutoScaling::ScalableTarget
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApplicationAutoScaling::ScalableTarget` resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.
 * For more information, see Getting started in the *Application Auto Scaling User Guide*.
 * If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the DependsOn attribute.
 */
export namespace AWS_ApplicationAutoScaling_ScalableTarget {
  /**
   * `SuspendedState` is a property of the AWS::ApplicationAutoScaling::ScalableTarget resource that specifies whether the scaling activities for a scalable target are in a suspended state.
   * For more information, see Suspending and resuming scaling in the *Application Auto Scaling User Guide*.
   */
  export type SuspendedStateType = {
    /**
     * Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false`.
     */
    DynamicScalingOutSuspended?: boolean;

    /**
     * Whether scheduled scaling is suspended. Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false`.
     */
    ScheduledScalingSuspended?: boolean;

    /**
     * Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false`.
     */
    DynamicScalingInSuspended?: boolean;
  };

  /**
   * `ScheduledAction` is a property of the AWS::ApplicationAutoScaling::ScalableTarget resource that specifies a scheduled action for a scalable target.
   * For more information, see Scheduled scaling in the *Application Auto Scaling User Guide*.
   */
  export type ScheduledActionType = {
    /**
     * The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.
     */
    Timezone?: string;

    /**
     * The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target.
     */
    ScheduledActionName: string;

    /**
     * The date and time that the action is scheduled to end, in UTC.
     */
    EndTime?: string;

    /**
     * The schedule for this action. The following formats are supported:
     * +  At expressions - "`at(yyyy-mm-ddThh:mm:ss)`"
     * +  Rate expressions - "`rate(value unit)`"
     * +  Cron expressions - "`cron(fields)`"
     * At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
     * At and cron expressions use Universal Coordinated Time (UTC) by default.
     * The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
     * For rate expressions, *value* is a positive integer and *unit* is `minute` | `minutes` | `hour` | `hours` | `day` | `days`.
     */
    Schedule: string;

    /**
     * The date and time that the action is scheduled to begin, in UTC.
     */
    StartTime?: string;

    /**
     * The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
     */
    ScalableTargetAction?: ScalableTargetActionType;
  };

  /**
   * `ScalableTargetAction` specifies the minimum and maximum capacity for the `ScalableTargetAction` property of the AWS::ApplicationAutoScaling::ScalableTarget ScheduledAction property type.
   */
  export type ScalableTargetActionType = {
    /**
     * The minimum capacity.
     */
    MinCapacity?: number;

    /**
     * The maximum capacity.
     */
    MaxCapacity?: number;
  };

  /**
   * The `AWS::ApplicationAutoScaling::ScalableTarget` resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.
   * For more information, see Getting started in the *Application Auto Scaling User Guide*.
   * If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the DependsOn attribute.
   */
  export type ScalableTargetResourceType = {
    /**
     * The scheduled actions for the scalable target. Duplicates aren't allowed.
     */
    ScheduledActions?: ScheduledActionType[];

    /**
     * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
     * +  ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
     * +  Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
     * +  EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
     * +  AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
     * +  DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
     * +  DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
     * +  Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
     * +  SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
     * +  Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our GitHub repository.
     * +  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
     * +  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
     * +  Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
     * +  Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
     * +  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
     * +  Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
     * +  Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
     * +  SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
     * +  SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
     * +  Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.
     * Create-only property
     */
    ResourceId: string;

    /**
     * The namespace of the AWS service that provides the resource, or a `custom-resource`.
     * Create-only property
     */
    ServiceNamespace: string;

    /**
     * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.
     * +   `ecs:service:DesiredCount` - The task count of an ECS service.
     * +   `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
     * +   `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
     * +   `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
     * +   `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
     * +   `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
     * +   `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
     * +   `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
     * +   `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
     * +   `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
     * +   `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
     * +   `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
     * +   `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
     * +   `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
     * +   `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
     * +   `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
     * +   `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
     * +   `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
     * +   `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
     * +   `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
     * +   `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
     * +   `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
     * +   `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
     * Create-only property
     */
    ScalableDimension: string;

    /**
     * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to `true` suspends the specified scaling activities. Setting it to `false` (default) resumes the specified scaling activities.
     * *Suspension Outcomes*
     * +  For `DynamicScalingInSuspended`, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
     * +  For `DynamicScalingOutSuspended`, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
     * +  For `ScheduledScalingSuspended`, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.
     */
    SuspendedState?: SuspendedStateType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.
     */
    MinCapacity: number;

    /**
     * Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see How Application Auto Scaling works with IAM in the *Application Auto Scaling User Guide*.
     * To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the Service-linked roles topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.
     */
    RoleARN?: string;

    /**
     * The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.
     */
    MaxCapacity: number;
  };
}
