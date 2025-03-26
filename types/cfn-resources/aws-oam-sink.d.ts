/**
 * TypeScript definitions for AWS::Oam::Sink
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Oam::Sink
 */
export namespace AWS_Oam_Sink {
  /**
   * Resource Type definition for AWS::Oam::Sink
   */
  export type SinkResourceType = {
    /**
     * The Amazon resource name (ARN) of the ObservabilityAccessManager Sink
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the ObservabilityAccessManager Sink.
     * Create-only property
     */
    Name: string;

    /**
     * The policy of this ObservabilityAccessManager Sink.
     */
    Policy?: Record<string, any>;

    /**
     * Tags to apply to the sink
     */
    Tags?: Record<string, any>;
  };
}
