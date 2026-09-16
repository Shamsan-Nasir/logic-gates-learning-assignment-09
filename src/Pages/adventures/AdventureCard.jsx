import React from 'react'



export const AdventureCard = ({adventureData}) => {
    return (
        <div className="flex flex-col bg-compass-sand rounded-xl h-full border-2 border-compass-mist shadow hover:shadow-lg transition duration-300">
                <img
                    src={adventureData.image}
                    alt="adventure Image"
                    className='max-h-45 object-cover rounded-t-xl' />
            <div className="card-body   flex-1">
                <h2 className="card-title">
                    {adventureData.adventureTitle}
 
                </h2>
                <p className='flex-1'>{adventureData.shortDescription}</p>
                <div className="card-actions justify-start">
                    {
                        adventureData.ecoFriendlyFeatures.slice(0,2).map(element => <div className='bg-green-200 p-2 text-center rounded-full border text-xs'>{element}</div> )
                    }
                </div>
                <div>
                    <button className='btn w-full text-white bg-compass-forest rounded-xl'>
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    )
}
