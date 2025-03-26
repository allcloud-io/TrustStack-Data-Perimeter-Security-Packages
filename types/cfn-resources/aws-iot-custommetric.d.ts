/**
 * TypeScript definitions for AWS::IoT::CustomMetric
 * Generated from CloudFormation Resource Schema
 */

/**
 * A custom metric published by your devices to Device Defender.
 */
export namespace AWS_IoT_CustomMetric {
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
   * A custom metric published by your devices to Device Defender.
   */
  export type CustomMetricResourceType = {
    /**
     * The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.
     * Create-only property
     */
    MetricName?: string;

    /**
     * Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
     */
    DisplayName?: string;

    /**
     * The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.
     * Create-only property
     */
    MetricType: string;

    /**
     * The Amazon Resource Number (ARN) of the custom metric.
     * Read-only property
     */
    MetricArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
