/**
 * TypeScript definitions for AWS::IoTTwinMaker::Scene
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::IoTTwinMaker::Scene
 */
export namespace AWS_IoTTwinMaker_Scene {
  export type DateTimeFormatType = {};

  /**
   * Resource schema for AWS::IoTTwinMaker::Scene
   */
  export type SceneResourceType = {
    /**
     * The ID of the scene.
     * Create-only property
     */
    SceneId: string;

    /**
     * The ARN of the scene.
     * Read-only property
     */
    Arn?: string;

    /**
     * The description of the scene.
     */
    Description?: string;

    /**
     * The relative path that specifies the location of the content definition file.
     */
    ContentLocation: string;

    /**
     * The date and time when the scene was created.
     * Read-only property
     */
    CreationDateTime?: DateTimeFormatType;

    /**
     * The date and time of the current update.
     * Read-only property
     */
    UpdateDateTime?: DateTimeFormatType;

    /**
     * A key-value pair to associate with a resource.
     */
    Tags?: Record<string, any>;

    /**
     * The ID of the scene.
     * Create-only property
     */
    WorkspaceId: string;

    /**
     * A list of capabilities that the scene uses to render.
     */
    Capabilities?: string[];

    /**
     * A key-value pair of scene metadata for the scene.
     */
    SceneMetadata?: Record<string, any>;

    /**
     * A key-value pair of generated scene metadata for the scene.
     * Read-only property
     */
    GeneratedSceneMetadata?: Record<string, any>;
  };
}
