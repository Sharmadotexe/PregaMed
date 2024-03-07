import React from 'react'
import Nutrition from './components/Nutrition'
import Exercise from './components/Exercise'
import Community from './components/Community'
import Appointment from './components/Appointment'
import Baby from './components/Baby'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/community" element={<Community />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/baby" element={<Baby />} />
        
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
