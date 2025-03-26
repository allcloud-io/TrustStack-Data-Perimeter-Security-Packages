/**
 * TypeScript definitions for AWS::GameLift::Location
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::GameLift::Location resource creates an Amazon GameLift (GameLift) custom location.
 */
export namespace AWS_GameLift_Location {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
     */
    Value: string;
  };

  /**
   * The AWS::GameLift::Location resource creates an Amazon GameLift (GameLift) custom location.
   */
  export type LocationResourceType = {
    /**
     * Create-only property
     */
    LocationName: string;

    /**
     * Read-only property
     */
    LocationArn?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
