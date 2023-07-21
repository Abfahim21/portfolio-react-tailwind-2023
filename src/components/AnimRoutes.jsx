import React from 'react'
import Home from '../pages/Home.jsx'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfoilio'
import { Routes, Route, useLocation } from 'react-router-dom'

export default function AnimRoutes() {
  return (

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
    </Routes>

  )
}
