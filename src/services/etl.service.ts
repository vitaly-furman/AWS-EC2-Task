import { DescribeInstancesCommand } from '@aws-sdk/client-ec2';
import { getEC2Client } from '../utils/awsHandler';
import { getRegions, writeInstancesToFile } from '../utils/utils';

class ETLService {
  static async listInstances(): Promise<any> {
    const regions = await getRegions();
    if (!regions || regions.length === 0) {
      throw new Error('No regions provided');
    }

    // Will be used to calculate time since launch of the instance
    const currentTime = new Date();

    // Get all ec2 instances by region, sort by launch time and output to a file
    const writeFilePromises = regions.map(async (region) => {
      const ec2Client = getEC2Client(region);
      const instances = await ec2Client.send(new DescribeInstancesCommand({}));

      const sortedInstances = instances.Reservations.flatMap((reservation) =>
        reservation.Instances.map((instance) => {
          // Calculate time since launch
          const secondsSinceLaunch =
            (currentTime.getTime() - instance.LaunchTime?.getTime()) / 1000;
          return { ...instance, secondsSinceLaunch: secondsSinceLaunch };
        })
      ).sort((a, b) => a.LaunchTime?.getTime() - b.LaunchTime?.getTime());

      writeInstancesToFile(sortedInstances, region);
    });

    await Promise.allSettled(writeFilePromises);
  }
}

export default ETLService;
