/**
 * TypeScript definitions for AWS::Oam::Link
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Oam::Link Resource Type
 */
export namespace AWS_Oam_Link {
  export type ResourceTypeType = {};

  export type LinkConfigurationType = {
    MetricConfiguration?: LinkFilterType;

    LogGroupConfiguration?: LinkFilterType;
  };

  export type LinkFilterType = {
    Filter: string;
  };

  /**
   * Definition of AWS::Oam::Link Resource Type
   */
  export type LinkResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Label?: string;

    /**
     * Create-only property
     */
    LabelTemplate?: string;

    ResourceTypes: ResourceTypeType[];

    /**
     * Create-only property
     */
    SinkIdentifier: string;

    LinkConfiguration?: LinkConfigurationType;

    /**
     * Tags to apply to the link
     */
    Tags?: Record<string, any>;
  };
}
