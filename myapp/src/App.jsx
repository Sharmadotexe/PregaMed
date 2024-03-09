import React from 'react'
import Nutrition from './Pages/Nutrition'
import Exercise from './Pages/Exercise'
import Community from './Pages/Community'
import Appointment from './Pages/Appointment'
import Navbar from './Pages/Navbar'
import Baby from './Pages/Baby'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import "./index.css"
import Register from './Component/Register'
import Sign from './Component/Sign'


function App() {
 

  return (
<div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
    <BrowserRouter>
    <Routes>
      <Route element= {<Navbar />}>
        <Route path='/' element= {<Layout/>}></Route>
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/community" element={<Community />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/login" element={<Register />} />
        <Route path="/register" element={<Sign />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App
