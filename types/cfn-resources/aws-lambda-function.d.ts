/**
 * TypeScript definitions for AWS::Lambda::Function
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::Lambda::Function` resource creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.
 * You set the package type to `Image` if the deployment package is a container image. For these functions, include the URI of the container image in the ECR registry in the ImageUri property of the Code property. You do not need to specify the handler and runtime properties.
 * You set the package type to `Zip` if the deployment package is a .zip file archive. For these functions, specify the S3 location of your .zip file in the `Code` property. Alternatively, for Node.js and Python functions, you can define your function inline in the ZipFile property of the Code property. In both cases, you must also specify the handler and runtime properties.
 * You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with `UpdateFunctionCode`, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
 * When you update a `AWS::Lambda::Function` resource, CFNshort calls the UpdateFunctionConfiguration and UpdateFunctionCode LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the `$LATEST` version.
 * Note that you configure provisioned concurrency on a `AWS::Lambda::Version` or a `AWS::Lambda::Alias`.
 * For a complete introduction to Lambda functions, see What is Lambda? in the *Lambda developer guide.*
 */
export namespace AWS_Lambda_Function {
  /**
   * Configuration values that override the container image Dockerfile settings. For more information, see Container image settings.
   */
  export type ImageConfigType = {
    /**
     * Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.
     */
    WorkingDirectory?: string;

    /**
     * Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list.
     */
    Command?: string[];

    /**
     * Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list.
     */
    EntryPoint?: string[];
  };

  /**
   * The function's [](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html) tracing configuration. To sample and record incoming requests, set `Mode` to `Active`.
   */
  export type TracingConfigType = {
    /**
     * The tracing mode.
     */
    Mode?: string;
  };

  /**
   * The VPC security groups and subnets that are attached to a Lambda function. When you connect a function to a VPC, Lambda creates an elastic network interface for each combination of security group and subnet in the function's VPC configuration. The function can only access resources and the internet through that VPC. For more information, see VPC Settings.
   * When you delete a function, CFN monitors the state of its network interfaces and waits for Lambda to delete them before proceeding. If the VPC is defined in the same stack, the network interfaces need to be deleted by Lambda before CFN can delete the VPC's resources.
   * To monitor network interfaces, CFN needs the `ec2:DescribeNetworkInterfaces` permission. It obtains this from the user or role that modifies the stack. If you don't provide this permission, CFN does not wait for network interfaces to be deleted.
   */
  export type VpcConfigType = {
    /**
     * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
     */
    Ipv6AllowedForDualStack?: boolean;

    /**
     * A list of VPC security group IDs.
     */
    SecurityGroupIds?: string[];

    /**
     * A list of VPC subnet IDs.
     */
    SubnetIds?: string[];
  };

  /**
   * The dead-letter queue for failed asynchronous invocations.
   */
  export type DeadLetterConfigType = {
    /**
     * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
     */
    TargetArn?: string;
  };

  /**
   * Sets the runtime management configuration for a function's version. For more information, see Runtime updates.
   */
  export type RuntimeManagementConfigType = {
    /**
     * Specify the runtime update mode.
     * +   *Auto (default)* - Automatically update to the most recent and secure runtime version using a Two-phase runtime version rollout. This is the best choice for most customers to ensure they always benefit from runtime updates.
     * +   *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
     * +   *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see Roll back a runtime version.
     * *Valid Values*: `Auto` | `FunctionUpdate` | `Manual`
     */
    UpdateRuntimeOn: string;

    /**
     * The ARN of the runtime version you want the function to use.
     * This is only required if you're using the *Manual* runtime update mode.
     */
    RuntimeVersionArn?: string;
  };

  /**
   * The function's SnapStart setting.
   */
  export type SnapStartType = {
    /**
     * Set `ApplyOn` to `PublishedVersions` to create a snapshot of the initialized execution environment when you publish a function version.
     */
    ApplyOn: string;
  };

  /**
   * The function's SnapStart setting.
   */
  export type SnapStartResponseType = {
    /**
     * When you provide a qualified Amazon Resource Name (ARN), this response element indicates whether SnapStart is activated for the specified function version.
     */
    OptimizationStatus?: string;

    /**
     * When set to `PublishedVersions`, Lambda creates a snapshot of the execution environment when you publish a function version.
     */
    ApplyOn?: string;
  };

  /**
   * The deployment package for a Lambda function. To deploy a function defined as a container image, you specify the location of a container image in the Amazon ECR registry. For a .zip file deployment package, you can specify the location of an object in Amazon S3. For Node.js and Python functions, you can specify the function code inline in the template.
   * When you specify source code inline for a Node.js function, the `index` file that CFN creates uses the extension `.js`. This means that LAM treats the file as a CommonJS module. ES modules aren't supported for inline functions.
   * Changes to a deployment package in Amazon S3 or a container image in ECR are not detected automatically during stack updates. To update the function code, change the object key or version in the template.
   */
  export type CodeType = {
    /**
     * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an owned key.
     */
    SourceKMSKeyArn?: string;

    /**
     * For versioned objects, the version of the deployment package object to use.
     */
    S3ObjectVersion?: string;

    /**
     * An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
     */
    S3Bucket?: string;

    /**
     * (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named `index` and zips it to create a deployment package. This zip file cannot exceed 4MB. For the `Handler` property, the first part of the handler identifier must be `index`. For example, `index.handler`.
     * When you specify source code inline for a Node.js function, the `index` file that CFN creates uses the extension `.js`. This means that LAM treats the file as a CommonJS module. ES modules aren't supported for inline functions.
     * For JSON, you must escape quotes and special characters such as newline (`\n`) with a backslash.
     * If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module (cfn-response) that simplifies sending responses. See Using Lambda with CloudFormation for details.
     */
    ZipFile?: string;

    /**
     * The Amazon S3 key of the deployment package.
     */
    S3Key?: string;

    /**
     * URI of a container image in the Amazon ECR registry.
     */
    ImageUri?: string;
  };

  /**
   * The function's Amazon CloudWatch Logs configuration settings.
   */
  export type LoggingConfigType = {
    /**
     * The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
     */
    LogFormat?: string;

    /**
     * Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where `TRACE` is the highest level and `FATAL` is the lowest.
     */
    ApplicationLogLevel?: string;

    /**
     * The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named `/aws/lambda/<function name>`. To use a different log group, enter an existing log group or enter a new log group name.
     */
    LogGroup?: string;

    /**
     * Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.
     */
    SystemLogLevel?: string;
  };

  /**
   * The function recursion configuration.
   */
  export type RecursiveLoopType = {};

  /**
   * A function's environment variable settings. You can use environment variables to adjust your function's behavior without updating code. An environment variable is a pair of strings that are stored in a function's version-specific configuration.
   */
  export type EnvironmentType = {
    /**
     * Environment variable key-value pairs. For more information, see Using Lambda environment variables.
     * If the value of the environment variable is a time or a duration, enclose the value in quotes.
     */
    Variables?: Record<string, any>;
  };

  /**
   * Details about the connection between a Lambda function and an Amazon EFS file system.
   */
  export type FileSystemConfigType = {
    /**
     * The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
     */
    Arn: string;

    /**
     * The path where the function can access the file system, starting with `/mnt/`.
     */
    LocalMountPath: string;
  };

  /**
   * A tag to apply to the function.
   */
  export type TagType = {
    /**
     * The value for this tag.
     */
    Value?: string;

    /**
     * The key for this tag.
     */
    Key: string;
  };

  /**
   * The size of the function's `/tmp` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
   */
  export type EphemeralStorageType = {
    /**
     * The size of the function's `/tmp` directory.
     */
    Size: number;
  };

  /**
   * The `AWS::Lambda::Function` resource creates a Lambda function. To create a function, you need a deployment package and an execution role. The deployment package is a .zip file archive or container image that contains your function code. The execution role grants the function permission to use AWS services, such as Amazon CloudWatch Logs for log streaming and AWS X-Ray for request tracing.
   * You set the package type to `Image` if the deployment package is a container image. For these functions, include the URI of the container image in the ECR registry in the ImageUri property of the Code property. You do not need to specify the handler and runtime properties.
   * You set the package type to `Zip` if the deployment package is a .zip file archive. For these functions, specify the S3 location of your .zip file in the `Code` property. Alternatively, for Node.js and Python functions, you can define your function inline in the ZipFile property of the Code property. In both cases, you must also specify the handler and runtime properties.
   * You can use code signing if your deployment package is a .zip file archive. To enable code signing for this function, specify the ARN of a code-signing configuration. When a user attempts to deploy a code package with `UpdateFunctionCode`, Lambda checks that the code package has a valid signature from a trusted publisher. The code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
   * When you update a `AWS::Lambda::Function` resource, CFNshort calls the UpdateFunctionConfiguration and UpdateFunctionCode LAM APIs under the hood. Because these calls happen sequentially, and invocations can happen between these calls, your function may encounter errors in the time between the calls. For example, if you remove an environment variable, and the code that references that environment variable in the same CFNshort update, you may see invocation errors related to a missing environment variable. To work around this, you can invoke your function against a version or alias by default, rather than the `$LATEST` version.
   * Note that you configure provisioned concurrency on a `AWS::Lambda::Version` or a `AWS::Lambda::Alias`.
   * For a complete introduction to Lambda functions, see What is Lambda? in the *Lambda developer guide.*
   */
  export type FunctionResourceType = {
    /**
     * A description of the function.
     */
    Description?: string;

    /**
     * Set `Mode` to `Active` to sample and trace a subset of incoming requests with X-Ray.
     */
    TracingConfig?: TracingConfigType;

    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see Configuring a Lambda function to access resources in a VPC.
     */
    VpcConfig?: VpcConfigType;

    /**
     * Sets the runtime management configuration for a function's version. For more information, see Runtime updates.
     */
    RuntimeManagementConfig?: RuntimeManagementConfigType;

    /**
     * The number of simultaneous executions to reserve for the function.
     */
    ReservedConcurrentExecutions?: number;

    /**
     * The function's SnapStart setting.
     */
    SnapStart?: SnapStartType;

    /**
     * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an AWS::EFS::MountTarget resource, you must also specify a `DependsOn` attribute to ensure that the mount target is created or updated before the function.
     * For more information about using the `DependsOn` attribute, see DependsOn Attribute.
     */
    FileSystemConfigs?: FileSystemConfigType[];

    /**
     * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     * Create-only property
     */
    FunctionName?: string;

    /**
     * The identifier of the function's runtime. Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
     * The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see Runtime use after deprecation.
     * For a list of all currently supported runtimes, see Supported runtimes.
     */
    Runtime?: string;

    /**
     * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:
     * +  The function's environment variables.
     * +  The function's Lambda SnapStart snapshots.
     * +  When used with `SourceKMSKeyArn`, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see Specifying a customer managed key for Lambda.
     * +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see Function lifecycle.
     * If you don't provide a customer managed key, Lambda uses an owned key or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
     */
    KmsKeyArn?: string;

    /**
     * The type of deployment package. Set to `Image` for container image and set `Zip` for .zip file archive.
     * Create-only property
     */
    PackageType?: string;

    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
     */
    CodeSigningConfigArn?: string;

    /**
     * A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.
     */
    Layers?: string[];

    /**
     * A list of tags to apply to the function.
     * You must have the `lambda:TagResource`, `lambda:UntagResource`, and `lambda:ListTags` permissions for your principal to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
     */
    Tags?: TagType[];

    /**
     * Configuration values that override the container image Dockerfile settings. For more information, see Container image settings.
     */
    ImageConfig?: ImageConfigType;

    /**
     * The amount of memory available to the function at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
     */
    MemorySize?: number;

    /**
     * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see Dead-letter queues.
     */
    DeadLetterConfig?: DeadLetterConfigType;

    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see Lambda execution environment.
     */
    Timeout?: number;

    /**
     * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see Lambda programming model.
     */
    Handler?: string;

    /**
     * Read-only property
     */
    SnapStartResponse?: SnapStartResponseType;

    /**
     * The code for the function. You can define your function code in multiple ways:
     * +  For .zip deployment packages, you can specify the S3 location of the .zip file in the `S3Bucket`, `S3Key`, and `S3ObjectVersion` properties.
     * +  For .zip deployment packages, you can alternatively define the function code inline in the `ZipFile` property. This method works only for Node.js and Python functions.
     * +  For container images, specify the URI of your container image in the ECR registry in the `ImageUri` property.
     */
    Code: CodeType;

    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    Role: string;

    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     */
    LoggingConfig?: LoggingConfigType;

    /**
     * The status of your function's recursive loop detection configuration.
     * When this value is set to `Allow`and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
     * When this value is set to `Terminate` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.
     */
    RecursiveLoop?: RecursiveLoopType;

    /**
     * Environment variables that are accessible from function code during execution.
     */
    Environment?: EnvironmentType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The size of the function's `/tmp` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
     */
    EphemeralStorage?: EphemeralStorageType;

    /**
     * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.
     */
    Architectures?: string[];
  };
}
