/**
 * Acumula todos os erros do Yup e converte para o formato do Unform.
 */

import { ValidationError } from 'yup';

interface ErrorsReturn {
  [key: string]: string;
}

export default function getValidationError(
  error: ValidationError,
): ErrorsReturn {
  const errors: ErrorsReturn = {};
  error.inner.forEach(item => {
    errors[item.path] = item.message;
  });

  return errors;
}
