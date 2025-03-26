/**
 * TypeScript definitions for AWS::Config::ConformancePack
 * Generated from CloudFormation Resource Schema
 */

/**
 * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.
 */
export namespace AWS_Config_ConformancePack {
  /**
   * Key part of key-value pair with value being parameter value
   */
  export type ParameterNameType = {};

  /**
   * Value part of key-value pair with key being parameter Name
   */
  export type ParameterValueType = {};

  /**
   * Input parameters in the form of key-value pairs for the conformance pack.
   */
  export type ConformancePackInputParameterType = {
    ParameterName: ParameterNameType;

    ParameterValue: ParameterValueType;
  };

  /**
   * A conformance pack is a collection of AWS Config rules and remediation actions that can be easily deployed as a single entity in an account and a region or across an entire AWS Organization.
   */
  export type ConformancePackResourceType = {
    /**
     * Name of the conformance pack which will be assigned as the unique identifier.
     * Create-only property
     */
    ConformancePackName: string;

    /**
     * AWS Config stores intermediate files while processing conformance pack template.
     */
    DeliveryS3Bucket?: string;

    /**
     * The prefix for delivery S3 bucket.
     */
    DeliveryS3KeyPrefix?: string;

    /**
     * A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
     */
    TemplateBody?: string;

    /**
     * Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
     */
    TemplateS3Uri?: string;

    /**
     * The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.
     */
    TemplateSSMDocumentDetails?: Record<string, any>;

    /**
     * A list of ConformancePackInputParameter objects.
     */
    ConformancePackInputParameters?: ConformancePackInputParameterType[];
  };
}
