/**
 * TypeScript definitions for AWS::IoTTwinMaker::ComponentType
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTTwinMaker::ComponentType
 */
export namespace AWS_IoTTwinMaker_ComponentType {
  export type DateTimeFormatType = {};

  export type ParentComponentTypeType = {};

  export type PropertyNameType = {};

  export type RequiredPropertyType = {};

  export type LambdaFunctionType = {
    Arn: string;
  };

  /**
   * The data connector.
   */
  export type DataConnectorType = {
    /**
     * A Boolean value that specifies whether the data connector is native to IoT TwinMaker.
     */
    IsNative?: boolean;

    /**
     * The Lambda function associated with this data connector.
     */
    Lambda?: LambdaFunctionType;
  };

  /**
   * The function of component type.
   */
  export type FunctionType = {
    /**
     * The data connector.
     */
    ImplementedBy?: DataConnectorType;

    /**
     * The required properties of the function.
     */
    RequiredProperties?: RequiredPropertyType[];

    /**
     * The scope of the function.
     */
    Scope?: string;
  };

  /**
   * An object that specifies a value for a property.
   */
  export type DataValueType = {
    /**
     * A Boolean value.
     */
    BooleanValue?: boolean;

    /**
     * A double value.
     */
    DoubleValue?: number;

    /**
     * An expression that produces the value.
     */
    Expression?: string;

    /**
     * An integer value.
     */
    IntegerValue?: number;

    /**
     * A list of multiple values.
     */
    ListValue?: DataValueType[];

    /**
     * A long value.
     */
    LongValue?: number;

    /**
     * A string value.
     */
    StringValue?: string;

    /**
     * An object that maps strings to multiple DataValue objects.
     *
     */
    MapValue?: Record<string, any>;

    /**
     * A value that relates a component to another component.
     */
    RelationshipValue?: Record<string, any>;
  };

  /**
   * The type of the relationship.
   */
  export type RelationshipType = {
    /**
     * The type of the relationship.
     */
    RelationshipType?: string;

    /**
     * The ID of the target component type associated with this relationship.
     */
    TargetComponentTypeId?: string;
  };

  /**
   * An object that specifies the data type of a property.
   */
  export type DataTypeType = {
    /**
     * The allowed values for this data type.
     */
    AllowedValues?: DataValueType[];

    /**
     * The nested type in the data type.
     */
    NestedType?: DataTypeType;

    /**
     * A relationship that associates a component with another component.
     */
    Relationship?: RelationshipType;

    /**
     * The underlying type of the data type.
     */
    Type: string;

    /**
     * The unit of measure used in this data type.
     */
    UnitOfMeasure?: string;
  };

  /**
   * An object that sets information about a property.
   */
  export type PropertyDefinitionType = {
    /**
     * An object that specifies information about a property.
     */
    Configurations?: Record<string, any>;

    /**
     * An object that contains information about the data type.
     */
    DataType?: DataTypeType;

    /**
     * An object that contains the default value.
     */
    DefaultValue?: DataValueType;

    /**
     * A Boolean value that specifies whether the property ID comes from an external data store.
     */
    IsExternalId?: boolean;

    /**
     * A Boolean value that specifies whether the property is required.
     */
    IsRequiredInEntity?: boolean;

    /**
     * A Boolean value that specifies whether the property is stored externally.
     */
    IsStoredExternally?: boolean;

    /**
     * A Boolean value that specifies whether the property consists of time series data.
     */
    IsTimeSeries?: boolean;
  };

  /**
   * An object that sets information about a property group.
   */
  export type PropertyGroupType = {
    /**
     * The type of property group.
     */
    GroupType?: string;

    /**
     * The list of property names in the property group.
     */
    PropertyNames?: PropertyNameType[];
  };

  /**
   * An object that sets information about a composite component type.
   */
  export type CompositeComponentTypeType = {
    /**
     * The id of the composite component type.
     */
    ComponentTypeId?: string;
  };

  export type StatusType = {
    State?: string;

    Error?: Record<string, any>;
  };

  /**
   * Resource schema for AWS::IoTTwinMaker::ComponentType
   */
  export type ComponentTypeResourceType = {
    /**
     * The ID of the workspace that contains the component type.
     * Create-only property
     */
    WorkspaceId: string;

    /**
     * The ID of the component type.
     * Create-only property
     */
    ComponentTypeId: string;

    /**
     * The description of the component type.
     */
    Description?: string;

    /**
     * Specifies the parent component type to extend.
     */
    ExtendsFrom?: ParentComponentTypeType[];

    /**
     * a Map of functions in the component type. Each function's key must be unique to this map.
     */
    Functions?: Record<string, any>;

    /**
     * A Boolean value that specifies whether an entity can have more than one component of this type.
     */
    IsSingleton?: boolean;

    /**
     * An map of the property definitions in the component type. Each property definition's key must be unique to this map.
     */
    PropertyDefinitions?: Record<string, any>;

    /**
     * An map of the property groups in the component type. Each property group's key must be unique to this map.
     */
    PropertyGroups?: Record<string, any>;

    /**
     * An map of the composite component types in the component type. Each composite component type's key must be unique to this map.
     */
    CompositeComponentTypes?: Record<string, any>;

    /**
     * The ARN of the component type.
     * Read-only property
     */
    Arn?: string;

    /**
     * The date and time when the component type was created.
     * Read-only property
     */
    CreationDateTime?: DateTimeFormatType;

    /**
     * The last date and time when the component type was updated.
     * Read-only property
     */
    UpdateDateTime?: DateTimeFormatType;

    /**
     * The current status of the component type.
     * Read-only property
     */
    Status?: StatusType;

    /**
     * A Boolean value that specifies whether the component type is abstract.
     * Read-only property
     */
    IsAbstract?: boolean;

    /**
     * A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.
     * Read-only property
     */
    IsSchemaInitialized?: boolean;

    /**
     * A map of key-value pairs to associate with a resource.
     */
    Tags?: Record<string, any>;
  };
}
