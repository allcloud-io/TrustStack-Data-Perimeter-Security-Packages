/**
 * TypeScript definitions for AWS::SageMaker::InferenceComponent
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SageMaker::InferenceComponent
 */
export namespace AWS_SageMaker_InferenceComponent {
  /**
   * The Amazon Resource Name (ARN) of the inference component
   */
  export type InferenceComponentArnType = {};

  /**
   * The name of the inference component
   */
  export type InferenceComponentNameType = {};

  /**
   * The Amazon Resource Name (ARN) of the endpoint the inference component is associated with
   */
  export type EndpointArnType = {};

  /**
   * The name of the endpoint the inference component is associated with
   */
  export type EndpointNameType = {};

  /**
   * The name of the endpoint variant the inference component is associated with
   */
  export type VariantNameType = {};

  /**
   * The failure reason if the inference component is in a failed state
   */
  export type FailureReasonType = {};

  /**
   * The name of the model to use with the inference component
   */
  export type ModelNameType = {};

  export type TimestampType = {};

  /**
   * The image to use for the container that will be materialized for the inference component
   */
  export type ContainerImageType = {};

  export type DeployedImageType = {
    SpecifiedImage?: ContainerImageType;

    ResolvedImage?: ContainerImageType;

    ResolutionTime?: TimestampType;
  };

  export type UrlType = {};

  /**
   * Environment variables to specify on the container
   */
  export type EnvironmentMapType = {};

  export type InferenceComponentContainerSpecificationType = {
    DeployedImage?: DeployedImageType;

    Image?: ContainerImageType;

    ArtifactUrl?: UrlType;

    Environment?: EnvironmentMapType;
  };

  export type StartupParameterTimeoutInSecondsType = {};

  /**
   * The name of the base inference component
   */
  export type BaseInferenceComponentNameType = {};

  export type InferenceComponentStartupParametersType = {
    ModelDataDownloadTimeoutInSeconds?: StartupParameterTimeoutInSecondsType;

    ContainerStartupHealthCheckTimeoutInSeconds?: StartupParameterTimeoutInSecondsType;
  };

  export type NumberOfCpuCoresType = {};

  export type NumberOfAcceleratorDevicesType = {};

  export type MemoryInMbType = {};

  export type InferenceComponentComputeResourceRequirementsType = {
    NumberOfCpuCoresRequired?: NumberOfCpuCoresType;

    NumberOfAcceleratorDevicesRequired?: NumberOfAcceleratorDevicesType;

    MinMemoryRequiredInMb?: MemoryInMbType;

    MaxMemoryRequiredInMb?: MemoryInMbType;
  };

  /**
   * The specification for the inference component
   */
  export type InferenceComponentSpecificationType = {
    ModelName?: ModelNameType;

    BaseInferenceComponentName?: BaseInferenceComponentNameType;

    Container?: InferenceComponentContainerSpecificationType;

    StartupParameters?: InferenceComponentStartupParametersType;

    ComputeResourceRequirements?: InferenceComponentComputeResourceRequirementsType;
  };

  /**
   * The number of copies for the inference component
   */
  export type InferenceComponentCopyCountType = {};

  /**
   * The runtime config for the inference component
   */
  export type InferenceComponentRuntimeConfigType = {
    CopyCount?: InferenceComponentCopyCountType;

    DesiredCopyCount?: InferenceComponentCopyCountType;

    CurrentCopyCount?: InferenceComponentCopyCountType;
  };

  export type InferenceComponentStatusType = {};

  /**
   * A tag in the form of a key-value pair to associate with the resource
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
     */
    Value: string;
  };

  /**
   * An array of tags to apply to the resource
   */
  export type TagListType = {};

  /**
   * Resource Type definition for AWS::SageMaker::InferenceComponent
   */
  export type InferenceComponentResourceType = {
    /**
     * Read-only property
     */
    InferenceComponentArn?: InferenceComponentArnType;

    InferenceComponentName?: InferenceComponentNameType;

    EndpointArn?: EndpointArnType;

    EndpointName: EndpointNameType;

    VariantName?: VariantNameType;

    /**
     * Read-only property
     */
    FailureReason?: FailureReasonType;

    Specification: InferenceComponentSpecificationType;

    RuntimeConfig?: InferenceComponentRuntimeConfigType;

    /**
     * Read-only property
     */
    InferenceComponentStatus?: InferenceComponentStatusType;

    /**
     * Read-only property
     */
    CreationTime?: TimestampType;

    /**
     * Read-only property
     */
    LastModifiedTime?: TimestampType;

    Tags?: TagListType;
  };
}
