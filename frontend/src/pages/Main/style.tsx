import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'cabecalhoContainer cabecalhoContainer'
    'formularioContainer mapaContainer'
    'formularioContainer listagemContainer';
  grid-template-columns: 340px 1fr;
  grid-template-rows: 70px 2fr 1fr;

  height: 100%;
  color: #444b55;
`;
