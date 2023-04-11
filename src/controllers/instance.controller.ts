import { Request, Response } from 'express';
import InstanceService from '../services/instance.service';

class InstanceController {
  static async getEC2Instances(req: Request, res: Response): Promise<any> {
    const region = req.params?.region as string;
    if (!region) {
      return res.status(400).send('No region provided');
    }

    try {
      const ec2Instances = InstanceService.getEC2Instances(region);
      res.json(ec2Instances);
    } catch (err) {
      res.status(400).send(err?.message);
    }
  }
}

export default InstanceController;
