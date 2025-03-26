/**
 * TypeScript definitions for AWS::S3Outposts::AccessPoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type Definition for AWS::S3Outposts::AccessPoint
 */
export namespace AWS_S3Outposts_AccessPoint {
  export type VpcConfigurationType = {
    /**
     * Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.
     */
    VpcId?: string;
  };

  /**
   * Resource Type Definition for AWS::S3Outposts::AccessPoint
   */
  export type AccessPointResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the specified AccessPoint.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
     * Create-only property
     */
    Bucket: string;

    /**
     * A name for the AccessPoint.
     * Create-only property
     */
    Name: string;

    /**
     * Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.
     * Create-only property
     */
    VpcConfiguration: VpcConfigurationType;

    /**
     * The access point policy associated with this access point.
     */
    Policy?: Record<string, any>;
  };
}
