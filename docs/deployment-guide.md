# Deployment Guide

**Table of contents:**

- [Deploy using Docker](#deploy-using-docker)
  - [Pre-requisites](#pre-requisites)
  - [Deployment Instructions](#deployment-instructions)
    - [Step 1 - Build the TrustStack container image](#step-1---build-the-truststack-container-image)
    - [Step 2 - Set the required environment variables](#step-2---set-the-required-environment-variables)
    - [Step 3 - Configure your deployment](#step-3---configure-your-deployment)
    - [Step 4 - Run the TrustStack container](#step-4---run-the-truststack-container)
      - [TrustStack Deployment Script Explanation](#truststack-deployment-script-explanation)
        - [1. Load Environment Variables](#1-load-environment-variables)
        - [2. Bootstrap AWS CDK](#2-bootstrap-aws-cdk)
        - [3. Deploy Core TrustStack Components](#3-deploy-core-truststack-components)
        - [4. Generate and Upload LZA Assets](#4-generate-and-upload-lza-assets)
        - [5. Download LZA Configuration](#5-download-lza-configuration)
      - [Result](#result)
    - [Step 5 - Create a new commit in your LZA repository](#step-5---create-a-new-commit-in-your-lza-repository)

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

#### Step 4 - Run the TrustStack container

**Prerequisites:**

Ensure that your `AWS_PROFILE` environment variable is referncing the AWS account where you intent to deploy the TrustStack Data Perimeter Accelerator.

The following directories and files are mounted into the running container:

- The `.aws` directory in your user directory
- The `.envrc` file at the project root
- The `deployment-manifest.yml` file at the project root

This means that any updates to these files will automatically be visible within the running container.

**Instructions:**

Enter the following command in the terminal:

```shell
task ci:docker:run
```

This command runs the TrustStack container which in turn runs the deployment script in `scripts/deploy.sh`.

##### TrustStack Deployment Script Explanation

The `deploy.sh` script automates the complete TrustStack deployment process by executing the following commands in sequence:

###### 1. Load Environment Variables

```shell
source .envrc
```

**Purpose**: Loads all required environment variables from the `.envrc` file, including:

- `BUILD_HASH`: Unique identifier for this deployment
- `AWS_PROFILE`: AWS credentials profile to use
- `AWS_REGION`: Target AWS region for deployment
- Other TrustStack-specific configuration variables

###### 2. Bootstrap AWS CDK

```shell
./scripts/cdk-bootstrap.sh
```

**Purpose**: Creates the AWS CDK Toolkit CloudFormation stack in your deployment account. This is a prerequisite that:

- Sets up the necessary IAM roles and S3 buckets for CDK deployments
- Prepares your AWS account to receive CDK-based infrastructure
- Must be completed before any CDK stacks can be deployed

###### 3. Deploy Core TrustStack Components

```shell
echo "Deploying core components..."
task engine:cdk:deploy:ci
```

**Purpose**: Deploys the foundational TrustStack Data Perimeter Accelerator infrastructure:

- Creates the core S3 bucket for storing LZA-compatible assets
- Establishes the foundation for security controls

The S3 bucket created follows the naming pattern: `trust-stack-assets-<deployment account ID>-<deployment region>`

###### 4. Generate and Upload LZA Assets

```shell
echo "Uploading LZA configuration to S3..."
task security-packages:upload-to-s3
```

**Purpose**: Processes your selected security packages and generates LZA-compatible deployment artifacts:

- Reads your `deployment-manifest.yml` configuration
- Generates CloudFormation templates for each selected security package
- Creates Service Control Policies for preventative controls
- Uploads all generated assets to the TrustStack S3 bucket under a directory named with your `BUILD_HASH`

###### 5. Download LZA Configuration

```shell
echo "Downloading LZA configuration from S3..."
task security-packages:download-from-s3
```

**Purpose**: Downloads the generated LZA-compatible assets to your local environment:

- Retrieves all generated files from the S3 bucket
- Organizes them in the standard LZA directory structure
- Creates the `lza-config/` directory with:
  - `trust-stack/` subdirectory containing security package assets
  - `organization-config.yaml` with Service Control Policy configurations
  - `customizations-config.yaml` with CloudFormation StackSet definitions

##### Result

After running this script, you'll have:

1. A fully deployed TrustStack core infrastructure in your AWS account
2. Generated LZA-compatible configuration files ready for integration into your LZA repository
3. All necessary assets organized in the proper directory structure for LZA deployment

The next step would be to copy the contents of the `lza-config/` directory into your existing LZA repository and commit the changes to deploy the security packages through your LZA pipeline.

#### Step 5 - Create a new commit in your LZA repository

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
