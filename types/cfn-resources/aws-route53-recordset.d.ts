/**
 * TypeScript definitions for AWS::Route53::RecordSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Route53::RecordSet
 */
export namespace AWS_Route53_RecordSet {
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

  export type GeoLocationType = {
    ContinentCode?: string;

    CountryCode?: string;

    SubdivisionCode?: string;
  };

  /**
   * Resource Type definition for AWS::Route53::RecordSet
   */
  export type RecordSetResourceType = {
    HealthCheckId?: string;

    AliasTarget?: AliasTargetType;

    Comment?: string;

    /**
     * Create-only property
     */
    HostedZoneName?: string;

    ResourceRecords?: string[];

    /**
     * Create-only property
     */
    HostedZoneId?: string;

    SetIdentifier?: string;

    TTL?: string;

    Weight?: number;

    /**
     * Create-only property
     */
    Name: string;

    Type: string;

    CidrRoutingConfig?: CidrRoutingConfigType;

    Failover?: string;

    GeoProximityLocation?: GeoProximityLocationType;

    Region?: string;

    GeoLocation?: GeoLocationType;

    /**
     * Read-only property
     */
    Id?: string;

    MultiValueAnswer?: boolean;
  };
}
