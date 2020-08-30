/**
 * Arquivos de Rotas do /deliveries
 */

import { Router } from 'express';
import Deliveries from '../resource/delivery'
import CreateDeliveryServices from '../services/createDeliveryServices';

const deliveriesRoutes = Router();

deliveriesRoutes.post('/', async (req, res) => {
  //-- Desestrutura os dados do body
  const { clienteNome, peso, endereco } = req.body

  //-- Chama o serviço de inserção
  const createDeliveryServices = new CreateDeliveryServices()
  await createDeliveryServices.execute({clienteNome, peso, endereco})

  //-- Se tudo deu certo, avisa o front
  return res.json({message:"Criado com sucesso."})
  
});

deliveriesRoutes.get('/', (req, res) => {

  //-- Busca todos os registros
  Deliveries.find({}).lean().exec((e, deliveries)=>{
    return res.json(deliveries);
  })
});

deliveriesRoutes.delete('/', async (req, res) => {
  //-- Desestrutura os parametros da Query
  const { id } = req.query

  //-- Cria um parametro de filtro
  const filters = id ? {"_id": id} : {}

    //-- Exclui 1 se tiver o id, senão exclui todos
    await Deliveries.deleteMany(filters)
    .then(()=>{
      return res.json({message: "Registros excluídos com sucesso."})
    })
    .catch(error=>{
      return res.json({error})
    })
});

export default deliveriesRoutes;
