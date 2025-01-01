import React from 'react';
import "./Active.css"
import { Link, NavLink } from 'react-router-dom';
import cart from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import pp from "../../assets/others/profile.png"

const NavBar = () => {
    return (
        <div className='bg-black/50 backdrop-blur min-w-7xl sticky top-0 z-50 text-white flex items-center justify-between px-10 py-2 text-sm'>

            {/* ------------------logo and icon----------------- */}
            <div>
                <h2 className='text-lg font-serif font-bold'>BISTRO BOSS</h2>
                <p className='uppercase '>Restaurant</p>
            </div>

            {/* ----------------------rough----------------------- */}
            <div className='flex items-center justify-center gap-5 uppercase'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/Contact'}>CONTACT us</NavLink>
                <NavLink to={'/dashboard'}>DASHBOARD</NavLink>
                <NavLink to={'/menu'}>Our Menu</NavLink>
                <NavLink to={'/ourShop'}>Our Shop</NavLink>
                <Link to={'/cart'}>
                    <img src={cart} alt="🛒" className='w-10' />
                </Link>
            </div>

            {/* -----------------------user------------------------ */}
            <div className='flex items-center gap-3'>
                <img src={pp} alt="👦" className='rounded-full w-12' />

                <Link to={'/login'}>
                    <button className="btn btn-sm btn-outline">Login</button>
                </Link>

            </div>


        </div>
    );
};

export default NavBar;