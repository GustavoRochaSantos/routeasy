import AppError from "../errors/AppError"
import Deliveries from '../resource/delivery'
import DeliveryType from "../model/Delivery/interface";

interface Params { 
    clienteNome: string, 
    peso: Number, 
    endereco: DeliveryType,
    _id?:string,
    __v?:number;
}

class CreateDeliveryServices { 
    public async execute(data:Params): Promise<void>{
        const { clienteNome, peso, endereco } = data

        if(!clienteNome){
            throw new AppError("Nome do cliente não informado. Verifique!", 400)
        }
        if(!peso){
            throw new AppError("Peso não informado. Verifique!", 400)
        }
        if(!endereco || !endereco.geolocalizacao.latitude || !!endereco.geolocalizacao.longitude){
               
            throw new AppError("Endereco não informado. Verifique!", 400)
        }

        const newDelivery = new Deliveries({
            clienteNome, peso, endereco
        })

        await newDelivery.save()
    }   
}

export default CreateDeliveryServices