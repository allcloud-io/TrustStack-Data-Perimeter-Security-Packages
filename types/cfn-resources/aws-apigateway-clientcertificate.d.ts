/**
 * TypeScript definitions for AWS::ApiGateway::ClientCertificate
 * Generated from CloudFormation Resource Schema
 */

/**
 * The `AWS::ApiGateway::ClientCertificate` resource creates a client certificate that API Gateway uses to configure client-side SSL authentication for sending requests to the integration endpoint.
 */
export namespace AWS_ApiGateway_ClientCertificate {
  export type TagType = {
    Key: string;

    Value: string;
  };

  /**
   * The `AWS::ApiGateway::ClientCertificate` resource creates a client certificate that API Gateway uses to configure client-side SSL authentication for sending requests to the integration endpoint.
   */
  export type ClientCertificateResourceType = {
    /**
     * Read-only property
     */
    ClientCertificateId?: string;

    Description?: string;

    Tags?: TagType[];
  };
}
