import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Footer } from '../Components/Footer'
import { Hero } from '../Pages/Main/Hero'
import { AdventureContainer } from '../Pages/adventures/AdventureContainer'
import { useLoaderData } from 'react-router'
import { use } from 'react'

export const MainLayout = () => {

    let  data = useLoaderData()

    return (


        <div className='max-w-360 mx-auto'>
            <NavBar></NavBar>
            <Hero></Hero>
            <AdventureContainer data={data}></AdventureContainer>
            <Footer></Footer>
        </div>

    )
}
