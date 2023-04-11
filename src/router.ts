import { Router } from 'express';
import instanceController from './controllers/instance.controller';
import extractorController from './controllers/etl.controller';

const appRouter = Router();

appRouter.get('/api/v1/instances/:region', instanceController.getEC2Instances);
appRouter.get('/api/v1/list_instances', extractorController.listInstances);

export default appRouter;
