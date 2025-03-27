import type {
  CloudFormationCustomResourceCreateEvent,
  CloudFormationCustomResourceDeleteEvent,
  CloudFormationCustomResourceUpdateEvent,
} from "aws-lambda";
import * as https from "node:https";
import * as url from "node:url";

export function sendCustomResourceResponse(
  options: SendCustomResourceResponseOnCreateEventOptions,
): Promise<void>;
export function sendCustomResourceResponse(
  options: SendCustomResourceResponseOnUpdateEventOptions,
): Promise<void>;
export function sendCustomResourceResponse(
  options: SendCustomResourceResponseOnDeleteEventOptions,
): Promise<void>;
export function sendCustomResourceResponse(
  options: SendCustomResourceResponseOptions,
): Promise<void> {
  const responseFields: Record<string, unknown> = {
    Status: options.responseStatus,
    Reason: options.reason,
    StackId: options.event.StackId,
    RequestId: options.event.RequestId,
    LogicalResourceId: options.event.LogicalResourceId,
  };

  if (options.event.RequestType === "Create") {
    const { physicalResourceID, data } =
      options as SendCustomResourceResponseOnCreateEventOptions;

    responseFields.PhysicalResourceId = physicalResourceID;
    responseFields.Data = data;
  } else if (options.event.RequestType === "Update") {
    responseFields.PhysicalResourceId = (
      options.event as CloudFormationCustomResourceUpdateEvent
    ).PhysicalResourceId;
    responseFields.Data = (
      options as SendCustomResourceResponseOnUpdateEventOptions
    ).data;
  } else {
    responseFields.PhysicalResourceId = (
      options.event as CloudFormationCustomResourceDeleteEvent
    ).PhysicalResourceId;
  }

  const responseBody = JSON.stringify(responseFields);

  const parsedUrl = url.parse(options.event.ResponseURL);

  const httpRequestOptions: https.RequestOptions = {
    hostname: parsedUrl.hostname,
    port: 443,
    path: parsedUrl.path,
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "content-length": responseBody.length,
    },
  };

  console.log("Sending custom resource response...");

  return new Promise((resolve, reject) => {
    const httpRequest = https.request(httpRequestOptions);

    // Write data to request body
    httpRequest.write(responseBody);
    httpRequest.end();

    httpRequest.on("response", (response) => {
      // Reject on bad status
      if (
        typeof response.statusCode !== "number" ||
        response.statusCode < 200 ||
        response.statusCode >= 300
      ) {
        reject(
          new Error(
            `Failed to update custom resource. HTTP Status Code: ${response.statusCode}`,
          ),
        );
      } else {
        console.log("Custom resource status updated successfully");
        resolve();
      }
    });

    httpRequest.on("error", (error) => {
      console.log("Failed to update custom resource status");
      reject(error);
    });
  });
}

export type SendCustomResourceResponseOptions =
  | SendCustomResourceResponseOnCreateEventOptions
  | SendCustomResourceResponseOnUpdateEventOptions
  | SendCustomResourceResponseOnDeleteEventOptions;

export type SendCustomResourceResponseOnCreateEventOptions = {
  readonly event: CloudFormationCustomResourceCreateEvent;
  readonly responseStatus: "SUCCESS" | "FAILED";
  readonly reason?: string;
  readonly physicalResourceID: string;
  readonly data?: Record<string, string>;
};

export type SendCustomResourceResponseOnUpdateEventOptions = {
  readonly event: CloudFormationCustomResourceUpdateEvent;
  readonly responseStatus: "SUCCESS" | "FAILED";
  readonly reason?: string;
  readonly data?: Record<string, string>;
};

export type SendCustomResourceResponseOnDeleteEventOptions = {
  readonly event: CloudFormationCustomResourceDeleteEvent;
  readonly responseStatus: "SUCCESS" | "FAILED";
  readonly reason?: string;
};
