import styled from 'styled-components';

export const Header = styled.header`
  grid-area: cabecalhoContainer;

  padding: 10px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  box-shadow: 1px 1px 5px rgba(100, 100, 100, 0.3);
  z-index: 2;

  img {
    height: 20px;
  }

  ul {
    list-style-type: none;
  }

  ul:first-child {
    display: flex;

    li {
      margin-left: 40px;
      color: #777;
      opacity: 0.4;

      &:hover {
        color: #444b55;
      }
    }

    li:first-child {
      font-weight: 600;
      opacity: 1;
    }
  }
`;
