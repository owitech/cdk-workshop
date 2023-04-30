import "source-map-support/register";
import { App } from "aws-cdk-lib";

import { MyVpc } from "../lib/vpc";

const app = new App();

new MyVpc(app, "MyVpcStack");
