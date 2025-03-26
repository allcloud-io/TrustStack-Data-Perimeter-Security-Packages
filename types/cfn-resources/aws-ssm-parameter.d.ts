/**
 * TypeScript definitions for AWS::SSM::Parameter
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::SSM::Parameter` resource creates an SSM parameter in SYSlong Parameter Store.
 * To create an SSM parameter, you must have the IAMlong (IAM) permissions `ssm:PutParameter` and `ssm:AddTagsToResource`. On stack creation, CFNlong adds the following three tags to the parameter: `aws:cloudformation:stack-name`, `aws:cloudformation:logical-id`, and `aws:cloudformation:stack-id`, in addition to any custom tags you specify.
 * To add, update, or remove tags during stack update, you must have IAM permissions for both `ssm:AddTagsToResource` and `ssm:RemoveTagsFromResource`. For more information, see Managing Access Using Policies in the *User Guide*.
 * For information about valid values for parameters, see About requirements and constraints for parameter names in the *User Guide* and PutParameter in the *API Reference*.
 */
export namespace AWS_SSM_Parameter {
  /**
   * The `AWS::SSM::Parameter` resource creates an SSM parameter in SYSlong Parameter Store.
   * To create an SSM parameter, you must have the IAMlong (IAM) permissions `ssm:PutParameter` and `ssm:AddTagsToResource`. On stack creation, CFNlong adds the following three tags to the parameter: `aws:cloudformation:stack-name`, `aws:cloudformation:logical-id`, and `aws:cloudformation:stack-id`, in addition to any custom tags you specify.
   * To add, update, or remove tags during stack update, you must have IAM permissions for both `ssm:AddTagsToResource` and `ssm:RemoveTagsFromResource`. For more information, see Managing Access Using Policies in the *User Guide*.
   * For information about valid values for parameters, see About requirements and constraints for parameter names in the *User Guide* and PutParameter in the *API Reference*.
   */
  export type ParameterResourceType = {
    /**
     * The type of parameter.
     */
    Type: string;

    /**
     * The parameter value.
     * If type is `StringList`, the system returns a comma-separated string with no spaces between commas in the `Value` field.
     */
    Value: string;

    /**
     * Information about the parameter.
     */
    Description?: string;

    /**
     * Information about the policies assigned to a parameter.
     * Assigning parameter policies in the *User Guide*.
     */
    Policies?: string;

    /**
     * A regular expression used to validate the parameter value. For example, for `String` types with values restricted to numbers, you can specify the following: `AllowedPattern=^\d+$`
     */
    AllowedPattern?: string;

    /**
     * The parameter tier.
     */
    Tier?: string;

    /**
     * Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter.
     */
    Tags?: Record<string, any>;

    /**
     * The data type of the parameter, such as `text` or `aws:ec2:image`. The default is `text`.
     */
    DataType?: string;

    /**
     * The name of the parameter.
     * The maximum length constraint listed below includes capacity for additional system attributes that aren't part of the name. The maximum length for a parameter name, including the full length of the parameter Amazon Resource Name (ARN), is 1011 characters. For example, the length of the following parameter name is 65 characters, not 20 characters: `arn:aws:ssm:us-east-2:111222333444:parameter/ExampleParameterName`
     * Create-only property
     */
    Name?: string;
  };
}
