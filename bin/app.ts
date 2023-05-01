import 'source-map-support/register';
import { App } from 'aws-cdk-lib';

import { Test } from '../lib/stacks';

const app = new App();

new Test(app, 'TestStack');
