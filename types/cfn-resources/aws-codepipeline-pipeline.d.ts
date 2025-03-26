/**
 * TypeScript definitions for AWS::CodePipeline::Pipeline
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::CodePipeline::Pipeline resource creates a CodePipeline pipeline that describes how software changes go through a release process.
 */
export namespace AWS_CodePipeline_Pipeline {
  /**
   * Reserved for future use.
   */
  export type BlockerDeclarationType = {
    /**
     * Reserved for future use.
     */
    Name: string;

    /**
     * Reserved for future use.
     */
    Type: string;
  };

  /**
   * A type of trigger configuration for Git-based source actions.
   */
  export type GitConfigurationType = {
    /**
     * The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
     */
    Push?: GitPushFilterType[];

    /**
     * The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
     */
    SourceActionName: string;

    /**
     * The field where the repository event that will start the pipeline is specified as pull requests.
     */
    PullRequest?: GitPullRequestFilterType[];
  };

  /**
   * Represents information about an action type.
   */
  export type ActionTypeIdType = {
    /**
     * The creator of the action being called. There are three valid values for the Owner field in the action category section within your pipeline structure: AWS, ThirdParty, and Custom.
     */
    Owner: string;

    /**
     * A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
     */
    Category: string;

    /**
     * A string that describes the action version.
     */
    Version: string;

    /**
     * The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as CodeDeploy.
     */
    Provider: string;
  };

  /**
   * A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
   */
  export type ArtifactStoreMapType = {
    ArtifactStore: ArtifactStoreType;

    /**
     * The action declaration's AWS Region, such as us-east-1.
     */
    Region: string;
  };

  /**
   * Represents information about the specified trigger configuration, such as the filter criteria and the source stage for the action that contains the trigger.
   */
  export type PipelineTriggerDeclarationType = {
    GitConfiguration?: GitConfigurationType;

    /**
     * The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
     */
    ProviderType: string;
  };

  /**
   * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key
   */
  export type EncryptionKeyType = {
    /**
     * The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
     */
    Type: string;

    /**
     * The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
     */
    Id: string;
  };

  /**
   * The event criteria for the pull request trigger configuration, such as the lists of branches or file paths to include and exclude.
   */
  export type GitPullRequestFilterType = {
    FilePaths?: GitFilePathFilterCriteriaType;

    /**
     * The field that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration.
     */
    Events?: string[];

    Branches?: GitBranchFilterCriteriaType;
  };

  /**
   * The event criteria that specify when a specified repository event will start the pipeline for the specified trigger configuration, such as the lists of Git tags to include and exclude.
   */
  export type GitPushFilterType = {
    FilePaths?: GitFilePathFilterCriteriaType;

    Branches?: GitBranchFilterCriteriaType;

    Tags?: GitTagFilterCriteriaType;
  };

  /**
   * Represents information about an action declaration.
   */
  export type ActionDeclarationType = {
    ActionTypeId: ActionTypeIdType;

    /**
     * The action's configuration. These are key-value pairs that specify input values for an action.
     */
    Configuration?: Record<string, any>;

    InputArtifacts?: InputArtifactType[];

    OutputArtifacts?: OutputArtifactType[];

    /**
     * The shell commands to run with your compute action in CodePipeline.
     */
    Commands?: string[];

    /**
     * The list of variables that are to be exported from the compute action.
     */
    OutputVariables?: string[];

    /**
     * The action declaration's AWS Region, such as us-east-1.
     */
    Region?: string;

    /**
     * The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
     */
    Namespace?: string;

    /**
     * The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
     */
    RoleArn?: string;

    /**
     * The order in which actions are run.
     */
    RunOrder?: number;

    /**
     * The action declaration's name.
     */
    Name: string;

    /**
     * A timeout duration in minutes that can be applied against the ActionType’s default timeout value specified in Quotas for AWS CodePipeline. This attribute is available only to the manual approval ActionType.
     */
    TimeoutInMinutes?: number;
  };

  /**
   * The Git repository file paths specified as filter criteria to start the pipeline.
   */
  export type GitFilePathFilterCriteriaType = {
    /**
     * The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
     */
    Includes?: string[];

    /**
     * The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
     */
    Excludes?: string[];
  };

  /**
   * Represents information about a stage and its definition.
   */
  export type StageDeclarationType = {
    Blockers?: BlockerDeclarationType[];

    Actions: ActionDeclarationType[];

    /**
     * The name of the stage.
     */
    Name: string;

    /**
     * The method to use when a stage has not completed successfully
     */
    OnFailure?: FailureConditionsType;

    /**
     * The method to use when a stage has completed successfully
     */
    OnSuccess?: SuccessConditionsType;

    /**
     * The method to use before stage runs.
     */
    BeforeEntry?: BeforeEntryConditionsType;
  };

  /**
   * Represents information about an artifact to be worked on, such as a test or build artifact.
   */
  export type InputArtifactType = {
    /**
     * The name of the artifact to be worked on (for example, "My App").
     */
    Name: string;
  };

  /**
   * The S3 bucket where artifacts for the pipeline are stored.
   */
  export type ArtifactStoreType = {
    /**
     * The type of the artifact store, such as S3.
     */
    Type: string;

    EncryptionKey?: EncryptionKeyType;

    /**
     * The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
     */
    Location: string;
  };

  /**
   * A variable declared at the pipeline level.
   */
  export type VariableDeclarationType = {
    /**
     * The value of a pipeline-level variable.
     */
    DefaultValue?: string;

    /**
     * The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
     */
    Description?: string;

    /**
     * The name of a pipeline-level variable.
     */
    Name: string;
  };

  /**
   * The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.
   */
  export type StageTransitionType = {
    /**
     * The name of the stage where you want to disable the inbound or outbound transition of artifacts.
     */
    StageName: string;

    /**
     * The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
     */
    Reason: string;
  };

  /**
   * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
   */
  export type GitTagFilterCriteriaType = {
    /**
     * The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
     */
    Includes?: string[];

    /**
     * The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
     */
    Excludes?: string[];
  };

  /**
   * A tag is a key-value pair that is used to manage the resource.
   */
  export type TagType = {
    /**
     * The tag's value.
     */
    Value: string;

    /**
     * The tag's key.
     */
    Key: string;
  };

  /**
   * The Git repository branches specified as filter criteria to start the pipeline.
   */
  export type GitBranchFilterCriteriaType = {
    /**
     * The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
     */
    Includes?: string[];

    /**
     * The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
     */
    Excludes?: string[];
  };

  /**
   * Represents information about the output of an action.
   */
  export type OutputArtifactType = {
    /**
     * The name of the output of an artifact, such as "My App".
     */
    Name: string;

    /**
     * The files that you want to associate with the output artifact that will be exported from the compute action.
     */
    Files?: string[];
  };

  /**
   * The configuration that specifies the result, such as rollback, to occur upon stage failure
   */
  export type FailureConditionsType = {
    /**
     * The specified result for when the failure conditions are met, such as rolling back the stage
     */
    Result?: string;

    /**
     * The configuration that specifies the retry configuration for a stage
     */
    RetryConfiguration?: Record<string, any>;

    Conditions?: ConditionType[];
  };

  /**
   * The configuration that specifies the result, such as rollback, to occur upon stage failure
   */
  export type SuccessConditionsType = {
    Conditions?: ConditionType[];
  };

  /**
   * The configuration that specifies the rules to run before stage starts.
   */
  export type BeforeEntryConditionsType = {
    Conditions?: ConditionType[];
  };

  /**
   * Represents information about condition.
   */
  export type ConditionType = {
    /**
     * The specified result for when the failure conditions are met, such as rolling back the stage
     */
    Result?: string;

    Rules?: RuleDeclarationType[];
  };

  /**
   * Represents information about condition.
   */
  export type RuleDeclarationType = {
    RuleTypeId?: RuleTypeIdType;

    /**
     * The rule's configuration. These are key-value pairs that specify input values for a rule.
     */
    Configuration?: Record<string, any>;

    /**
     * The shell commands to run with your compute action in CodePipeline.
     */
    Commands?: string[];

    InputArtifacts?: InputArtifactType[];

    /**
     * The rule declaration's AWS Region, such as us-east-1.
     */
    Region?: string;

    /**
     * The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
     */
    RoleArn?: string;

    /**
     * The rule declaration's name.
     */
    Name?: string;
  };

  /**
   * Represents information about a rule type.
   */
  export type RuleTypeIdType = {
    /**
     * The creator of the rule being called. Only AWS is supported.
     */
    Owner?: string;

    /**
     * A category for the provider type for the rule.
     */
    Category?: string;

    /**
     * A string that describes the rule version.
     */
    Version?: string;

    /**
     * The provider of the service being called by the rule.
     */
    Provider?: string;
  };

  /**
   * The AWS::CodePipeline::Pipeline resource creates a CodePipeline pipeline that describes how software changes go through a release process.
   */
  export type PipelineResourceType = {
    /**
     * A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
     */
    ArtifactStores?: ArtifactStoreMapType[];

    /**
     * Represents the input of a DisableStageTransition action.
     */
    DisableInboundStageTransitions?: StageTransitionType[];

    /**
     * Represents information about a stage and its definition.
     */
    Stages: StageDeclarationType[];

    /**
     * The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
     * Default: "SUPERSEDED"
     */
    ExecutionMode?: string;

    /**
     * Indicates whether to rerun the CodePipeline pipeline after you update it.
     */
    RestartExecutionOnUpdate?: boolean;

    /**
     * The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
     */
    Triggers?: PipelineTriggerDeclarationType[];

    /**
     * The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn
     */
    RoleArn: string;

    /**
     * The name of the pipeline.
     * Create-only property
     */
    Name?: string;

    /**
     * A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9@\-_]+.
     */
    Variables?: VariableDeclarationType[];

    /**
     * The version of the pipeline.
     * Read-only property
     */
    Version?: string;

    /**
     * The S3 bucket where artifacts for the pipeline are stored.
     */
    ArtifactStore?: ArtifactStoreType;

    /**
     * CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
     */
    PipelineType?: string;

    /**
     * Specifies the tags applied to the pipeline.
     */
    Tags?: TagType[];
  };
}
