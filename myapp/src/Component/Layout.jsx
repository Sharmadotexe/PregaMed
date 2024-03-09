import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Navbar from '../Pages/Navbar'
import Dropdown from './Dropdown'
import NavContainer from './NavContainer'

function Layout() {
  return (
    <div>
      <NavContainer/>
      <Dropdown/>
    </div>

  )

}

export default Layout