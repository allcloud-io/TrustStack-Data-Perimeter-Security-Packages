/**
 * TypeScript definitions for AWS::LicenseManager::License
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::LicenseManager::License
 */
export namespace AWS_LicenseManager_License {
  export type ValidityDateFormatType = {
    /**
     * Validity begin date for the license.
     */
    Begin: string;

    /**
     * Validity begin date for the license.
     */
    End: string;
  };

  export type IssuerDataType = {
    Name: string;

    SignKey?: string;
  };

  export type EntitlementType = {
    Name: string;

    Value?: string;

    MaxCount?: number;

    Overage?: boolean;

    Unit: string;

    AllowCheckIn?: boolean;
  };

  export type ConsumptionConfigurationType = {
    RenewType?: string;

    ProvisionalConfiguration?: ProvisionalConfigurationType;

    BorrowConfiguration?: BorrowConfigurationType;
  };

  export type ProvisionalConfigurationType = {
    MaxTimeToLiveInMinutes: number;
  };

  export type BorrowConfigurationType = {
    MaxTimeToLiveInMinutes: number;

    AllowEarlyCheckIn: boolean;
  };

  export type MetadataType = {
    Name: string;

    Value: string;
  };

  export type LicenseStatusType = {};

  export type ArnType = {};

  /**
   * Resource Type definition for AWS::LicenseManager::License
   */
  export type LicenseResourceType = {
    /**
     * ProductSKU of the license.
     */
    ProductSKU?: string;

    Issuer: IssuerDataType;

    /**
     * Name for the created license.
     */
    LicenseName: string;

    /**
     * Product name for the created license.
     */
    ProductName: string;

    /**
     * Home region for the created license.
     */
    HomeRegion: string;

    Validity: ValidityDateFormatType;

    Entitlements: EntitlementType[];

    /**
     * Beneficiary of the license.
     */
    Beneficiary?: string;

    ConsumptionConfiguration: ConsumptionConfigurationType;

    LicenseMetadata?: MetadataType[];

    /**
     * Amazon Resource Name is a unique name for each resource.
     * Read-only property
     */
    LicenseArn?: ArnType;

    Status?: LicenseStatusType;

    /**
     * The version of the license.
     * Read-only property
     */
    Version?: string;
  };
}
