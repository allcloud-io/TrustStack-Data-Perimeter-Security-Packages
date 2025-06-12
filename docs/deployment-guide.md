# Deployment Guide

**Table of contents:**

- [Deploy using Docker](#deploy-using-docker)
  - [Pre-requisites](#pre-requisites)
  - [Deployment Instructions](#deployment-instructions)
    - [Step 1 - Build the TrustStack container image](#step-1---build-the-truststack-container-image)
    - [Step 2 - Set the required environment variables](#step-2---set-the-required-environment-variables)
    - [Step 3 - Configure your deployment](#step-3---configure-your-deployment)
    - [Step 4 - Run the TrustStack container in interactive mode](#step-4---run-the-truststack-container-in-interactive-mode)
    - [Step 5 - Create an AWS CDK Toolkit CloudFormation stack for TrustStack](#step-5---create-an-aws-cdk-toolkit-cloudformation-stack-for-truststack)
    - [Step 6 - Deploy the core TrustStack components](#step-6---deploy-the-core-truststack-components)
    - [Step 7 - Generate LZA-compatible deployment assets for your selected security packages](#step-7---generate-lza-compatible-deployment-assets-for-your-selected-security-packages)
    - [Step 8 - Download the generated assets and create a new commit in your LZA repository](#step-8---download-the-generated-assets-and-create-a-new-commit-in-your-lza-repository)

## Deploy using Docker

### Pre-requisites

Clone this repository into your machine.

Verify you have access to the AWS account where you intent to deploy the TrustStack framework, and ensure you have working AWS credentials in the `.aws` directory under your home directory.

Make sure you have the [Docker](https://www.docker.com/) CLI or a Docker CLI compatible alternative such as [Podman](https://podman.io/) installed on your Machine.

Install [Task](https://taskfile.dev/installation/) on your machine.

Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) on your machine.

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

#### Step 3 - Configure your deployment

Create a `deployment-manifest.yml` file at the root of this project. This file holds the configuration settings for your deployment of the TrustStack Data Perimeter Accelerator. This file is in the ignore list for Git, so make sure to keep a bakcup of the file somewhere else, e.g., in a dedicated Git repository.

Fill in all the contents of the `deployment-manifest.yml` file based on the `deployment-manifest.example.yml` example configuration file.

When selecting security packages to deploy, make sure to read the [Security Packages' README file](/apps/security-packages/README.md). This README file describe all the security packages offered by the TrustSTack Data Perimeter Accelerator and contains links to security package-specific `README.md` files for more details.

#### Step 4 - Run the TrustStack container in interactive mode

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

The following directories and files are mounted into the running container:

- The `.aws` directory in your user directory
- The `.envrc` file at the project root
- The `deployment-manifest.yml` file at the project root

This means that any updates to these files will automatically be visible within the running container.

#### Step 5 - Create an AWS CDK Toolkit CloudFormation stack for TrustStack

Run the shell script at `scripts/cdk-bootstrap.sh` to create a CDK Toolkit stack in your deployment account. This is a pre-requisite for the rest of the steps.

```shell
./scripts/cdk-bootstrap.sh
```

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

Now you have a directory with a name identical to the value of the `BUILD_HASH` environment variable at the root of TrustStack's assets bucket. This is where all the LZA-compatible generated assets are stored.

Exit the running container or open a new terminal window before continuing to step 8.

#### Step 8 - Download the generated assets and create a new commit in your LZA repository

Enter the following command to download the generated assets into a local directory:

```shell
task security-packages:download-from-s3
```

This command downloads the generated LZA-compatible deployment assets from TrustStack's S3 bucket to a local directory structure that mirrors the LZA configuration format.

The downloaded assets will be organized in the following structure:

```
lza-config/
├── trust-stack/                    # Directory containing TrustStack assets
├── organization-config.yaml        # LZA organization configuration file
└── customizations-config.yaml      # LZA customizations configuration file
```

**Integrating the assets into your LZA repository:**

1. **Copy the contents of the `lza-config/trust-stack` directory into a `trust-stack` directory in your LZA repository root.**

   If the `trust-stack` directory already exist in your LZA repository root. Remove it before copying the new contents.

2. **Update your LZA configuration files:**

   **For `customizations-config.yaml`:**
   Add the CloudFormation StackSets entries in `lza-config/customizations-config.yaml` to your LZA repository's `customizations-config.yaml` file.

   **For `organization-config.yaml`:**
   Add the Service Control Policy entries in `lza-config/organization-config.yaml` to your LZA repository's `organization-config.yaml` file.

3. **Configure deployment targets:**
   Update the `deploymentTargets` sections in both configuration files to specify which organizational units (OUs) or accounts should receive the TrustStack security packages. For entries with a name starting with `trust-stack-common-` (e.g., `trust-stack-common-cloudformation-hook-execution-role`), ensure they are deployed to all AWS accounts where TrustStack security packages will be deployed, as these are foundational components.

4. **Commit and deploy the changes:**

   ```shell
   git add .
   git commit -m "Add TrustStack security packages to LZA configuration"
   git push origin main
   ```

5. **Monitor the LZA pipeline:**
   After pushing the changes, monitor your LZA pipeline to ensure the TrustStack security packages are deployed successfully. The pipeline will:
   - Deploy the common CloudFormation hook execution role
   - Deploy the CloudFormation StackSets for each selected security package
   - Apply the Service Control Policies to the specified organizational units

**Important considerations:**

- **Dependencies:** The common CloudFormation hook execution role must be deployed before any security packages that use CloudFormation hooks (proactive controls).
- **Testing:** Consider deploying to a test OU first to validate the security packages work as expected in your environment.
- **Monitoring:** After deployment, monitor AWS Security Hub and CloudTrail for findings generated by the TrustStack detective controls.

The TrustStack security packages are now integrated into your LZA deployment and will be managed through your standard LZA operational procedures.
