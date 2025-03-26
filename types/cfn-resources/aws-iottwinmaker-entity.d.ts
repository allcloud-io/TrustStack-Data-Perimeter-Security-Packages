/**
 * TypeScript definitions for AWS::IoTTwinMaker::Entity
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTTwinMaker::Entity
 */
export namespace AWS_IoTTwinMaker_Entity {
  export type DateTimeFormatType = {};

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
   * An object that specifies information about a property configuration.
   */
  export type PropertyDefinitionConfigurationType = {};

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
    Type?: string;

    /**
     * The unit of measure used in this data type.
     */
    UnitOfMeasure?: string;
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
     */
    MapValue?: Record<string, any>;

    /**
     * A value that relates a component to another component.
     */
    RelationshipValue?: Record<string, any>;
  };

  /**
   * An object that specifies information about a property definition.
   */
  export type DefinitionType = {
    /**
     * An object that specifies information about a property configuration.
     */
    Configuration?: PropertyDefinitionConfigurationType;

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
     * A Boolean value that specifies whether the property definition can be updated.
     */
    IsFinal?: boolean;

    /**
     * A Boolean value that specifies whether the property definition is imported from an external data store.
     */
    IsImported?: boolean;

    /**
     * A Boolean value that specifies whether the property definition is inherited from a parent entity.
     */
    IsInherited?: boolean;

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
   * An object that specifies information about a property.
   */
  export type PropertyType = {
    /**
     * The definition of the property.
     */
    Definition?: DefinitionType;

    /**
     * The value of the property.
     */
    Value?: DataValueType;
  };

  export type PropertyNameType = {};

  /**
   * An object that specifies information about a property group.
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

  export type ComponentType = {
    /**
     * The name of the component.
     */
    ComponentName?: string;

    /**
     * The ID of the component type.
     */
    ComponentTypeId?: string;

    /**
     * The description of the component.
     */
    Description?: string;

    /**
     * The name of the property definition set in the component.
     */
    DefinedIn?: string;

    /**
     * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
     */
    Properties?: Record<string, any>;

    /**
     * An object that maps strings to the property groups to set in the component type. Each string in the mapping must be unique to this object.
     */
    PropertyGroups?: Record<string, any>;

    /**
     * The current status of the entity.
     */
    Status?: StatusType;
  };

  export type CompositeComponentType = {
    /**
     * The name of the component.
     */
    ComponentName?: string;

    /**
     * The path of the component.
     */
    ComponentPath?: string;

    /**
     * The ID of the component type.
     */
    ComponentTypeId?: string;

    /**
     * The description of the component.
     */
    Description?: string;

    /**
     * An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
     */
    Properties?: Record<string, any>;

    /**
     * An object that maps strings to the property groups to set in the component type. Each string in the mapping must be unique to this object.
     */
    PropertyGroups?: Record<string, any>;

    /**
     * The current status of the component.
     */
    Status?: StatusType;
  };

  export type StatusType = {
    State?: string;

    Error?: Record<string, any>;
  };

  /**
   * Resource schema for AWS::IoTTwinMaker::Entity
   */
  export type EntityResourceType = {
    /**
     * The ID of the entity.
     * Create-only property
     */
    EntityId?: string;

    /**
     * The name of the entity.
     */
    EntityName: string;

    /**
     * The current status of the entity.
     * Read-only property
     */
    Status?: StatusType;

    /**
     * A Boolean value that specifies whether the entity has child entities or not.
     * Read-only property
     */
    HasChildEntities?: boolean;

    /**
     * The ID of the parent entity.
     */
    ParentEntityId?: string;

    /**
     * The ARN of the entity.
     * Read-only property
     */
    Arn?: string;

    /**
     * The description of the entity.
     */
    Description?: string;

    /**
     * The date and time when the entity was created.
     * Read-only property
     */
    CreationDateTime?: DateTimeFormatType;

    /**
     * The last date and time when the entity was updated.
     * Read-only property
     */
    UpdateDateTime?: DateTimeFormatType;

    /**
     * A key-value pair to associate with a resource.
     */
    Tags?: Record<string, any>;

    /**
     * The ID of the workspace.
     * Create-only property
     */
    WorkspaceId: string;

    /**
     * A map that sets information about a component type.
     */
    Components?: Record<string, any>;

    /**
     * A map that sets information about a composite component.
     */
    CompositeComponents?: Record<string, any>;
  };
}
