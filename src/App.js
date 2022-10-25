import Signup from './components/Signup';
import './index.css';
import './dark-light.css';
import {  Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Login from './components/Login';
import React from 'react';

function App() {
  return (
    <div className="App">

      <Routes>  
          <Route path='/' element={<Layout />} />
          <Route path='/login' element={<Login />} />
          <Route path="/signup" element={<Signup />} />  
      </Routes>
    </div>
  );
}

export default App;
