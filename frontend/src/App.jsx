import './App.css'

import { Navigate, Route, Router, Routes } from 'react-router-dom'
import Register from './components/register'
import Login from './components/login'
import Home from './components/home'
import { useEffect } from 'react'
import Products from './pages/product-display'


function App() {
  
  useEffect(() => {
    const isIntialized = localStorage.getItem('isIntialized');

    if(!isIntialized){
      localStorage.clear();
      localStorage.setItem('isIntialized' , 'true')
    }

  })

  const isAuthenticated = () => localStorage.getItem('token');

  return (  
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/home' element = {isAuthenticated() ? <Home></Home> : <Navigate to='/login' />} />
        <Route path='/products' element={<Products />} />
      </Routes>

  ); 
}; 

export default App
