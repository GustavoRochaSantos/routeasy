import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema(
  {
    clienteNome: String,
    pesoKG: Float32Array,
    endereco: {
      logradouro: String,
      numero: Number,
      bairro: String,
      complemento: String,
      cidade: String,
      estado: String,
      pais: String,
      geolocalizacao: {
        Latitude: Number,
        Longitude: Number,
      },
    },
  },
  { collection: 'delivery' },
);

export default mongoose.model('Deliveries', deliverySchema);
