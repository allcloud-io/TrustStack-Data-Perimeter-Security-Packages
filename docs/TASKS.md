# Available tasks

Below are all the available tasks organized by their categories based on the Taskfiles in `tasks`:

## Development Tasks (`Taskfile.dev.yml`)

- **Linting & Generation**

  - `task lint:scripts` - Lint all TypeScript files in the `scripts` directory
  - `task generate:cfn-schema-to-ts` - Generate TypeScript types from the CloudFormation schema file

- **Git Related**
  - `task git:local:fast-forward` - Fast-forward a local branch to another local branch
  - `task git:remote:fast-forward` - Fast-forward a remote branch to another remote branch
