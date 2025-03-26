/**
 * TypeScript definitions for AWS::Timestream::InfluxDBInstance
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Timestream::InfluxDBInstance resource creates an InfluxDB instance.
 */
export namespace AWS_Timestream_InfluxDBInstance {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value?: string;
  };

  /**
   * The AWS::Timestream::InfluxDBInstance resource creates an InfluxDB instance.
   */
  export type InfluxDBInstanceResourceType = {
    /**
     * The username for the InfluxDB instance.
     * Create-only property
     */
    Username?: string;

    /**
     * The password for the InfluxDB instance.
     * Create-only property
     */
    Password?: string;

    /**
     * The organization for the InfluxDB instance.
     * Create-only property
     */
    Organization?: string;

    /**
     * The bucket for the InfluxDB instance.
     * Create-only property
     */
    Bucket?: string;

    /**
     * The compute instance of the InfluxDB instance.
     */
    DbInstanceType?: string;

    /**
     * A list of EC2 subnet IDs for this InfluxDB instance.
     * Create-only property
     */
    VpcSubnetIds?: string[];

    /**
     * A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.
     * Create-only property
     */
    VpcSecurityGroupIds?: string[];

    /**
     * Attach a public IP to the customer ENI.
     * Default: false
     * Create-only property
     */
    PubliclyAccessible?: boolean;

    /**
     * The storage type of the InfluxDB instance.
     * Create-only property
     */
    DbStorageType?: string;

    /**
     * The allocated storage for the InfluxDB instance.
     * Create-only property
     */
    AllocatedStorage?: number;

    /**
     * The name of an existing InfluxDB parameter group.
     */
    DbParameterGroupIdentifier?: string;

    /**
     * The port number on which InfluxDB accepts connections.
     */
    Port?: number;

    /**
     * Network type of the InfluxDB Instance.
     * Create-only property
     */
    NetworkType?: string;

    /**
     * Configuration for sending logs to customer account from the InfluxDB instance.
     */
    LogDeliveryConfiguration?: Record<string, any>;

    /**
     * Status of the InfluxDB Instance.
     * Read-only property
     */
    Status?: string;

    /**
     * The Amazon Resource Name (ARN) that is associated with the InfluxDB instance.
     * Read-only property
     */
    Arn?: string;

    /**
     * The unique name that is associated with the InfluxDB instance.
     * Create-only property
     */
    Name?: string;

    /**
     * The Availability Zone (AZ) where the InfluxDB instance is created.
     * Read-only property
     */
    AvailabilityZone?: string;

    /**
     * The Secondary Availability Zone (AZ) where the InfluxDB instance is created, if DeploymentType is set as WITH_MULTIAZ_STANDBY.
     * Read-only property
     */
    SecondaryAvailabilityZone?: string;

    /**
     * The connection endpoint for the InfluxDB instance.
     * Read-only property
     */
    Endpoint?: string;

    /**
     * The Auth parameters secret Amazon Resource name (ARN) that is associated with the InfluxDB instance.
     * Read-only property
     */
    InfluxAuthParametersSecretArn?: string;

    /**
     * The service generated unique identifier for InfluxDB instance.
     * Read-only property
     */
    Id?: string;

    /**
     * Deployment type of the InfluxDB Instance.
     */
    DeploymentType?: string;

    /**
     * An arbitrary set of tags (key-value pairs) for this DB instance.
     */
    Tags?: TagType[];
  };
}
