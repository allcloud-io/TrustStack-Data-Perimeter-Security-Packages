/**
 * TypeScript definitions for AWS::RefactorSpaces::Route
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::RefactorSpaces::Route Resource Type
 */
export namespace AWS_RefactorSpaces_Route {
  export type RouteActivationStateType = {};

  export type MethodType = {};

  export type RouteTypeType = {};

  export type DefaultRouteInputType = {
    ActivationState: RouteActivationStateType;
  };

  export type UriPathRouteInputType = {
    SourcePath?: string;

    ActivationState: RouteActivationStateType;

    Methods?: MethodType[];

    IncludeChildPaths?: boolean;

    AppendSourcePath?: boolean;
  };

  /**
   * A label for tagging Environment resource
   */
  export type TagType = {
    /**
     * A string used to identify this tag
     */
    Key: string;

    /**
     * A string containing the value for the tag
     */
    Value: string;
  };

  /**
   * Definition of AWS::RefactorSpaces::Route Resource Type
   */
  export type RouteResourceType = {
    /**
     * Read-only property
     */
    PathResourceToId?: string;

    /**
     * Read-only property
     */
    Arn?: string;

    /**
     * Create-only property
     */
    ApplicationIdentifier: string;

    /**
     * Create-only property
     */
    EnvironmentIdentifier: string;

    /**
     * Read-only property
     */
    RouteIdentifier?: string;

    /**
     * Create-only property
     */
    RouteType: RouteTypeType;

    /**
     * Create-only property
     */
    ServiceIdentifier: string;

    DefaultRoute?: DefaultRouteInputType;

    UriPathRoute?: UriPathRouteInputType;

    /**
     * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
     */
    Tags?: TagType[];
  };
}
