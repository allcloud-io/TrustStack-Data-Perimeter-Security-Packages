/**
 * TypeScript definitions for AWS::Macie::AllowList
 * Generated from CloudFormation Resource Schema
 */

/**
 * Macie AllowList resource schema
 */
export namespace AWS_Macie_AllowList {
  export type RegexType = {};

  export type S3WordsListType = {
    BucketName: string;

    ObjectKey: string;
  };

  /**
   * The regex or s3 object to use for the AllowList.
   */
  export type CriteriaType = {};

  /**
   * The status for the AllowList
   */
  export type StatusType = {};

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
   * Macie AllowList resource schema
   */
  export type AllowListResourceType = {
    /**
     * Name of AllowList.
     */
    Name: string;

    /**
     * Description of AllowList.
     */
    Description?: string;

    /**
     * AllowList criteria.
     */
    Criteria: CriteriaType;

    /**
     * AllowList ID.
     * Read-only property
     */
    Id?: string;

    /**
     * AllowList ARN.
     * Read-only property
     */
    Arn?: string;

    /**
     * AllowList status.
     * Read-only property
     */
    Status?: StatusType;

    /**
     * A collection of tags associated with a resource
     */
    Tags?: TagType[];
  };
}
