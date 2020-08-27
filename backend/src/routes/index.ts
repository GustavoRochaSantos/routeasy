import { Router } from 'express';
import deliveriesRoutes from './deliveries';

const routes = Router();

routes.use('/deliveries', deliveriesRoutes);

export default routes;
