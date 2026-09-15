import React from 'react'
import { AdventureCard } from './AdventureCard'
import MySwiper from '../../Components/Swiper'

export const AdventureContainer = ({data}) => {
    return (
        <div className='bg-compass-sand px-12 py-8 space-y-5'>

            <div>
                <h1 className='font-bold text-compass-forest text-2xl'>Explore Popular Eco-Adventures</h1>
                <p className='text-compass-forest'>Discover handpicked eco-friendly adventures around the world  </p>
            </div>
            <div>
            <MySwiper data={data}></MySwiper>
            </div>

        </div>
    )
}
