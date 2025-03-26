/**
 * TypeScript definitions for AWS::CodeArtifact::PackageGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The resource schema to create a CodeArtifact package group.
 */
export namespace AWS_CodeArtifact_PackageGroup {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  export type OriginConfigurationType = {
    /**
     * The origin configuration that is applied to the package group.
     */
    Restrictions: RestrictionsType;
  };

  export type RestrictionsType = {
    /**
     * The publish restriction determines if new package versions can be published.
     */
    Publish?: RestrictionTypeType;

    /**
     * The external upstream restriction determines if new package versions can be ingested or retained from external connections.
     */
    ExternalUpstream?: RestrictionTypeType;

    /**
     * The internal upstream restriction determines if new package versions can be ingested or retained from upstream repositories.
     */
    InternalUpstream?: RestrictionTypeType;
  };

  export type RestrictionTypeType = {
    RestrictionMode: string;

    Repositories?: string[];
  };

  /**
   * The resource schema to create a CodeArtifact package group.
   */
  export type PackageGroupResourceType = {
    /**
     * The name of the domain that contains the package group.
     * Create-only property
     */
    DomainName: string;

    /**
     * The 12-digit account ID of the AWS account that owns the domain.
     */
    DomainOwner?: string;

    /**
     * The package group pattern that is used to gather packages.
     * Create-only property
     */
    Pattern: string;

    /**
     * The contact info of the package group.
     */
    ContactInfo?: string;

    /**
     * The text description of the package group.
     */
    Description?: string;

    /**
     * The package origin configuration of the package group.
     */
    OriginConfiguration?: OriginConfigurationType;

    /**
     * An array of key-value pairs to apply to the package group.
     */
    Tags?: TagType[];

    /**
     * The ARN of the package group.
     * Read-only property
     */
    Arn?: string;
  };
}
