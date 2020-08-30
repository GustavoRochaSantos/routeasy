/**
 * Serviço de criação da Delivery
 */
import AppError from "../errors/AppError"
import Deliveries from '../resource/delivery'
import DeliveryType from "../model/Delivery/interface";

//-- Interface de Parametros
interface Params { 
    clienteNome: string, 
    peso: Number, 
    endereco: DeliveryType,
    _id?:string,
    __v?:number;
}

class CreateDeliveryServices { 
    public async execute(data:Params): Promise<void>{
        //-- Desestrutura os Parametros
        const { clienteNome, peso, endereco } = data

        //-- Faz as verificações de dados, se houver erro, dispara um throw
        if(!clienteNome){
            throw new AppError("Nome do cliente não informado. Verifique!", 400)
        }
        if(!peso){
            throw new AppError("Peso não informado. Verifique!", 400)
        }
        if(!endereco.geolocalizacao.latitude || !endereco.geolocalizacao.longitude){
               
            throw new AppError("Endereco não informado. Verifique!", 400)
        }

        //-- Possui todos os dados, cria um novo registro
        const newDelivery = new Deliveries({
            clienteNome, peso, endereco
        })

        //-- Salva no banco
        await newDelivery.save()
    }   
}

export default CreateDeliveryServices