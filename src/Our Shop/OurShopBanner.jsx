import React from 'react';
import shopBg from "../assets/shop/banner2.jpg"


const OurShopBanner = () => {
    return (
        <div style={{ background: `url(${shopBg})` }} className='h-[550px] bg-cover text-white flex items-center justify-center p-28'>

            <div className='w-full h-full object-cover bg-black/50 flex items-center justify-center flex-col gap-4 uppercase'>
                <h1 className="text-5xl font-serif">OUR SHOP</h1>
                <p>Would you like to try a dish?</p>

            </div>

        </div>
    );
};

export default OurShopBanner;