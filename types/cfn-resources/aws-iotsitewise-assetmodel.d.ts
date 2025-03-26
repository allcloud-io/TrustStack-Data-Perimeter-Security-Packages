/**
 * TypeScript definitions for AWS::IoTSiteWise::AssetModel
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTSiteWise::AssetModel
 */
export namespace AWS_IoTSiteWise_AssetModel {
  /**
   * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
   */
  export type AssetModelCompositeModelType = {
    /**
     * The Actual ID of the composite model
     */
    Id?: string;

    /**
     * The External ID of the composite model
     */
    ExternalId?: string;

    /**
     * The component model ID for which the composite model is composed of
     */
    ComposedAssetModelId?: string;

    /**
     * The parent composite model External ID
     */
    ParentAssetModelCompositeModelExternalId?: string;

    /**
     * The path of the composite model. This is only for derived composite models
     */
    Path?: string[];

    /**
     * A description for the asset composite model.
     */
    Description?: string;

    /**
     * A unique, friendly name for the asset composite model.
     */
    Name: string;

    /**
     * The type of the composite model. For alarm composite models, this type is AWS/ALARM
     */
    Type: string;

    /**
     * The property definitions of the asset model. You can specify up to 200 properties per asset model.
     */
    CompositeModelProperties?: AssetModelPropertyType[];
  };

  /**
   * The definition for property path which is used to reference properties in transforms/metrics
   */
  export type PropertyPathDefinitionType = {
    /**
     * The name of the property
     */
    Name: string;
  };

  /**
   * Contains information about an asset model property.
   */
  export type AssetModelPropertyType = {
    /**
     * Customer provided Logical ID for property.
     */
    LogicalId?: string;

    /**
     * The ID of the Asset Model Property
     */
    Id?: string;

    /**
     * The External ID of the Asset Model Property
     */
    ExternalId?: string;

    /**
     * The name of the asset model property.
     */
    Name: string;

    /**
     * The data type of the asset model property.
     */
    DataType: DataTypeType;

    /**
     * The data type of the structure for this property.
     */
    DataTypeSpec?: DataTypeSpecType;

    /**
     * The unit of the asset model property, such as Newtons or RPM.
     */
    Unit?: string;

    /**
     * The property type
     */
    Type: PropertyTypeType;
  };

  export type DataTypeType = {};

  export type DataTypeSpecType = {};

  /**
   * Contains a property type, which can be one of attribute, measurement, metric, or transform.
   */
  export type PropertyTypeType = {
    TypeName: TypeNameType;

    Attribute?: AttributeType;

    Transform?: TransformType;

    Metric?: MetricType;
  };

  export type TypeNameType = {};

  export type AttributeType = {
    DefaultValue?: string;
  };

  export type TransformType = {
    /**
     * The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
     */
    Expression: string;

    /**
     * The list of variables used in the expression.
     */
    Variables: ExpressionVariableType[];
  };

  export type MetricType = {
    /**
     * The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
     */
    Expression: string;

    /**
     * The list of variables used in the expression.
     */
    Variables: ExpressionVariableType[];

    /**
     * The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression
     */
    Window: MetricWindowType;
  };

  /**
   * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
   */
  export type MetricWindowType = {
    Tumbling?: TumblingWindowType;
  };

  /**
   * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time interval. This window is used in metric and aggregation computations.
   */
  export type TumblingWindowType = {
    Interval: IntervalType;

    Offset?: OffsetType;
  };

  /**
   * The time interval for the tumbling window.
   */
  export type IntervalType = {};

  /**
   * The shift or reference point on timeline for the contiguous time intervals.
   */
  export type OffsetType = {};

  export type ExpressionVariableType = {
    /**
     * The friendly name of the variable to be used in the expression.
     */
    Name: string;

    /**
     * The variable that identifies an asset property from which to use values.
     */
    Value: VariableValueType;
  };

  export type VariableValueType = {
    PropertyLogicalId?: string;

    /**
     * The ID of the property that is trying to be referenced
     */
    PropertyId?: string;

    /**
     * The External ID of the property that is trying to be referenced
     */
    PropertyExternalId?: string;

    /**
     * The path of the property that is trying to be referenced
     */
    PropertyPath?: PropertyPathDefinitionType[];

    HierarchyLogicalId?: string;

    /**
     * The ID of the hierarchy that is trying to be referenced
     */
    HierarchyId?: string;

    /**
     * The External ID of the hierarchy that is trying to be referenced
     */
    HierarchyExternalId?: string;
  };

  /**
   * Contains information about an asset model hierarchy.
   */
  export type AssetModelHierarchyType = {
    /**
     * Customer provided actual ID for hierarchy
     */
    Id?: string;

    /**
     * Customer provided external ID for hierarchy
     */
    ExternalId?: string;

    /**
     * Customer provided logical ID for hierarchy.
     */
    LogicalId?: string;

    /**
     * The name of the asset model hierarchy.
     */
    Name: string;

    /**
     * The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
     */
    ChildAssetModelId: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::IoTSiteWise::AssetModel
   */
  export type AssetModelResourceType = {
    /**
     * The ID of the asset model.
     * Read-only property
     */
    AssetModelId?: string;

    /**
     * The type of the asset model (ASSET_MODEL OR COMPONENT_MODEL)
     * Create-only property
     */
    AssetModelType?: string;

    /**
     * The external ID of the asset model.
     */
    AssetModelExternalId?: string;

    /**
     * The ARN of the asset model, which has the following format.
     * Read-only property
     */
    AssetModelArn?: string;

    /**
     * A unique, friendly name for the asset model.
     */
    AssetModelName: string;

    /**
     * A description for the asset model.
     */
    AssetModelDescription?: string;

    /**
     * The property definitions of the asset model. You can specify up to 200 properties per asset model.
     */
    AssetModelProperties?: AssetModelPropertyType[];

    /**
     * The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
     */
    AssetModelCompositeModels?: AssetModelCompositeModelType[];

    /**
     * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
     */
    AssetModelHierarchies?: AssetModelHierarchyType[];

    /**
     * A list of key-value pairs that contain metadata for the asset model.
     */
    Tags?: TagType[];
  };
}
