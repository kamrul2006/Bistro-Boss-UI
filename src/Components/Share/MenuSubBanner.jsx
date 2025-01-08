import React from 'react';

const MenuSubBanner = ({ subHeading, heading, bg }) => {
    return (
        <div style={{ background: `url(${bg})` }} className='h-[500px] bg-cover mx-20 text-white flex items-center justify-center p-24'>

            <div className='w-full h-full object-cover bg-black/50 flex items-center justify-center flex-col gap-4'>
                <h1 className="text-3xl font-serif">{heading}</h1>
                <p className='text-center text-sm px-20'>{subHeading}</p>

            </div>


        </div>
    );
};

export default MenuSubBanner;