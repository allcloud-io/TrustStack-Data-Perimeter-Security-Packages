/**
 * TypeScript definitions for AWS::IoTAnalytics::Pipeline
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::IoTAnalytics::Pipeline
 */
export namespace AWS_IoTAnalytics_Pipeline {
  export type ActivityType = {
    SelectAttributes?: SelectAttributesType;

    Datastore?: DatastoreType;

    Filter?: FilterType;

    AddAttributes?: AddAttributesType;

    Channel?: ChannelType;

    DeviceShadowEnrich?: DeviceShadowEnrichType;

    Math?: MathType;

    Lambda?: LambdaType;

    DeviceRegistryEnrich?: DeviceRegistryEnrichType;

    RemoveAttributes?: RemoveAttributesType;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  export type DeviceShadowEnrichType = {
    Attribute: string;

    Next?: string;

    ThingName: string;

    RoleArn: string;

    Name: string;
  };

  export type FilterType = {
    Filter: string;

    Next?: string;

    Name: string;
  };

  export type RemoveAttributesType = {
    Next?: string;

    Attributes: string[];

    Name: string;
  };

  export type DatastoreType = {
    DatastoreName: string;

    Name: string;
  };

  export type ChannelType = {
    ChannelName: string;

    Next?: string;

    Name: string;
  };

  export type SelectAttributesType = {
    Next?: string;

    Attributes: string[];

    Name: string;
  };

  export type LambdaType = {
    BatchSize: number;

    Next?: string;

    LambdaName: string;

    Name: string;
  };

  export type DeviceRegistryEnrichType = {
    Attribute: string;

    Next?: string;

    ThingName: string;

    RoleArn: string;

    Name: string;
  };

  export type AddAttributesType = {
    Next?: string;

    Attributes: Record<string, any>;

    Name: string;
  };

  export type MathType = {
    Attribute: string;

    Next?: string;

    Math: string;

    Name: string;
  };

  /**
   * Resource Type definition for AWS::IoTAnalytics::Pipeline
   */
  export type PipelineResourceType = {
    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Create-only property
     */
    PipelineName?: string;

    Tags?: TagType[];

    PipelineActivities: ActivityType[];
  };
}
