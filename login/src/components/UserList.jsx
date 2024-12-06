import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token de localStorage
        window.location.reload(); // Recarga la página
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios
                .get('http://localhost:3001/usuarios', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    setUsers(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError('Error al obtener los usuarios');
                    setLoading(false);
                });
        } else {
            setError('No estás autenticado');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg text-gray-600">Cargando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div
                className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://i.pinimg.com/736x/c5/f5/5b/c5f55bde0681bce37b384a94498df9ce.jpg')",
                }}
            >
                <p className="text-lg text-red-500 bg-white bg-opacity-80 px-4 py-2 rounded-lg">
                    {error}
                </p>
                <button
                    className="mt-4 px-3 py-1 bg-yellow-500 text-white text-sm rounded-md shadow hover:bg-yellow-600"
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: "url('https://i.pinimg.com/736x/c5/f5/5b/c5f55bde0681bce37b384a94498df9ce.jpg')",
            }}
        >
            <div className="flex items-center justify-between bg-black px-6 py-4 shadow-md bg-opacity-90">
                <h2 className="text-2xl font-semibold text-white">Lista de Usuarios</h2>
                <button
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-md shadow hover:bg-red-600"
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                </button>
            </div>

            <div className="max-w-4xl mx-auto mt-8 bg-white bg-opacity-90 shadow-lg rounded-lg p-6">
                <ul className="divide-y divide-gray-200">
                    {users.length === 0 ? (
                        <li className="text-gray-500 text-center py-4">No hay usuarios disponibles</li>
                    ) : (
                        users.map((user) => (
                            <li key={user.id} className="py-4 flex justify-between items-center">
                                <div>
                                    <p className="text-lg font-medium text-gray-800">{user.nombre}</p>
                                    <p className="text-sm text-gray-500">{user.correo}</p>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default UserList;
