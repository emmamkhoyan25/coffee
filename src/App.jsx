import React, { useState } from 'react'
import "./App.scss"
import { BrowserRouter, Route, Routes } from 'react-router'
import Welcome from './pages/Welcome/Welcome'
import Order from './pages/Order/Order'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
const App = () => {
  const [name,setName]=useState("");
  const [password,setpassword]=useState("");
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:i' element={<Detail />} />
        <Route path='/order' element={<Order />} />
       < Route path='/login' element={<Login/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App