import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const nombre = location.state?.nombre;

  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-xl">Bienvenido, {nombre || 'Usuario'}</h1>
    </div>
  );
};

export default Header;
