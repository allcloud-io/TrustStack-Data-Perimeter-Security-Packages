/**
 * TypeScript definitions for AWS::Route53::CidrCollection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::Route53::CidrCollection.
 */
export namespace AWS_Route53_CidrCollection {
  export type LocationType = {
    /**
     * The name of the location that is associated with the CIDR collection.
     */
    LocationName: string;

    /**
     * A list of CIDR blocks.
     */
    CidrList: string[];
  };

  /**
   * Resource schema for AWS::Route53::CidrCollection.
   */
  export type CidrCollectionResourceType = {
    /**
     * UUID of the CIDR collection.
     * Read-only property
     */
    Id?: string;

    /**
     * A unique name for the CIDR collection.
     * Create-only property
     */
    Name: string;

    /**
     * The Amazon resource name (ARN) to uniquely identify the AWS resource.
     * Read-only property
     */
    Arn?: string;

    /**
     * A complex type that contains information about the list of CIDR locations.
     */
    Locations?: LocationType[];
  };
}
