import React from 'react'
import { useNavigate } from 'react-router'



export const AdventureCard = ({ adventureData }) => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-compass-sand rounded-xl h-full border-2 border-compass-mist shadow hover:shadow-lg transition duration-300">
            <img
                src={adventureData.image}
                alt="adventure Image"
                className='max-h-45 object-cover rounded-t-xl' />
            <div className="card-body flex-1 gap-4 p-5">
                <h2 className="card-title items-start">
                    {adventureData.adventureTitle}

                </h2>
                <p className='flex-1'>{adventureData.shortDescription}</p>
                <div className="card-actions justify-start">
                    <div className='bg-green-200 p-2 text-center rounded-full w-full  border border-compass-forest text-xs'>{adventureData.categoryName}</div> 

                </div>
                {/* ) */}
                <div> 
                    <button onClick={() => {
                        console.log('navigating')
                        navigate(`/adventureDetails/${adventureData.id}`) }} className='btn w-full text-white bg-compass-forest rounded-xl'>
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    )
}
