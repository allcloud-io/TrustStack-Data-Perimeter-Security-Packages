/**
 * TypeScript definitions for AWS::SES::ReceiptFilter
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SES::ReceiptFilter
 */
export namespace AWS_SES_ReceiptFilter {
  export type FilterType = {
    IpFilter: IpFilterType;

    Name?: string;
  };

  export type IpFilterType = {
    Policy: string;

    Cidr: string;
  };

  /**
   * Resource Type definition for AWS::SES::ReceiptFilter
   */
  export type ReceiptFilterResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Filter: FilterType;
  };
}
