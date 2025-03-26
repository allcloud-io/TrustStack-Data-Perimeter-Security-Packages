/**
 * TypeScript definitions for AWS::Route53::RecordSetGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53::RecordSetGroup
 */
export namespace AWS_Route53_RecordSetGroup {
  export type AliasTargetType = {
    DNSName: string;

    HostedZoneId: string;

    EvaluateTargetHealth?: boolean;
  };

  export type CidrRoutingConfigType = {
    CollectionId: string;

    LocationName: string;
  };

  export type GeoProximityLocationType = {
    AWSRegion?: string;

    LocalZoneGroup?: string;

    Bias?: number;

    Coordinates?: CoordinatesType;
  };

  export type CoordinatesType = {
    Longitude: string;

    Latitude: string;
  };

  export type RecordSetType = {
    HealthCheckId?: string;

    AliasTarget?: AliasTargetType;

    HostedZoneName?: string;

    ResourceRecords?: string[];

    HostedZoneId?: string;

    SetIdentifier?: string;

    TTL?: string;

    Weight?: number;

    Name: string;

    Type: string;

    CidrRoutingConfig?: CidrRoutingConfigType;

    Failover?: string;

    GeoProximityLocation?: GeoProximityLocationType;

    Region?: string;

    GeoLocation?: GeoLocationType;

    MultiValueAnswer?: boolean;
  };

  export type GeoLocationType = {
    ContinentCode?: string;

    CountryCode?: string;

    SubdivisionCode?: string;
  };

  /**
   * Resource Type definition for AWS::Route53::RecordSetGroup
   */
  export type RecordSetGroupResourceType = {
    Comment?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    HostedZoneName?: string;

    RecordSets?: RecordSetType[];

    /**
     * Create-only property
     */
    HostedZoneId?: string;
  };
}
