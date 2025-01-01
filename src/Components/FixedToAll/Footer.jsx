import React from 'react';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <footer className="grid grid-cols-1 md:grid-cols-2 bg-neutral text-neutral-content">

                {/* -----------First part---------- */}
                <aside className='bg-natural flex items-center justify-evenly gap-5 p-10 text-center'>

                    <div>
                             <img src={Logo} alt="🍟" className='w-20' />
                             <h1 className='text-xl text-orange-500 font-semibold'>Bistro Boss</h1>               
                    </div>

                    <div>
                        <p className='font-bold py-2'>CONTACT US</p>
                        <p className='text-sm'>
                            123 ABS Street, Uni 21, Bangladesh <br />
                            +88 123456789 <br />
                            Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00 <br />
                        </p>
                    </div>
                </aside>

                {/* -------------second part----------- */}
                <nav className='bg-gray-500 px-10 py-20 text-center'>
                    <h6 className="footer-title">Follow US</h6>
                    <h6 className="mb-4">Join Us on Social Media</h6>
                    <div className="flex gap-4 items-center justify-center text-3xl">
                        <a className='hover:text-warning' href="https://www.facebook.com"><FaFacebook /> </a>
                        <a className='hover:text-warning' href="https://www.instagram.com"><BsInstagram /> </a>
                        <a className='hover:text-warning' href="https://www.youtube.com"><BsYoutube /></a>
                    </div>
                </nav>
            </footer>

            {/* -----copy right part------ */}
            <footer className="footer footer-center bg-black text-white p-2">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Bistro Boss Restaurant Ltd</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;