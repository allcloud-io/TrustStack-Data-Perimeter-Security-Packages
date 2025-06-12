FROM ubuntu:noble

COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install -y curl zip unzip less jq

# Download and install Node.js
RUN curl -sL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh && \
    bash /tmp/nodesource_setup.sh && \
    apt-get install -y nodejs && \
    rm /tmp/nodesource_setup.sh

# Verify the Node.js version:
RUN node -v # Should print "v22.16.0".

# Download and install pnpm:
RUN corepack enable pnpm

# Verify pnpm version:
RUN pnpm -v

# Install dependencies
RUN pnpm install

# Install the Task CLI
RUN npm install -g @go-task/cli

# Create a `Taskfile.yml` file
RUN echo 'version: '\''3'\''' > Taskfile.yml && \
    echo '' >> Taskfile.yml && \
    echo 'includes:' >> Taskfile.yml && \
    echo '  dist:' >> Taskfile.yml && \
    echo '    taskfile: Taskfile.dist.yml' >> Taskfile.yml && \
    echo '    flatten: true' >> Taskfile.yml && \
    echo '' >> Taskfile.yml

# Install the AWS CLI
RUN cd /root && \
    curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install

ENTRYPOINT ["/bin/bash", "scripts/deploy.sh"]
