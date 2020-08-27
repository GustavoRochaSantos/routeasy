import { Router } from 'express';

const deliveriesRoutes = Router();

deliveriesRoutes.post('/', (req, res) => {
  return res.json('post');
});

deliveriesRoutes.get('/', (req, res) => {
  return res.json('get');
});

deliveriesRoutes.delete('/', (req, res) => {
  return res.json('get');
});

export default deliveriesRoutes;
