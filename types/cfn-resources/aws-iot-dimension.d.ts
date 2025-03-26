/**
 * TypeScript definitions for AWS::IoT::Dimension
 * Generated from CloudFormation Resource Schema
 */

/**
 * A dimension can be used to limit the scope of a metric used in a security profile for AWS IoT Device Defender.
 */
export namespace AWS_IoT_Dimension {
  /**
   * A key-value pair to associate with a resource.
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
   * A dimension can be used to limit the scope of a metric used in a security profile for AWS IoT Device Defender.
   */
  export type DimensionResourceType = {
    /**
     * A unique identifier for the dimension.
     * Create-only property
     */
    Name?: string;

    /**
     * Specifies the type of the dimension.
     * Create-only property
     */
    Type: string;

    /**
     * Specifies the value or list of values for the dimension.
     */
    StringValues: string[];

    /**
     * Metadata that can be used to manage the dimension.
     */
    Tags?: TagType[];

    /**
     * The ARN (Amazon resource name) of the created dimension.
     * Read-only property
     */
    Arn?: string;
  };
}
