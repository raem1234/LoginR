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
      const { data } = await axios.post('http://localhost:3001/login', { correo, contraseña });
      localStorage.setItem('token', data.token);  // Guardamos el token
      navigate('/home');  // Redirige a la página principal (puedes cambiar la ruta)
    } catch (error) {
      alert('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/c5/f5/5b/c5f55bde0681bce37b384a94498df9ce.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h1>
        <input 
          type="email" 
          placeholder="Correo" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
          required 
          className="w-full p-2 mb-4 border rounded"
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={contraseña} 
          onChange={(e) => setContraseña(e.target.value)} 
          required 
          className="w-full p-2 mb-4 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Entrar</button>
        <p className="mt-4 text-sm text-center">
          ¿No tienes cuenta? <a href="/register" className="text-blue-500">Regístrate</a>
        </p>
        <p className="mt-4 text-sm text-center">
          ¿Olvidaste tu contraseña? <a href="/passaword" className="text-blue-500">Recuperar</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
