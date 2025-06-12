source .envrc

./scripts/cdk-bootstrap.sh

echo "Deploying core components..."

task engine:cdk:deploy:ci

echo "Uploading LZA configuration to S3..."

task security-packages:upload-to-s3

echo "Downloading LZA configuration from S3..."

task security-packages:download-from-s3
