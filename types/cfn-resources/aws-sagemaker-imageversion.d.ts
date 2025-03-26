/**
 * TypeScript definitions for AWS::SageMaker::ImageVersion
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::ImageVersion
 */
export namespace AWS_SageMaker_ImageVersion {
  /**
   * The name of the image this version belongs to.
   */
  export type ImageNameType = {};

  /**
   * The Amazon Resource Name (ARN) of the parent image.
   */
  export type ImageArnType = {};

  /**
   * The Amazon Resource Name (ARN) of the image version.
   */
  export type ImageVersionArnType = {};

  /**
   * The registry path of the container image on which this image version is based.
   */
  export type BaseImageType = {};

  /**
   * The registry path of the container image that contains this image version.
   */
  export type ContainerImageType = {};

  /**
   * The alias of the image version.
   */
  export type AliasType = {};

  /**
   * List of aliases for the image version.
   */
  export type AliasesType = {};

  /**
   * The version number of the image version.
   */
  export type VersionType = {};

  /**
   * The availability of the image version specified by the maintainer.
   */
  export type VendorGuidanceType = {};

  /**
   * Indicates SageMaker job type compatibility.
   */
  export type JobTypeType = {};

  /**
   * The machine learning framework vended in the image version.
   */
  export type MLFrameworkType = {};

  /**
   * The supported programming language and its version.
   */
  export type ProgrammingLangType = {};

  /**
   * Indicates CPU or GPU compatibility.
   */
  export type ProcessorType = {};

  /**
   * Indicates Horovod compatibility.
   */
  export type HorovodType = {};

  /**
   * The maintainer description of the image version.
   */
  export type ReleaseNotesType = {};

  /**
   * Resource Type definition for AWS::SageMaker::ImageVersion
   */
  export type ImageVersionResourceType = {
    /**
     * Create-only property
     */
    ImageName: ImageNameType;

    /**
     * Read-only property
     */
    ImageArn?: ImageArnType;

    /**
     * Read-only property
     */
    ImageVersionArn?: ImageVersionArnType;

    /**
     * Create-only property
     */
    BaseImage: BaseImageType;

    /**
     * Read-only property
     */
    ContainerImage?: ContainerImageType;

    /**
     * Read-only property
     */
    Version?: VersionType;

    Alias?: AliasType;

    Aliases?: AliasesType;

    VendorGuidance?: VendorGuidanceType;

    JobType?: JobTypeType;

    MLFramework?: MLFrameworkType;

    ProgrammingLang?: ProgrammingLangType;

    Processor?: ProcessorType;

    Horovod?: HorovodType;

    ReleaseNotes?: ReleaseNotesType;
  };
}
