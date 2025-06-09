# User Guide

**Table of contents:**

- [User Guide](#user-guide)
  - [Deploy the TrustStack framework using Docker](#deploy-the-truststack-framework-using-docker)
    - [Pre-requisites](#pre-requisites)
    - [Deployment Instructions](#deployment-instructions)
      - [Step 1 - Build the TrustStack container image](#step-1---build-the-truststack-container-image)
      - [Step 2 - Set the required environment variables](#step-2---set-the-required-environment-variables)
      - [Step 3 - Configure your deployment of TrustStack](#step-3---configure-your-deployment-of-truststack)
      - [Step 4 - Deploy the core TrustStack components](#step-4---deploy-the-core-truststack-components)
      - [Step 5 - Generate LZA-compatible deployment assets for your selected security packages](#step-5---generate-lza-compatible-deployment-assets-for-your-selected-security-packages)
      - [Step 6 - Download the generated assets and create a new commit in your LZA repository](#step-6---download-the-generated-assets-and-create-a-new-commit-in-your-lza-repository)

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

#### Step 3 - Configure your deployment of TrustStack

<!-- TODO: Add section content -->

#### Step 4 - Deploy the core TrustStack components

<!-- TODO: Add section content -->

#### Step 5 - Generate LZA-compatible deployment assets for your selected security packages

<!-- TODO: Add section content -->

#### Step 6 - Download the generated assets and create a new commit in your LZA repository

<!-- TODO: Add section content -->
