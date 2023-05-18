import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Layout = () => {
  return (
    <>
        <NavBar/>
        <Outlet></Outlet>
    </>
  )
}

export default Layout