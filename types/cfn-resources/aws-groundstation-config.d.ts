/**
 * TypeScript definitions for AWS::GroundStation::Config
 * Generated from CloudFormation Resource Schema
 */

/**
 * AWS Ground Station config resource type for CloudFormation.
 */
export namespace AWS_GroundStation_Config {
  export type JsonStringType = {};

  export type ConfigDataType = {
    AntennaDownlinkConfig?: AntennaDownlinkConfigType;

    TrackingConfig?: TrackingConfigType;

    DataflowEndpointConfig?: DataflowEndpointConfigType;

    AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfigType;

    AntennaUplinkConfig?: AntennaUplinkConfigType;

    UplinkEchoConfig?: UplinkEchoConfigType;

    S3RecordingConfig?: S3RecordingConfigType;
  };

  export type EirpUnitsType = {};

  export type EirpType = {
    Value?: number;

    Units?: EirpUnitsType;
  };

  export type FrequencyUnitsType = {};

  export type BandwidthUnitsType = {};

  export type FrequencyBandwidthType = {
    Value?: number;

    Units?: BandwidthUnitsType;
  };

  export type FrequencyType = {
    Value?: number;

    Units?: FrequencyUnitsType;
  };

  export type PolarizationType = {};

  export type S3KeyPrefixType = {};

  export type BucketArnType = {};

  export type RoleArnType = {};

  export type UplinkSpectrumConfigType = {
    CenterFrequency?: FrequencyType;

    Polarization?: PolarizationType;
  };

  export type SpectrumConfigType = {
    CenterFrequency?: FrequencyType;

    Bandwidth?: FrequencyBandwidthType;

    Polarization?: PolarizationType;
  };

  export type AntennaDownlinkConfigType = {
    SpectrumConfig?: SpectrumConfigType;
  };

  export type TrackingConfigType = {
    Autotrack?: string;
  };

  export type DataflowEndpointConfigType = {
    DataflowEndpointName?: string;

    DataflowEndpointRegion?: string;
  };

  export type DemodulationConfigType = {
    UnvalidatedJSON?: JsonStringType;
  };

  export type DecodeConfigType = {
    UnvalidatedJSON?: JsonStringType;
  };

  export type AntennaDownlinkDemodDecodeConfigType = {
    SpectrumConfig?: SpectrumConfigType;

    DemodulationConfig?: DemodulationConfigType;

    DecodeConfig?: DecodeConfigType;
  };

  export type AntennaUplinkConfigType = {
    SpectrumConfig?: UplinkSpectrumConfigType;

    TargetEirp?: EirpType;

    TransmitDisabled?: boolean;
  };

  export type UplinkEchoConfigType = {
    Enabled?: boolean;

    AntennaUplinkConfigArn?: string;
  };

  export type S3RecordingConfigType = {
    BucketArn?: BucketArnType;

    RoleArn?: RoleArnType;

    Prefix?: S3KeyPrefixType;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * AWS Ground Station config resource type for CloudFormation.
   */
  export type ConfigResourceType = {
    Name: string;

    Tags?: TagType[];

    /**
     * Read-only property
     */
    Type?: string;

    ConfigData: ConfigDataType;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
