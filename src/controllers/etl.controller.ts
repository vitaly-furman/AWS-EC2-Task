import { Request, Response } from 'express';
import ETLService from '../services/etl.service';

class ETLController {
  static async listInstances(_req: Request, res: Response): Promise<any> {
    try {
      await ETLService.listInstances();
      res.status(200).send('Successfully listed all instances');
    } catch (err) {
      res.status(400).send(err?.message);
    }
  }
}

export default ETLController;
