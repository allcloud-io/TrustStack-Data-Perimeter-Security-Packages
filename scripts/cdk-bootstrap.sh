pnpx aws-cdk@2.1003.0 bootstrap aws://$(aws sts get-caller-identity | jq -r '.Account')/${AWS_REGION} \
  --qualifier truststack \
  --toolkit-stack-name CDKToolkit-TrustStack
