import React from 'react'
import footerLogo from '../assets/logoFooter.png'
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="grid sm:grid-cols-3 grid-cols-1 gap-5 sm:gap-0 bg-compass-forest text-white py-5 px-1 sm:p-10 items-center ">
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



                <nav className='flex flex-col space-y-1'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover text-sm sm:text-base">About us</a>
                    <a className="link link-hover text-sm sm:text-base">Contact</a>
                    <a className="link link-hover text-sm sm:text-base">Jobs</a>
                    <a className="link link-hover text-sm sm:text-base">Press kit</a>
                </nav>
                <nav className='flex flex-col space-y-1'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover text-sm sm:text-base">Terms of use</a>
                    <a className="link link-hover text-sm sm:text-base">Privacy policy</a>
                    <a className="link link-hover text-sm sm:text-base">Cookie policy</a>
                </nav>
                <nav className='flex flex-col space-y-1'>
                    <h6 className="footer-title mb-2"  >Our Socials</h6>
                    <div className='flex gap-3'>
                        <FaFacebook></FaFacebook>
                        <RiInstagramFill></RiInstagramFill>
                        <FaXTwitter></FaXTwitter>
                    </div>

                </nav>
            </div>
        </footer>
    )
}
