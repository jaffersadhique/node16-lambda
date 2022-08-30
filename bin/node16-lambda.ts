#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { Node16LambdaStack } from "../lib/node16-lambda-stack.js";

const app = new cdk.App();
new Node16LambdaStack(app, "Node16LambdaStack", {
  stackName: "node16-lambda-stack",
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
});
