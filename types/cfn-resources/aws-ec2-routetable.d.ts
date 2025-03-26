/**
 * TypeScript definitions for AWS::EC2::RouteTable
 * Generated from CloudFormation Resource Schema
 */

/**
 * Specifies a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.
 * For more information, see Route tables in the *Amazon VPC User Guide*.
 */
export namespace AWS_EC2_RouteTable {
  /**
   * Specifies a tag. For more information, see Resource tags.
   */
  export type TagType = {
    /**
     * The tag value.
     */
    Value: string;

    /**
     * The tag key.
     */
    Key: string;
  };

  /**
   * Specifies a route table for the specified VPC. After you create a route table, you can add routes and associate the table with a subnet.
   * For more information, see Route tables in the *Amazon VPC User Guide*.
   */
  export type RouteTableResourceType = {
    /**
     * Read-only property
     */
    RouteTableId?: string;

    /**
     * The ID of the VPC.
     * Create-only property
     */
    VpcId: string;

    /**
     * Any tags assigned to the route table.
     */
    Tags?: TagType[];
  };
}
