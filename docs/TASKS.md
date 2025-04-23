# Available tasks

Below are all the available tasks organized by their categories based on the Taskfiles in `tasks`:

## Development Tasks (`Taskfile.dev.yml`)

- **Linting & Generation**

  - `task lint:scripts` - Lint all TypeScript files in the `scripts` directory
  - `task generate:cfn-schema-to-ts` - Generate TypeScript types from the CloudFormation schema file
  - `task generate:build-hash` - Generate a build hash for the current commit

- **Git Related**
  - `task git:local:fast-forward` - Fast-forward a local branch to another local branch
  - `task git:remote:fast-forward` - Fast-forward a remote branch to another remote branch

## Engine Tasks (`Taskfile.engine.yml`)

- **Development**

  - `task engine:lint` - Lint the TrustStack engine code
  - `task engine:format` - Format the TrustStack engine code
  - `task engine:test` - Test the TrustStack engine code

- **Deployment**
  - `task engine:cdk:deploy` - Deploy the TrustStack engine
  - `task engine:cdk:destroy` - Remove the TrustStack engine from the environment
  - `task engine:cdk:diff` - Present a diff of the TrustStack engine code against the deployed stacks
  - `task engine:cdk:synth` - Synthesize deployment artifacts for the TrustStack engine
  - `task engine:cdk:ls` - List the TrustStack engine stack
  - `task engine:package` - Generate deployment artifacts for the TrustStack engine
  - `task engine:upload-to-s3` - Upload the generated deployment artifacts to the assets bucket

## Security Packages Tasks (`Taskfile.security-packages.yml`)

- **Development**

  - `task security-packages:lint` - Lint the security packages code
  - `task security-packages:format` - Format the security packages code
  - `task security-packages:test` - Test the security packages code

- **Deployment**
  - `task security-packages:cdk:deploy` - Deploy the security packages (except for organization policies)
  - `task security-packages:cdk:destroy` - Remove the security packages from the environment (except for organization policies)
  - `task security-packages:cdk:diff` - Present a diff of the security packages code against the deployed stacks (except for organization policies)
  - `task security-packages:cdk:synth` - Synthesize deployment artifacts for the security packages (except for organization policies)
  - `task security-packages:cdk:ls` - List the security packages stacks
  - `task security-packages:build` - Generate deployment artifacts for the security packages
  - `task security-packages:upload-to-s3` - Upload the generated deployment artifacts to the assets bucket

## E2E Test Tasks (`Taskfile.e2e.yml`)

- **Deployment**
  - `task e2e:cdk:deploy` - Deploy the e2e tests resources
  - `task e2e:cdk:destroy` - Destroy the e2e tests resources
  - `task e2e:cdk:diff` - Diff the e2e tests resources
  - `task e2e:cdk:synth` - Synthesize the e2e tests resources
  - `task e2e:cdk:ls` - List the e2e tests resources

## Scripts Tasks (`Taskfile.scripts.yml`)

- **Development**
  - `task scripts:lint` - Lint all TypeScript files in the `scripts` directory
  - `task scripts:format` - Format all TypeScript files in the `scripts` directory
