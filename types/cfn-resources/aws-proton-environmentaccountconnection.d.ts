/**
 * TypeScript definitions for AWS::Proton::EnvironmentAccountConnection
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Schema describing various properties for AWS Proton Environment Account Connections resources.
 */
export namespace AWS_Proton_EnvironmentAccountConnection {
  export type StatusType = {};

  /**
   * <p>A description of a resource tag.</p>
   */
  export type TagType = {
    /**
     * <p>The key of the resource tag.</p>
     */
    Key: string;

    /**
     * <p>The value of the resource tag.</p>
     */
    Value: string;
  };

  /**
   * Resource Schema describing various properties for AWS Proton Environment Account Connections resources.
   */
  export type EnvironmentAccountConnectionResourceType = {
    /**
     * The Amazon Resource Name (ARN) of the environment account connection.
     * Read-only property
     */
    Arn?: string;

    /**
     * The Amazon Resource Name (ARN) of an IAM service role in the environment account. AWS Proton uses this role to provision infrastructure resources using CodeBuild-based provisioning in the associated environment account.
     */
    CodebuildRoleArn?: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM service role that AWS Proton uses when provisioning directly defined components in the associated environment account. It determines the scope of infrastructure that a component can provision in the account.
     */
    ComponentRoleArn?: string;

    /**
     * The environment account that's connected to the environment account connection.
     */
    EnvironmentAccountId?: string;

    /**
     * The name of the AWS Proton environment that's created in the associated management account.
     */
    EnvironmentName?: string;

    /**
     * The ID of the environment account connection.
     * Read-only property
     */
    Id?: string;

    /**
     * The ID of the management account that accepts or rejects the environment account connection. You create an manage the AWS Proton environment in this account. If the management account accepts the environment account connection, AWS Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
     */
    ManagementAccountId?: string;

    /**
     * The Amazon Resource Name (ARN) of the IAM service role that's created in the environment account. AWS Proton uses this role to provision infrastructure resources in the associated environment account.
     */
    RoleArn?: string;

    /**
     * The status of the environment account connection.
     * Read-only property
     */
    Status?: StatusType;

    /**
     * <p>An optional list of metadata items that you can associate with the Proton environment account connection. A tag is a key-value pair.</p>
     * <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/resources.html">Proton resources and tagging</a> in the
     * <i>Proton User Guide</i>.</p>
     */
    Tags?: TagType[];
  };
}
