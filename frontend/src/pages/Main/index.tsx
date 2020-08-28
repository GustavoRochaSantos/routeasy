import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

import Header from '../../components/Header'

import Formulario from './Formulario';

import Listagem from './Listagem'

import Map from './Map'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

interface DeliveryData { 
    _id: string,
    clienteNome: string,
    peso: number,
    endereco: { 
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
  
}

toast.configure()

const Main: React.FC = () => {
  

  const [deliveries, setDeliveries] = useState<DeliveryData[]>([]);


  useEffect(() => {
    handleLoad();
  }, []);

  async function handleRemoveData(id:string = '') {
    const response = await api.delete(`/?id=${id}`);
    handleLoad()
  }

  async function handleLoad() {
    const response = await api.get('/');
    setDeliveries(response.data);
  }
  return (
    <Container>
      <Header/>
      <Formulario
        handleLoad={handleLoad}
        handleRemoveData={handleRemoveData}
      />
      <Map
      deliveries={deliveries}
      />
      <Listagem
        deliveries={deliveries}
        handleRemoveData={handleRemoveData}
      />
    </Container>
  );
};

export default Main;
