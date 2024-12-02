import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('localhost:27017/Registros/usuarios', { correo, contraseña });
      localStorage.setItem('token', data.token);
      navigate('/home', { state: { nombre: data.nombre } });
    } catch (error) {
      alert('Correo o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
      <input 
        type="email" 
        placeholder="Correo" 
        value={correo} 
        onChange={(e) => setCorreo(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={contraseña} 
        onChange={(e) => setContraseña(e.target.value)} 
        required 
      />
      <button type="submit">Entrar</button>
      <p className="mt-4 text-sm">
        ¿No tienes cuenta? <a href="/register" className="text-blue-500">Regístrate</a>
      </p>
    </form>
  );
};

export default Login;
