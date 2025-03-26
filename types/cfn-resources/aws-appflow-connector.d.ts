/**
 * TypeScript definitions for AWS::AppFlow::Connector
 * Generated from CloudFormation Resource Schema
 */

/**
 * Resource schema for AWS::AppFlow::Connector
 */
export namespace AWS_AppFlow_Connector {
  /**
   * Contains information about the configuration of the connector being registered.
   */
  export type ConnectorProvisioningConfigType = {
    /**
     * Contains information about the configuration of the lambda which is being registered as the connector.
     */
    Lambda?: LambdaConnectorProvisioningConfigType;
  };

  /**
   * Contains information about the configuration of the lambda which is being registered as the connector.
   */
  export type LambdaConnectorProvisioningConfigType = {
    /**
     * Lambda ARN of the connector being registered.
     */
    LambdaArn: string;
  };

  /**
   * Resource schema for AWS::AppFlow::Connector
   */
  export type ConnectorResourceType = {
    /**
     *  The name of the connector. The name is unique for each ConnectorRegistration in your AWS account.
     * Create-only property
     */
    ConnectorLabel?: string;

    /**
     *  The arn of the connector. The arn is unique for each ConnectorRegistration in your AWS account.
     * Read-only property
     */
    ConnectorArn?: string;

    /**
     * The provisioning type of the connector. Currently the only supported value is LAMBDA.
     */
    ConnectorProvisioningType: string;

    /**
     * Contains information about the configuration of the connector being registered.
     */
    ConnectorProvisioningConfig: ConnectorProvisioningConfigType;

    /**
     * A description about the connector that's being registered.
     */
    Description?: string;
  };
}
