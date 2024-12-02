import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const { data } = await axios.get('localhost:27017/Registros/usuarios', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Usuarios Registrados</h1>
      {users.map((user) => (
        <div key={user._id} className="bg-white p-4 rounded shadow mb-4">
          <p><strong>Nombre:</strong> {user.nombre}</p>
          <p><strong>Correo:</strong> {user.correo}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
