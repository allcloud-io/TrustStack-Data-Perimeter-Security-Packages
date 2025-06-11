# Data Perimeter Accelerator: Guidelines and Considerations

**Table of Contents:**

- [Introduction](#introduction)
- [Policy Types for Data Perimeter Objectives](#policy-types-for-data-perimeter-objectives)
- [Data Perimeter Control Objectives](#data-perimeter-control-objectives)
- [Best Practices for Data Perimeter Implementation](#best-practices-for-data-perimeter-implementation)

## Introduction

Data perimeter controls help organizations establish boundaries around their AWS resources to ensure proper access control. This document summarizes key considerations for implementing data perimeter controls in AWS environments.

## Policy Types for Data Perimeter Objectives

Organizations primarily use three policy types to achieve data perimeter objectives:

1. **Service Control Policies (SCPs)** - Control permissions at the AWS Organizations level
2. **Resource Control Policies (RCPs)** - Control access to specific resources
3. **VPC Endpoint Policies** - Control access through VPC endpoints

## Data Perimeter Control Objectives

**The primary goal of data perimeter controls is to establish clear boundaries that protect your AWS resources and data.**

Certain AWS services require additional considerations to meet data perimeter control objectives. These additional controls fall into four categories:

1. **Preventative controls** - security controls designed to prevent actions that lead to deviations from the data perimeter baseline. These controls are implemented using three policy types:

   1. [Service control policies (SCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html) - Enforce organization-wide permission guardrails
   2. [Resource control policies (RCPs)](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_rcps.html) - Control access at the resource level
   3. [VPC endpoint policies](https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints-access.html) - Secure network pathways to resources

2. **Proactive controls** - security controls designed to prevent resource configurations that lead to deviations from the data perimeter baseline. These controls are implemented through automated checks within deployment pipelines, such as those supported with [AWS CloudFormation hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/what-is-cloudformation-hooks.html). While we primarily use AWS CloudFormation hooks in the prescriptive guidance, customers can implement policy-as-code checks using customer preferred Infrastructure as Code (IaC) tooling.

3. **Detective** - security controls designed to detect actions or resource configurations that lead to deviations from the data perimeter baseline. If necessary, detected deviations should be remediated with Responsive controls.

4. **Responsive controls** - security controls designed to remediate deviations from the data perimeter baseline. Customers should implement these controls alongside the detective controls, in accordance with their risk mitigation strategy.

For each consideration, we provide security packages customers may want to use to better protect their AWS resources and data. Each security package consist of a set of security contorls you can deploy in your AWS organization. Please refer to [TrustStack Security Packages](../apps/security-packages/README.md) for detailed information about the security packages offered by TrustStack.

## Best Practices for Data Perimeter Implementation

- Implement a layered approach with preventative, proactive, detective, and responsive controls
- Leverage automated checks in deployment pipelines to ensure continuous compliance
- Conduct regular policy reviews and updates to address emerging services and use cases
- Develop service-specific control strategies based on each service's unique characteristics
- Document any exceptions and implement compensating controls when standard patterns cannot be applied. Compensating controls are alternative security measures that mitigate risks when primary controls cannot be implemented due to technical limitations, business requirements, or other constraints. These controls should provide equivalent security assurance through different mechanisms. Examples of primary controls include Service Control Policies (SCPs), Resource Control Policies (RCPs), and VPC Endpoint Policies, which directly enforce data perimeter boundaries at different levels of your AWS environment.
- Establish a monitoring strategy to detect and respond to potential perimeter violations
