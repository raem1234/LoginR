import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Recuperar = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            // Actualizar el método a PUT y asegurarse de que el campo coincida con el backend
            const response = await axios.put('http://localhost:3001/recuperar', { correo: email });

            if (response.status === 200) {
                setMessage('Correo enviado con éxito. Revisa tu bandeja de entrada.');
                setTimeout(() => {
                    navigate('/');  // Redirige al login después de 3 segundos
                }, 3000);
            }
        } catch (err) {
            // Mejorar el manejo de errores
            setError(err.response?.data?.error || 'Error al enviar el correo.');
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
            <div className="flex items-center justify-center bg-gray-50">
                <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-4">Recuperar Contraseña</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Ingresa tu correo"
                                required
                            />
                        </div>
                        {message && <p className="text-green-500 text-sm">{message}</p>}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Enviar Correo
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Recuperar;
