/**
 * TypeScript definitions for AWS::Rekognition::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::Rekognition::Project type creates an Amazon Rekognition CustomLabels Project. A project is a grouping of the resources needed to create and manage Dataset and ProjectVersions.
 */
export namespace AWS_Rekognition_Project {
  export type ArnType = {};

  /**
   * The name of the project
   */
  export type ProjectNameType = {};

  /**
   * The AWS::Rekognition::Project type creates an Amazon Rekognition CustomLabels Project. A project is a grouping of the resources needed to create and manage Dataset and ProjectVersions.
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
