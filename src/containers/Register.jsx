import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <section className='register__container--datos'>
        <h2>Registro de Usuario</h2>
        <form className='register__container--form'>
          <input className='input' type='text' placeholder='Nombre' />
          <input className='input' type='password' placeholder='Contraseña' />
          <input className='input' type='email' placeholder='Dirección de correo' />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <div>
          <Link to='/login'>
            <p className='register__container--login'>Iniciar Sesión</p>
          </Link>
        </div>
      </section>
    </section>
  </section>
);

export default Register;
