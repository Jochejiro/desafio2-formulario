import React from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';

export default function Registro() {
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton button={'fa-facebook'} />
      <SocialButton button={'fa-github'} />
      <SocialButton button={'fa-linkedin'} />
      <p>O usa tu email para registrarte.</p>
      <Formulario />
      <Alert />
    </>
  );
}
