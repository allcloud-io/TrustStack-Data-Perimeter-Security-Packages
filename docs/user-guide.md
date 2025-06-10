# User Guide

**Table of contents:**

- [User Guide](#user-guide)
  - [Deploy the TrustStack framework using Docker](#deploy-the-truststack-framework-using-docker)
    - [Pre-requisites](#pre-requisites)
    - [Deployment Instructions](#deployment-instructions)
      - [Step 1 - Build the TrustStack container image](#step-1---build-the-truststack-container-image)
      - [Step 2 - Set the required environment variables](#step-2---set-the-required-environment-variables)
      - [Step 3 - Run the TrustStack container in interactive mode](#step-3---run-the-truststack-container-in-interactive-mode)
      - [Step 4 - Create an AWS CDK Toolkit CloudFormation stack for TrustStack](#step-4---create-an-aws-cdk-toolkit-cloudformation-stack-for-truststack)
      - [Step 5 - Configure your deployment of TrustStack](#step-5---configure-your-deployment-of-truststack)
      - [Step 6 - Deploy the core TrustStack components](#step-6---deploy-the-core-truststack-components)
      - [Step 7 - Generate LZA-compatible deployment assets for your selected security packages](#step-7---generate-lza-compatible-deployment-assets-for-your-selected-security-packages)
      - [Step 8 - Download the generated assets and create a new commit in your LZA repository](#step-8---download-the-generated-assets-and-create-a-new-commit-in-your-lza-repository)

## Deploy the TrustStack framework using Docker

### Pre-requisites

Clone this repository into your machine.

Verify you have access to the AWS account where you intent to deploy the TrustStack framework, and ensure you have working AWS credentials in the `.aws` directory under your home directory.

Make sure you have the [Docker](https://www.docker.com/) CLI or a Docker CLI compatible alternative such as [Podman](https://podman.io/) installed on your Machine.

Install [Task](https://taskfile.dev/installation/) on your machine.

We recommend that you have [direnv](https://direnv.net/) installed on your machine for sorucing environment variables, but this is not a requirement.

### Deployment Instructions

#### Step 1 - Build the TrustStack container image

Build the TrustStack container image by running the following command in the terminal:

```shell
task ci:docker:build
```

This Task command runs `docker build` to build a container from the `Dockerfile` at the root of this project.

**Troubleshooting note:** If you are using a Docker compatible tool such as Podman and you don't have the `docker` command directly available in your shell environment(i.e., not via an alias), you need to set the `DOCKER_CLI_TOOL` environment variable to the name of your compatible Docker CLI command(e.g., `export DOCKER_CLI_TOOL=podman`).

#### Step 2 - Set the required environment variables

If you are using [direnv](https://direnv.net/), then copy the `.envrc.example` file into a `.envrc` file at the root of this project. The new `.envrc` file you is ignored by Git. Otherwise(i.e., you are not using direnv), read below instructions to understand how to fill in the environment variables defined in `.envrc.example`.

Fill in the environment variables which appear on the `.envrc.example` file. Type the following command in the terminal to get the value for the `BUILD_HASH` environment variable:

```shell
task generate:build-hash
```

Use the hash value rendered in your terminal as the value for the `BUILD_HASH` environment variable.

#### Step 3 - Run the TrustStack container in interactive mode

Enter the following command in the terminal:

```shell
task ci:docker:run:interactive
```

This command runs the TrustStack container with an open shell(i.e., in interactive mode).

You should see that a terminal session is open, looking somewhat like this:

```shell
root@8b0da35a7ef0:/app#
```

Enter the following command in the terminal to load your environment variables file:

```shell
source .envrc
```

Ensure that your `AWS_PROFILE` environment variable is referncing the AWS account where you intent to deploy the TrustStack Data Perimeter Accelerator.

#### Step 4 - Create an AWS CDK Toolkit CloudFormation stack for TrustStack

Run the shell script at `scripts/cdk-bootstrap.sh` to create a CDK Toolkit stack in your deployment account. This is a pre-requisite for the rest of the steps.

```shell
./scripts/cdk-bootstrap.sh
```

#### Step 5 - Configure your deployment of TrustStack

Create a `deployment-manifest.yml` file at the root of this project. This file holds the configuration settings for your deployment of the TrustStack Data Perimeter Accelerator. This file is in the ignore list for Git, so make sure to keep a bakcup of the file somewhere else, e.g., in a dedicated Git repository.

Fill in all the contents of the `deployment-manifest.yml` file based on the `deployment-manifest.example.yml` example configuration file.

When selecting security packages to deploy, make sure to read the Security Packages' README file at `apps/security-packages/README.md`. This README file describe all the security packages offered by the TrustSTack Data Perimeter Accelerator and contains links to security package-specific `README.md` files for more details.

#### Step 6 - Deploy the core TrustStack components

Enter the following command in the terminal to deploy the core TrustStack Data Perimeter Accelerator components:

```shell
task engine:cdk:deploy:ci
```

This will create a new Amazon S3 bucket to store the LZA-compatiable assets generated by TrustStack. The bucket name follows the following format:
`trust-stack-assets-<deployment account ID>-<deployment region>`

Where `<deployment account ID>` and `<deployment region>` are the AWS account ID and AWS region where you deployed TrustStack's core components.

#### Step 7 - Generate LZA-compatible deployment assets for your selected security packages

Enter the following command in the terminal to generate LZA-compatible deployment assets for your chosen security packages and upload the generated assets to TrustStack's assets bucket.

```shell
task security-packages:upload-to-s3
```

#### Step 8 - Download the generated assets and create a new commit in your LZA repository

<!-- TODO: Add section content -->
