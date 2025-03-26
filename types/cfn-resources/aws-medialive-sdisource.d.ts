/**
 * TypeScript definitions for AWS::MediaLive::SdiSource
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::MediaLive::SdiSource Resource Type
 */
export namespace AWS_MediaLive_SdiSource {
  /**
   * The current state of the SdiSource.
   */
  export type SdiSourceModeType = {};

  /**
   * The current state of the SdiSource.
   */
  export type SdiSourceStateType = {};

  /**
   * The interface mode of the SdiSource.
   */
  export type SdiSourceTypeType = {};

  /**
   * A key-value pair to associate with a resource.
   */
  export type TagsType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Definition of AWS::MediaLive::SdiSource Resource Type
   */
  export type SdiSourceResourceType = {
    /**
     * The unique arn of the SdiSource.
     * Read-only property
     */
    Arn?: string;

    /**
     * The unique identifier of the SdiSource.
     * Read-only property
     */
    Id?: string;

    Mode?: SdiSourceModeType;

    /**
     * The name of the SdiSource.
     */
    Name: string;

    /**
     * Read-only property
     */
    State?: SdiSourceStateType;

    Type: SdiSourceTypeType;

    /**
     * The list of inputs currently using this SDI source.
     * Read-only property
     */
    Inputs?: string[];

    /**
     * A collection of key-value pairs.
     */
    Tags?: TagsType[];
  };
}
