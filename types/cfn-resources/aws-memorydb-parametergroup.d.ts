/**
 * TypeScript definitions for AWS::MemoryDB::ParameterGroup
 * Generated from CloudFormation Resource Schema
 */

/**
 * The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB ParameterGroup.
 */
export namespace AWS_MemoryDB_ParameterGroup {
  /**
   * A key-value pair to associate with a resource.
   */
  export type TagType = {
    /**
     * The key for the tag. May not be null.
     */
    Key: string;

    /**
     * The tag's value. May be null.
     */
    Value: string;
  };

  /**
   * The AWS::MemoryDB::ParameterGroup resource creates an Amazon MemoryDB ParameterGroup.
   */
  export type ParameterGroupResourceType = {
    /**
     * The name of the parameter group.
     * Create-only property
     */
    ParameterGroupName: string;

    /**
     * The name of the parameter group family that this parameter group is compatible with.
     * Create-only property
     */
    Family: string;

    /**
     * A description of the parameter group.
     * Create-only property
     */
    Description?: string;

    /**
     * An array of key-value pairs to apply to this parameter group.
     */
    Tags?: TagType[];

    /**
     * An map of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional.
     */
    Parameters?: Record<string, any>;

    /**
     * The Amazon Resource Name (ARN) of the parameter group.
     * Read-only property
     */
    ARN?: string;
  };
}
