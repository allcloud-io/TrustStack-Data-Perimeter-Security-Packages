/**
 * TypeScript definitions for AWS::Pinpoint::Segment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Pinpoint::Segment
 */
export namespace AWS_Pinpoint_Segment {
  export type SegmentDimensionsType = {
    Demographic?: DemographicType;

    Metrics?: Record<string, any>;

    Attributes?: Record<string, any>;

    Behavior?: BehaviorType;

    UserAttributes?: Record<string, any>;

    Location?: LocationType;
  };

  export type SegmentGroupsType = {
    Groups?: GroupsType[];

    Include?: string;
  };

  export type DemographicType = {
    AppVersion?: SetDimensionType;

    DeviceType?: SetDimensionType;

    Platform?: SetDimensionType;

    Channel?: SetDimensionType;

    Model?: SetDimensionType;

    Make?: SetDimensionType;
  };

  export type GroupsType = {
    Type?: string;

    SourceType?: string;

    Dimensions?: SegmentDimensionsType[];

    SourceSegments?: SourceSegmentsType[];
  };

  export type LocationType = {
    GPSPoint?: GPSPointType;

    Country?: SetDimensionType;
  };

  export type BehaviorType = {
    Recency?: RecencyType;
  };

  export type SetDimensionType = {
    DimensionType?: string;

    Values?: string[];
  };

  export type SourceSegmentsType = {
    Version?: number;

    Id: string;
  };

  export type GPSPointType = {
    RangeInKilometers: number;

    Coordinates: CoordinatesType;
  };

  export type RecencyType = {
    Duration: string;

    RecencyType: string;
  };

  export type CoordinatesType = {
    Latitude: number;

    Longitude: number;
  };

  /**
   * Resource Type definition for AWS::Pinpoint::Segment
   */
  export type SegmentResourceType = {
    /**
     * Read-only property
     */
    SegmentId?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    SegmentGroups?: SegmentGroupsType;

    Dimensions?: SegmentDimensionsType;

    /**
     * Create-only property
     */
    ApplicationId: string;

    Tags?: Record<string, any>;

    Name: string;
  };
}
