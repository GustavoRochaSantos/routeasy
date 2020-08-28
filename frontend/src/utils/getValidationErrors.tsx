import { ValidationError } from 'yup'

interface ErrorsReturn {
  [key: string]: string
}

export default function getValidationError(error: ValidationError):ErrorsReturn{
  const errors:ErrorsReturn = {}
  error.inner.forEach(error => {
    errors[error.path] = error.message
  })
  
  return errors
}