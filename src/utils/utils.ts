import { Instance } from '@aws-sdk/client-ec2';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const regionsFile = process.argv[2] || 'regions.txt';

export const getRegions = async (): Promise<string[]> => {
  try {
    const fileData = readFileSync(join(__dirname, '../../data/', regionsFile), {
      encoding: 'utf-8',
    });
    return fileData.split(',').map((region) => region.trim());
  } catch (err) {
    throw new Error('Region file not found');
  }
};

export const writeInstancesToFile = (
  instances: Instance[],
  region: string
): void => {
  try {
    writeFileSync(
      join(__dirname, '../../data/', `${region}.json`),
      JSON.stringify(instances)
    );
  } catch (err) {
    throw new Error('Failed writing to file');
  }
};

export const dateTimeToISO = (awsDateTime: string): string => {
  const date = new Date(awsDateTime);
  return date.toISOString();
};
