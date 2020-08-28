import styled, {css} from 'styled-components'

interface Params{
  disabled?: boolean
}
export const Container = styled.div<Params>`
  display:flex;
  align-items: center;
  height: 30px;
  padding: 5px;
  margin-bottom: 5px;

  border-radius: 5px;
  background-color: #F0F0F5;



  input {
    flex:1;
    background: transparent;
    border:0px;
    height: 30px;
    font-size: 1em;
  }

  ${props => props.disabled && css`
      background-color: #c5c5c5;
  `
  }
  svg {
    margin-left: 16px;
  }


`

export const Error = styled.div``