/**
 * TypeScript definitions for AWS::Rekognition::Collection
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Rekognition::Collection type creates an Amazon Rekognition Collection. A collection is a logical grouping of information about detected faces which can later be referenced for searches on the group
 */
export namespace AWS_Rekognition_Collection {
  export type ArnType = {};

  /**
   * The name of the collection
   */
  export type CollectionIdType = {};

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
   * The AWS::Rekognition::Collection type creates an Amazon Rekognition Collection. A collection is a logical grouping of information about detected faces which can later be referenced for searches on the group
   */
  export type CollectionResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Create-only property
     */
    CollectionId: CollectionIdType;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
