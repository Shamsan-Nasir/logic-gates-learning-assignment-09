import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router';
export const DetailsImage = ( {pageData}) => {
    console.log(pageData)
    const navigate = useNavigate()
    return (
        <div>
            <div className=" scrollbar-none overflow-hidden relative w-full h-[350px]  lg:h-[450px]">
                <div key={`current`} className={`w-full bg-compass-sand absolute inset-0`} >
                    <img src={pageData.image} alt="" className='w-full h-full object-cover    ' />
                </div>

                <div className='absolute top-0 z-20 p-4 px-12 w-full bg-linear-to-b from-black/85 hover:via-black/65 to-transparent transition duration-400'>
                    <span onClick={() => navigate(-1)} className='cursor-pointer w-25 bg-white   text-white text-4xl z-30'> 
                        <BiArrowBack></BiArrowBack>
                    </span>
                </div>
                <div className='absolute  bottom-0 z-20 pb-4 pt-15 px-12 w-full  flex flex-col justify-end gap-2 items-start bg-linear-to-t from-black/95 to-transparent'>
                    <h1 className='font-bold text-white text-3xl md:text-4xl lg:text-5xl text-start '>{pageData.adventureTitle}</h1>
                    <div className='rounded-full px-3 py-1 border border-compass-sand bg-compass-sage/60 text-compass-sand'>{pageData.categoryName}</div>
                </div>


            </div>
        </div>
    )
}
