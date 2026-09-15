import React from 'react'
import { AdventureCard } from './AdventureCard'

export const AdventureContainer = () => {
    return (
        <div className='bg-compass-sand px-12 py-8 space-y-5'>

            <div>
                <h1 className='font-bold text-compass-forest text-2xl'>Explore Popular Eco-Adventures</h1>
                <p className='text-compass-forest'>Discover handpicked eco-friendly adventures around the world  </p>
            </div>
            <div className='flex gap-2.5'>
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>
                <AdventureCard></AdventureCard>
            </div>

        </div>
    )
}
