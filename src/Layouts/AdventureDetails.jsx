import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Outlet } from 'react-router'
import { Footer } from '../Components/Footer'

export const AdventureDetails = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
