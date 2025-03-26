/**
 * TypeScript definitions for AWS::Bedrock::ApplicationInferenceProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Bedrock::ApplicationInferenceProfile Resource Type
 */
export namespace AWS_Bedrock_ApplicationInferenceProfile {
  /**
   * Various ways to encode a list of models in a CreateInferenceProfile request
   */
  export type InferenceProfileModelSourceType = {};

  /**
   * Status of the Inference Profile
   */
  export type InferenceProfileStatusType = {};

  /**
   * Type of the Inference Profile
   */
  export type InferenceProfileTypeType = {};

  /**
   * Model configuration
   */
  export type InferenceProfileModelType = {
    /**
     * ARN for Foundation Models in Bedrock. These models can be used as base models for model customization jobs
     */
    ModelArn?: string;
  };

  /**
   * Definition of the key/value pair for a tag
   */
  export type TagType = {
    /**
     * Tag Key
     */
    Key: string;

    /**
     * Tag Value
     */
    Value: string;
  };

  export type UnitType = {};

  /**
   * Definition of AWS::Bedrock::ApplicationInferenceProfile Resource Type
   */
  export type ApplicationInferenceProfileResourceType = {
    /**
     * Time Stamp
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Description of the inference profile
     * Create-only property
     */
    Description?: string;

    /**
     * Read-only property
     */
    InferenceProfileArn?: string;

    /**
     * Read-only property
     */
    InferenceProfileId?: string;

    /**
     * Inference profile identifier. Supports both system-defined inference profile ids, and inference profile ARNs.
     * Read-only property
     */
    InferenceProfileIdentifier?: string;

    /**
     * Create-only property
     */
    InferenceProfileName: string;

    /**
     * Create-only property
     */
    ModelSource?: InferenceProfileModelSourceType;

    /**
     * List of model configuration
     * Read-only property
     */
    Models?: InferenceProfileModelType[];

    /**
     * Read-only property
     */
    Status?: InferenceProfileStatusType;

    /**
     * List of Tags
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    Type?: InferenceProfileTypeType;

    /**
     * Time Stamp
     * Read-only property
     */
    UpdatedAt?: string;
  };
}
