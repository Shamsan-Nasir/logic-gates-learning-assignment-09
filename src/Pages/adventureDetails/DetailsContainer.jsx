import React from 'react'

export const DetailsContainer = () => {
  return (
    <div>
         <div className=" scrollbar-none overflow-hidden relative w-full h-[350px]  lg:h-[450px]">
                <div key={`current`} className={`w-full bg-compass-sand absolute inset-0`} >
                    <img src={`https://images.unsplash.com/photo-1544551763-46a013bb70d5`} alt="" className='w-full h-full object-cover    ' />
                </div>
 
                <div className='absolute  bottom-0 z-20 pb-4 pt-15 px-12 w-full  flex flex-col justify-end gap-1 items-start bg-linear-to-t from-black/95 to-transparent'>
                    <h1 className='font-bold text-white text-3xl md:text-4xl lg:text-5xl text-start '>Wildlife Safari</h1>
                    <p className='text-sm md:text-base lg:text-lg text-white text-start'>Discover native wildlife in their natural habitat while learning about conservation and biodiversity.</p>
                </div>


            </div>
    </div>
  )
}
