/**
 * TypeScript definitions for AWS::IoTThingsGraph::FlowTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoTThingsGraph::FlowTemplate
 */
export namespace AWS_IoTThingsGraph_FlowTemplate {
  export type DefinitionDocumentType = {
    Language: string;

    Text: string;
  };

  /**
   * Resource Type definition for AWS::IoTThingsGraph::FlowTemplate
   */
  export type FlowTemplateResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    CompatibleNamespaceVersion?: number;

    Definition: DefinitionDocumentType;
  };
}
