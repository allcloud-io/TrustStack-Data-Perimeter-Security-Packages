/**
 * TypeScript definitions for AWS::DataPipeline::Pipeline
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_DataPipeline_Pipeline {
  export type ParameterObjectType = {
    /**
     * The attributes of the parameter object.
     */
    Attributes: ParameterAttributeType[];

    /**
     * The ID of the parameter object.
     */
    Id: string;
  };

  export type ParameterAttributeType = {
    /**
     * The field identifier.
     */
    Key: string;

    /**
     * The field value, expressed as a String.
     */
    StringValue: string;
  };

  export type ParameterValueType = {
    /**
     * The ID of the parameter value.
     */
    Id: string;

    /**
     * The field value, expressed as a String.
     */
    StringValue: string;
  };

  export type FieldType = {
    /**
     * Specifies the name of a field for a particular object. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
     */
    Key: string;

    /**
     * A field value that you specify as an identifier of another object in the same pipeline definition.
     */
    RefValue?: string;

    /**
     * A field value that you specify as a string. To view valid values for a particular field, see Pipeline Object Reference in the AWS Data Pipeline Developer Guide.
     */
    StringValue?: string;
  };

  export type PipelineObjectType = {
    /**
     * Key-value pairs that define the properties of the object.
     */
    Fields: FieldType[];

    /**
     * The ID of the object.
     */
    Id: string;

    /**
     * The name of the object.
     */
    Name: string;
  };

  export type PipelineTagType = {
    /**
     * The key name of a tag.
     */
    Key: string;

    /**
     * The value to associate with the key name.
     */
    Value: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type PipelineResourceType = {
    /**
     * Indicates whether to validate and start the pipeline or stop an active pipeline. By default, the value is set to true.
     */
    Activate?: boolean;

    /**
     * A description of the pipeline.
     * Create-only property
     */
    Description?: string;

    /**
     * The name of the pipeline.
     * Create-only property
     */
    Name: string;

    /**
     * The parameter objects used with the pipeline.
     */
    ParameterObjects?: ParameterObjectType[];

    /**
     * The parameter values used with the pipeline.
     */
    ParameterValues?: ParameterValueType[];

    /**
     * The objects that define the pipeline. These objects overwrite the existing pipeline definition. Not all objects, fields, and values can be updated. For information about restrictions, see Editing Your Pipeline in the AWS Data Pipeline Developer Guide.
     */
    PipelineObjects?: PipelineObjectType[];

    /**
     * A list of arbitrary tags (key-value pairs) to associate with the pipeline, which you can use to control permissions. For more information, see Controlling Access to Pipelines and Resources in the AWS Data Pipeline Developer Guide.
     */
    PipelineTags?: PipelineTagType[];

    /**
     * Read-only property
     */
    PipelineId?: string;
  };
}
