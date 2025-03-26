/**
 * TypeScript definitions for AWS::AppStream::Entitlement
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::AppStream::Entitlement
 */
export namespace AWS_AppStream_Entitlement {
  export type AttributeType = {
    Name: string;

    Value: string;
  };

  /**
   * Resource Type definition for AWS::AppStream::Entitlement
   */
  export type EntitlementResourceType = {
    /**
     * Create-only property
     */
    Name: string;

    /**
     * Create-only property
     */
    StackName: string;

    Description?: string;

    AppVisibility: string;

    Attributes: AttributeType[];

    /**
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * Read-only property
     */
    LastModifiedTime?: string;
  };
}
