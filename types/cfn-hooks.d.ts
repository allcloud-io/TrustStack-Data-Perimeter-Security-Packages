export type CloudFormationHookEvent = {
  clientRequestToken: string;
  awsAccountId: string;
  stackId: string;
  changeSetId: string | null;
  hookTypeName: string;
  hookTypeVersion: string;
  hookModel: {
    /**
     * The ARN of the Lambda function that will be invoked by the hook.
     */
    LambdaFunction: string;
  };
  actionInvocationPoint:
    | "CREATE_PRE_PROVISION"
    | "UPDATE_PRE_PROVISION"
    | "DELETE_PRE_PROVISION";
  requestData: {
    targetName: string;
    targetType: string;
    targetLogicalId: string;
    targetModel: {
      resourceProperties: Record<string, unknown>;
      previousResourceProperties: Record<string, unknown> | null;
    };
  };
  requestContext: {
    invocation: number;
    callbackContext: unknown | null;
  };
};

export type CloudFormationHookResult = {
  hookStatus: "SUCCESS" | "FAILURE" | "IN_PROGRESS";
  errorCode?: "NonCompliant" | "InternalFailure";
  message: string;
  clientRequestToken: string;
  callbackContext?: unknown | null;
  callbackDelaySeconds?: number;
};
