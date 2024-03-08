import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Navbar from '../Pages/Navbar'

function Layout() {
  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
    </div>

  )

}

export default Layout