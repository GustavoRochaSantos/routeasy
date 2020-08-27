import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import * as Yup from 'yup'
import { Panel } from './style';
import api from '../../services/api';
import Input from '../../components/Input';

interface FormData {
  clienteNome: string;
  peso: string;
  endereco: string;
  latitude: string;
  longitude: string;
}
const Main: React.FC = () => {
  const [deliveries, setDeliveries] = useState({});
  const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0])
  const [markerPosition, setMarkPosition] = useState<[number, number]>([0,0])
  const [formErrors, setFormErrors] = useState([])

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        const { latitude, longitude } = position.coords

        setInitialPosition([latitude, longitude])
        setMarkPosition([latitude, longitude])
    })
}, [])

  useEffect(() => {
    handleLoad();
  }, []);

  async function handleLoad() {
    const response = await api.get('/');
    console.log(response.data);
    setDeliveries(response.data);
  }
  async function handleResetData() {
    const response = await api.delete('/');
    console.log(response.data);
    setDeliveries([]);
  }

  async function handleSubmit(data: FormData) {

    setFormErrors([])
    try {
      const schema = Yup.object().shape({
        clienteNome: Yup.string().required(),
        peso: Yup.string().required(),
        endereco: Yup.string().required()
      })

      await schema.validate(data, {
        abortEarly: false,
      });


      console.log(data)
    } catch (error) {
      setFormErrors(error)
      console.log(error)
    }
    console.log(data);
  }
  return (
    <>
      <Panel>
        <Form onSubmit={handleSubmit}>
          <h2>Nova Entrega</h2>
          <Input name="clienteNome" placeholder="Nome Cliente" />
          <Input name="peso" placeholder="Peso da Entrega" />
          <Input name="endereco" placeholder="Endereço Cliente" />
          <Input name="latitude" placeholder="Latitude" />
          <Input name="longitude" placeholder="Longitude" />

          <button type="submit">CADASTRAR CLIENTE</button>
        </Form>
      </Panel>
      <Panel>
        <button type="button" onClick={handleResetData}>
          RESETAR CADASTRO
        </button>
      </Panel>
      <Panel>
        <Map center={initialPosition} zoom={15}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={markerPosition} />
          />
        </Map>
      </Panel>
    </>
  );
};

export default Main;
