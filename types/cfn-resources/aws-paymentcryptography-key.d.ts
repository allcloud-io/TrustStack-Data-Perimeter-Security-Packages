/**
 * TypeScript definitions for AWS::PaymentCryptography::Key
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::PaymentCryptography::Key Resource Type
 */
export namespace AWS_PaymentCryptography_Key {
  export type KeyAlgorithmType = {};

  export type KeyAttributesType = {
    KeyUsage: KeyUsageType;

    KeyClass: KeyClassType;

    KeyAlgorithm: KeyAlgorithmType;

    KeyModesOfUse: KeyModesOfUseType;
  };

  export type KeyCheckValueAlgorithmType = {};

  export type KeyClassType = {};

  export type KeyModesOfUseType = {
    Encrypt?: boolean;

    Decrypt?: boolean;

    Wrap?: boolean;

    Unwrap?: boolean;

    Generate?: boolean;

    Sign?: boolean;

    Verify?: boolean;

    DeriveKey?: boolean;

    NoRestrictions?: boolean;
  };

  /**
   * Defines the source of a key
   */
  export type KeyOriginType = {};

  /**
   * Defines the state of a key
   */
  export type KeyStateType = {};

  export type KeyUsageType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::PaymentCryptography::Key Resource Type
   */
  export type KeyResourceType = {
    Enabled?: boolean;

    Exportable: boolean;

    KeyAttributes: KeyAttributesType;

    KeyCheckValueAlgorithm?: KeyCheckValueAlgorithmType;

    /**
     * Read-only property
     */
    KeyIdentifier?: string;

    /**
     * Read-only property
     */
    KeyOrigin?: KeyOriginType;

    /**
     * Read-only property
     */
    KeyState?: KeyStateType;

    Tags?: TagType[];
  };
}
