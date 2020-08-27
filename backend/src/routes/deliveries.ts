import { Router } from 'express';
import Deliveries from '../resource/delivery'
import CreateDeliveryServices from '../services/createDeliveryServices';

const deliveriesRoutes = Router();

deliveriesRoutes.post('/', async (req, res) => {
  const { clienteNome, peso, endereco } = req.body
  const createDeliveryServices = new CreateDeliveryServices()
  await createDeliveryServices.execute({clienteNome, peso, endereco})
  return res.json({message:"Criado com sucesso."})
  
});

deliveriesRoutes.get('/', (req, res) => {
  Deliveries.find({}).lean().exec((e, deliveries)=>{
    return res.json(deliveries);
  })
});

deliveriesRoutes.delete('/', (req, res) => {
  Deliveries.deleteMany({})
    .then(()=>{
      return res.json({message: "Registros excluídos com sucesso."})
    })
    .catch(error=>{
      return res.json({error})
    })
});

export default deliveriesRoutes;
