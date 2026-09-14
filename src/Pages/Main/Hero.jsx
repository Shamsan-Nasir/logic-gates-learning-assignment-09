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
             
            <div className=" scrollbar-none overflow-hidden relative w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[450px]">
                <div key={`current-${carouselIdx}`} className={`w-full bg-compass-sand absolute inset-0 animate__animated animate__fadeOutLeft`} >
                    <img src={images[carouselIdx]} alt="" className='w-full h-full object-cover    ' />
                </div>
                <div key={`next-${carouselIdx}`} className={`w-full bg-compass-sand absolute inset-0  animate__animated animate__fadeInRight`} >
                    <img src={images[(carouselIdx+1)%images.length]} alt="" className=' w-full h-full object-cover' />
                </div>


            </div>
  
        </div>

    )
}
