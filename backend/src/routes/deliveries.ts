import { Router } from 'express';
import Deliveries from '../resource/delivery'
import CreateDeliveryServices from '../services/createDeliveryServices';
import { ObjectId } from 'mongodb';

const deliveriesRoutes = Router();

deliveriesRoutes.post('/', async (req, res) => {
  const { clienteNome, peso, endereco } = req.body

console.log(req.body)

  const createDeliveryServices = new CreateDeliveryServices()
  await createDeliveryServices.execute({clienteNome, peso, endereco})
  return res.json({message:"Criado com sucesso."})
  
});

deliveriesRoutes.get('/', (req, res) => {
  Deliveries.find({}).lean().exec((e, deliveries)=>{
    return res.json(deliveries);
  })
});

deliveriesRoutes.delete('/', async (req, res) => {
  const { id } = req.query

  const filters = id ? {"_id": id} : {}

    await Deliveries.deleteMany(filters)
    .then(()=>{
      return res.json({message: "Registros excluídos com sucesso."})
    })
    .catch(error=>{
      return res.json({error})
    })
});

export default deliveriesRoutes;
