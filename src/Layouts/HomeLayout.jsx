import React from 'react';
import Banner from '../Components/Home/Banner';
import SwiperHome from '../Components/Home/SwiperHome';
import BitroBoss from '../Components/Home/BitroBoss';
import HomeMenu from '../Components/Home/HomeMenu';

const HomeLayout = () => {
    return (
        <div>

            <Banner />

            <SwiperHome />

            <BitroBoss />

            <HomeMenu />


            {/* --------------------------call us section---------------------- */}
            <div className='p-20 text-center text-white text-4xl font-semibold bg-black mb-16 italic'>
                <h1>Call Us: +88 0192345678910</h1>
            </div>


        </div>
    );
};

export default HomeLayout;