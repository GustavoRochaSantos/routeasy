/**
 * Interface do endereço
 */

export default interface DeliveryData { 
    geolocalizacao: {
      longitude: number,
      latitude: number
    },
    logradouro: string
    numero: number,
    bairro: string,
    complemento: string,
    cidade: string,
    estado: string,
    pais: string
} 