/**
 * TypeScript definitions for AWS::AmplifyUIBuilder::Form
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::AmplifyUIBuilder::Form Resource Type
 */
export namespace AWS_AmplifyUIBuilder_Form {
  export type FieldConfigType = {
    Label?: string;

    Position?: FieldPositionType;

    Excluded?: boolean;

    InputType?: FieldInputConfigType;

    Validations?: FieldValidationConfigurationType[];
  };

  export type FieldInputConfigType = {
    Type: string;

    Required?: boolean;

    ReadOnly?: boolean;

    Placeholder?: string;

    DefaultValue?: string;

    DescriptiveText?: string;

    DefaultChecked?: boolean;

    DefaultCountryCode?: string;

    ValueMappings?: ValueMappingsType;

    Name?: string;

    MinValue?: number;

    MaxValue?: number;

    Step?: number;

    Value?: string;

    IsArray?: boolean;

    FileUploaderConfig?: FileUploaderFieldConfigType;
  };

  export type FieldPositionType = {};

  export type FieldValidationConfigurationType = {
    Type: string;

    StrValues?: string[];

    NumValues?: number[];

    ValidationMessage?: string;
  };

  export type FieldsMapType = {};

  export type FileUploaderFieldConfigType = {
    AccessLevel: StorageAccessLevelType;

    AcceptedFileTypes: string[];

    ShowThumbnails?: boolean;

    IsResumable?: boolean;

    MaxFileCount?: number;

    MaxSize?: number;
  };

  export type FixedPositionType = {};

  export type FormActionTypeType = {};

  export type FormButtonType = {
    Excluded?: boolean;

    Children?: string;

    Position?: FieldPositionType;
  };

  export type FormButtonsPositionType = {};

  export type FormCTAType = {
    Position?: FormButtonsPositionType;

    Clear?: FormButtonType;

    Cancel?: FormButtonType;

    Submit?: FormButtonType;
  };

  export type FormDataSourceTypeType = {};

  export type FormDataTypeConfigType = {
    DataSourceType: FormDataSourceTypeType;

    DataTypeName: string;
  };

  export type FormInputBindingPropertiesType = {};

  export type FormInputBindingPropertiesValueType = {
    Type?: string;

    BindingProperties?: FormInputBindingPropertiesValuePropertiesType;
  };

  export type FormInputBindingPropertiesValuePropertiesType = {
    Model?: string;
  };

  export type FormInputValuePropertyType = {
    Value?: string;

    BindingProperties?: FormInputValuePropertyBindingPropertiesType;

    Concat?: FormInputValuePropertyType[];
  };

  export type FormInputValuePropertyBindingPropertiesType = {
    Property: string;

    Field?: string;
  };

  export type FormStyleType = {
    HorizontalGap?: FormStyleConfigType;

    VerticalGap?: FormStyleConfigType;

    OuterPadding?: FormStyleConfigType;
  };

  export type FormStyleConfigType = {};

  export type LabelDecoratorType = {};

  export type SectionalElementType = {
    Type: string;

    Position?: FieldPositionType;

    Text?: string;

    Level?: number;

    Orientation?: string;

    Excluded?: boolean;
  };

  export type SectionalElementMapType = {};

  export type StorageAccessLevelType = {};

  export type TagsType = {};

  export type ValueMappingType = {
    DisplayValue?: FormInputValuePropertyType;

    Value: FormInputValuePropertyType;
  };

  export type ValueMappingsType = {
    Values: ValueMappingType[];

    BindingProperties?: FormInputBindingPropertiesType;
  };

  /**
   * Definition of AWS::AmplifyUIBuilder::Form Resource Type
   */
  export type FormResourceType = {
    /**
     * Create-only property
     */
    AppId?: string;

    Cta?: FormCTAType;

    DataType?: FormDataTypeConfigType;

    /**
     * Create-only property
     */
    EnvironmentName?: string;

    Fields?: FieldsMapType;

    FormActionType?: FormActionTypeType;

    /**
     * Read-only property
     */
    Id?: string;

    LabelDecorator?: LabelDecoratorType;

    Name?: string;

    SchemaVersion?: string;

    SectionalElements?: SectionalElementMapType;

    Style?: FormStyleType;

    Tags?: TagsType;
  };
}
