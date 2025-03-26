/**
 * TypeScript definitions for AWS::ServiceCatalog::CloudFormationProduct
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::ServiceCatalog::CloudFormationProduct
 */
export namespace AWS_ServiceCatalog_CloudFormationProduct {
  export type CodeStarParametersType = {
    ArtifactPath: string;

    ConnectionArn: string;

    Repository: string;

    Branch: string;
  };

  export type ConnectionParametersType = {
    CodeStar?: CodeStarParametersType;
  };

  export type ProvisioningArtifactPropertiesType = {
    Type?: string;

    Description?: string;

    Info: Record<string, any>;

    DisableTemplateValidation?: boolean;

    Name?: string;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type SourceConnectionType = {
    ConnectionParameters: ConnectionParametersType;

    Type: string;
  };

  /**
   * Resource Type definition for AWS::ServiceCatalog::CloudFormationProduct
   */
  export type CloudFormationProductResourceType = {
    Owner: string;

    Description?: string;

    /**
     * Read-only property
     */
    ProductName?: string;

    SupportEmail?: string;

    ProductType?: string;

    /**
     * Read-only property
     */
    ProvisioningArtifactNames?: string;

    Name: string;

    ReplaceProvisioningArtifacts?: boolean;

    SupportDescription?: string;

    Distributor?: string;

    /**
     * Read-only property
     */
    ProvisioningArtifactIds?: string;

    AcceptLanguage?: string;

    SupportUrl?: string;

    /**
     * Read-only property
     */
    Id?: string;

    SourceConnection?: SourceConnectionType;

    Tags?: TagType[];

    ProvisioningArtifactParameters?: ProvisioningArtifactPropertiesType[];
  };
}
