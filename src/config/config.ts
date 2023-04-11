import dotenv from 'dotenv';

dotenv.config();

export default {
  port: parseInt(process.env.PORT) || 80,
  ec2Endpoint: process.env.EC2_ENDPOINT || 'http://localhost:4000',
  awsAccessKeyId: process.env.AWS_ACCESS_KEY || '',
  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  awsSessionToken: process.env.AWS_SESSION_TOKEN || '',
};
