/**
 * TypeScript definitions for AWS::IoTCoreDeviceAdvisor::SuiteDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_IoTCoreDeviceAdvisor_SuiteDefinition {
  export type DeviceUnderTestType = {
    CertificateArn?: string;

    ThingArn?: string;
  };

  /**
   * The Name of the suite definition.
   */
  export type SuiteDefinitionNameType = {};

  /**
   * The root group of the test suite.
   */
  export type RootGroupType = {};

  /**
   * The devices being tested in the test suite
   */
  export type DevicesType = {};

  /**
   * The device permission role arn of the test suite.
   */
  export type DevicePermissionRoleArnType = {};

  /**
   * Whether the tests are intended for qualification in a suite.
   */
  export type IntendedForQualificationType = {};

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
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type SuiteDefinitionResourceType = {
    SuiteDefinitionConfiguration: Record<string, any>;

    /**
     * The unique identifier for the suite definition.
     * Read-only property
     */
    SuiteDefinitionId?: string;

    /**
     * The Amazon Resource name for the suite definition.
     * Read-only property
     */
    SuiteDefinitionArn?: string;

    /**
     * The suite definition version of a test suite.
     * Read-only property
     */
    SuiteDefinitionVersion?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
