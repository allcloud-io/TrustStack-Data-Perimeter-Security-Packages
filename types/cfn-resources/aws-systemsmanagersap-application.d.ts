/**
 * TypeScript definitions for AWS::SystemsManagerSAP::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::SystemsManagerSAP::Application
 */
export namespace AWS_SystemsManagerSAP_Application {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type CredentialType = {
    DatabaseName?: string;

    CredentialType?: string;

    SecretId?: string;
  };

  export type InstanceType = {};

  /**
   * Resource schema for AWS::SystemsManagerSAP::Application
   */
  export type ApplicationResourceType = {
    ApplicationId: string;

    ApplicationType: string;

    /**
     * The ARN of the SSM-SAP application
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    Credentials?: CredentialType[];

    /**
     * Create-only property
     */
    Instances?: InstanceType[];

    /**
     * Create-only property
     */
    SapInstanceNumber?: string;

    /**
     * Create-only property
     */
    Sid?: string;

    /**
     * The tags of a SystemsManagerSAP application.
     */
    Tags?: TagType[];

    /**
     * The ARN of the SAP HANA database
     * Create-only property
     */
    DatabaseArn?: string;
  };
}
