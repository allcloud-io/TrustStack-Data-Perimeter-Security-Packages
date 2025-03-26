/**
 * TypeScript definitions for AWS::ControlTower::LandingZone
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::ControlTower::LandingZone Resource Type
 */
export namespace AWS_ControlTower_LandingZone {
  export type TagType = {
    Value?: string;

    Key?: string;
  };

  export type LandingZoneStatusType = {};

  export type LandingZoneDriftStatusType = {};

  /**
   * Definition of AWS::ControlTower::LandingZone Resource Type
   */
  export type LandingZoneResourceType = {
    /**
     * Read-only property
     */
    Status?: LandingZoneStatusType;

    /**
     * Read-only property
     */
    LatestAvailableVersion?: string;

    Version: string;

    /**
     * Read-only property
     */
    DriftStatus?: LandingZoneDriftStatusType;

    /**
     * Read-only property
     */
    Arn?: string;

    Manifest: any;

    /**
     * Read-only property
     */
    LandingZoneIdentifier?: string;

    Tags?: TagType[];
  };
}
