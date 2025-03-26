/**
 * TypeScript definitions for AWS::CloudFormation::PublicTypeVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Test and Publish a resource that has been registered in the CloudFormation Registry.
 */
export namespace AWS_CloudFormation_PublicTypeVersion {
  /**
   * Test and Publish a resource that has been registered in the CloudFormation Registry.
   */
  export type PublicTypeVersionResourceType = {
    /**
     * The Amazon Resource Number (ARN) of the extension.
     * Create-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Number (ARN) of the extension with the versionId.
     * Read-only property
     */
    TypeVersionArn?: string;

    /**
     * The version number of a public third-party extension
     * Create-only property
     */
    PublicVersionNumber?: string;

    /**
     * The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
     * Read-only property
     */
    PublisherId?: string;

    /**
     * The Amazon Resource Number (ARN) assigned to the public extension upon publication
     * Read-only property
     */
    PublicTypeArn?: string;

    /**
     * The name of the type being registered.
     * We recommend that type names adhere to the following pattern: company_or_organization::service::type.
     * Create-only property
     */
    TypeName?: string;

    /**
     * A url to the S3 bucket where logs for the testType run will be available
     * Create-only property
     */
    LogDeliveryBucket?: string;

    /**
     * The kind of extension
     * Create-only property
     */
    Type?: string;
  };
}
