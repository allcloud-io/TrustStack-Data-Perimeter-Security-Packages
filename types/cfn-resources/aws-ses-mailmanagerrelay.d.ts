/**
 * TypeScript definitions for AWS::SES::MailManagerRelay
 * Generated from CloudFormation Resource Schema
 */

/**
 * Definition of AWS::SES::MailManagerRelay Resource Type
 */
export namespace AWS_SES_MailManagerRelay {
  export type NoAuthenticationType = {};

  export type RelayAuthenticationType = {};

  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * Definition of AWS::SES::MailManagerRelay Resource Type
   */
  export type MailManagerRelayResourceType = {
    Authentication: RelayAuthenticationType;

    /**
     * Read-only property
     */
    RelayArn?: string;

    /**
     * Read-only property
     */
    RelayId?: string;

    RelayName?: string;

    ServerName: string;

    ServerPort: number;

    Tags?: TagType[];
  };
}
