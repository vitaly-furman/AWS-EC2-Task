import { readFileSync } from 'fs';
import { join } from 'path';

class InstanceService {
  static getEC2Instances(region: string): string {
    const filePath = join(__dirname, '../../data', `${region}.json`);
    try {
      const fileContent = readFileSync(filePath, { encoding: 'utf-8' });
      return JSON.parse(fileContent);
    } catch (error) {
      throw new Error(`No data available for region: ${region}`);
    }
  }
}

export default InstanceService;
