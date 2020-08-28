import styled, {css} from 'styled-components'
import { shade } from 'polished'
interface Props {
  secondary?:boolean
}


export const Container = styled.button<Props>`
  border:0px;
  border-radius: 20px;
  width:100%;
  height: 40px;
  background: #3CBC8D;
  margin-top: 10px;
  color: #fff;
  font-weight: 600;
  text-align: center;

  transition: background-color 0.2s;

  &+button{ 
    margin-left:10px;
  }
  
  ${props=>props.secondary && css `
    background: #EF4923;
    color: #FFF;
  `
  }

  &:hover{ 
    background-color: ${shade(0.2, '#3CBC8D')};

    ${props=>props.secondary && css `
      background-color: ${shade(0.2, '#EF4923')};
    `
    }
  }
`