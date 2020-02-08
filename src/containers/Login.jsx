/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    //password: '',
  });
  const handleInput = () => {
    setValues({
      ...form,
      // eslint-disable-next-line no-restricted-globals
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    //event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicio Sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            autoComplete='username'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            autoComplete='current-password'
            onChange={handleInput}
          />
          <button className='button' type='submit'>
            <p>Iniciar Sesion</p>
          </button>
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
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
