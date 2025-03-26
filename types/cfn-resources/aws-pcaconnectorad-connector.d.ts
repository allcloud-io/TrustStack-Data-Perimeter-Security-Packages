/**
 * TypeScript definitions for AWS::PCAConnectorAD::Connector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Represents a Connector that connects AWS PrivateCA and your directory
 */
export namespace AWS_PCAConnectorAD_Connector {
  export type TagsType = {};

  export type UnitType = {};

  export type VpcInformationType = {
    SecurityGroupIds: string[];

    IpAddressType?: string;
  };

  /**
   * Represents a Connector that connects AWS PrivateCA and your directory
   */
  export type ConnectorResourceType = {
    /**
     * Create-only property
     */
    CertificateAuthorityArn: string;

    /**
     * Read-only property
     */
    ConnectorArn?: string;

    /**
     * Create-only property
     */
    DirectoryId: string;

    Tags?: TagsType;

    /**
     * Create-only property
     */
    VpcInformation: VpcInformationType;
  };
}
