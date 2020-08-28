import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import { Container } from './style'
import DeliveryData from '../../../model/Delivery/interface'

interface Params { 
  deliveries: DeliveryData[]
}

const MapLeaflet:React.FC<Params> = ({deliveries}) =>{
  const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0])
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        const { latitude, longitude } = position.coords
  
        setInitialPosition([latitude, longitude])
    })
  }, [])

  return (
    <Container>
      <Map center={initialPosition} zoom={15}>
      <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'  
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {deliveries.map((delivery, index)=>{
        return (
          <Marker 
            key={delivery._id} 
            position={[delivery.endereco.geolocalizacao.latitude, delivery.endereco.geolocalizacao.longitude]}
          >
            <Popup>
                <div>{delivery.clienteNome}</div>
            </Popup>
          </Marker>
        )
      })}
      
    </Map>  
  </Container>
  )
    
}

export default MapLeaflet