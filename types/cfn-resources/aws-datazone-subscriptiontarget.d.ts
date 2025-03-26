/**
 * TypeScript definitions for AWS::DataZone::SubscriptionTarget
 * Generated from CloudFormation Resource Schema
 */

/**
 * Subscription targets enables one to access the data to which you have subscribed in your projects.
 */
export namespace AWS_DataZone_SubscriptionTarget {
  /**
   * The details of the subscription target configuration.
   */
  export type SubscriptionTargetFormType = {
    /**
     * The form name included in the subscription target configuration.
     */
    FormName: string;

    /**
     * The content of the subscription target configuration.
     */
    Content: string;
  };

  /**
   * Subscription targets enables one to access the data to which you have subscribed in your projects.
   */
  export type SubscriptionTargetResourceType = {
    /**
     * The asset types that can be included in the subscription target.
     */
    ApplicableAssetTypes: string[];

    /**
     * The authorized principals of the subscription target.
     */
    AuthorizedPrincipals: string[];

    /**
     * The timestamp of when the subscription target was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The Amazon DataZone user who created the subscription target.
     * Read-only property
     */
    CreatedBy?: string;

    /**
     * The ID of the Amazon DataZone domain in which subscription target is created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The ID of the Amazon DataZone domain in which subscription target would be created.
     * Create-only property
     */
    DomainIdentifier: string;

    /**
     * The ID of the environment in which subscription target is created.
     * Read-only property
     */
    EnvironmentId?: string;

    /**
     * The ID of the environment in which subscription target would be created.
     * Create-only property
     */
    EnvironmentIdentifier: string;

    /**
     * The ID of the subscription target.
     * Read-only property
     */
    Id?: string;

    /**
     * The manage access role that is used to create the subscription target.
     */
    ManageAccessRole?: string;

    /**
     * The name of the subscription target.
     */
    Name: string;

    /**
     * The identifier of the project specified in the subscription target.
     * Read-only property
     */
    ProjectId?: string;

    /**
     * The provider of the subscription target.
     */
    Provider?: string;

    /**
     * The configuration of the subscription target.
     */
    SubscriptionTargetConfig: SubscriptionTargetFormType[];

    /**
     * The type of the subscription target.
     * Create-only property
     */
    Type: string;

    /**
     * The timestamp of when the subscription target was updated.
     * Read-only property
     */
    UpdatedAt?: string;

    /**
     * The Amazon DataZone user who updated the subscription target.
     * Read-only property
     */
    UpdatedBy?: string;
  };
}
