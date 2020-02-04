/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicio Sesión</h2>
      <form className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' autoComplete='username' />
        <input className='input' type='password' placeholder='Contraseña' autoComplete='current-password' />
        <Link to='/login'>
          <button className='button' type='submit'>
            <p>Iniciar Sesion</p>
          </button>
        </Link>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='checkbox' />
            <p>Recuérdame</p>
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--socialmedia'>
        <div>
          <img src={googleIcon} alt='Logo Google' />
          <p>Inicia Sesion con Google</p>
        </div>
        <div>
          <img src={twitterIcon} alt='Logo twitter' />
          <p>Inicia Sesion con Twitter</p>
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/register'>
        Regístrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;
