/**
 * TypeScript definitions for AWS::Proton::ServiceTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::Proton::ServiceTemplate Resource Type
 */
export namespace AWS_Proton_ServiceTemplate {
  export type ProvisioningType = {};

  /**
   * <p>A description of a resource tag.</p>
   */
  export type TagType = {
    /**
     * <p>The key of the resource tag.</p>
     */
    Key: string;

    /**
     * <p>The value of the resource tag.</p>
     */
    Value: string;
  };

  /**
   * Definition of AWS::Proton::ServiceTemplate Resource Type
   */
  export type ServiceTemplateResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the service template.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * <p>A description of the service template.</p>
     */
    Description?: string;

    /**
     * <p>The name of the service template as displayed in the developer interface.</p>
     */
    DisplayName?: string;

    /**
     * <p>A customer provided encryption key that's used to encrypt data.</p>
     * Create-only property
     */
    EncryptionKey?: string;

    /**
     * Create-only property
     */
    Name?: string;

    /**
     * Create-only property
     */
    PipelineProvisioning?: ProvisioningType;

    /**
     * <p>An optional list of metadata items that you can associate with the Proton service template. A tag is a key-value pair.</p>
     * <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
     * <i>Proton User Guide</i>.</p>
     */
    Tags?: TagType[];
  };
}
