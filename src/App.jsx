import React, { useState } from 'react'
import "./App.scss"
import { BrowserRouter, Route, Routes } from 'react-router'
import Welcome from './pages/Welcome/Welcome'
import Order from './pages/Order/Order'
import Home from './pages/home/Home'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'




const App = () => {
  const [name, setName] = useState("");
  const [password, setpassword] = useState("");
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:i' element={<Detail/>} />
        <Route path='/order' element={<Order />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </BrowserRouter>
   
   
  )
}

export default App