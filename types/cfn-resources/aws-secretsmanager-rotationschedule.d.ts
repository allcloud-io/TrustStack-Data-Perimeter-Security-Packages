/**
 * TypeScript definitions for AWS::SecretsManager::RotationSchedule
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::SecretsManager::RotationSchedule
 */
export namespace AWS_SecretsManager_RotationSchedule {
  export type HostedRotationLambdaType = {
    /**
     * The python runtime associated with the Lambda function
     */
    Runtime?: string;

    /**
     * The ARN of the KMS key that Secrets Manager uses to encrypt the secret. If you don't specify this value, then Secrets Manager uses the key aws/secretsmanager. If aws/secretsmanager doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
     */
    KmsKeyArn?: string;

    /**
     * The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.
     */
    MasterSecretArn?: string;

    /**
     * The name of the Lambda rotation function.
     */
    RotationLambdaName?: string;

    /**
     * The type of rotation template to use
     */
    RotationType: string;

    /**
     * A string of the characters that you don't want in the password.
     */
    ExcludeCharacters?: string;

    /**
     * A comma-separated list of security group IDs applied to the target database.
     */
    VpcSecurityGroupIds?: string;

    /**
     * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.
     */
    MasterSecretKmsKeyArn?: string;

    /**
     * The ARN of the secret that contains superuser credentials, if you use the alternating users rotation strategy. CloudFormation grants the execution role for the Lambda rotation function GetSecretValue permission to the secret in this property.
     */
    SuperuserSecretArn?: string;

    /**
     * The ARN of the KMS key that Secrets Manager used to encrypt the superuser secret, if you use the alternating users strategy and the superuser secret is encrypted with a customer managed key. You don't need to specify this property if the superuser secret is encrypted using the key aws/secretsmanager. CloudFormation grants the execution role for the Lambda rotation function Decrypt, DescribeKey, and GenerateDataKey permission to the key in this property.
     */
    SuperuserSecretKmsKeyArn?: string;

    /**
     * A comma separated list of VPC subnet IDs of the target database network. The Lambda rotation function is in the same subnet group.
     */
    VpcSubnetIds?: string;
  };

  export type RotationRulesType = {
    /**
     * A cron() or rate() expression that defines the schedule for rotating your secret. Secrets Manager rotation schedules use UTC time zone.
     */
    ScheduleExpression?: string;

    /**
     * The length of the rotation window in hours, for example 3h for a three hour window. Secrets Manager rotates your secret at any time during this window. The window must not extend into the next rotation window or the next UTC day. The window starts according to the ScheduleExpression. If you don't specify a Duration, for a ScheduleExpression in hours, the window automatically closes after one hour. For a ScheduleExpression in days, the window automatically closes at the end of the UTC day.
     */
    Duration?: string;

    /**
     * The number of days between automatic scheduled rotations of the secret. You can use this value to check that your secret meets your compliance guidelines for how often secrets must be rotated.
     */
    AutomaticallyAfterDays?: number;
  };

  /**
   * Resource Type definition for AWS::SecretsManager::RotationSchedule
   */
  export type RotationScheduleResourceType = {
    /**
     * Creates a new Lambda rotation function based on one of the Secrets Manager rotation function templates. To use a rotation function that already exists, specify RotationLambdaARN instead.
     */
    HostedRotationLambda?: HostedRotationLambdaType;

    /**
     * The ARN or name of the secret to rotate.
     * Create-only property
     */
    SecretId: string;

    /**
     * The ARN of the secret.
     * Read-only property
     */
    Id?: string;

    /**
     * Specifies whether to rotate the secret immediately or wait until the next scheduled rotation window.
     */
    RotateImmediatelyOnUpdate?: boolean;

    /**
     * The ARN of an existing Lambda rotation function. To specify a rotation function that is also defined in this template, use the Ref function.
     */
    RotationLambdaARN?: string;

    /**
     * A structure that defines the rotation configuration for this secret.
     */
    RotationRules?: RotationRulesType;
  };
}
