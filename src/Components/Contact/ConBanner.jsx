import React from 'react';
import conBg from "../../assets/contact/banner.jpg"

const ConBanner = () => {
    return (
        <div style={{ background: `url(${conBg})` }} className='h-[550px] bg-cover text-white flex items-center justify-center p-28'>

            <div className='w-full h-full object-cover bg-black/50 flex items-center justify-center flex-col gap-4 uppercase'>
                <h1 className="text-5xl font-serif">CONTACT US</h1>
                <p>Would you like to try a dish?</p>
            </div>

        </div>
    );
};

export default ConBanner;