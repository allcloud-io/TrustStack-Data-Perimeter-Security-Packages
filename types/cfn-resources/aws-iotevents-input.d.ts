/**
 * TypeScript definitions for AWS::IoTEvents::Input
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into ITE. This is done by sending messages as *inputs* to ITE. For more information, see How to Use in the *Developer Guide*.
 */
export namespace AWS_IoTEvents_Input {
  /**
   * The definition of the input.
   */
  export type InputDefinitionType = {
    /**
     * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the ITE system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.
     */
    Attributes: AttributeType[];
  };

  /**
   * The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the ITE system using `BatchPutMessage`. Each such message contains a JSON payload. Those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors.
   */
  export type AttributeType = {
    /**
     * An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to ITE (`BatchPutMessage`). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.
     * Syntax: `<field-name>.<field-name>...`
     */
    JsonPath: string;
  };

  /**
   * Metadata that can be used to manage the resource.
   */
  export type TagType = {
    /**
     * The tag's key.
     */
    Key: string;

    /**
     * The tag's value.
     */
    Value: string;
  };

  /**
   * The AWS::IoTEvents::Input resource creates an input. To monitor your devices and processes, they must have a way to get telemetry data into ITE. This is done by sending messages as *inputs* to ITE. For more information, see How to Use in the *Developer Guide*.
   */
  export type InputResourceType = {
    /**
     * The definition of the input.
     */
    InputDefinition: InputDefinitionType;

    /**
     * A brief description of the input.
     */
    InputDescription?: string;

    /**
     * The name of the input.
     * Create-only property
     */
    InputName?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     * For more information, see Tag.
     */
    Tags?: TagType[];
  };
}
