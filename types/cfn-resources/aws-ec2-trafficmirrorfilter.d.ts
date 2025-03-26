/**
 * TypeScript definitions for AWS::EC2::TrafficMirrorFilter
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::EC2::TrafficMirrorFilter
 */
export namespace AWS_EC2_TrafficMirrorFilter {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::EC2::TrafficMirrorFilter
   */
  export type TrafficMirrorFilterResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Description?: string;

    NetworkServices?: string[];

    Tags?: TagType[];
  };
}
