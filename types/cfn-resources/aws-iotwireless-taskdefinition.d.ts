/**
 * TypeScript definitions for AWS::IoTWireless::TaskDefinition
 * Generated from CloudFormation Resource Schema
 */

/**
 * Creates a gateway task definition.
 */
export namespace AWS_IoTWireless_TaskDefinition {
  export type LoRaWANGatewayVersionType = {
    PackageVersion?: string;

    Model?: string;

    Station?: string;
  };

  export type LoRaWANUpdateGatewayTaskCreateType = {
    UpdateSignature?: string;

    SigKeyCrc?: number;

    CurrentVersion?: LoRaWANGatewayVersionType;

    UpdateVersion?: LoRaWANGatewayVersionType;
  };

  export type UpdateWirelessGatewayTaskCreateType = {
    UpdateDataSource?: string;

    UpdateDataRole?: string;

    LoRaWAN?: LoRaWANUpdateGatewayTaskCreateType;
  };

  export type LoRaWANUpdateGatewayTaskEntryType = {
    CurrentVersion?: LoRaWANGatewayVersionType;

    UpdateVersion?: LoRaWANGatewayVersionType;
  };

  export type TagType = {
    Key?: string;

    Value?: string;
  };

  /**
   * Creates a gateway task definition.
   */
  export type TaskDefinitionResourceType = {
    /**
     * The name of the new resource.
     */
    Name?: string;

    /**
     * Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
     */
    AutoCreateTasks: boolean;

    /**
     * Information about the gateways to update.
     */
    Update?: UpdateWirelessGatewayTaskCreateType;

    /**
     * The list of task definitions.
     */
    LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntryType;

    /**
     * The ID of the new wireless gateway task definition
     * Read-only property
     */
    Id?: string;

    /**
     * A filter to list only the wireless gateway task definitions that use this task definition type
     */
    TaskDefinitionType?: string;

    /**
     * TaskDefinition arn. Returned after successful create.
     * Read-only property
     */
    Arn?: string;

    /**
     * A list of key-value pairs that contain metadata for the destination.
     */
    Tags?: TagType[];
  };
}
