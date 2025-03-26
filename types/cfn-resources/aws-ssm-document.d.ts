/**
 * TypeScript definitions for AWS::SSM::Document
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::SSM::Document resource is an SSM document in AWS Systems Manager that defines the actions that Systems Manager performs, which can be used to set up and run commands on your instances.
 */
export namespace AWS_SSM_Document {
  export type AttachmentsSourceType = {
    /**
     * The key of a key-value pair that identifies the location of an attachment to a document.
     */
    Key?: string;

    /**
     * The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify.
     */
    Values?: string[];

    /**
     * The name of the document attachment file.
     */
    Name?: string;
  };

  export type TagType = {
    /**
     * The name of the tag.
     */
    Key?: string;

    /**
     * The value of the tag.
     */
    Value?: string;
  };

  export type DocumentRequiresType = {
    /**
     * The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
     */
    Name?: string;

    /**
     * The document version required by the current document.
     */
    Version?: string;
  };

  /**
   * The AWS::SSM::Document resource is an SSM document in AWS Systems Manager that defines the actions that Systems Manager performs, which can be used to set up and run commands on your instances.
   */
  export type DocumentResourceType = {
    /**
     * The content for the Systems Manager document in JSON, YAML or String format.
     */
    Content: Record<string, any> | string;

    /**
     * A list of key and value pairs that describe attachments to a version of a document.
     */
    Attachments?: AttachmentsSourceType[];

    /**
     * A name for the Systems Manager document.
     * Create-only property
     */
    Name?: string;

    /**
     * An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed.
     */
    VersionName?: string;

    /**
     * The type of document to create.
     * Create-only property
     */
    DocumentType?: string;

    /**
     * Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.
     * Default: "JSON"
     */
    DocumentFormat?: string;

    /**
     * Specify a target type to define the kinds of resources the document can run on.
     */
    TargetType?: string;

    /**
     * Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
     */
    Tags?: TagType[];

    /**
     * A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
     */
    Requires?: DocumentRequiresType[];

    /**
     * Update method - when set to 'Replace', the update will replace the existing document; when set to 'NewVersion', the update will create a new version.
     * Default: "Replace"
     */
    UpdateMethod?: string;
  };
}
