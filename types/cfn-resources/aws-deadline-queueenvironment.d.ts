/**
 * TypeScript definitions for AWS::Deadline::QueueEnvironment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Deadline::QueueEnvironment Resource Type
 */
export namespace AWS_Deadline_QueueEnvironment {
  export type EnvironmentTemplateTypeType = {};

  /**
   * Definition of AWS::Deadline::QueueEnvironment Resource Type
   */
  export type QueueEnvironmentResourceType = {
    /**
     * Create-only property
     */
    FarmId: string;

    /**
     * Read-only property
     */
    Name?: string;

    Priority: number;

    /**
     * Read-only property
     */
    QueueEnvironmentId?: string;

    /**
     * Create-only property
     */
    QueueId: string;

    Template: string;

    TemplateType: EnvironmentTemplateTypeType;
  };
}
