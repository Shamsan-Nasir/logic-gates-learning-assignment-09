import React, { useContext } from 'react'
import logoMain from '../assets/icons8-compass-50 (1).png'
import './Footer.css'
import { AuthContext } from '../Authentication/AuthProvider'
import { useLocation, useNavigate } from 'react-router'
import { MdAccountCircle } from "react-icons/md";

export const NavBar = () => {


    let location = useLocation()

    let { user, SignOut } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleProfileIcon() {
        if (user) {
            navigate('/',{state:'/'})
            SignOut()
           

        }
        else {
            navigate('/login')
        }
    }
    return (
        <div className="navbar bg-compass-sand shadow-sm p-2 sm:p-3 pr-3 sm:pr-5 ">

            <div onClick={() => navigate('/')} className="flex-1 flex justify-start items-center cursor-pointer  ">
                <a className="btn btn-ghost text-compass-forest">
                    <img src={logoMain} alt="" className='max-w-11' />
                </a>
                <div className='block '>
                    <div className='text-2xl text-compass-forest font-bold'>Eco-Compass</div>
                    <ul className='flex gap-1.5 text-xs'>
                        <li className='hover:bg-compass-forest hover:text-white '>Explore</li>
                        <li className='hover:bg-compass-forest hover:text-white'>Preserve</li>
                        <li className='hover:bg-compass-forest hover:text-white'>Belong</li>

                    </ul>
                </div>
            </div>
            <div className="flex gap-7">

                <div className='hidden sm:flex gap-3.5 items-center'>
                    <div onClick={() => navigate('/')} className={`text-lg text-compass-forest p-2 linkDecor   ${location.pathname === '/' && 'underline'}`}>Home</div>
                    <div onClick={() => navigate('/explore')} className={`text-lg text-compass-forest p-2 linkDecor  ${location.pathname === '/explore' && 'underline'}`}>Explore</div>

                    {
                        user && <div onClick={() => navigate('/profile')} className={`text-lg text-compass-forest p-2 linkDecor ${location.pathname === '/profile' && 'underline'}`}>Profile</div>
                    }

                </div>

                <div className="dropdown dropdown-end md:block">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar disabled">
                        <div className="w-10 rounded-full">
                            {
                                user?.photoURL ? <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user.photoURL} />
                                    : <div className='w-full rounded-full text-5xl flex justify-center items-center'><MdAccountCircle></MdAccountCircle> </div>
                            }

                        </div>
                    </div>
                    {
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 z-50 shadow">
                            {
                                user && <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                            }
                            <li onClick={handleProfileIcon}><a>{user ? 'Log Out' : 'SignIn'}</a></li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}
