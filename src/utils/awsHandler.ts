import {
  EC2Client,
} from '@aws-sdk/client-ec2';

import config from '../config/config';

const credentials = {
  accessKeyId: config.awsAccessKeyId,
  secretAccessKey: config.awsSecretAccessKey,
};

export const getEC2Client = (region: string): EC2Client =>
  new EC2Client({
    endpoint: config.ec2Endpoint,
    credentials: credentials,
    region: region,
  });
