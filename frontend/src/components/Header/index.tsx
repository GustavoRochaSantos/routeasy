import React from 'react'
import RoutEasy from '../../assets/routeasy-complex.png'
import { Header } from './style'

const HeaderMenu:React.FC = () => {

  return (
    <Header>
      <img src={RoutEasy} alt="RoutEasy"/>
      <div id="menu">
        <ul>
          <li>Gerar Entrega</li>
          <li>|</li>
          <li>Gustavo Rocha
            {/* <ul>
            <li>Meu perfil</li>
            <li>Alterar senha</li>
            <hr></hr>
            <li>Sair</li>
            </ul> */}
          </li>
        </ul>
      </div>
    </Header>
  )
}

export default HeaderMenu