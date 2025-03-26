/**
 * TypeScript definitions for AWS::CodeBuild::ReportGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::CodeBuild::ReportGroup
 */
export namespace AWS_CodeBuild_ReportGroup {
  export type S3ReportExportConfigType = {
    Path?: string;

    Bucket: string;

    Packaging?: string;

    EncryptionKey?: string;

    BucketOwner?: string;

    EncryptionDisabled?: boolean;
  };

  export type TagType = {
    Value: string;

    Key: string;
  };

  export type ReportExportConfigType = {
    S3Destination?: S3ReportExportConfigType;

    ExportConfigType: string;
  };

  /**
   * Resource Type definition for AWS::CodeBuild::ReportGroup
   */
  export type ReportGroupResourceType = {
    /**
     * Create-only property
     */
    Type: string;

    ExportConfig: ReportExportConfigType;

    /**
     * Read-only property
     */
    Id?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    DeleteReports?: boolean;

    Tags?: TagType[];

    /**
     * Create-only property
     */
    Name?: string;
  };
}
