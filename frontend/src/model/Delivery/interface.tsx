/**
 * Interface padrão dos dados no Mongo
 */

export default interface DeliveryData {
  _id: string;
  clienteNome: string;
  peso: number;
  endereco: {
    geolocalizacao: {
      longitude: number;
      latitude: number;
    };
    logradouro: string;
    numero: number;
    bairro: string;
    complemento: string;
    cidade: string;
    estado: string;
    pais: string;
  };
}
