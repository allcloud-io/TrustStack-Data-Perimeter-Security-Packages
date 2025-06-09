# Local Development Guide

<!-- TODO: Complete the local development guide -->

**Important note:** This document is a work in progress and does not yet provide comprehensive information on setting up a local development environment.

**Table of Contents:**

- [Local Development Guide](#local-development-guide)
  - [Setup](#setup)
    - [Create Taskfile.yml](#create-taskfileyml)
  - [Utilities](#utilities)
    - [CloudFormation Schema to TypeScript Types](#cloudformation-schema-to-typescript-types)
      - [Cursor IDE Rule](#cursor-ide-rule)
      - [Generated TypeScript Types](#generated-typescript-types)

## Setup

### Create Taskfile.yml

Create a Taskfile.yml file in the project root. You can notice that this file is already in your .gitignore.

Add the following contents to your Taskfile.yml:

```yaml
version: "3"

includes:
  dist:
    taskfile: ./Taskfile.dist.yml
    flatten: true
```

You can list all the available tasks by typing `task` in the terminal, adding a space after the `task` command and pressing the backspace key. You can also list tasks by namespace.

You can optionally add a "tasks" field containing your own personal tasks:

```yaml
version: "3"

includes:
  dist:
    taskfile: ./Taskfile.dist.yml
    flatten: true

tasks:
  # Add your personal tasks here
  # Example:
  # my-task:
  #   desc: "Description of my personal task"
  #   cmd: "echo 'Running my task'"
```

Consult [tasks.md](tasks.md) for a description of all available tasks.

## Utilities

### CloudFormation Schema to TypeScript Types

This project provides tools to convert AWS CloudFormation resource schema files to TypeScript type definitions. It includes:

1. A Cursor IDE rule (`cloudformation-resources-typescript-types.mdc`) that describes best practices for generating TypeScript types from CloudFormation schemas
2. A TypeScript script (`scripts/cfn-schema-to-ts.ts`) that automates the conversion process

#### Cursor IDE Rule

The `cloudformation-resources-typescript-types.mdc` file contains a Cursor IDE rule that describes best practices for generating TypeScript types from CloudFormation schemas. This rule can be used as a reference when extending the automated script.

#### Generated TypeScript Types

The generated TypeScript types follow these conventions:

- Each resource is defined in a namespace named after the resource type (e.g., `AWS_IAM_Role`)
- The main resource type is named after the resource with a "ResourceType" suffix (e.g., `RoleResourceType`)
- Nested types are named descriptively (e.g., `PolicyType`, `TagType`)
- JSDoc comments include descriptions from the schema
- Required properties are not marked as optional
- Optional properties use the `?` operator
- Special metadata (read-only, create-only) is included in JSDoc comments
