/**
 * Componente do botão
 */

import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './style';

// -- Adiciona alguns parametros no elemento
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  handleIconClick?(): void;
}

// -- Cria o componente
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
