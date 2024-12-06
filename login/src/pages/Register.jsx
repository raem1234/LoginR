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
      await axios.post('http://localhost:3001/registro', { nombre, correo, contraseña });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/');  // Redirige al login después de un registro exitoso
    } catch (error) {
      alert('Error al registrar usuario.');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://i.pinimg.com/736x/c5/f5/5b/c5f55bde0681bce37b384a94498df9ce.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
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
    </div>
  );
};

export default Register;
