import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema(
  {
    clienteNome: String,
    peso: Number,
    endereco: {
      logradouro: String,
      numero: Number,
      bairro: String,
      complemento: String,
      cidade: String,
      estado: String,
      pais: String,
      geolocalizacao: {
        latitude: Number,
        longitude: Number,
      },
    },
  },
  { collection: 'delivery' },
);

export default mongoose.model('Deliveries', deliverySchema);
