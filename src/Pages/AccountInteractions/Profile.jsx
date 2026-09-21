import React, { useContext } from 'react'
import { NavBar } from '../../Components/NavBar'
import { Footer } from '../../Components/Footer'
import { useLoaderData, useNavigate } from 'react-router'
import { AuthContext } from '../../Authentication/AuthProvider'
import { MdAccountCircle } from 'react-icons/md'

export const Profile = () => {

    let { user } = useContext(AuthContext)
    let navigate = useNavigate()
    console.log(user.photoURL)
    return (
        <div className=' max-w-360 mx-auto bg-compass-sand'>
            <NavBar></NavBar>
            <div className='p-4 '>
                <div className=' p-2   py-12 flex flex-col items-center gap-4'>
                    <div className='text-3xl font-bold w-full text-center'>Welcome {user?.displayName ? user.displayName : 'User'}</div>
                    <div className='flex gap-2 flex-1 w-full '>
                        {
                            user.photoURL ?
                                <div className='px-10 pb-10 pt-10 border rounded-2xl '><img src={user.photoURL} alt="" className='rounded-full border border-compass-stone object-cover' />   </div>

                                : <div className=' px-10 pb-10 pt-10 border rounded-2xl'> <div className=' rounded-full text-5xl '><MdAccountCircle></MdAccountCircle> </div></div>

                        }
                        <div className='border p-4 flex-1 rounded-2xl flex flex-col gap-4 justify-center'>
                            <div className='text-3xl font-bold text-compass-forest'>Name: {user.displayName? <span className=' font-medium'>{user.displayName}</span> : <span className='font-light text-gray-600'>Unknown </span>}</div>
                            <div className=' text-xl font-medium text-compass-forest'>Email: {user.email ? <span className=' font-light'>{user.email}</span> : <span className='font-light text-gray-600'>Unknown </span>}</div>
                            <div className=' text-xl font-medium text-compass-forest'>Phone No: {user.phoneNumber ?<span className=' font-light'>{user.phoneNumber}</span> : <span className='font-light text-gray-600'>Unknown </span>}</div>
                            <button onClick={() => navigate('/UpdateProfile')} className='btn bg-compass-forest text-white rounded ' > Update Profile Information</button>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>


        </div>
    )
}
