/**
 * TypeScript definitions for AWS::Config::OrganizationConformancePack
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Config::OrganizationConformancePack.
 */
export namespace AWS_Config_OrganizationConformancePack {
  /**
   * Input parameters in the form of key-value pairs for the conformance pack.
   */
  export type ConformancePackInputParameterType = {
    ParameterName: ParameterNameType;

    ParameterValue: ParameterValueType;
  };

  export type ParameterNameType = {};

  export type ParameterValueType = {};

  export type AccountIdType = {};

  /**
   * Resource schema for AWS::Config::OrganizationConformancePack.
   */
  export type OrganizationConformancePackResourceType = {
    /**
     * The name of the organization conformance pack.
     * Create-only property
     */
    OrganizationConformancePackName: string;

    /**
     * Location of file containing the template body.
     */
    TemplateS3Uri?: string;

    /**
     * A string containing full conformance pack template body.
     */
    TemplateBody?: string;

    /**
     * AWS Config stores intermediate files while processing conformance pack template.
     */
    DeliveryS3Bucket?: string;

    /**
     * The prefix for the delivery S3 bucket.
     */
    DeliveryS3KeyPrefix?: string;

    /**
     * A list of ConformancePackInputParameter objects.
     */
    ConformancePackInputParameters?: ConformancePackInputParameterType[];

    /**
     * A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
     */
    ExcludedAccounts?: AccountIdType[];
  };
}
