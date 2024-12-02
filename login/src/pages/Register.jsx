import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('localhost:27017/Registros/usuarios', { nombre, correo, contraseña });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/');
    } catch (error) {
      alert('Error al registrar usuario.');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h1 className="text-2xl font-bold mb-4">Regístrate</h1>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        required 
      />
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
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Register;
