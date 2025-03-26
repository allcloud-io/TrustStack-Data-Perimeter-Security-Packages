/**
 * TypeScript definitions for AWS::FMS::ResourceSet
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates an AWS Firewall Manager resource set.
 */
export namespace AWS_FMS_ResourceSet {
  /**
   * An AWS resource type
   */
  export type ResourceTypeType = {};

  /**
   * A Base62 ID
   */
  export type Base62IdType = {};

  /**
   * A tag.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * A resource ARN or URI.
   */
  export type ResourceType = {};

  /**
   * Creates an AWS Firewall Manager resource set.
   */
  export type ResourceSetResourceType = {
    /**
     * Read-only property
     */
    Id?: Base62IdType;

    Name: string;

    Description?: string;

    ResourceTypeList: ResourceTypeType[];

    Resources?: ResourceType[];

    Tags?: TagType[];
  };
}
