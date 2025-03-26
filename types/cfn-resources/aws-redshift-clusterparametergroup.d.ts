/**
 * TypeScript definitions for AWS::Redshift::ClusterParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource Type definition for AWS::Redshift::ClusterParameterGroup
 */
export namespace AWS_Redshift_ClusterParameterGroup {
  export type ParameterType = {
    /**
     * The name of the parameter.
     */
    ParameterName: string;

    /**
     * The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.
     */
    ParameterValue: string;
  };

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Key: string;

    /**
     * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
     */
    Value: string;
  };

  /**
   * Resource Type definition for AWS::Redshift::ClusterParameterGroup
   */
  export type ClusterParameterGroupResourceType = {
    /**
     * The name of the cluster parameter group.
     * Create-only property
     */
    ParameterGroupName?: string;

    /**
     * A description of the parameter group.
     * Create-only property
     */
    Description: string;

    /**
     * The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.
     * Create-only property
     */
    ParameterGroupFamily: string;

    /**
     * An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
     */
    Parameters?: ParameterType[];

    /**
     * An array of key-value pairs to apply to this resource.
     */
    Tags?: TagType[];
  };
}
