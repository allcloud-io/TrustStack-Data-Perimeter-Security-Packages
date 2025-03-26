/**
 * TypeScript definitions for AWS::AmplifyUIBuilder::Component
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::AmplifyUIBuilder::Component Resource Type
 */
export namespace AWS_AmplifyUIBuilder_Component {
  export type ActionParametersType = {
    Type?: ComponentPropertyType;

    Url?: ComponentPropertyType;

    Anchor?: ComponentPropertyType;

    Target?: ComponentPropertyType;

    Global?: ComponentPropertyType;

    Model?: string;

    Id?: ComponentPropertyType;

    Fields?: ComponentPropertiesType;

    State?: MutationActionSetStateParameterType;
  };

  export type ComponentBindingPropertiesType = {};

  export type ComponentBindingPropertiesValueType = {
    Type?: string;

    BindingProperties?: ComponentBindingPropertiesValuePropertiesType;

    DefaultValue?: string;
  };

  export type ComponentBindingPropertiesValuePropertiesType = {
    Model?: string;

    Field?: string;

    Predicates?: PredicateType[];

    UserAttribute?: string;

    Bucket?: string;

    Key?: string;

    DefaultValue?: string;

    SlotName?: string;
  };

  export type ComponentChildType = {
    ComponentType: string;

    Name: string;

    Properties: ComponentPropertiesType;

    Children?: ComponentChildType[];

    Events?: ComponentEventsType;

    SourceId?: string;
  };

  export type ComponentCollectionPropertiesType = {};

  export type ComponentConditionPropertyType = {
    Property?: string;

    Field?: string;

    Operator?: string;

    Operand?: string;

    Then?: ComponentPropertyType;

    Else?: ComponentPropertyType;

    OperandType?: string;
  };

  export type ComponentDataConfigurationType = {
    Model: string;

    Sort?: SortPropertyType[];

    Predicate?: PredicateType;

    Identifiers?: string[];
  };

  export type ComponentEventType = {
    Action?: string;

    Parameters?: ActionParametersType;

    BindingEvent?: string;
  };

  export type ComponentEventsType = {};

  export type ComponentOverridesType = {};

  export type ComponentOverridesValueType = {};

  export type ComponentPropertiesType = {};

  export type ComponentPropertyType = {
    Value?: string;

    BindingProperties?: ComponentPropertyBindingPropertiesType;

    CollectionBindingProperties?: ComponentPropertyBindingPropertiesType;

    DefaultValue?: string;

    Model?: string;

    Bindings?: FormBindingsType;

    Event?: string;

    UserAttribute?: string;

    Concat?: ComponentPropertyType[];

    Condition?: ComponentConditionPropertyType;

    Configured?: boolean;

    Type?: string;

    ImportedValue?: string;

    ComponentName?: string;

    Property?: string;
  };

  export type ComponentPropertyBindingPropertiesType = {
    Property: string;

    Field?: string;
  };

  export type ComponentVariantType = {
    VariantValues?: ComponentVariantValuesType;

    Overrides?: ComponentOverridesType;
  };

  export type ComponentVariantValuesType = {};

  export type FormBindingElementType = {
    Element: string;

    Property: string;
  };

  export type FormBindingsType = {};

  export type MutationActionSetStateParameterType = {
    ComponentName: string;

    Property: string;

    Set: ComponentPropertyType;
  };

  export type PredicateType = {
    Or?: PredicateType[];

    And?: PredicateType[];

    Field?: string;

    Operator?: string;

    Operand?: string;

    OperandType?: string;
  };

  export type SortDirectionType = {};

  export type SortPropertyType = {
    Field: string;

    Direction: SortDirectionType;
  };

  export type TagsType = {};

  /**
   * Definition of AWS::AmplifyUIBuilder::Component Resource Type
   */
  export type ComponentResourceType = {
    /**
     * Create-only property
     */
    AppId?: string;

    BindingProperties?: ComponentBindingPropertiesType;

    Children?: ComponentChildType[];

    CollectionProperties?: ComponentCollectionPropertiesType;

    ComponentType?: string;

    /**
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * Create-only property
     */
    EnvironmentName?: string;

    Events?: ComponentEventsType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    ModifiedAt?: string;

    Name?: string;

    Overrides?: ComponentOverridesType;

    Properties?: ComponentPropertiesType;

    SchemaVersion?: string;

    SourceId?: string;

    Tags?: TagsType;

    Variants?: ComponentVariantType[];
  };
}
