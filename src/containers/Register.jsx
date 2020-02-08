import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <section className='register__container--datos'>
          <h2>Registro de Usuario</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input
              name='name'
              className='input'
              type='text'
              placeholder='Nombre'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <input
              name='email'
              className='input'
              type='email'
              placeholder='Dirección de correo'
              onChange={handleInput}
            />
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
};

const mapDispatchToProps = {
  registerRequest,
};
export default connect(null, mapDispatchToProps)(Register);

