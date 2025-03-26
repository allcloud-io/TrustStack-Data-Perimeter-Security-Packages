/**
 * Type declarations for the cfn-response module
 */
declare module "cfn-response" {
  import type { CloudFormationCustomResourceEvent, Context } from "aws-lambda";

  /**
   * The status of the response
   */
  const SUCCESS: "SUCCESS";
  const FAILED: "FAILED";

  /**
   * Sends a response to CloudFormation
   *
   * @param event - The CloudFormation custom resource event
   * @param context - The Lambda context
   * @param responseStatus - The status of the response (SUCCESS or FAILED)
   * @param responseData - The data to include in the response
   * @param physicalResourceId - The physical resource ID
   * @param noEcho - Whether to mask the response
   */
  function send(
    event: CloudFormationCustomResourceEvent,
    context: Context,
    responseStatus: typeof SUCCESS | typeof FAILED,
    responseData: Record<string, unknown>,
    physicalResourceId?: string,
    noEcho?: boolean,
  ): Promise<void>;

  const _default: {
    SUCCESS: typeof SUCCESS;
    FAILED: typeof FAILED;
    send: typeof send;
  };

  export { SUCCESS, FAILED, send };
  export default _default;
}
