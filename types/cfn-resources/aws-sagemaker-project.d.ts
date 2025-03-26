/**
 * TypeScript definitions for AWS::SageMaker::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::Project
 */
export namespace AWS_SageMaker_Project {
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

  /**
   * The description of the project.
   */
  export type ProjectDescriptionType = {};

  /**
   * Project Id.
   */
  export type ProjectIdType = {};

  /**
   * Provisioned Product Status Message
   */
  export type ProvisionedProductStatusMessageType = {};

  /**
   * The name of the project.
   */
  export type ProjectNameType = {};

  /**
   * The Amazon Resource Name (ARN) of the Project.
   */
  export type ProjectArnType = {};

  /**
   * Service Catalog product identifier.
   */
  export type ProductIdType = {};

  /**
   * The identifier of the provisioning artifact (also known as a version).
   */
  export type ProvisioningArtifactIdType = {};

  /**
   * The path identifier of the product.
   */
  export type PathIdType = {};

  /**
   * Information about a parameter used to provision a product.
   */
  export type ProvisioningParameterType = {
    /**
     * The parameter key.
     */
    Key: string;

    /**
     * The parameter value.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::SageMaker::Project
   */
  export type ProjectResourceType = {
    /**
     * An array of key-value pairs to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];

    /**
     * Read-only property
     */
    ProjectArn?: ProjectArnType;

    /**
     * Read-only property
     */
    ProjectId?: ProjectIdType;

    /**
     * Create-only property
     */
    ProjectName: ProjectNameType;

    /**
     * Create-only property
     */
    ProjectDescription?: ProjectDescriptionType;

    /**
     * The time at which the project was created.
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Input ServiceCatalog Provisioning Details
     * Create-only property
     */
    ServiceCatalogProvisioningDetails: Record<string, any>;

    /**
     * Provisioned ServiceCatalog  Details
     */
    ServiceCatalogProvisionedProductDetails?: Record<string, any>;

    /**
     * The status of a project.
     * Read-only property
     */
    ProjectStatus?: string;
  };
}
