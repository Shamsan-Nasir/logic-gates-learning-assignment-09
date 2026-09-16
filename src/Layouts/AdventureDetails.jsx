import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Outlet } from 'react-router'

export const AdventureDetails = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}
