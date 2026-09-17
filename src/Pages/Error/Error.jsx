import React from 'react'
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { useNavigate } from 'react-router';

export const Error = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-compass-sand w-full h-screen  gap-4 flex flex-col justify-center items-center '>
        <div className='text-center text-9xl text-compass-forest m-2'><MdOutlineReportGmailerrorred></MdOutlineReportGmailerrorred></div>
        <div className='text-center text-5xl text-compass-forest font-extrabold'>Error: 404</div>
        <div className='text-center text-2xl text-compass-forest font-medium'>Page Not found</div>
        <div className='w-1/4   '>
        <button onClick={() => navigate('/')} className='btn bg-compass-forest text-white text-center mt-4 w-full rounded-xl'> Return To Home</button>
        </div>
         </div>
  )
}
