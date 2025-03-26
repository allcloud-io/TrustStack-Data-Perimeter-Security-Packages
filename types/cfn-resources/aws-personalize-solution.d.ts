/**
 * TypeScript definitions for AWS::Personalize::Solution
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Personalize::Solution.
 */
export namespace AWS_Personalize_Solution {
  /**
   * The ARN of the solution
   */
  export type SolutionArnType = {};

  /**
   * Provides the name and values of a Categorical hyperparameter.
   */
  export type CategoricalHyperParameterRangeType = {
    /**
     * The name of the hyperparameter.
     */
    Name?: string;

    /**
     * A list of the categories for the hyperparameter.
     */
    Values?: string[];
  };

  /**
   * Provides the name and range of a continuous hyperparameter.
   */
  export type ContinuousHyperParameterRangeType = {
    /**
     * The name of the hyperparameter.
     */
    Name?: string;

    /**
     * The minimum allowable value for the hyperparameter.
     */
    MinValue?: number;

    /**
     * The maximum allowable value for the hyperparameter.
     */
    MaxValue?: number;
  };

  /**
   * Provides the name and range of an integer-valued hyperparameter.
   */
  export type IntegerHyperParameterRangeType = {
    /**
     * The name of the hyperparameter.
     */
    Name?: string;

    /**
     * The minimum allowable value for the hyperparameter.
     */
    MinValue?: number;

    /**
     * The maximum allowable value for the hyperparameter.
     */
    MaxValue?: number;
  };

  /**
   * The configuration to use with the solution. When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.
   */
  export type SolutionConfigType = {
    /**
     * Lists the hyperparameter names and ranges.
     */
    AlgorithmHyperParameters?: Record<string, any>;

    /**
     * The AutoMLConfig object containing a list of recipes to search when AutoML is performed.
     */
    AutoMLConfig?: Record<string, any>;

    /**
     * Only events with a value greater than or equal to this threshold are used for training a model.
     */
    EventValueThreshold?: string;

    /**
     * Lists the feature transformation parameters.
     */
    FeatureTransformationParameters?: Record<string, any>;

    /**
     * Describes the properties for hyperparameter optimization (HPO)
     */
    HpoConfig?: Record<string, any>;
  };

  /**
   * Resource schema for AWS::Personalize::Solution.
   */
  export type SolutionResourceType = {
    /**
     * The name for the solution
     * Create-only property
     */
    Name: string;

    /**
     * Read-only property
     */
    SolutionArn?: SolutionArnType;

    /**
     * When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.
     * Create-only property
     */
    EventType?: string;

    /**
     * The ARN of the dataset group that provides the training data.
     * Create-only property
     */
    DatasetGroupArn: string;

    /**
     * Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.
     * Create-only property
     */
    PerformAutoML?: boolean;

    /**
     * Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false.
     * Create-only property
     */
    PerformHPO?: boolean;

    /**
     * The ARN of the recipe to use for model training. Only specified when performAutoML is false.
     * Create-only property
     */
    RecipeArn?: string;

    /**
     * Create-only property
     */
    SolutionConfig?: SolutionConfigType;
  };
}
