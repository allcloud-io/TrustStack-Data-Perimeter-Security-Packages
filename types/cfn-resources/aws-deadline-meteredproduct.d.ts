/**
 * TypeScript definitions for AWS::Deadline::MeteredProduct
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::MeteredProduct Resource Type
 */
export namespace AWS_Deadline_MeteredProduct {
  /**
   * Definition of AWS::Deadline::MeteredProduct Resource Type
   */
  export type MeteredProductResourceType = {
    /**
     * Create-only property
     */
    LicenseEndpointId?: string;

    /**
     * Create-only property
     */
    ProductId?: string;

    /**
     * Read-only property
     */
    Port?: number;

    /**
     * Read-only property
     */
    Family?: string;

    /**
     * Read-only property
     */
    Vendor?: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
