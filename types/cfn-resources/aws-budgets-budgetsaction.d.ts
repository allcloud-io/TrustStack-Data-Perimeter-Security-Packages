/**
 * TypeScript definitions for AWS::Budgets::BudgetsAction
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_Budgets_BudgetsAction {
  export type SubscriberType = {
    Type: string;

    Address: string;
  };

  export type ActionThresholdType = {
    Value: number;

    Type: string;
  };

  export type IamActionDefinitionType = {
    PolicyArn: string;

    Roles?: string[];

    Groups?: string[];

    Users?: string[];
  };

  export type ScpActionDefinitionType = {
    PolicyId: string;

    TargetIds: string[];
  };

  export type SsmActionDefinitionType = {
    Subtype: string;

    Region: string;

    InstanceIds: string[];
  };

  export type DefinitionType = {
    IamActionDefinition?: IamActionDefinitionType;

    ScpActionDefinition?: ScpActionDefinitionType;

    SsmActionDefinition?: SsmActionDefinitionType;
  };

  export type ResourceTagType = {
    Key: string;

    Value: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type BudgetsActionResourceType = {
    /**
     * Read-only property
     */
    ActionId?: string;

    /**
     * Create-only property
     */
    BudgetName: string;

    NotificationType: string;

    /**
     * Create-only property
     */
    ActionType: string;

    ActionThreshold: ActionThresholdType;

    ExecutionRoleArn: string;

    ApprovalModel?: string;

    Subscribers: SubscriberType[];

    Definition: DefinitionType;

    ResourceTags?: ResourceTagType[];
  };
}
