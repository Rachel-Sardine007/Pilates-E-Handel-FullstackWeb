import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  
  return (
    <Router>
      {/* navbar */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} /> */}
      </Routes>

      <Footer />
    </Router>
      
  );
}

export default App
