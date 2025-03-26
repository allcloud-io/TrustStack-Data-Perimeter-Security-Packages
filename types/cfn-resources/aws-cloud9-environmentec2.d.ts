/**
 * TypeScript definitions for AWS::Cloud9::EnvironmentEC2
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Cloud9::EnvironmentEC2
 */
export namespace AWS_Cloud9_EnvironmentEC2 {
  export type RepositoryType = {
    RepositoryUrl: string;

    PathComponent: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::Cloud9::EnvironmentEC2
   */
  export type EnvironmentEC2ResourceType = {
    /**
     * Create-only property
     */
    Repositories?: RepositoryType[];

    /**
     * Create-only property
     */
    OwnerArn?: string;

    Description?: string;

    /**
     * Create-only property
     */
    ConnectionType?: string;

    /**
     * Create-only property
     */
    AutomaticStopTimeMinutes?: number;

    /**
     * Create-only property
     */
    ImageId: string;

    /**
     * Create-only property
     */
    SubnetId?: string;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    InstanceType: string;

    Tags?: TagType[];

    Name?: string;
  };
}
