/**
 * TypeScript definitions for AWS::IAM::InstanceProfile
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a new instance profile. For information about instance profiles, see Using instance profiles.
 * For information about the number of instance profiles you can create, see object quotas in the *User Guide*.
 */
export namespace AWS_IAM_InstanceProfile {
  /**
   * Creates a new instance profile. For information about instance profiles, see Using instance profiles.
   * For information about the number of instance profiles you can create, see object quotas in the *User Guide*.
   */
  export type InstanceProfileResourceType = {
    /**
     * The path to the instance profile. For more information about paths, see IAM Identifiers in the *IAM User Guide*.
     * This parameter is optional. If it is not included, it defaults to a slash (/).
     * This parameter allows (through its regex pattern) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
     * Create-only property
     */
    Path?: string;

    /**
     * The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.
     */
    Roles: string[];

    /**
     * The name of the instance profile to create.
     * This parameter allows (through its regex pattern) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
     * Create-only property
     */
    InstanceProfileName?: string;

    /**
     * Read-only property
     */
    Arn?: string;
  };
}
