/**
 * TypeScript definitions for AWS::GlobalAccelerator::CrossAccountAttachment
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::GlobalAccelerator::CrossAccountAttachment
 */
export namespace AWS_GlobalAccelerator_CrossAccountAttachment {
  /**
   * Tag is a key-value pair associated with Cross Account Attachment.
   */
  export type TagType = {
    /**
     * Key of the tag. Value can be 1 to 127 characters.
     */
    Key: string;

    /**
     * Value for the tag. Value can be 1 to 255 characters.
     */
    Value: string;
  };

  /**
   * ARN of resource to share.
   */
  export type ResourceType = {
    EndpointId?: string;

    Cidr?: string;

    Region?: string;
  };

  /**
   * Resource Type definition for AWS::GlobalAccelerator::CrossAccountAttachment
   */
  export type CrossAccountAttachmentResourceType = {
    /**
     * The Friendly identifier of the attachment.
     */
    Name: string;

    /**
     * The Amazon Resource Name (ARN) of the attachment.
     * Read-only property
     */
    AttachmentArn?: string;

    /**
     * Principals to share the resources with.
     */
    Principals?: string[];

    /**
     * Resources shared using the attachment.
     */
    Resources?: ResourceType[];

    Tags?: TagType[];
  };
}
