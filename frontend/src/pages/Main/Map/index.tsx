/**
 * Página do Mapa de Entregas
 */

import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Container } from './style';
import DeliveryData from '../../../model/Delivery/interface';

// -- Interface padrão com os campos da entrega
interface Params {
  deliveries: DeliveryData[];
}

// -- Cria o componente
const MapLeaflet: React.FC<Params> = ({ deliveries }) => {
  // -- Cria as variaveis de controle dos dados
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);

  // -- Trata os dados recebidos
  useEffect(() => {
    // -- Se não existe nenhum dado, pega a posição pelo navegador
    if (deliveries.length === 0) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        setInitialPosition([latitude, longitude]);
      });
    } else {
      // -- Se existem dados, pega a localização do último informado
      const { latitude, longitude } = deliveries[
        deliveries.length - 1
      ].endereco.geolocalizacao;
      setInitialPosition([latitude, longitude]);
    }
  }, [deliveries]);

  // -- Retona o componente
  return (
    <Container>
      <Map center={initialPosition} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {deliveries.map((delivery, index) => {
          const iconMarker = new L.DivIcon({
            html: `<div class="leaflet-div-iconFlex"><img class="leaflet-div-icon" src="assets/pin.svg"/><div class="number">${
              index + 1
            }</div></div>`,
          });

          return (
            <Marker
              key={delivery._id}
              icon={iconMarker}
              position={[
                delivery.endereco.geolocalizacao.latitude,
                delivery.endereco.geolocalizacao.longitude,
              ]}
            >
              <Popup>
                <div>{delivery.clienteNome}</div>
                <div> {delivery.peso} kg</div>
              </Popup>
            </Marker>
          );
        })}
      </Map>
    </Container>
  );
};

export default MapLeaflet;
