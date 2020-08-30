import styled from 'styled-components';

export const Container = styled.div`
  grid-area: mapaContainer;
  width: 100%;
  height: 100%;

  .leaflet-container {
    height: 100%;
  }

  .leaflet-div-icon {
    background: transparent;
    border: none;
    height: 40px;
    width: 40px;
    text-align: center;
  }

  .leaflet-div-iconFlex {
    width: 40px;
  }

  .leaflet-marker-icon .number {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
    z-index: 2;
    top: -42px;
    position: relative;
  }
`;
