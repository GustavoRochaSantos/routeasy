import styled from 'styled-components'

export const Container = styled.div`
  grid-area: listagemContainer;

  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10px;
  background: #fff;
  min-height: 100px;

  div{
    width: 80%;
    margin-bottom: 10px;
    display:flex;
    justify-content: space-between;

    span{ 
      font-weight:bold;
    }
  }
  
 
`
export const Table = styled.table` 
  width: 80%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 1px;
  border-color: #d9d9d9;
  border-style: solid;
  color: #000000;

  td,
  th {
    text-align:left;
    border-width: 1px;
    border-color: #d9d9d9;
    border-style: solid;
    padding: 5px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
  thead,tfoot {
    background-color: #f7f7f7;
  }
`