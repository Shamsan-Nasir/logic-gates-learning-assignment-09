import React from 'react'
import AdventureSummary from './AdventureSummary.jsx'

export const ExploreContainer = ({ allData }) => {
    let exploreData = allData
    return (
        <div className=' bg-compass-sand py-6 px-5 md:px-8 lg:px-12 space-y-2.5'>
            <h1 className='font-extrabold text-4xl w-full text-compass-forest text-center md:text-start '>Explore our Eco-Adventure Offerings</h1>
            <p className='font-medium text=lg text-compass-forest text-center md:text-start'>Click on the cards to View Details about the Adventures</p>
            <br />
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 bg-compass-sand'>
                {
                    exploreData.map(element => <AdventureSummary adventure={element}></AdventureSummary>)
                }


            </div>
        </div>
    )
}
