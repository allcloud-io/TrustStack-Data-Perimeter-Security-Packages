/**
 * TypeScript definitions for AWS::DataSync::LocationAzureBlob
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataSync::LocationAzureBlob.
 */
export namespace AWS_DataSync_LocationAzureBlob {
  /**
   * Specifies the shared access signature (SAS) that DataSync uses to access your Azure Blob Storage container.
   */
  export type AzureBlobSasConfigurationType = {
    /**
     * Specifies the shared access signature (SAS) token, which indicates the permissions DataSync needs to access your Azure Blob Storage container.
     */
    AzureBlobSasToken: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key for an AWS resource tag.
     */
    Key: string;

    /**
     * The value for an AWS resource tag.
     */
    Value: string;
  };

  /**
   * Resource schema for AWS::DataSync::LocationAzureBlob.
   */
  export type LocationAzureBlobResourceType = {
    /**
     * The Amazon Resource Names (ARNs) of agents to use for an Azure Blob Location.
     */
    AgentArns: string[];

    /**
     * The specific authentication type that you want DataSync to use to access your Azure Blob Container.
     * Default: "SAS"
     */
    AzureBlobAuthenticationType: string;

    AzureBlobSasConfiguration?: AzureBlobSasConfigurationType;

    /**
     * The URL of the Azure Blob container that was described.
     * Create-only property
     */
    AzureBlobContainerUrl?: string;

    /**
     * Specifies a blob type for the objects you're transferring into your Azure Blob Storage container.
     * Default: "BLOCK"
     */
    AzureBlobType?: string;

    /**
     * Specifies an access tier for the objects you're transferring into your Azure Blob Storage container.
     * Default: "HOT"
     */
    AzureAccessTier?: string;

    /**
     * The subdirectory in the Azure Blob Container that is used to read data from the Azure Blob Source Location.
     */
    Subdirectory?: string;

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];

    /**
     * The Amazon Resource Name (ARN) of the Azure Blob Location that is created.
     * Read-only property
     */
    LocationArn?: string;

    /**
     * The URL of the Azure Blob Location that was described.
     * Read-only property
     */
    LocationUri?: string;
  };
}
