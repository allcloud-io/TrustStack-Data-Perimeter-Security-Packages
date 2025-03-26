/**
 * TypeScript definitions for AWS::ServiceCatalogAppRegistry::Application
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::ServiceCatalogAppRegistry::Application
 */
export namespace AWS_ServiceCatalogAppRegistry_Application {
  export type TagsType = {};

  /**
   * Resource Schema for AWS::ServiceCatalogAppRegistry::Application
   */
  export type ApplicationResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * The name of the application.
     */
    Name: string;

    /**
     * The description of the application.
     */
    Description?: string;

    Tags?: TagsType;

    /**
     * The key of the AWS application tag, which is awsApplication. Applications created before 11/13/2023 or applications without the AWS application tag resource group return no value.
     * Read-only property
     */
    ApplicationTagKey?: string;

    /**
     * The value of the AWS application tag, which is the identifier of an associated resource. Applications created before 11/13/2023 or applications without the AWS application tag resource group return no value.
     * Read-only property
     */
    ApplicationTagValue?: string;

    /**
     * The name of the application.
     * Read-only property
     */
    ApplicationName?: string;
  };
}
