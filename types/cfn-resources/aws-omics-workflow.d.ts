/**
 * TypeScript definitions for AWS::Omics::Workflow
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Omics::Workflow Resource Type
 */
export namespace AWS_Omics_Workflow {
  /**
   * A map of resource tags
   */
  export type TagMapType = {};

  export type WorkflowEngineType = {};

  export type AcceleratorsType = {};

  export type WorkflowParameterType = {
    Description?: string;

    Optional?: boolean;
  };

  export type WorkflowParameterTemplateType = {};

  export type WorkflowStatusType = {};

  export type WorkflowTypeType = {};

  /**
   * Definition of AWS::Omics::Workflow Resource Type
   */
  export type WorkflowResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Read-only property
     */
    CreationTime?: string;

    /**
     * Create-only property
     */
    DefinitionUri?: string;

    Description?: string;

    /**
     * Create-only property
     */
    Engine?: WorkflowEngineType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    Main?: string;

    Name?: string;

    /**
     * Create-only property
     */
    ParameterTemplate?: WorkflowParameterTemplateType;

    /**
     * Read-only property
     */
    Status?: WorkflowStatusType;

    /**
     * Create-only property
     */
    Accelerators?: AcceleratorsType;

    /**
     * Create-only property
     */
    StorageCapacity?: number;

    Tags?: TagMapType;

    /**
     * Read-only property
     */
    Type?: WorkflowTypeType;
  };
}
