/**
 * TypeScript definitions for AWS::ServiceCatalog::ServiceAction
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema for AWS::ServiceCatalog::ServiceAction
 */
export namespace AWS_ServiceCatalog_ServiceAction {
  export type DefinitionParameterType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource Schema for AWS::ServiceCatalog::ServiceAction
   */
  export type ServiceActionResourceType = {
    AcceptLanguage?: string;

    Name: string;

    DefinitionType: string;

    Definition: DefinitionParameterType[];

    Description?: string;

    /**
     * Read-only property
     */
    Id?: string;
  };
}
