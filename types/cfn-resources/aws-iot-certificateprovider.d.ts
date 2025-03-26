/**
 * TypeScript definitions for AWS::IoT::CertificateProvider
 * Generated from CloudFormation Resource Schema
 */

/**
 * Use the AWS::IoT::CertificateProvider resource to declare an AWS IoT Certificate Provider.
 */
export namespace AWS_IoT_CertificateProvider {
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

  export type CertificateProviderOperationType = {};

  /**
   * Use the AWS::IoT::CertificateProvider resource to declare an AWS IoT Certificate Provider.
   */
  export type CertificateProviderResourceType = {
    /**
     * Create-only property
     */
    CertificateProviderName?: string;

    LambdaFunctionArn: string;

    AccountDefaultForOperations: CertificateProviderOperationType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
