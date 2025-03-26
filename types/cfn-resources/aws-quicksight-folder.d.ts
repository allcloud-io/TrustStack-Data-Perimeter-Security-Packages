/**
 * TypeScript definitions for AWS::QuickSight::Folder
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of the AWS::QuickSight::Folder Resource Type.
 */
export namespace AWS_QuickSight_Folder {
  export type FolderTypeType = {};

  /**
   * <p>Permission for the resource.</p>
   */
  export type ResourcePermissionType = {
    /**
     * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
     * following:</p>
     * <ul>
     * <li>
     * <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
     * </li>
     * <li>
     * <p>The ARN of an Amazon Web Services account root: This is an IAM ARN rather than a QuickSight
     * ARN. Use this option only to share resources (templates) across Amazon Web Services accounts.
     * (This is less common.) </p>
     * </li>
     * </ul>
     */
    Principal: string;

    /**
     * <p>The IAM action to grant or revoke permissions on.</p>
     */
    Actions: string[];
  };

  export type SharingModelType = {};

  /**
   * <p>The key or keys of the key-value pairs for the resource tag or tags assigned to the
   * resource.</p>
   */
  export type TagType = {
    /**
     * <p>Tag key.</p>
     */
    Key: string;

    /**
     * <p>Tag value.</p>
     */
    Value: string;
  };

  /**
   * Definition of the AWS::QuickSight::Folder Resource Type.
   */
  export type FolderResourceType = {
    /**
     * <p>The Amazon Resource Name (ARN) for the folder.</p>
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    AwsAccountId?: string;

    /**
     * <p>The time that the folder was created.</p>
     * Read-only property
     */
    CreatedTime?: string;

    /**
     * Create-only property
     */
    FolderId?: string;

    /**
     * Create-only property
     */
    FolderType?: FolderTypeType;

    /**
     * <p>The time that the folder was last updated.</p>
     * Read-only property
     */
    LastUpdatedTime?: string;

    Name?: string;

    /**
     * Create-only property
     */
    ParentFolderArn?: string;

    Permissions?: ResourcePermissionType[];

    /**
     * Create-only property
     */
    SharingModel?: SharingModelType;

    Tags?: TagType[];
  };
}
