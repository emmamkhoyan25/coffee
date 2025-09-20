import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { CartProvider } from './context/CartContext' // Import the provider

import Welcome from './pages/Welcome/Welcome'
import Order from './pages/Order/Order'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'

const App = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />  
          <Route path='/' element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/detail/:i' element={<Detail isLoggedIn={isLoggedIn} />} />
          <Route path='/order' element={<Order setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
};
export default App
