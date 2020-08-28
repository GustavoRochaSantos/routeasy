import styled from 'styled-components'

export const Container = styled.div`
  grid-area: formularioContainer;

  width: 340px;
  height: calc(100%-150px);
  background: #fff;
  box-shadow: 1px 1px 5px rgba(100, 100, 100, 0.3);
  z-index:1;
  
  form{
    width: 300px;
    padding: 20px;

    h2{ 
      text-align: center;
      margin-bottom: 10px;
    }

    div{ 
      display: flex;
    }
  }

  svg {
    color: #444B55;
    transition: color 0.2s;

    &:hover {
      color:#309670;
      
    } 
  }
`