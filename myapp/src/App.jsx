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


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route element= {<Navbar />}>
        <Route path='/' element= {<Layout/>}></Route>
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/community" element={<Community />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/baby" element={<Baby />} />
      </Route>
        
        
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
