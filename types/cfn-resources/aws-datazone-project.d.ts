/**
 * TypeScript definitions for AWS::DataZone::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * Amazon DataZone projects are business use case–based groupings of people, assets (data), and tools used to simplify access to the AWS analytics.
 */
export namespace AWS_DataZone_Project {
  /**
   * Amazon DataZone projects are business use case–based groupings of people, assets (data), and tools used to simplify access to the AWS analytics.
   */
  export type ProjectResourceType = {
    /**
     * The timestamp of when the project was created.
     * Read-only property
     */
    CreatedAt?: string;

    /**
     * The Amazon DataZone user who created the project.
     * Read-only property
     */
    CreatedBy?: string;

    /**
     * The description of the Amazon DataZone project.
     */
    Description?: string;

    /**
     * The identifier of the Amazon DataZone domain in which the project was created.
     * Read-only property
     */
    DomainId?: string;

    /**
     * The ID of the Amazon DataZone domain in which this project is created.
     * Create-only property
     */
    DomainIdentifier: string;

    /**
     * The glossary terms that can be used in this Amazon DataZone project.
     */
    GlossaryTerms?: string[];

    /**
     * The ID of the Amazon DataZone project.
     * Read-only property
     */
    Id?: string;

    /**
     * The timestamp of when the project was last updated.
     * Read-only property
     */
    LastUpdatedAt?: string;

    /**
     * The name of the Amazon DataZone project.
     */
    Name: string;
  };
}
