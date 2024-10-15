import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
// outlet is used whenerve we use this the contents inside it change but the contents outside it doesnot change 
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>

    <Footer/>
    
    </>
  )
}

export default Layout