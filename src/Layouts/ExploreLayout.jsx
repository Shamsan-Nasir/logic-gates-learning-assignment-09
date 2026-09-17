import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Outlet, useLoaderData } from 'react-router'
import { Footer } from '../Components/Footer'
import { ExploreContainer } from '../Pages/Explore Adventures/ExploreContainer'

export const ExploreLayout = () => {
    let allData = useLoaderData()
    window.scrollTo(0,0)
    return (
        <div className='max-w-360 mx-auto'>
            <NavBar></NavBar>
            <ExploreContainer allData={allData}></ExploreContainer>
            <Footer></Footer>
        </div>
    )
}
