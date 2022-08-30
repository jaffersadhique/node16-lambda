import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as nodeJS from "aws-cdk-lib/aws-lambda-nodejs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from "path";
import { fileURLToPath } from "url";

export class Node16LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const lambdaFunction = new NodejsFunction(this, "Node16-Lambda", {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(30),
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "main",
      entry: path.join(__dirname, `/../src/my-lambda/index.ts`),
      bundling: {
        target: "es2021",
        format: nodeJS.OutputFormat.ESM,
      },
    });
  }
}
