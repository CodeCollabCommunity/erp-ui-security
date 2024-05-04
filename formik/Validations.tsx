import { LoginValues } from '@/formik/InitialValues'; // Asegúrate de actualizar esta ruta

export function validateLogin(values: LoginValues) {
  const errors: LoginValues = { email: '', password: '' };
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email';
  }
  // Agrega aquí más validaciones si es necesario
  return errors;
}