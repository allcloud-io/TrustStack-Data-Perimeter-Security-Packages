/**
 * TypeScript definitions for AWS::AppConfig::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppConfig::Application
 */
export namespace AWS_AppConfig_Application {
  /**
   * Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
   */
  export type TagsType = {
    /**
     * The key-value string map. The valid character set is [a-zA-Z1-9 +-=._:/-]. The tag key can be up to 128 characters and must not start with aws:.
     */
    Key: string;

    /**
     * The tag value can be up to 256 characters.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::AppConfig::Application
   */
  export type ApplicationResourceType = {
    /**
     * A description of the application.
     */
    Description?: string;

    /**
     * The application Id
     * Read-only property
     */
    ApplicationId?: string;

    /**
     * Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
     */
    Tags?: TagsType[];

    /**
     * A name for the application.
     */
    Name: string;
  };
}
