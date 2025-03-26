/**
 * TypeScript definitions for AWS::ServiceDiscovery::HttpNamespace
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
 */
export namespace AWS_ServiceDiscovery_HttpNamespace {
  export type TagType = {
    Value: string;

    Key: string;
  };

  /**
   * Resource Type definition for AWS::ServiceDiscovery::HttpNamespace
   */
  export type HttpNamespaceResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    Description?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name: string;
  };
}
