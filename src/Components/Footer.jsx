import React from 'react'
import footerLogo from '../assets/logoFooter.png'
export const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-compass-forest text-white p-10">
            <aside>
                <img src={footerLogo} alt="" />
                <p>
                    <div className='text-2xl  font-bold'>Eco-Compass</div>
                    <ul className='flex gap-1.5 text-xs'>
                        <li className='hover:bg-compass-forest hover:text-white'>Explore</li>
                        <li className='hover:bg-compass-forest hover:text-white'>Connect</li>
                        <li className='hover:bg-compass-forest hover:text-white'>Preserve</li>

                    </ul>
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}
