import React, { useContext, useEffect, useState } from 'react';
import "./Active.css"
import { Link, NavLink, useRevalidator } from 'react-router-dom';
import cart from '../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
import pp from "../../assets/others/profile.png"
import { AuthContext } from '../../Authentication/Providers/AuthProvider';
import { FaCartPlus } from 'react-icons/fa';
import UseCarts from '../../Hooks/UseCarts';

const NavBar = () => {

    const { user, UserSignOut } = useContext(AuthContext)

    // const [cart, setCart] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/carts')
    //         .then(res => res.json())
    //         .then(data => setCart(data))
    // }, [])

    const [cart] = UseCarts()

    return (
        <div className='bg-black/50 navbar backdrop-blur fixed  mx-auto top-0 z-50 text-white flex items-center justify-between px-10 py-2 text-sm'>

            {/* ------------------logo and icon----------------- */}
            <div>
                <h2 className='text-lg font-serif font-bold'>BISTRO BOSS</h2>
            </div>

            {/* ----------------------rough----------------------- */}
            <div className='flex items-center justify-center gap-5 uppercase'>
                <NavLink className={`hover:bg-yellow-50 hover:text-black rounded px-1`} to={'/'}>Home</NavLink>

                <NavLink className={`hover:bg-yellow-50 hover:text-black rounded px-1`} to={'/Contact'}>CONTACT us</NavLink>

                <NavLink className={`hover:bg-yellow-50 hover:text-black rounded px-1`} to={'/menu'}>Our Menu</NavLink>

                <NavLink className={`hover:bg-yellow-50 hover:text-black rounded px-1`} to={'/ourShop/salad'}>Our Shop</NavLink>

                <NavLink className={`hover:bg-yellow-50 hover:text-black rounded px-1`} to={'/dashboard'}>DASHBOARD</NavLink>
            </div>

            {/* -----------------------user------------------------ */}
            <div className='flex items-center gap-5'>
                <button className="text-xl relative top-2 mr-4">
                    <FaCartPlus />
                    <div className="bg-yellow-400 rounded-full relative px-1 text-xs -top-2 left-5">{cart.length}</div>
                </button>

                {user ?
                    <div className="flex items-center gap-2">
                        <button className="btn btn-sm btn-outline btn-warning" onClick={UserSignOut}>Sign Out </button>
                    </div> :
                    <div className="flex items-center gap-3">
                        <img src={pp} alt="👦" className='rounded-full w-12' />

                        <Link to={'/login'}>
                            <button className="btn btn-sm btn-outline btn-warning">Login</button>
                        </Link>
                    </div>}



            </div>


        </div>
    );
};

export default NavBar;