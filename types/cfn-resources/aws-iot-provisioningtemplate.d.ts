/**
 * TypeScript definitions for AWS::IoT::ProvisioningTemplate
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a fleet provisioning template.
 */
export namespace AWS_IoT_ProvisioningTemplate {
  export type ProvisioningHookType = {
    TargetArn?: string;

    PayloadVersion?: string;
  };

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Creates a fleet provisioning template.
   */
  export type ProvisioningTemplateResourceType = {
    /**
     * Read-only property
     */
    TemplateArn?: string;

    /**
     * Create-only property
     */
    TemplateName?: string;

    Description?: string;

    Enabled?: boolean;

    ProvisioningRoleArn: string;

    TemplateBody: string;

    /**
     * Create-only property
     */
    TemplateType?: string;

    PreProvisioningHook?: ProvisioningHookType;

    Tags?: TagType[];
  };
}
