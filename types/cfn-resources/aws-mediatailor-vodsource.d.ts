/**
 * TypeScript definitions for AWS::MediaTailor::VodSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaTailor::VodSource Resource Type
 */
export namespace AWS_MediaTailor_VodSource {
  /**
   * <p>The HTTP package configuration properties for the requested VOD source.</p>
   */
  export type HttpPackageConfigurationType = {
    /**
     * <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
     */
    Path: string;

    /**
     * <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
     */
    SourceGroup: string;

    Type: TypeType;
  };

  export type TypeType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::MediaTailor::VodSource Resource Type
   */
  export type VodSourceResourceType = {
    /**
     * <p>The ARN of the VOD source.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * <p>A list of HTTP package configuration parameters for this VOD source.</p>
     */
    HttpPackageConfigurations: HttpPackageConfigurationType[];

    /**
     * Create-only property
     */
    SourceLocationName: string;

    /**
     * The tags to assign to the VOD source.
     */
    Tags?: TagType[];

    /**
     * Create-only property
     */
    VodSourceName: string;
  };
}
