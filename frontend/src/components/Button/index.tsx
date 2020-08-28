import React, { ButtonHTMLAttributes } from 'react'
import { Container } from '../Button/style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  secondary?: boolean;
  handleIconClick?():void
}


const Button: React.FC<ButtonProps> = ({ children, ...rest}) => (
  <Container type="button" {...rest}>
    { children } 
  </Container>
)

export default Button