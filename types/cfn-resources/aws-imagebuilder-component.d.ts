/**
 * TypeScript definitions for AWS::ImageBuilder::Component
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::ImageBuilder::Component
 */
export namespace AWS_ImageBuilder_Component {
  /**
   * Resource schema for AWS::ImageBuilder::Component
   */
  export type ComponentResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the component.
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the component.
     * Create-only property
     */
    Name: string;

    /**
     * The version of the component.
     * Create-only property
     */
    Version: string;

    /**
     * The description of the component.
     * Create-only property
     */
    Description?: string;

    /**
     * The change description of the component.
     * Create-only property
     */
    ChangeDescription?: string;

    /**
     * The type of the component denotes whether the component is used to build the image or only to test it.
     * Read-only property
     */
    Type?: string;

    /**
     * The platform of the component.
     * Create-only property
     */
    Platform: string;

    /**
     * The data of the component.
     * Create-only property
     */
    Data?: string;

    /**
     * The KMS key identifier used to encrypt the component.
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * The encryption status of the component.
     * Read-only property
     */
    Encrypted?: boolean;

    /**
     * The tags associated with the component.
     * Create-only property
     */
    Tags?: Record<string, any>;

    /**
     * The uri of the component.
     * Create-only property
     */
    Uri?: string;

    /**
     * The operating system (OS) version supported by the component.
     * Create-only property
     */
    SupportedOsVersions?: string[];
  };
}
