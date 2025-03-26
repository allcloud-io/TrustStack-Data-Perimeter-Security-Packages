/**
 * TypeScript definitions for AWS::ECS::Cluster
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ECS::Cluster` resource creates an Amazon Elastic Container Service (Amazon ECS) cluster.
 */
export namespace AWS_ECS_Cluster {
  /**
   * The `CapacityProviderStrategyItem` property specifies the details of the default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
   */
  export type CapacityProviderStrategyItemType = {
    /**
     * The short name of the capacity provider.
     */
    CapacityProvider?: string;

    /**
     * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
     * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0`, any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
     * An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of `1`, then when the `base` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of `1` for *capacityProviderA* and a weight of `4` for *capacityProviderB*, then for every one task that's run using *capacityProviderA*, four tasks would use *capacityProviderB*.
     */
    Weight?: number;

    /**
     * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of `0` is used.
     */
    Base?: number;
  };

  /**
   * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
   */
  export type ExecuteCommandLogConfigurationType = {
    /**
     * Determines whether to use encryption on the S3 logs. If not specified, encryption is not used.
     */
    S3EncryptionEnabled?: boolean;

    /**
     * Determines whether to use encryption on the CloudWatch logs. If not specified, encryption will be off.
     */
    CloudWatchEncryptionEnabled?: boolean;

    /**
     * The name of the CloudWatch log group to send logs to.
     * The CloudWatch log group must already be created.
     */
    CloudWatchLogGroupName?: string;

    /**
     * An optional folder in the S3 bucket to place logs in.
     */
    S3KeyPrefix?: string;

    /**
     * The name of the S3 bucket to send logs to.
     * The S3 bucket must already be created.
     */
    S3BucketName?: string;
  };

  /**
   * The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
   * Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
   * For more information, see Monitor Amazon ECS containers using Container Insights with enhanced observability in the *Amazon Elastic Container Service Developer Guide*.
   */
  export type ClusterSettingsType = {
    /**
     * The value to set for the cluster setting. The supported values are `enhanced`, `enabled`, and `disabled`.
     * To use Container Insights with enhanced observability, set the `containerInsights` account setting to `enhanced`.
     * To use Container Insights, set the `containerInsights` account setting to `enabled`.
     * If a cluster value is specified, it will override the `containerInsights` value set with PutAccountSetting or PutAccountSettingDefault.
     */
    Value?: string;

    /**
     * The name of the cluster setting. The value is `containerInsights` .
     */
    Name?: string;
  };

  /**
   * The managed storage configuration for the cluster.
   */
  export type ManagedStorageConfigurationType = {
    /**
     * Specify the KMSlong key ID for the Fargate ephemeral storage.
     * The key must be a single Region key.
     */
    FargateEphemeralStorageKmsKeyId?: string;

    /**
     * Specify a KMSlong key ID to encrypt the managed storage.
     * The key must be a single Region key.
     */
    KmsKeyId?: string;
  };

  /**
   * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
   * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the *Amazon Elastic Container Service Developer Guide*.
   */
  export type ServiceConnectDefaultsType = {
    /**
     * The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace that's used when you create a service and don't specify a Service Connect configuration. The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include greater than (>), less than (<), double quotation marks ("), or slash (/).
     * If you enter an existing namespace name or ARN, then that namespace will be used. Any namespace type is supported. The namespace must be in this account and this AWS Region.
     * If you enter a new name, a CMAPlong namespace will be created. Amazon ECS creates a CMAP namespace with the "API calls" method of instance discovery only. This instance discovery method is the "HTTP" namespace type in the CLIlong. Other types of instance discovery aren't used by Service Connect.
     * If you update the cluster with an empty string `""` for the namespace name, the cluster configuration for Service Connect is removed. Note that the namespace will remain in CMAP and must be deleted separately.
     * For more information about CMAPlong, see Working with Services in the *Developer Guide*.
     */
    Namespace?: string;
  };

  /**
   * The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value. You define them.
   * The following basic restrictions apply to tags:
   * +  Maximum number of tags per resource - 50
   * +  For each resource, each tag key must be unique, and each tag key can have only one value.
   * +  Maximum key length - 128 Unicode characters in UTF-8
   * +  Maximum value length - 256 Unicode characters in UTF-8
   * +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * +  Tag keys and values are case-sensitive.
   * +  Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
   */
  export type TagType = {
    /**
     * The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
     */
    Value?: string;

    /**
     * One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
     */
    Key?: string;
  };

  /**
   * The execute command and managed storage configuration for the cluster.
   */
  export type ClusterConfigurationType = {
    /**
     * The details of the managed storage configuration.
     */
    ManagedStorageConfiguration?: ManagedStorageConfigurationType;

    /**
     * The details of the execute command configuration.
     */
    ExecuteCommandConfiguration?: ExecuteCommandConfigurationType;
  };

  /**
   * The details of the execute command configuration.
   */
  export type ExecuteCommandConfigurationType = {
    /**
     * The log setting to use for redirecting logs for your execute command results. The following log settings are available.
     * +   `NONE`: The execute command session is not logged.
     * +   `DEFAULT`: The `awslogs` configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no `awslogs` log driver is configured in the task definition, the output won't be logged.
     * +   `OVERRIDE`: Specify the logging details as a part of `logConfiguration`. If the `OVERRIDE` logging option is specified, the `logConfiguration` is required.
     */
    Logging?: string;

    /**
     * Specify an KMSlong key ID to encrypt the data between the local client and the container.
     */
    KmsKeyId?: string;

    /**
     * The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When `logging=OVERRIDE` is specified, a `logConfiguration` must be provided.
     */
    LogConfiguration?: ExecuteCommandLogConfigurationType;
  };

  /**
   * The `AWS::ECS::Cluster` resource creates an Amazon Elastic Container Service (Amazon ECS) cluster.
   */
  export type ClusterResourceType = {
    /**
     * The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
     * Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
     * For more information, see Monitor Amazon ECS containers using Container Insights with enhanced observability in the *Amazon Elastic Container Service Developer Guide*.
     */
    ClusterSettings?: ClusterSettingsType[];

    /**
     * The default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
     */
    DefaultCapacityProviderStrategy?: CapacityProviderStrategyItemType[];

    /**
     * The execute command and managed storage configuration for the cluster.
     */
    Configuration?: ClusterConfigurationType;

    /**
     * Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration`. You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
     * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see Service Connect in the *Amazon Elastic Container Service Developer Guide*.
     */
    ServiceConnectDefaults?: ServiceConnectDefaultsType;

    /**
     * The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the CreateService or RunTask actions.
     * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the CreateCapacityProvider API operation.
     * To use a FARGATElong capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The FARGATElong capacity providers are available to all accounts and only need to be associated with a cluster to be used.
     * The PutCapacityProvider API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
     */
    CapacityProviders?: string[];

    /**
     * A user-generated string that you use to identify your cluster. If you don't specify a name, CFNlong generates a unique physical ID for the name.
     * Create-only property
     */
    ClusterName?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
     * The following basic restrictions apply to tags:
     * +  Maximum number of tags per resource - 50
     * +  For each resource, each tag key must be unique, and each tag key can have only one value.
     * +  Maximum key length - 128 Unicode characters in UTF-8
     * +  Maximum value length - 256 Unicode characters in UTF-8
     * +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * +  Tag keys and values are case-sensitive.
     * +  Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     */
    Tags?: TagType[];
  };
}
