import React from 'react'
import { Link, Outlet } from "react-router-dom"
import NavContainer from './NavContainer'
import Footer  from './Footer'
import HorizontalScroll from './HorizontalScroll'
import Faq from './Faq'
import Homecomponent  from './Homecomponent'

function Layout() {
  return (
    <div>
      <NavContainer/>
      <HorizontalScroll></HorizontalScroll>
      <Homecomponent></Homecomponent>
      <Faq></Faq>
      <Footer></Footer>
    </div>

  )

}

export default Layout