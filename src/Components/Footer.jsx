import React from 'react'
import footerLogo from '../assets/logoFooter.png'

export const Footer = () => {
    return (
        <footer className="grid sm:grid-cols-3 grid-cols-1 gap-5 sm:gap-0 bg-compass-forest text-white py-5 px-2 sm:p-10 items-center ">
            <aside className=' mx-auto sm:mx-0 flex flex-col items-center sm:items-start'>
                <img src={footerLogo} alt="" />
                <div className='text-center sm:text-start'>
                    <div className='text-2xl  font-bold'>Eco-Compass</div>
                    <ul className='flex gap-2.5'>
                        <li >Explore</li>
                        <li >Preserve</li>
                        <li >Belong</li>

                    </ul>
                </div>
            </aside>
            <div className='flex  justify-around col-span-1 sm:col-span-2'>

                <nav className='flex flex-col'>
                    <h6 className="footer-title"  >Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>

                <nav className='flex flex-col'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    )
}
