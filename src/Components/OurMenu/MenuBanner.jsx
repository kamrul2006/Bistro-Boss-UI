import React from 'react';
import menuBg from "../../assets/menu/banner3.jpg"

const MenuBanner = () => {
    return (
        <div style={{ background: `url(${menuBg})` }} className='h-[550px] bg-cover text-white flex items-center justify-center p-28'>

            <div className='w-full h-full object-cover bg-black/50 flex items-center justify-center flex-col gap-4 uppercase'>
                <h1 className="text-5xl font-serif">OUR MENU</h1>
                <p>Would you like to try a dish?</p>

            </div>

        </div>
    );
};

export default MenuBanner;