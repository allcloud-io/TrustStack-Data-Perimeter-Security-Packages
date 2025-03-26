/**
 * TypeScript definitions for AWS::Invoicing::InvoiceUnit
 * Generated from CloudFormation Resource Schema
 */

/**
 * An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you to separate AWS account costs and configures your invoice for each business entity.
 */
export namespace AWS_Invoicing_InvoiceUnit {
  export type InvoiceUnitArnType = {};

  export type InvoiceReceiverType = {};

  export type NameType = {};

  export type DescriptionType = {};

  export type TaxInheritanceDisabledType = {};

  export type RuleType = {
    LinkedAccounts: string[];
  };

  export type LastModifiedType = {};

  export type ResourceTagType = {
    Key: string;

    Value: string;
  };

  export type ResourceTagsType = {};

  /**
   * An invoice unit is a set of mutually exclusive accounts that correspond to your business entity. Invoice units allow you to separate AWS account costs and configures your invoice for each business entity.
   */
  export type InvoiceUnitResourceType = {
    /**
     * Read-only property
     */
    InvoiceUnitArn?: InvoiceUnitArnType;

    /**
     * Create-only property
     */
    InvoiceReceiver: InvoiceReceiverType;

    /**
     * Create-only property
     */
    Name: NameType;

    Description?: DescriptionType;

    TaxInheritanceDisabled?: TaxInheritanceDisabledType;

    Rule: RuleType;

    /**
     * Read-only property
     */
    LastModified?: LastModifiedType;

    ResourceTags?: ResourceTagsType;
  };
}
