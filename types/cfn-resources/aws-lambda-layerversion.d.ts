/**
 * TypeScript definitions for AWS::Lambda::LayerVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Lambda::LayerVersion
 */
export namespace AWS_Lambda_LayerVersion {
  export type ContentType = {
    /**
     * For versioned objects, the version of the layer archive object to use.
     */
    S3ObjectVersion?: string;

    /**
     * The Amazon S3 bucket of the layer archive.
     */
    S3Bucket: string;

    /**
     * The Amazon S3 key of the layer archive.
     */
    S3Key: string;
  };

  /**
   * Resource Type definition for AWS::Lambda::LayerVersion
   */
  export type LayerVersionResourceType = {
    /**
     * A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.
     * Create-only property
     */
    CompatibleRuntimes?: string[];

    /**
     * The layer's software license.
     * Create-only property
     */
    LicenseInfo?: string;

    /**
     * The description of the version.
     * Create-only property
     */
    Description?: string;

    /**
     * The name or Amazon Resource Name (ARN) of the layer.
     * Create-only property
     */
    LayerName?: string;

    /**
     * The function layer archive.
     * Create-only property
     */
    Content: ContentType;

    /**
     * Read-only property
     */
    LayerVersionArn?: string;

    /**
     * A list of compatible instruction set architectures.
     * Create-only property
     */
    CompatibleArchitectures?: string[];
  };
}
