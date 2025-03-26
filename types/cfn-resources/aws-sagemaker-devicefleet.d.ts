/**
 * TypeScript definitions for AWS::SageMaker::DeviceFleet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::SageMaker::DeviceFleet
 */
export namespace AWS_SageMaker_DeviceFleet {
  export type EdgeOutputConfigType = {
    /**
     * The Amazon Simple Storage (S3) bucket URI
     */
    S3OutputLocation: string;

    /**
     * The KMS key id used for encryption on the S3 bucket
     */
    KmsKeyId?: string;
  };

  /**
   * Key-value pair to associate as a tag for the resource
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::SageMaker::DeviceFleet
   */
  export type DeviceFleetResourceType = {
    /**
     * Description for the edge device fleet
     */
    Description?: string;

    /**
     * The name of the edge device fleet
     * Create-only property
     */
    DeviceFleetName: string;

    /**
     * S3 bucket and an ecryption key id (if available) to store outputs for the fleet
     */
    OutputConfig: EdgeOutputConfigType;

    /**
     * Role associated with the device fleet
     */
    RoleArn: string;

    /**
     * Associate tags with the resource
     */
    Tags?: TagType[];
  };
}
