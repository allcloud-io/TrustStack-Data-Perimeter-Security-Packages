/**
 * TypeScript definitions for AWS::Glue::DevEndpoint
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Glue::DevEndpoint
 */
export namespace AWS_Glue_DevEndpoint {
  /**
   * Resource Type definition for AWS::Glue::DevEndpoint
   */
  export type DevEndpointResourceType = {
    ExtraJarsS3Path?: string;

    PublicKey?: string;

    NumberOfNodes?: number;

    Arguments?: Record<string, any>;

    SubnetId?: string;

    PublicKeys?: string[];

    SecurityGroupIds?: string[];

    RoleArn: string;

    WorkerType?: string;

    /**
     * Create-only property
     */
    EndpointName?: string;

    GlueVersion?: string;

    ExtraPythonLibsS3Path?: string;

    SecurityConfiguration?: string;

    /**
     * Read-only property
     */
    Id?: string;

    NumberOfWorkers?: number;

    Tags?: Record<string, any>;
  };
}
