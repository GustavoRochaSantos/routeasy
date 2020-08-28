import React, { useState, useEffect } from 'react'
import { Container, Table } from './style'
import { FiTrash2 } from 'react-icons/fi'
import DeliveryData from '../../../model/Delivery/interface'

interface Params { 
  deliveries: DeliveryData[],
  handleRemoveData(id:string ):void;
}


const Listagem:React.FC<Params> = ({deliveries, handleRemoveData}) => { 
  const [totalClientes, setTotalClientes] = useState<number>(0)
  const [totalPeso, setTotalPeso] = useState<string>('')
  const [TicketMedio, setTicketMedio] = useState<string>('')


  useEffect(()=>{
    const clientes = deliveries.length
    const peso = deliveries.reduce((total, item)=> total + item.peso, 0)
    const ticket = peso && clientes ? peso/clientes : 0

    setTotalClientes(clientes)
    setTotalPeso(Intl.NumberFormat('pt-BR', {style: 'decimal'}).format(peso))
    setTicketMedio(Intl.NumberFormat('pt-BR', {style: 'decimal'}).format(ticket))
  }, [deliveries])

  return (
  <Container>
 
    <div>
      <span>Total de Clientes: {totalClientes}</span>
      <span>Peso Total: {totalPeso}</span>
      <span>Ticket Médio*: {TicketMedio}</span>
    </div>
    <Table >
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Rua</th>
          <th>Cidade</th>
          <th>Pais</th>
          <th>Peso</th>
          <th>Lat</th>
          <th>Lon</th>
        </tr>
      </thead>
      <tbody>
        {deliveries.map(delivery=>(
          <tr key={delivery._id}>
            <td><FiTrash2 color="#F30000" onClick={()=>handleRemoveData(delivery._id)}/></td>
            <td>{delivery.clienteNome}</td>
            <td>{delivery.endereco.logradouro}</td>
            <td>{delivery.endereco.cidade}</td>
            <td>{delivery.endereco.pais}</td>
            <td>{delivery.peso}</td>
            <td>{delivery.endereco.geolocalizacao.latitude}</td>
            <td>{delivery.endereco.geolocalizacao.longitude}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <small>*Peso Total / Total de Clientes</small>
    </Container>
  )
}

export default Listagem