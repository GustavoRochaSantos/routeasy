import AppError from "../errors/AppError"
import Deliveries from '../resource/delivery'

interface Params { 
    clienteNome: string, 
    peso: Number, 
    endereco: object,
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
        if(!endereco){
            throw new AppError("Endereco não informado. Verifique!", 400)
        }

        const newDelivery = new Deliveries({
            clienteNome, peso, endereco
        })

        newDelivery.save(error=>{
        console.log(error)
        if(error){
            throw new AppError("Endereco não informado. Verifique!", 500)
        } else {
            console.log(newDelivery)
            return newDelivery
        }
        })
    }   
}

export default CreateDeliveryServices