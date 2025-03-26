/**
 * TypeScript definitions for AWS::StepFunctions::Activity
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for Activity
 */
export namespace AWS_StepFunctions_Activity {
  export type TagsEntryType = {
    Key: string;

    Value: string;
  };

  export type EncryptionConfigurationType = {
    KmsKeyId?: string;

    KmsDataKeyReusePeriodSeconds?: number;

    Type: string;
  };

  /**
   * Resource schema for Activity
   */
  export type ActivityResourceType = {
    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    Name: string;

    Tags?: TagsEntryType[];

    /**
     * Create-only property
     */
    EncryptionConfiguration?: EncryptionConfigurationType;
  };
}
