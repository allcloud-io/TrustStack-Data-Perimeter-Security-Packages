/**
 * TypeScript definitions for AWS::FinSpace::Environment
 * Generated from CloudFormation Resource Schema
 */

/**
 * An example resource schema demonstrating some basic constructs and validation rules.
 */
export namespace AWS_FinSpace_Environment {
  /**
   * Additional parameters to identify Federation mode
   */
  export type FederationParametersType = {
    /**
     * SAML metadata URL to link with the Environment
     */
    SamlMetadataURL?: string;

    /**
     * Federation provider name to link with the Environment
     */
    FederationProviderName?: string;

    /**
     * SAML metadata document to link the federation provider to the Environment
     */
    SamlMetadataDocument?: string;

    /**
     * SAML metadata URL to link with the Environment
     */
    ApplicationCallBackURL?: string;

    /**
     * SAML metadata URL to link with the Environment
     */
    FederationURN?: string;

    /**
     * Attribute map for SAML configuration
     */
    AttributeMap?: Record<string, any>[];
  };

  /**
   * Parameters of the first Superuser for the FinSpace Environment
   */
  export type SuperuserParametersType = {
    /**
     * First name
     */
    FirstName?: string;

    /**
     * Last name
     */
    LastName?: string;

    /**
     * Email address
     */
    EmailAddress?: string;
  };

  export type DataBundleArnType = {};

  /**
   * A list of all tags for a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * An example resource schema demonstrating some basic constructs and validation rules.
   */
  export type EnvironmentResourceType = {
    /**
     * Unique identifier for representing FinSpace Environment
     * Read-only property
     */
    EnvironmentId?: string;

    /**
     * Name of the Environment
     */
    Name: string;

    /**
     * AWS account ID associated with the Environment
     * Read-only property
     */
    AwsAccountId?: string;

    /**
     * Description of the Environment
     */
    Description?: string;

    /**
     * State of the Environment
     * Read-only property
     */
    Status?: string;

    /**
     * URL used to login to the Environment
     * Read-only property
     */
    EnvironmentUrl?: string;

    /**
     * ARN of the Environment
     * Read-only property
     */
    EnvironmentArn?: string;

    /**
     * SageMaker Studio Domain URL associated with the Environment
     * Read-only property
     */
    SageMakerStudioDomainUrl?: string;

    /**
     * KMS key used to encrypt customer data within FinSpace Environment infrastructure
     * Create-only property
     */
    KmsKeyId?: string;

    /**
     * ID for FinSpace created account used to store Environment artifacts
     * Read-only property
     */
    DedicatedServiceAccountId?: string;

    /**
     * Federation mode used with the Environment
     */
    FederationMode?: string;

    /**
     * Create-only property
     */
    FederationParameters?: FederationParametersType;

    /**
     * Create-only property
     */
    SuperuserParameters?: SuperuserParametersType;

    /**
     * ARNs of FinSpace Data Bundles to install
     * Create-only property
     */
    DataBundles?: DataBundleArnType[];

    /**
     * An array of key-value pairs to apply to this resource.
     * Create-only property
     */
    Tags?: TagType[];
  };
}
