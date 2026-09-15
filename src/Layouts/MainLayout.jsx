import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import { Hero } from '../Pages/Main/Hero'
import { AdventureContainer } from '../Pages/adventures/AdventureContainer'

export const MainLayout = () => {
    return (


        <div className='max-w-360 mx-auto'>
            <NavBar></NavBar>
            <Hero></Hero>
            <AdventureContainer></AdventureContainer>
            <Footer></Footer>
        </div>

    )
}
