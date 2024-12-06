import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './components/UserList';
import Recuperar from './pages/Recuperar';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<UserList />} />
        <Route path='/passaword' element={<Recuperar/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;
