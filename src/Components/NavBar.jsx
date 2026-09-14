import React from 'react'
import logoMain from '../assets/icons8-compass-50 (1).png'

export const NavBar = () => {
    return (
        <div className="navbar bg-compass-sand shadow-sm p-2.5  pr-5 ">

            <div className="flex-1 flex justify-start items-center  ">
                <a className="btn btn-ghost text-compass-forest">
                    <img src={logoMain} alt="" className='max-w-11' />
                </a>
                <div className='block '>
                    <div className='text-2xl text-compass-forest font-bold'>Eco-Compass</div>
                    <ul className='flex gap-1.5 text-xs'>
                        <li className='hover:bg-compass-forest hover:text-white '>Explore</li>
                        <li className='hover:bg-compass-forest hover:text-white'>Connect</li>
                        <li className='hover:bg-compass-forest hover:text-white'>Preserve</li>

                    </ul>
                </div>
            </div>
            <div className="flex gap-7">

                <div className='flex gap-3.5 items-center'>
                    <div className='text-lg text-compass-forest'>Home</div>
                    <div className='text-lg text-compass-forest'>Profile</div>
                    <div className='text-lg text-compass-forest'>Explore</div>
                </div>

                <div className="dropdown dropdown-end md:block">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
