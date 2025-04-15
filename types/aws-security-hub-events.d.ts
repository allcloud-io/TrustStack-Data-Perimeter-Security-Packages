export type SecurityHubFindingsImportedEvent = {
  version: string;
  id: string;
  "detail-type": string;
  source: "aws.securityhub";
  account: string;
  time: string;
  region: string;
  resources: string[];
  detail: SecurityHubFindingsImportedEventDetail;
};

export type SecurityHubFindingsImportedEventDetail = {
  findings: Array<{
    ProductArn: string;
    Types: string[];
    Description: string;
    Compliance: {
      Status: string;
      RelatedRequirements: string[];
    };
    ProductName: string;
    FirstObservedAt: string;
    CreatedAt: string;
    CompanyName: string;
    FindingProviderFields: {
      Types: string[];
      Severity: {
        Normalized: number;
        Label: string;
      };
    };
    ProductFields: {
      ProviderName: string;
      ProviderVersion: string;
      [key: string]: string;
    };
    Remediation: {
      Recommendation: {
        Text: string;
        Url: string;
      };
    };
    SchemaVersion: string;
    GeneratorId: string;
    RecordState: string;
    Title: string;
    Workflow: {
      Status: string;
    };
    Severity: {
      Normalized: number;
      Label: string;
    };
    UpdatedAt: string;
    WorkflowState: string;
    AwsAccountId: string;
    Region: string;
    Id: string;
    Resources: Array<{
      Partition: string;
      Type: string;
      Details: {
        Other: {
          [key: string]: string;
        };
      };
      Region: string;
      Id: string;
    }>;
    ProcessedAt: string;
  }>;
};
