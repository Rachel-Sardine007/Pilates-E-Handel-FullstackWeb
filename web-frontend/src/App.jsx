import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';


function App() {
  
  return (
    <Router>
      {/* navbar */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>

      <Footer />
    </Router>
      
  );
}

export default App
