import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import { Hero } from '../Pages/Main/Hero'

export const MainLayout = () => {
    return (


        <div className='max-w-360 mx-auto'>
            <NavBar></NavBar>
            <Hero></Hero>
            <Footer></Footer>
        </div>

    )
}
