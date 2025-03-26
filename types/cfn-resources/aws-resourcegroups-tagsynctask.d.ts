/**
 * TypeScript definitions for AWS::ResourceGroups::TagSyncTask
 * Generated from CloudFormation Resource Schema
 */

/**
 * Schema for ResourceGroups::TagSyncTask
 */
export namespace AWS_ResourceGroups_TagSyncTask {
  /**
   * Schema for ResourceGroups::TagSyncTask
   */
  export type TagSyncTaskResourceType = {
    /**
     * The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task
     * Create-only property
     */
    Group: string;

    /**
     * The Amazon resource name (ARN) of the ApplicationGroup for which the TagSyncTask is created
     * Read-only property
     */
    GroupArn?: string;

    /**
     * The Name of the application group for which the TagSyncTask is created
     * Read-only property
     */
    GroupName?: string;

    /**
     * The ARN of the TagSyncTask resource
     * Read-only property
     */
    TaskArn?: string;

    /**
     * The tag key. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
     * Create-only property
     */
    TagKey: string;

    /**
     * The tag value. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
     * Create-only property
     */
    TagValue: string;

    /**
     * The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
     * Create-only property
     */
    RoleArn: string;

    /**
     * The status of the TagSyncTask
     * Read-only property
     */
    Status?: string;
  };
}
