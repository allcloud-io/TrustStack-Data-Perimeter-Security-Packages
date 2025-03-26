/**
 * TypeScript definitions for AWS::LookoutVision::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::LookoutVision::Project type creates an Amazon Lookout for Vision project. A project is a grouping of the resources needed to create and manage a Lookout for Vision model.
 */
export namespace AWS_LookoutVision_Project {
  export type ArnType = {};

  /**
   * The name of the Amazon Lookout for Vision project
   */
  export type ProjectNameType = {};

  /**
   * The AWS::LookoutVision::Project type creates an Amazon Lookout for Vision project. A project is a grouping of the resources needed to create and manage a Lookout for Vision model.
   */
  export type ProjectResourceType = {
    /**
     * Read-only property
     */
    Arn?: ArnType;

    /**
     * Create-only property
     */
    ProjectName: ProjectNameType;
  };
}
