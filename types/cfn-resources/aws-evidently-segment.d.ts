/**
 * TypeScript definitions for AWS::Evidently::Segment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Evidently::Segment
 */
export namespace AWS_Evidently_Segment {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Evidently::Segment
   */
  export type SegmentResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    Name: string;

    Description?: string;

    Pattern?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
