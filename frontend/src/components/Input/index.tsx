/**
 * Componente de Input vinculado ao Unform
 */

import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container, Error } from './style';

// -- Adiciona algumas propriedades no Input padrão
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  handleIconClick?(): void;
  hidden?: boolean;
}

// -- Cria o componente
const Input: React.FC<InputProps> = ({
  name,
  disabled,
  handleIconClick,
  icon: Icon,
  ...rest
}) => {
  // -- Cria as variáveis de controle
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  // -- Registra o input dentro do formulario
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  // -- retorna o componente com os parametros
  return (
    <Container disabled={disabled}>
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        disabled={disabled}
        {...rest}
      />
      {Icon && <Icon size={20} onClick={handleIconClick} />}
      {error && (
        <Error title={error}>
          <FiAlertCircle size={20} color="#F50000" />
        </Error>
      )}
    </Container>
  );
};

export default Input;
