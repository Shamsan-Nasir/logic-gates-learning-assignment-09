import React, { useEffect, useState } from 'react'
import 'animate.css';
import mountain from '../../assets/mountainTrek.jpg'
import ocean from '../../assets/oceanDive.jpg'
import safari from '../../assets/WildlifeSafari.jpg'
import camping from '../../assets/CampingRepeat.jpg'
import desert from '../../assets/desertTravel.jpg'



let images = [mountain,ocean,safari,camping,desert]
export const Hero = () => {
 

    let [carouselIdx,setCarouselIdx] = useState(0)

    useEffect(() => {const interval = setInterval(() => {
         setCarouselIdx((carouselIdx+1)%images.length)
    },5000);
      
    return () => clearInterval(interval)

    },[carouselIdx])
    return (
        <div>
             
            <div className=" scrollbar-none overflow-hidden relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px]">
                <div key={`current-${carouselIdx}`} className={`w-full bg-compass-sand absolute inset-0 animate__animated animate__fadeOutLeft`} >
                    <img src={images[carouselIdx]} alt="" className='w-full h-full object-cover    ' />
                </div>
                <div key={`next-${carouselIdx}`} className={`w-full bg-compass-sand absolute inset-0  animate__animated animate__fadeInRight`} >
                    <img src={images[(carouselIdx+1)%images.length]} alt="" className=' w-full h-full object-cover' />
                </div>
                <div className='absolute z-20 p-12  w-full md:w-3/4 lg:w-1/2 h-full flex flex-col justify-center gap-3 items-center bg-black/50 md:bg-transparent '>
                    <h1 className='font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:text-start '>Your Guide to the Planet's Sacred Spaces</h1>
                    <p className='text-xs sm:text-sm md:text-base lg:text-lg text-white text-center md:text-start'>From high mountain treks to deep ocean dives, navigate the world's most pristine ecosystems with zero-impact, expert-led expeditions.</p>
                </div>


            </div>
  
        </div>

    )
}
