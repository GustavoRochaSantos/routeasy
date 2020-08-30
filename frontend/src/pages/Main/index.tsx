/**
 * Página de cadastro das Entregas
 */

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Container } from './style';
import api from '../../services/api';
import Header from '../../components/Header';
import Formulario from './Formulario';
import Listagem from './Listagem';
import Map from './Map';
import 'react-toastify/dist/ReactToastify.css';

// -- Interface padrão com os campos da entrega
interface DeliveryData {
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

// -- Habilita o Toast Notifications
toast.configure();

// -- Cria o componente
const Main: React.FC = () => {
  // -- Cria as variaveis de controle dos dados
  const [deliveries, setDeliveries] = useState<DeliveryData[]>([]);

  // -- Dispara o load da tela
  useEffect(() => {
    handleLoad();
  }, []);

  // -- Chama o backend, apagando 1 registro pelo id ou todos
  async function handleRemoveData(id = '') {
    await api.delete(`/?id=${id}`);
    handleLoad();
  }

  // -- Carrega todos os dados do banco
  async function handleLoad() {
    const response = await api.get('/');
    setDeliveries(response.data);
  }

  // -- Retorna o componente
  return (
    <Container>
      <Header />
      <Formulario handleLoad={handleLoad} handleRemoveData={handleRemoveData} />
      <Map deliveries={deliveries} />
      <Listagem deliveries={deliveries} handleRemoveData={handleRemoveData} />
    </Container>
  );
};

export default Main;
