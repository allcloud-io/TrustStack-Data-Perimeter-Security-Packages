/**
 * TypeScript definitions for AWS::AppRunner::VpcConnector
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::AppRunner::VpcConnector resource specifies an App Runner VpcConnector.
 */
export namespace AWS_AppRunner_VpcConnector {
  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * The AWS::AppRunner::VpcConnector resource specifies an App Runner VpcConnector.
   */
  export type VpcConnectorResourceType = {
    /**
     * A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
     * Create-only property
     */
    VpcConnectorName?: string;

    /**
     * The Amazon Resource Name (ARN) of this VPC connector.
     * Read-only property
     */
    VpcConnectorArn?: string;

    /**
     * The revision of this VPC connector. It's unique among all the active connectors ("Status": "ACTIVE") that share the same Name.
     * Read-only property
     */
    VpcConnectorRevision?: number;

    /**
     * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
     * Create-only property
     */
    Subnets: string[];

    /**
     * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
     * Create-only property
     */
    SecurityGroups?: string[];

    /**
     * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
