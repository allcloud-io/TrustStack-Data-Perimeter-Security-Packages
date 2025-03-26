/**
 * TypeScript definitions for AWS::DataBrew::Project
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::DataBrew::Project.
 */
export namespace AWS_DataBrew_Project {
  export type SampleType = {
    /**
     * Sample size
     */
    Size?: number;

    /**
     * Sample type
     */
    Type: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Resource schema for AWS::DataBrew::Project.
   */
  export type ProjectResourceType = {
    /**
     * Dataset name
     */
    DatasetName: string;

    /**
     * Project name
     * Create-only property
     */
    Name: string;

    /**
     * Recipe name
     */
    RecipeName: string;

    /**
     * Role arn
     */
    RoleArn: string;

    /**
     * Sample
     */
    Sample?: SampleType;

    /**
     * Create-only property
     */
    Tags?: TagType[];
  };
}
